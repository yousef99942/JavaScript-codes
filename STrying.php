$userBill = [];
foreach($this->paymentItems as $payment_item){
$total_price = $payment_item->cost;

$subTotal = $this->serviceRequest->reason;

if(count($subTotal) === 1 && in_array('النشر في مجلة الفكر القيادي للمعهد العالي لاعداد وتاهيل القادة', $subTotal, true)){
    $total_price = 100000;
}elseif(count($subTotal) === 1 && in_array('التقديم (للامتحان التنافسي أو الدورة التدريبية) للمعهد العالي لاعداد وتاهيل القادة', $subTotal, true)){
    $total_price = 100000;
}else{
    $total_price = 200000;
}

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
dd('First condition met');