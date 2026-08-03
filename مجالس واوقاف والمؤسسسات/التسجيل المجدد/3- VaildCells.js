{
  if (this.inputFormField.secondone == "نعم") {
    if (
      this.inputFormField["firstagent"] == "" ||
      this.inputFormField["firstagent"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }

    if (
      this.inputFormField["secondagent"] == "" ||
      this.inputFormField["secondagent"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }

    if (
      this.inputFormField["therdname"] == "" ||
      this.inputFormField["therdname"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }

    if (
      this.inputFormField["fhonesecond"] == "" ||
      this.inputFormField["fhonesecond"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`,
      );
    }
  }

  //-----------------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  if (this.inputFormField.fhonesecond) {
    const phoneNo = this.inputFormField.fhonesecond;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف الوكيل بالرقم 07.");
    }
  }
}
