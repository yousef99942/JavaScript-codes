{
  if (this.tab_click == "form") {
    let Values = [
      { Field_Prog: "Depnm", Field_ID: "96445" }, //القسم
      { Field_Prog: "Stype", Field_ID: "96514" }, //نوع المخاطبة
      { Field_Prog: "SupSpec", Field_ID: "96456" }, //الاختصاص الدقيق
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
