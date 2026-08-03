{
  //رقم هاتف الزبون
  if (
    this.inputFormField.cliphone != null &&
    this.inputFormField.cliphone != ""
  ) {
    const phoneNo = this.inputFormField.cliphone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف الزبون بالرقم 07.");
    }
  }

  //رقم هاتف لولي الأمر / الوصي
  if (
    this.inputFormField.adulphone != null &&
    this.inputFormField.adulphone != ""
  ) {
    const phoneNo = this.inputFormField.adulphone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف لولي الامر / الوصي بالرقم 07.");
    }
  }
}
