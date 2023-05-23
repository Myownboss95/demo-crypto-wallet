<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateWallet extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'wallet_address' => 'required|string',
            'coin_id' => 'required|exists:payment_methods,id',
        ];
        if ($this->hasFile('file')) { // Only validate 'image' field if it exists in the request
            $rules['file'] = [
                'sometimes',
                'image',
                'nullable',
                'mimes:jpg,jpeg,png,pdf',
                'min:10',
                'max:4194',
                function ($attribute, $value, $fail) {
                    foreach ($value as $file) {
                        if (!$file->isValid()) {
                            $fail($file->getErrorMessage());
                        }
                    }
                },
            ];
        }
    }

    public function messages()
    {
        return [
            'image.image' => 'The :attribute must be an image.',
            'image.*' => 'There was an error uploading :attribute.',
        ];
    }
}
