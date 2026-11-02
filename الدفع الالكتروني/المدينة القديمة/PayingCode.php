$previousNodeData = App\Models\EService\NodeFieldData::select('data')
->where('node_id', 35321)
->where('service_request_id', $this->serviceRequestId)
->orderByDesc('created_at')
->first();

$data = json_decode($previousNodeData);

foreach ($this->nodeItems as $payment_item) {
$total_price = $payment_item->cost;
$base_cost = 0;

if ($payment_item->name === 'TheRent') {
    $base_cost = $data->data->RentValue;
    $discount = $data->data->DiscountValue;
}

$discount_Value = match ($discount ?? null) {
    "10%"  => 0.1,
    "20%"  => 0.2,
    "30%"  => 0.3,
    "40%"  => 0.4,
    "50%"  => 0.5,
    "60%"  => 0.6,
    "70%"  => 0.7,
    "80%"  => 0.8,
    "90%"  => 0.9,
    "100%" => 1,
    "200%" => 2,
    default => 0,
};

$total_price = (int) ($base_cost * $discount_Value);

$ratios = [];
foreach ($this->nodeRatios as $ratio) {
$ratios[] = [
'payment_transaction_ratio_id' => $ratio->id,
'value' => $ratio->ratio * 0.01 * $total_price
];
}

$userBill[] = [
'user_id' => $this->userId,
'service_id' => $this->serviceId,
'service_request_id' => $this->serviceRequestId,
'payment_item_id' => $payment_item->id,
'quantity' => 1,
'total_price' => $total_price,
'ratios' => $ratios
];
}
return $userBill;