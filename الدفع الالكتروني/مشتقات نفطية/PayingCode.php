$userBill = [];
foreach($this->paymentItems as $payment_item){
$total_price = $payment_item->cost;

//مضمون الطلب يتضمن قائمة بالزيوت والشحوم والوقود المطلوبة
$Materials_Count = $this->serviceRequest->estMatFuelInfoContReqhh; //قائمة بالمشتقات النفطية المطلوبة
$Using_Type = $this->serviceRequest->estMatFuelInfoContReqssss; //هل تستخدم المشتقات النفطية كـ ؟
$Factory_Name = $this->serviceRequest->estMatFuelInfoContReqsssss; //هل المشروع ضمن  المعامل الاتية ام اخرى؟
//استمارة الكشف
$Detect_Type = $this->serviceRequest->testMatFuelInfoDetectType; //نوع الكشف/
$Project_Place = $this->serviceRequest->testMatFuelInfoDetectLoc; //تحديد منطقة الكشف
$Project_Type = $this->serviceRequest->testMatFuelInfoDetectTypEEE; //هل ضمن المشاريع الاستراتيجية

$ratios = [];
foreach($this->ratios as $ratio){
array_push($ratios, [
'payment_transaction_ratio_id' => $ratio->id,
'value' => $ratio->ratio * 0.01 * $total_price
]);}

array_push($userBill,[
'user_id' => $this->userId,
'service_id' => $this->serviceId,
'service_request_id' => $this->serviceRequestId,
'payment_item_id' => $payment_item->id,
'quantity' => 1,
'total_price' => $total_price,
'ratios' => $ratios
]
);
}
return $userBill;