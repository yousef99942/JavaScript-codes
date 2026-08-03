{
  //اولا : معلومات الجهة الطالبة للتخويل
  //رقم هاتف المؤسسة
  if (this.inputFormField.pho) {
    const phoneNo = this.inputFormField.pho;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسسة بالرقم 07.");
    }
  }

  //رقم هاتف مسؤول المؤسسة
  if (this.inputFormField.dee) {
    const phoneNo = this.inputFormField.dee;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف مسؤول المؤسسة بالرقم 07.");
    }
  }
}
