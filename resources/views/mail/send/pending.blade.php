@component('mail::message')
## Hello {{$user->first_name}},

Your transfer request of {{number_format($transaction->amount).$transaction->symbol}} is pending.


Contact Admin for more details.
Thanks,<br>
{{ config('app.name') }}
@endcomponent
