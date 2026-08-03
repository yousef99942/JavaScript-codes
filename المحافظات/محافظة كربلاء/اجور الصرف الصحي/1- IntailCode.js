{
  //جلب المعلومات من بوابة اور
  this.inputFormField.nameperson = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("nameperson")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.sacond = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("sacond")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.therd = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("therd")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourth = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourth")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.number = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("number")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية فقط
  function Arabic_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الأحرف العربية + الهمزة + المسافة
        if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير عربي
        }
      });
    }
  }

  var Fields_ID = [
    "64609", //القضاء
    "31435", //الحي
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز
  function Arabic_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // العربية + المسافة + الرموز
        const regex = /^[\u0600-\u06FF\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "31436", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
  //حصر حقول التواريخ
  document
    .getElementById("31445")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("date")[0].setAttribute("min", "1980-01-01");
  document
    .getElementsByName("date")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}



$userBill = [];
foreach($this->paymentItems as $payment_item){
  $total_price = $payment_item->cost;
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