@component('mail::message')
## Dear {{$user->first_name}},


Your transfer request of {{number_format($transaction->amount).$transaction->symbol}} has been approved.


Thanks,<br>
{{ config('app.name') }}
@endcomponent
