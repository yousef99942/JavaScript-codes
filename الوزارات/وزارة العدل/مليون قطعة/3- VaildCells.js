{
  let Values = [
    {
      Selected_Value: "البطاقة الوطنية",
      Fields_Prog: [
        "nationalnu", //رقم البطاقة الوطنية
      ],
      Fields_Location: [
        10, //رقم البطاقة الوطنية
      ],
    },
    {
      Selected_Value: "هوية الاحوال المدنية",
      Fields_Prog: [
        "numberciv", //رقم هوية الاحوال المدنية
        "sinumber", //رقم السجل
        "numnn", //رقم الصحيفة
        "ciname", //اسم الدائرة
      ],
      Fields_Location: [
        11, //رقم هوية الاحوال المدنية
        12, //رقم السجل
        13, //رقم الصحيفة
        14, //اسم الدائرة
      ],
    },
  ];

  let Result = Values.find(
    (Finding) => Finding.Selected_Value === this.inputFormField.numcivil,
  );

  if (Result) {
    for (let i = 0; i < Result.Fields_Prog.length; i++) {
      if (
        this.inputFormField[Result.Fields_Prog] == null ||
        this.inputFormField[Result.Fields_Prog] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Result.Fields_Location].label} مطلوب`,
        );
      }
    }
  }
}
