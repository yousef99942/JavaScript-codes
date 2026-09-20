{
  if (this.inputFormField.mothercomp == "نعم / Yes.") {
    if (
      this.inputFormField["parentname"] == null ||
      this.inputFormField["parentname"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`,
      ); //اذا كانت الاجابة نعم - اسم المؤسسة الام :
    }
  }

  if (this.inputFormField.enspscope.includes("اخرى / Others")) {
    if (
      this.inputFormField["ppp"] == null ||
      this.inputFormField["ppp"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[39].label} مطلوب`,
      ); //اذا كانت اختيارك لمجال الاعتماد (أخرى) املأ الحقل التالي:
    }
  }
  //------------------------------------------------------------
  // Validate phone number
  if (this.inputFormField.mobile) {
    const phoneNo = this.inputFormField.mobile;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف بالرقم 07.");
    }
  }

  if (this.inputFormField.mob) {
    const phoneNo = this.inputFormField.mob;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الموبايل بالرقم 07.");
    }
  }
}
