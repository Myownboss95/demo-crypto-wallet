<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $user = User::findOrFail(auth()->user()->id);
        //create account
        $allcoins = PaymentMethod::all();
        // dd($user->accounts);

        // foreach ($allcoins as $coin) {

        //     if (!$user->accounts->contains('payment_method_id', $coin->id)) {
        //        $method = PaymentMethod::find($coin->id);
        //            $user->accounts()->create([
        //             'account' => $method->start_bonus,
        //             'symbol' => $method->symbol,
        //             'type' => $method->name,
        //             'svg' => $method->svg,
        //             'payment_method_id' => $method->id,
        //             'status' => $method->status
        //            ]);
        //            session()->flash('success', 'You now have a $method->name account');
        //    }

        // }

        //return main account balance

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
        return view('user2.dashboard', [
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
            'active_trades' => $user->trades()->where('status', 'active')->count(),
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
}
