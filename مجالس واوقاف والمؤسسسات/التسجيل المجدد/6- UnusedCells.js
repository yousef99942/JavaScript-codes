{
  if (this.tab_click == "form") {
    let Values = [
      { Field_ID: "64673", Field_Prog: "firstagent" }, //الاسم الاول (للوكيل)
      { Field_ID: "64674", Field_Prog: "secondagent" }, //الاسم الثاني (للوكيل)
      { Field_ID: "64758", Field_Prog: "therdname" }, //الاسم الثالث (للوكيل)
      { Field_ID: "64668", Field_Prog: "fhonesecond" }, //رقم هاتف الوكيل
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] === null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}
