{
  if (this.tab_click == "form") {
    let Values = [
      {
        Field_Prog: "numberw", //عدد الزوجات
        Field_ID: "89881",
      },
      {
        Field_Prog: "Wife", //اسم الزوجة
        Field_ID: "94930",
      },
      {
        Field_Prog: "numberch", // عدد الأطفال
        Field_ID: "89882",
      },
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
