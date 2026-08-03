{
  if (
    this.inputFormField.inddd == "تجديد اجازة" ||
    this.inputFormField.inddd == "تعديل اجازة"
  ) {
    if (
      this.inputFormField["idcard"] == "" ||
      this.inputFormField["idcard"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[5].label} مطلوب`);
    }

    if (
      this.inputFormField["dat"] == "" ||
      this.inputFormField["dat"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
    }
  }

  //---------------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  //رقم هاتف المؤسسة
  if (this.inputFormField.phn) {
    const phoneNo = this.inputFormField.phn;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسسة بالرقم 07.");
    }
  }

  //رقم هاتف مسؤول المؤسسة
  if (this.inputFormField.phh) {
    const phoneNo = this.inputFormField.phh;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف مسؤول المؤسسة بالرقم 07.");
    }
  }

  //رقم هاتف المخول
  if (this.inputFormField.mphon) {
    const phoneNo = this.inputFormField.mphon;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المخول بالرقم 07.");
    }
  }

  //رقم هاتف مسؤول الوقاية
  if (this.inputFormField.mphone) {
    const phoneNo = this.inputFormField.mphone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف مسؤول الوقاية بالرقم 07.");
    }
  }
}
