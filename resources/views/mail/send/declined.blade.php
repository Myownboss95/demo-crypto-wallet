@component('mail::message')
## Hello {{$user->first_name}},

Your transfer request of {{number_format($transaction->amount).$transaction->symbol}} was declined.


We were unable to send the amount to the selected transfer method.

Thanks,<br>
{{ config('app.name') }}
@endcomponent
