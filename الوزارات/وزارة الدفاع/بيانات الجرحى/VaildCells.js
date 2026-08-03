{
  var Fields_Progs = [
      "wifename", // اسم الزوجة الاول
      "Wname", // اسم الزوجة الثاني
      "Wnamee", //اسم الزوجة الثالث
    ],
    Fields_Loctaions = [8, 9, 10];

  if (this.inputFormField.MaritalStatus == "متزوج") {
    for (var i = 0; i < Fields_Progs.length; i++) {
      if (
        this.inputFormField["wifename"] == null ||
        this.inputFormField["wifename"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Fields_Loctaions[i]].label} مطلوب`,
        );
      }
    }
  }

  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo = this.inputFormField.phone;
  let startNo = phoneNo.substring(0, 2);
  if (startNo != "07") {
    this.evalErr.push("يجب أن يبدأ رقم الهاتف بالرقم 07.");
  }
}
