<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Validator;

class DepositController extends Controller
{
    public function index()
    {
        $query = Transaction::latest()
            ->where('user_id', auth()->user()->id)
            ->where('type', 'deposit');

        return inertia('user.deposits.index', [
            'deposits' => $query->paginate(),
        ]);
    }

    public function create()
    {
        // $payment_methods = PaymentMethod::latest()->where('status', 1)->get();
        // return inertia('user.deposits.deposit', [
        //     'payment_methods' => $payment_methods,
        // ]);
        $user = User::with('accounts')->findOrFail(auth()->user()->id);
//all the coins
        $payment_methods = $user->accounts()->latest()->whereStatus(1)->with('paymentMethod')->get();
        $imageUrl = asset('profile-cover.jpg');
        $imageUrl2 = asset('comingsoon.webp');

        return inertia('user.deposits.deposit', [
            'user' => $user,
            'imageUrl' => $imageUrl,
            'imageUrl2' => $imageUrl2,
            'payment_methods' => $payment_methods,
        ]);

    }

    public function validateDeposit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'method_id' => ['required'],
            'amount' => ['required', 'numeric'],
        ]);
        $method = PaymentMethod::findOrFail($request->input('method_id'));
        session()->flash('data', $method);

        if ($validator->fails()) {
            session()->flash('validated', false);
            return back()->withErrors($validator)->withInput();
        }
        session()->flash('validated', true);
        return back()->withInput();
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'amount' => ['required', 'numeric'],
            'method_id' => ['required', 'numeric', 'exists:payment_methods,id'],
            'symbol' => ['required'],
        ]);

        if ($validator->fails()) {
            session()->flash('validated', true);
            return back()->withErrors($validator)->withInput();
        }

        $user = User::findOrFail(auth()->user()->id);
        $amount = round($request->input('amount'), 4);

        $user->transactions()->create([
            'amount' => $amount,
            'symbol' => strtoupper($request->input('symbol')),
            'options' => ['payment_method_id' => $request->input('method_id')],
            'type' => 'deposit',
        ]);

        session()->flash('success', 'Deposit initiated successfully, waiting for approval.');

        return redirect()->route('user.deposits.index');
    }

    private function uploadProof(UploadedFile $file)
    {
        $filename = time() . $file->getClientOriginalName();
        Storage::disk('public')->putFileAs('deposit_proof', $file, $filename);
        return $filename;
    }
    public function get_roi(Request $request, $symbol)
    {
        $coin = PaymentMethod::where('name', $symbol)->first();
        return response()->json([
            'data' => $coin->roi], 200);
    }
}
