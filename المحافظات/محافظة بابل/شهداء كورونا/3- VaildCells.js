{
  let First_Values = [
    {
      Field_Prog: "numberw", //عدد الزوجات
      Field_Location: 14,
    },
    {
      Field_Prog: "numberch", //عدد الاولاد
      Field_Location: 15,
    },
  ];

  if (
    this.inputFormField.marital == "متزوج/متزوجة" &&
    this.inputFormField.Type === "ذكر"
  ) {
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

  if (
    (this.inputFormField.marital == "متزوج/متزوجة" &&
      this.inputFormField.Type === "انثى") ||
    this.inputFormField.marital == "ارمل/ارملة" ||
    this.inputFormField.marital == "مطلق/مطلقة"
  ) {
    if (
      this.inputFormField["numberch"] == null ||
      this.inputFormField["numberch"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`,
      );
    }
  }
}
