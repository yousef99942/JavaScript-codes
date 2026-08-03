{
  //رقم الهاتف للمؤسس الاول
  if (this.inputFormField.tgjg) {
    const phoneNo = this.inputFormField.tgjg;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الاول بالرقم 07.");
    }
  }

  //رقم الهاتف للمؤسس الثاني
  if (this.inputFormField.dffo) {
    const phoneNo = this.inputFormField.dffo;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الثاني بالرقم 07.");
    }
  }

  //رقم الهاتف للمؤسس الثالث
  if (this.inputFormField.dgf) {
    const phoneNo = this.inputFormField.dgf;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الثالث بالرقم 07.");
    }
  }
}
