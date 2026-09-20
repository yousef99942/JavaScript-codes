{
  if (this.tab_click == "form") {
    let Values = [
      { Field_Prog: "Awifename", Field_ID: "86871" }, //اسم الزوجة الاول
      { Field_Prog: "wifenameB", Field_ID: "86872" }, //اسم الزوجة الثاني
      { Field_Prog: "wifenameC", Field_ID: "86873" }, //اسم الزوجة الثالث
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
