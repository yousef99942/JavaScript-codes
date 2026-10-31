$numberId = $this->request->idcardnum;

if (!$numberId) {
    abort(422, 'رقم البطاقة الوطنية غير موجود');
}

$nationalField = 'idcardnum';

$nationalId = isset($this->request->{$nationalField})
    ? trim((string) $this->request->{$nationalField})
    : '';

if ($nationalId !== '') {

    $dupQuery = \App\Models\EService\FormData::query()
        ->whereIn('service_request_id', function ($q) {
            $q->select('id')
                ->from('service_requests')
                ->where('service_id', 10549);
        })
        ->where('request->' . $nationalField, $nationalId);

    if ($this->serviceRequest) {
        $dupQuery->where(
            'service_request_id',
            '!=',
            $this->serviceRequest->id
        );
    }

    if ($dupQuery->exists()) {
        abort($this->errors(422, [
            'تم التقديم مسبقاً باستخدام نفس رقم البطاقة الوطنية',
        ]));
    }
}
