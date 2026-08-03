{
  let Values = [
    { Field_Prog: "other", Field_ID: "88137" }, //اخرى
    { Field_Prog: "OtherF", Field_ID: "88290" }, //فعالية أخرى
  ];

  Values.forEach((Checking) => {
    if (this.form_data[Checking.Field_Prog] == null) {
      document.getElementById(Checking.Field_ID).style.visibility = "collapse";
    }
  });
}
