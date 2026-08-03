{
  var Selected_Values = ["ارمل / ارملة", "مطلق/ مطلقة", "متزوج/ متزوجة"],
    Fields_Prog = [
      "Wife", //اسم الزوج / الزوجة الاول
      "Swifename", //اسم الزوج / الزوجة الثاني
      "Wifename", //اسم الزوج / الزوجة الثالث
      "Swife", //هل يوجد تعدد زوجات
    ],
    Fields_Location = [18, 19, 20, 21];

  if (Selected_Values.includes(this.inputFormField.Marital)) {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.Swife == "نعم") {
    if (
      this.inputFormField["Otherwife"] == null ||
      this.inputFormField["Otherwife"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[22].label} مطلوب`,
      );
    }
  }
}
