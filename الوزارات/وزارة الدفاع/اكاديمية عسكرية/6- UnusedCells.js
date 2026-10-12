{
  if (this.tab_click == "form") {
    let Values = [
      { Field_Prog: "Special", Field_ID: "96751" }, //التخصص العلمي الدقيق
      {
        Field_Prog: "YearOfGradua",
        Field_ID: "96752",
      }, //سنة التخرج
      { Field_Prog: "Others", Field_ID: "97002" }, //اخرى
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
