{
  if (this.tab_click == "form") {
    let Values = [
      { Field_Prog: "wareethname", Field_ID: "94494" }, //اسم الوريث الرباعي
      { Field_Prog: "idnumber", Field_ID: "94496" }, //اسم الوريث الرباعي
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
