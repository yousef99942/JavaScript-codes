{
  let First_Values = [
    {
      Field_Prog: "numberw", //عدد الزوجات
      Field_Location: 13,
    },
    {
      Field_Prog: "Wife", //اسم الزوجة
      Field_Location: 14,
    },
    {
      Field_Prog: "numberch", //عدد الاولاد
      Field_Location: 15,
    },
  ];

  if (this.inputFormField.marital == "متزوج/متزوجة") {
    First_Values.forEach((Checking) => {
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
