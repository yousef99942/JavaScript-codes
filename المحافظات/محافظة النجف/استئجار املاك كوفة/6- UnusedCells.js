{
  let Values = [
    { Field_Prog: "other", Field_ID: "88606" }, //اخرى
    { Field_Prog: "OtherF", Field_ID: "88648" }, //فعالية أخرى
  ];

  Values.forEach((Checking) => {
    if (this.form_data[Checking.Field_Prog] == null) {
      document.getElementById(Checking.Field_ID).style.visibility = "collapse";
    }
  });
}
