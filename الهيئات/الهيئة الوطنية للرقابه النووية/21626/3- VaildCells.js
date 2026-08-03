{
  if (
    this.inputFormField.hhm == "تجديد الاجازة" ||
    this.inputFormField.hhm == "تعديل الاجازة"
  ) {
    if (
      this.inputFormField["vrl"] == null ||
      this.inputFormField["vrl"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
    }

    if (
      this.inputFormField["jhv"] == null ||
      this.inputFormField["jhv"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.wqas == "أخرى") {
    if (
      this.inputFormField["rrtr"] == null ||
      this.inputFormField["rrtr"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[34].label} مطلوب`,
      );
    }
  }

  //---------------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  //رقم هاتف المؤسسة
  if (this.inputFormField.lfhd) {
    const phoneNo = this.inputFormField.lfhd;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسسة بالرقم 07.");
    }
  }

  //رقم هاتف المسؤول
  if (this.inputFormField.cvty) {
    const phoneNo = this.inputFormField.cvty;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف مسؤول المؤسسة بالرقم 07.");
    }
  }

  //رقم هاتف المخول
  if (this.inputFormField.yhb) {
    const phoneNo = this.inputFormField.yhb;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المخول بالرقم 07.");
    }
  }
}
