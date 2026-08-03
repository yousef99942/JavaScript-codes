{
  let Values = [
    {
      Selected_Value: "قطاع الوسط",
      Field_Prog: "sele",
      Field_Location: 11,
    },
    {
      Selected_Value: "القطاع الجنوبي",
      Field_Prog: "south",
      Field_Location: 12,
    },
    {
      Selected_Value: "القطاع الشمالي",
      Field_Prog: "north",
      Field_Location: 13,
    },
    {
      Selected_Value: "قطاع الكوفة",
      Field_Prog: "kufa",
      Field_Location: 14,
    },
    {
      Selected_Value: "قطاع المشخاب",
      Field_Prog: "mashkhab",
      Field_Location: 15,
    },
    {
      Selected_Value: "قطاع المناذرة",
      Field_Prog: "manatheara",
      Field_Location: 16,
    },
    {
      Selected_Value: "قطاع العباسية",
      Field_Prog: "abasyia",
      Field_Location: 17,
    },
  ];

  let Result = Values.find(
    (Finding) => this.inputFormField.sel === Finding.Selected_Value,
  );

  if (Result) {
    if (
      this.inputFormField[Result.Field_Prog] == null ||
      this.inputFormField[Result.Field_Prog] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[Result.Field_Location].label} مطلوب`,
      );
    }
  }
}
