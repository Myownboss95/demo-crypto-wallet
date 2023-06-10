<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;
use App\Models\PaymentMethod;
use App\Models\Notification;

class FrontendController extends Controller
{
    public $theme;
    public function __construct()
    {
        $this->theme = config('app.theme', 'front');
    }
    public function home()
    {
        $setting = Settings::first();
        $notification = Notification::whereStatus(1)->latest()->first();
        // dd($notification);
        $payment_methods = PaymentMethod::latest()->where('status', 1)->get();
        return view("$this->theme.home1", compact('setting', 'payment_methods', 'notification'));
    }

    public function about()
    {
        return view("$this->theme.about-us");
    }


    public function contact()
    {
        return view("$this->theme.contact");
    }

    public function terms_and_conditions()
    {
        return view("$this->theme.terms-and-conditions");
    }

    public function faqs()
    {
        return view("$this->theme.faqs");
    }
}
