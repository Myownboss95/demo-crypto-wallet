<?php

namespace App\Http\Controllers\Admin;

use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\Send\Approve;
use App\Mail\Send\Decline;
use App\Mail\Send\Pending;
use App\Mail\Withdrawal\Approved;
use App\Mail\Withdrawal\Declined;
use Mail;

class WithdrawalController extends Controller
{
    public function index()
    {
        $query = Transaction::latest()->where('type', 'withdrawal')->with('user');

        return inertia('admin.withdrawals.index', [
            'withdrawals' => $query->paginate(),
        ]);
    }
    public function sendIndex()
    {
        $query = Transaction::latest()->where('type', 'send')->with('user');

        return inertia('admin.withdrawals.sendIndex', [
            'withdrawals' => $query->paginate(),
        ]);
    }


    public function approve($id)
    {
        $transaction = Transaction::findOrFail($id);
        $user = $transaction->user;
        $account = $user->accounts()->where('symbol', $transaction->symbol)->first();
        if($account->account >= $transaction->amount){
            $account->account -= $transaction->amount;
        } else{
            session()->flash('error', 'Insufficient funds');
            return back();
        }
        $account->save();
        $transaction->update([
            'status' => 'successful'
        ]);
        if($transaction->type == 'send'){
            Mail::to($user)->send(new Approve($user, $transaction));
            session()->flash('success', 'Transfer approved');
        } else{

            Mail::to($user)->send(new Approved($user, $transaction));
            session()->flash('success', 'Withdrawal approved');
        }
        return back();
    }
    public function pending($id)
    {
        $transaction = Transaction::findOrFail($id);
        $user = $transaction->user;
        $transaction->update([
            'status' => 'pending'
        ]);
        Mail::to($user)->send(new Pending($user, $transaction));
        session()->flash('error', 'Withdrawal Pending');
        return back();
    }
    public function decline($id)
    {
        $transaction = Transaction::findOrFail($id);
        $user = $transaction->user;
        $account = $user->accounts()->where('symbol', $transaction->symbol)->first();
        if($transaction->type != 'send') $account->account += $transaction->amount;
        $account->save();
        $transaction->update([
            'status' => 'failed'
        ]);
        if($transaction->type == 'send'){
             Mail::to($user)->send(new Decline($user, $transaction));
             session()->flash('error', 'Transfer declined');
        }
        else{
        Mail::to($user)->send(new Declined($user, $transaction));
        session()->flash('error', 'Withdrawal declined');
        return back();
        }
    }
}
