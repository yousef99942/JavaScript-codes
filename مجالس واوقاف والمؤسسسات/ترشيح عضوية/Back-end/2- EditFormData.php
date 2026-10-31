//$numberId = $this->request->idcardnum;
//if (!$numberId) {
  //abort(422, 'رقم البطاقة الوطنية غير موجود');
//}
//$nationalField = 'idcardnum';
//$nationalId = isset($this->request->{$nationalField})
  //  ? trim((string) $this->request->{$nationalField})
 //: '';
   // if ($nationalId !== '') {
    //$dupQuery = \App\Models\EService\FormData::query()
      //  ->where('data->' . $nationalField, $nationalId)
        //->whereHas('service_request', function ($q) {
        //$q->where('service_id', $this->serviceId);
    //});
    //if ($this->serviceRequest) {
      //  $dupQuery->where('service_request_id', '!=', $this->serviceRequest->id);
    //}
    //if ($dupQuery->exists()) {
      //  abort($this->errors(422, [
        //    'تم التقديم مسبقاً باستخدام نفس رقم البطاقة الوطنية',
        //]));
    //}
//}