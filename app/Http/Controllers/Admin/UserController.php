<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateWallet;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Builder;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = new User();
        $query = $users->newQuery();
        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where([
                ['last_name', 'LIKE', "%$search%"],
                ['is_admin', '=', 0],
            ]);
            $query->orWhere([
                ['first_name', 'LIKE', "%$search%"],
                ['is_admin', '=', 0],
            ]);
            $query->orWhere([
                ['email', 'LIKE', "%$search%"],
                ['is_admin', '=', 0],
            ]);
        }

        if ($request->filled('status')) {
            $status = $request->input('status');
            if ($status != 'all') {
                $query->where('status', '=', $status);
            }
        }
        $query->where('is_admin', '=', 0);

        return inertia('admin.users.index', [
            'users' => $query->paginate()->through(function ($user, $key) {
                return $user;
            })->withQueryString(),
        ]);
    }

    public function loginAs(User $user)
    {
        $adminUser = auth()->user();
        auth()->logout();
        session()->put('admin_id', $adminUser->id);
        auth()->loginUsingId($user->id);
        return redirect()->route('user.index');
    }

    public function switchToAdmin(User $user)
    {
        auth()->logout();
        session()->forget('admin_id');
        auth()->loginUsingId($user->id);
        return redirect()->route('admin.index');
    }
    
    public function userWallet($id)
    {
        $user = User::with('accounts')->findOrFail($id);
        return inertia('admin.users.wallet', [
            'user' => $user
        ]);
    }
    public function updateWallet(UpdateWallet $request, $id)
    {
        $data = $request->except(['coin_id']);
        $user = User::findOrFail($id);
        $user->accounts()->where('payment_method_id', $request->coin_id)->update(array_merge($data, [
            'qr_code' => $this->uploadFile($request),
        ]));
        return redirect()->route('admin.users.wallet', ['id'=>$id])->withSuccess('Wallet Saved successfully');
   

    }
    private function uploadFile(Request $request)
    {
        if(!$request->hasFile('qr_code')) return null;
        $uploadedFile = $request->file('qr_code');
        $filename = time().$uploadedFile->getClientOriginalName();

        Storage::disk('public')->putFileAs(
            'user_wallets',
          $uploadedFile,
          $filename
        );
        return $filename;
    }
}
