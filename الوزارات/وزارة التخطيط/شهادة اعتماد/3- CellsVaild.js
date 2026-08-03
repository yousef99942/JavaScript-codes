{
  if (this.inputFormField.CompanynameLaboratory == "نعم") {
    if (
      this.inputFormField["parentcompany"] == null ||
      this.inputFormField["parentcompany"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[20].label} مطلوب`,
      );
    }

    if (
      this.inputFormField["Mainactivity"] == null ||
      this.inputFormField["Mainactivity"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[21].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.testingprograms == "نعم") {
    if (
      this.inputFormField["FirstInfo"] == null ||
      this.inputFormField["FirstInfo"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[24].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.testingprograms == "كلا") {
    if (
      this.inputFormField["SecondInfo"] == null ||
      this.inputFormField["SecondInfo"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[25].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.iqasfeild.includes("اخرى")) {
    if (
      this.inputFormField["other"] == null ||
      this.inputFormField["other"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[28].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.phone) {
    const phoneNo = this.inputFormField.phone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف الشركة / المختبر بالرقم 07.");
    }
  }

  if (this.inputFormField.phoneone) {
    const phoneNo = this.inputFormField.phoneone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push(
        "يجب أن يبدأ رقم هاتف الشخص الذي يتم الاتصال به بالرقم 07.",
      );
    }
  }
}
