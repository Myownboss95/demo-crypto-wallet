<?php

namespace App\View\Components;

use App\Models\Notification;
use Illuminate\View\Component;

class Popup extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $notification = Notification::whereStatus(1)->latest()->first();
        return view('components.popup', ['notification' => $notification]);
    }
}
