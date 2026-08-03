{
  //رقم الهاتف للمؤسس الاول
  if (this.inputFormField.ddg) {
    const phoneNo = this.inputFormField.ddg;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الاول بالرقم 07.");
    }
  }

  //رقم الهاتف للمؤسس الثاني
  if (this.inputFormField.tyr) {
    const phoneNo = this.inputFormField.tyr;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الثاني بالرقم 07.");
    }
  }

  //رقم الهاتف للمؤسس الثالث
  if (this.inputFormField.dfs) {
    const phoneNo = this.inputFormField.dfs;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف للمؤسس الثالث بالرقم 07.");
    }
  }
}
