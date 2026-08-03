{
  let Values = [
    { Field_Prog: "wafe", Field_ID: "53428" }, //اسم الزوج/ة
    { Field_Prog: "wor", Field_ID: "53429" }, //وظيفة الزوج/ة
    { Field_Prog: "alhj", Field_ID: "53437" }, //الجهة المنسب منها
    { Field_Prog: "nummmmm", Field_ID: "53425" }, //رقم الهوية السابقة
  ];

  Values.forEach((Checking) => {
    if (this.form_data[Checking.Field_Prog] == null) {
      document.getElementById(Checking.Field_ID).style.visibility = "collapse";
    }
  });
}
