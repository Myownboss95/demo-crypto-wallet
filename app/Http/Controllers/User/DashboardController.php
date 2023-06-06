<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Models\Transaction;
use App\Models\PaymentMethod;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::findOrFail(auth()->user()->id);
        //create account
        $allcoins = PaymentMethod::all();
        

        $userMainBalance = $user->accountBalance();
        //return referral account balance
        $userRefBalance = $user->accountBalance('referral');
        //return referral account balance
        $userInvestedBalance = $user->accountBalance('invested');

        //return withdrawals
        $withdrawals = $user->transactions()->where('type', 'withdrawal')->limit(6)->get();
        $num_withdrawals = $user->transactions()->where('type', 'withdrawal')->count();
        //return deposits
        $deposits = $user->transactions()->where('type', 'deposit')->limit(6)->get();
        $num_deposits = $user->transactions()->where('type', 'deposit')->count();
        //return buy trades
        $buyTrades = $user->transactions()->where('type', 'buy')->limit(6)->get();
        $num_buyTrades = $user->transactions()->where('type', 'buy')->count();
        //return sell trades
        $sellTrades = $user->transactions()->where('type', 'sell')->limit(6)->get();
        $num_sellTrades = $user->transactions()->where('type', 'buy')->count();

        $trade_profits = $user->trades()->where('status', 'active')->sum('returns');
        //all the coins
        $payment_methods = $user->accounts()->latest()->whereStatus(1)->with('paymentMethod')->get();
        //    dd($payment_methods);
        $featured = $user->accounts()->with('paymentMethod')->whereHas('paymentMethod', function ($query) {
            $query->where('featured', 1)->where('status', 1);
        })->get();

        return inertia('user.index', [
            'userMainBalance' => $userMainBalance,
            'userRefBalance' => $userRefBalance,
            'userInvestedBalance' => $userInvestedBalance,
            'withdrawals' => $withdrawals,
            'withdrawals_count' => $num_withdrawals,
            'deposits' => $deposits,
            'deposits_count' => $num_deposits,
            'buyTrades' => $buyTrades,
            'num_buyTrades' => $num_buyTrades,
            'sellTrades' => $sellTrades,
            'num_sellTrades' => $num_sellTrades,
            'trade_profits' => $trade_profits,
            'payment_methods' => $payment_methods,
            'featured' => $featured,
            'active_trades' => $user->trades()->where('status', 'active')->count()
        ]);
        
    }

    public function userWallet()
    {
        $user = User::with('accounts')->findOrFail(auth()->user()->id);
        //all the coins
        $payment_methods = $user->accounts()->latest()->whereStatus(1)->with('paymentMethod')->get();
        //
        return inertia('user.wallet', [
            'user' => $user,
            'payment_methods' => $payment_methods,
        ]);
    }
    public function userWalletShow($id)
    {
        $user = User::with('accounts')->findOrFail(auth()->user()->id);
        //show the coin
        $payment_methods = $user->accounts()->latest()->where('payment_method_id', $id)->whereStatus(1)->with('paymentMethod');
        
        $transactions = Transaction::latest()
            ->where('user_id', auth()->user()->id)
            ->where('symbol', $payment_methods->first()->symbol);
                // dd($payment_methods->get());
        //
        return inertia('user.wallet-show', [
            'user' => $user,
            'payment_methods' => $payment_methods->get(),
            'transactions' => $transactions->paginate(5)
        ]);
    }

    public function settings()
    {
        $user = User::with('accounts')->findOrFail(auth()->user()->id);
        return inertia('user.settings', [
            'user' => $user
        ]);

    }
}
