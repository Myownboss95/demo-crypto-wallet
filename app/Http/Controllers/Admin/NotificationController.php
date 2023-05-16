<?php

namespace App\Http\Controllers\Admin;

use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $notifications = Notification::latest()->paginate();
        return inertia('admin.notification.index', [
            'notifications' => $notifications
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return inertia('admin.notification.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $valid = $request->validate([
            'name' => ['required', 'string', 'unique:notifications'],
            'message' => ['required', 'string'],
            'status' => ['required', 'boolean'],
        ]);

        Notification::create($valid);
        session()->flash('success', 'Notificationn created successfully');
        return redirect()->route('admin.notification.index');
    }

     /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function edit(Notification $notification)
    {
        return inertia('admin.notification.edit', [
            'notification' => $notification
        ]);
    }

    
     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notification $notification)
    {
        $valid = $request->validate([
            'name' => ['required', 'string', Rule::unique('notifications')->ignore($notification)],
            'message' => ['required', 'string'],
            'status' => ['required', 'boolean'],
        ]);

        $notification->update($valid);
        session()->flash('success', 'notification updated successfully');
        return redirect()->route('admin.notification.index');
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Notification  $notification
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notification $notification)
    {
        $notification->delete();
        return redirect()->route('admin.notification.index');
    }
}
