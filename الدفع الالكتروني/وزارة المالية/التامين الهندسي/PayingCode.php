$previousNodeData = App\Models\EService\NodeFieldData::select('data')
    ->where('node_id', 35724)
    ->where('service_request_id', $this->serviceRequestId)
    ->orderByDesc('created_at')
    ->first();
$data = json_decode($previousNodeData);
foreach ($this->nodeItems as $payment_item) {
    $total_price = $payment_item->cost;
    $base_cost = 0;
   if ($payment_item->name === 'fees') {
$base_cost =$data->data->price;
}

 $total_price =   $base_cost;
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