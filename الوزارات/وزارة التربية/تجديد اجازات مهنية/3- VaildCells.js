{
  if (this.inputFormField.establishment == "لا") {
    if (
      this.inputFormField["namedata"] == null ||
      this.inputFormField["namedata"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[4].label} مطلوب`);
    }
  }

  //--------------------------------------------------------------------------------------
  //الاجبار على اختيار اختصاص
  const checkBoxes = [
    //معلومات الطلب
    "lphsfm", //محاسبة
    "hhvm", //ادارة
    "ugllhgdmlwvtdm", //علوم مالية ومصرفية
    "bvcx", //اجهزة طبية
    "qazxsw", //كهربائية
    "edcvfr", //بناء وانشاءات
    "qwert", //امن سيبراني
    "asdfgh", //تجميع وصيانة الحاسبة
    "namerrt", //فن الديكور
    "sporttt", //التربية الرياضية
  ];

  let checkedBox = false;
  for (let i = 0; i < checkBoxes.length; i++) {
    if (this.inputFormField[checkBoxes[i]]) {
      checkedBox = true;
      break;
    }
  }
  if (!checkedBox) {
    this.evalErr.push(
      "يجب اختيار فرع واحد على الأقل من بين الاختصاصات المتاحة في الأقسام.",
    );
  }

  //--------------------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  //رقم الهاتف للمؤسس الاول
  if (this.inputFormField.Fphone) {
    const phoneNo = this.inputFormField.Fphone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الاول بالرقم 07.");
    }
  }

  //رقم الهاتف للمؤسس الثاني
  if (this.inputFormField.SPhone) {
    const phoneNo = this.inputFormField.SPhone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الثاني بالرقم 07.");
    }
  }

  //رقم الهاتف للمؤسس الثالث
  if (this.inputFormField.Tphone) {
    const phoneNo = this.inputFormField.Tphone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الثالث بالرقم 07.");
    }
  }
}
