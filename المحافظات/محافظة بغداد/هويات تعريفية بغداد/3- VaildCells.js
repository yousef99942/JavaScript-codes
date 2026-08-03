{
  if (this.inputFormField.sss == "تجديد") {
    //رقم الهوية السابقة
    if (
      this.inputFormField["nummmmm"] == null ||
      this.inputFormField["nummmmm"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
    }
  }

  let Values = [
    { Field_Prog: "wafe", Field_Location: 15 }, //اسم الزوج/ة
    { Field_Prog: "wor", Field_Location: 16 }, //وظيفة الزوج/ة
  ];

  if (this.inputFormField.sta == "متزوج/ة") {
    Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Checking.Field_Location].label} مطلوب`,
        );
      }
    });
  }

  if (this.inputFormField.mon == "نعم") {
    //الجهة المنسب منها
    if (
      this.inputFormField["alhj"] == null ||
      this.inputFormField["alhj"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[6].label} مطلوب`);
    }
  }
}
