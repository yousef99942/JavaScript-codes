{
  if (this.inputFormField.document == "نعم") {
    if (
      this.inputFormField["doc"] == null ||
      this.inputFormField["doc"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  //للتاكد من بداية رقم الهاتف ب07
  if (this.inputFormField.phonenumber) {
    const phoneNo = this.inputFormField.phonenumber;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الفعال بالرقم 07.");
    }
  }
}
