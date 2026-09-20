{
  let Second_Values = [
    { Field_Prog: "Awifename", Field_Location: 8 }, //اسم الزوجة الاول
    { Field_Prog: "wifenameB", Field_Location: 9 }, //اسم الزوجة الثاني
    { Field_Prog: "wifenameC", Field_Location: 10 }, //اسم الزوجة الثالث
  ];

  if (this.inputFormField.MaritalStatus === "متزوج") {
    Second_Values.forEach((Checking) => {
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
}
