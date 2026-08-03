{
  //للتاكد من بداية رقم الهاتف ب07
  //رقم الهاتف للمؤسس الاول
  if (this.inputFormField.phonefirst) {
    const phoneNo = this.inputFormField.phonefirst;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الاول بالرقم 07.");
    }
  }

  //رقم الهاتف للمؤسس الثاني
  if (this.inputFormField.phonesecond) {
    const phoneNo = this.inputFormField.phonesecond;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الثاني بالرقم 07.");
    }
  }

  //رقم الهاتف للمؤسس الثالث
  if (this.inputFormField.phonethird) {
    const phoneNo = this.inputFormField.phonethird;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الثالث بالرقم 07.");
    }
  }
}
