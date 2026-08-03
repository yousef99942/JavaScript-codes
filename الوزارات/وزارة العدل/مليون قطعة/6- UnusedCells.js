{
  let Values = [
    {
      Field_Prog: "nationalnu", //رقم البطاقة الوطنية
      Field_ID: "92552", //رقم البطاقة الوطنية
    },
    {
      Field_Prog: "numberciv", //رقم هوية الاحوال المدنية
      Field_ID: "92553", //رقم هوية الاحوال المدنية
    },
    {
      Field_Prog: "sinumber", //رقم السجل
      Field_ID: "92555", //رقم السجل
    },
    {
      Field_Prog: "numnn", //رقم الصحيفة
      Field_ID: "92556", //رقم الصحيفة
    },
    {
      Field_Prog: "ciname", //اسم الدائرة
      Field_ID: "92554", //اسم الدائرة
    },
  ];

  Values.forEach((Checking) => {
    if (this.form_data[Checking.Field_Prog] == null) {
      document.getElementById(Checking.Field_ID).style.visibility = "collapse";
    }
  });
}
