{
  if (this.inputFormField.DocsType == "البطاقة الوطنية") {
    if (
      this.inputFormField["nid"] == null ||
      this.inputFormField["nid"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.DocsType == "جواز السفر") {
    if (
      this.inputFormField["PassportID"] == null ||
      this.inputFormField["PassportID"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }

  if (this.inputFormField.course == "نعم") {
    if (
      this.inputFormField["yes"] == null ||
      this.inputFormField["yes"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[39].label} مطلوب`,
      );
    }
  }

  //رقم الهاتف الاساسي
  if (this.inputFormField.phone) {
    const phoneNo = this.inputFormField.phone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الاساسي بالرقم 07.");
    }
  }

  //رقم الهاتف البديل
  if (this.inputFormField.phonee) {
    const phoneNo = this.inputFormField.phonee;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف البديل بالرقم 07.");
    }
  }
}
