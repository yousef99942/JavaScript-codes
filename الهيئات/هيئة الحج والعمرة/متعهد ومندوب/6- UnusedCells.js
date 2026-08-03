{
  let Values = [
    {
      Field_Prog: "companyn", //اسم شركة العمرة
      Field_ID: "92278", //اسم شركة العمرة
    },
    {
      Field_Prog: "companyserial", //رمز شركة العمرة
      Field_ID: "92279", //رمز شركة العمرة
    },
    {
      Field_Prog: "selecttow", //اسم المكتب
      Field_ID: "92502", //اسم المكتب
    },
  ];

  Values.forEach((Checking) => {
    if (this.form_data[Checking.Field_Prog] == null) {
      document.getElementById(Checking.Field_ID).style.visibility = "collapse";
    }
  });
}
