{
  if (this.tab_click == "form") {
    let Values = [
      {
        Field_Prog: "parentname", //اذا كانت الاجابة نعم - اسم المؤسسة الام :
        Field_ID: "92425",
      },
      {
        Field_Prog: "ppp", //اذا كانت اختيارك لمجال الاعتماد (أخرى) املأ الحقل التالي:
        Field_ID: "93089",
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
