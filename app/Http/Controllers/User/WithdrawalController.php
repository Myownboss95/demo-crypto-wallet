<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;

class WithdrawalController extends Controller
{
    public function index()
    {
        $query = Transaction::latest()
            ->where('user_id', auth()->user()->id)
            ->where('type', 'withdrawal');

        return inertia('user.withdrawals.index', [
            'deposits' => $query->paginate(),
        ]);
    }
    public function sendIndex()
    {
        $query = Transaction::latest()
            ->where('user_id', auth()->user()->id);

        return inertia('user.withdrawals.sendIndex', [
            'transactions' => $query->paginate(5),
        ]);
    }

    public function create()
    {
        $user = User::findOrFail(auth()->user()->id);

        $coins =  $user->accounts()->get();
        return inertia('user.withdrawals.create', [
            'coins' => $coins,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'method_id' => ['required'],
            'amount' => ['required', 'numeric'],
            'address' => ['required', 'string'],
            'type' => ['required'],
            'symbol' => ['required', 'string'],
        ]);

        $user = User::findOrFail(auth()->user()->id);

        $limit = PaymentMethod::where('id', $request->input('method_id'))->first();
        // dd($request->all());
        $coin_limit = $limit->min_withdrawal;

        $amount = $request->input('amount');
        // dd($request->input('method_id'));
        $userAccount = $user->accounts()->where('payment_method_id', $request->input('method_id'))->first();

        // dd($userAccount?->account);
        if ($amount > $userAccount?->account) {
            session()->flash('error', "Insufficient funds on your {$data['symbol']} balance");
            return back();
        } elseif ($amount < $coin_limit) {
            session()->flash('error', "Minimum withdrawal of {$coin_limit}{$data['symbol']} only allowed for this coin");
            return back();
        }

        // $userAccount->account -= $amount;
        $user->transactions()->create([
            'amount' => $data['amount'],
            'options' => [
                'address' => $data['address'],
                'payment_method_id' => $data['method_id'],
            ],
            'type' => 'withdrawal',
            'status' => 'pending',
            'symbol' => $data['symbol'],
        ]);
        // $userAccount->save();

        session()->flash('success', 'Withdrawal request sent successfully');
        return redirect()->route('user.index');
    }

    public function send()
    {
        $payment_methods = PaymentMethod::latest()->where('status', 1)->get();
        return inertia('user.withdrawals.send', [
            'payment_methods' => $payment_methods,
        ]);
    }

    public function sendStore(Request $request)
    {

        $data = $request->validate([
            'method_id' => ['required'],
            'amount' => ['required', 'numeric'],
            'address' => ['required', 'string'],
            'usd' => ['required', 'numeric'],
        ]);
        $user = User::findOrFail(auth()->user()->id);
        // dd($request->input('method_id'));
        $limit = PaymentMethod::where('id', $request->input('method_id'))->first();
        $coin_limit = $limit->min_withdrawal;
        $coin_symbol = $limit->symbol;

        $amount = $request->input('amount');
        $userAccount = $user->accounts()->where('payment_method_id', $request->input('method_id'))->first();
        if ($amount > $userAccount?->account) {
            session()->flash('error', "Insufficient funds on your {$limit->symbol} balance");
            return back();
        } elseif ($amount < $coin_limit) {
            session()->flash('error', "You must have a minimum balance of {$coin_limit}{$limit->symbol} for successful transaction processing");
            return back();
        }
        $data['usd'] = round($data['usd'] * $amount, 2);
        $data['symbol'] = $coin_symbol;
        $data['user_address'] = $userAccount->wallet_address;

        session()->put('data', $data);
        return redirect()->route('user.confirm');
    }

    public function confirm()
    {
        $data = session()->get('data');
        return inertia('user.confirm', [
            'data' => $data,
        ]);
    }

    public function confirmStore(Request $request)
    {
        // dd($request->all());
        $data = $request->validate([
            'method_id' => ['required'],
            'amount' => ['required', 'numeric'],
            'address' => ['required', 'string'],
        ]);

        $user = User::findOrFail(auth()->user()->id);
        $userAccount = $user->accounts()->where('symbol', $request->input('method_id'))->first();
        $limit = PaymentMethod::where('id', $request->input('method_id'))->first();
        $coin_limit = $limit->min_withdrawal;
        $coin_symbol = $limit->symbol;
        $amount = $request->input('amount');
        $userAccount = $user->accounts()->where('payment_method_id', $request->input('method_id'))->first();
        if ($amount > $userAccount?->account) {
            session()->flash('error', "Insufficient funds on your {$limit->symbol} balance");
            return back();
        } elseif ($amount < $coin_limit) {
            session()->flash('error', "You must have a minimum balance of {$coin_limit}{$limit->symbol} for successful transaction processing");
            return back();
        }

        $userAccount->account -= $amount;
        $user->transactions()->create([
            'amount' => $data['amount'],
            'options' => [
                'address' => $data['address'],
                'payment_method_id' => $data['method_id'],
            ],
            'type' => 'send',
            'status' => 'pending',
            'symbol' => $coin_symbol,
        ]);
        $userAccount->save();
        session()->forget('data');
        return redirect()->route('user.send.index');
        session()->flash('success', 'Crypto request sent successfully');

    }

}
