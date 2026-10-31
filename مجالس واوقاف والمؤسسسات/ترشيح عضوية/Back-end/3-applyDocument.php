$numberId = 'numberid';

$nationalId = trim((string) ($this->data->{$numberId} ?? ''));

if ($nationalId !== '') {

    $dupQuery = \App\Models\EService\FormData::query()
        ->where('data->' . $numberId, $nationalId)
        ->whereHas('service_request', function ($q) {
            $q->where('service_id', $this->serviceId)
              ->where('status_id', 1);
        });

    if ($this->serviceRequest) {
        $dupQuery->where('service_request_id', '!=', $this->serviceRequest->id);
    }

    if ($dupQuery->exists()) {
        abort($this->errors(422, [
            'تم التقديم مسبقاً باستخدام نفس رقم البطاقة الوطنية (الطلب قيد الانتظار)',
        ]));
    }
}

return true;