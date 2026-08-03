{
  if (this.tab_click == "form") {
    let Values = [
      { Field_Prog: "high", Field_ID: "89301" }, //الاسم
      { Field_Prog: "Divistion", Field_ID: "93074" }, //شطر
      { Field_Prog: "AfterDivision", Field_ID: "93075" }, //شطر
      { Field_Prog: "StydyTypeOne", Field_ID: "93077" }, //طابع الدوام
      { Field_Prog: "StudyTypeTow", Field_ID: "93078" }, //طابع الدوام
      { Field_Prog: "IntitGend", Field_ID: "93079" }, //جنس المؤسسة
      { Field_Prog: "Changefrom", Field_ID: "93080" }, //تخفيض / رفع من والى
      { Field_Prog: "ChangeTo", Field_ID: "93081" }, //تخفيض / رفع من والى
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
