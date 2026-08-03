{
  if (this.inputFormField.IDType == "جواز السفر") {
    if (
      this.inputFormField["xff"] == null ||
      this.inputFormField["xff"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[24].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.IDType == "البطاقة الوطنية") {
    if (
      this.inputFormField["NationalID"] == null ||
      this.inputFormField["NationalID"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[23].label} مطلوب`,
      );
    }
  }

  //------------------------------------------------------------------------------
  if (this.inputFormField.SecondIDType == "جواز السفر") {
    if (
      this.inputFormField["err"] == null ||
      this.inputFormField["err"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[17].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.SecondIDType == "البطاقة الوطنية") {
    if (
      this.inputFormField["SecondIDNum"] == null ||
      this.inputFormField["SecondIDNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[18].label} مطلوب`,
      );
    }
  }

  //------------------------------------------------------------------------------
  //مجموعة معلومات الجهة المستوردة
  // التحقق من حقل رقم هاتف الجهة المستوردة يجب ان يبدء الرقم ب07
  if (this.inputFormField.mob) {
    const phoneNo1 = this.inputFormField.mob;
    let startNo1 = phoneNo1.substring(0, 2);
    if (startNo1 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف الجهة المستوردة بالرقم 07.");
    }
  }

  // التحقق من حقل رقم هاتف المدير يجب ان يبدء الرقم ب07
  if (this.inputFormField.www) {
    const phoneNo1 = this.inputFormField.www;
    let startNo1 = phoneNo1.substring(0, 2);
    if (startNo1 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المدير بالرقم 07.");
    }
  }

  //------------------------------------------------------------------------------
  //مجموعة معلومات الجهة الحائزة والمستخدمة :
  // التحقق من حقل رقم هاتف الجهة الحائزة والمستخدمة يجب ان يبدء الرقم ب07
  if (this.inputFormField.lfhdgf) {
    const phoneNo1 = this.inputFormField.lfhdgf;
    let startNo1 = phoneNo1.substring(0, 2);
    if (startNo1 != "07") {
      this.evalErr.push(
        "يجب أن يبدأ رقم هاتف الجهة الحائزة والمستخدمة بالرقم 07.",
      );
    }
  }

  // التحقق من حقل رقم هاتف مدير الجهة يجب ان يبدء الرقم ب07
  if (this.inputFormField.lfhfd) {
    const phoneNo1 = this.inputFormField.lfhfd;
    let startNo1 = phoneNo1.substring(0, 2);
    if (startNo1 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف مدير الجهة بالرقم 07.");
    }
  }
}
