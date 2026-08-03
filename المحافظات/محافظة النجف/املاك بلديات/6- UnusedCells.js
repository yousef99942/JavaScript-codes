{
  let Values = [
    { Field_Prog: "othertype", Field_ID: "74011" }, //اخرى
    { Field_Prog: "OtherA", Field_ID: "74042" }, //فعالية أخرى
  ];

  Values.forEach((Checking) => {
    if (this.form_data[Checking.Field_Prog] == null) {
      document.getElementById(Checking.Field_ID).style.visibility = "collapse";
    }
  });
}
