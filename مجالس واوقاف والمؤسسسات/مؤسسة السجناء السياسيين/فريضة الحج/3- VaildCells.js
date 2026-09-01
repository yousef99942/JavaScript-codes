{
  const Values = [
    {
      Selected_Values: "تقديم الوريث للمشمول المتوفي",
      Fields_Prog: [
        "firstnamee", // اسم الوريث الاول
        "fatherwareeth", // اسم اب الوريث
        "thiredwareeth", // اسم جد الوريث
        "furthwareth", // اسم الجد الرابع للوريث
        "laqb", // اللقب
        "mothernamee", // اسم ام الوريث
        "twoname", // اسم اب الام للوريث
        "thiredmothere", // اسم جد الام للوريث
        "birthdayy", // تاريخ الميلاد
        "genderr", // الجنس
        "sela", // صلة الوريث من المشمول
      ],
      Fields_Location: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      Group_Number: 1,
    },
    {
      Selected_Values: "التقديم لتنازل المشمول الحي لاحد الورثة",
      Fields_Prog: [
        "firstnamme", // الاسم الاول
        "sacnednamme", // اسم الاب
        "thirednamme", // اسم الجد
        "furthnamme", // اسم اب الجد
        "laaqb", // اللقب
        "mothernamme", // اسم الام
        "fathernameee", // اسم اب الام
        "thierdnameee", // اسم جد الام
        "birthdaayy", // تاريخ الميلاد
        "geender", // الجنس
        "sefaa", // صلة القرابة من المشمول
      ],
      Fields_Location: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      Group_Number: 2,
    },
  ];

  const Result = Values.find(
    (Finding) => this.inputFormField.submission === Finding.Selected_Values,
  );

  if (Result) {
    Result.Fields_Prog.forEach((Checking) => {
      let index = Result.Fields_Prog.indexOf(Checking);
      if (
        this.inputFormField[Checking] === "" ||
        this.inputFormField[Checking] === null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[Result.Group_Number].fields[Result.Fields_Location[index]].label} مطلوب`,
        );
      }
    });
  }
  //------------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  if (this.inputFormField.phone) {
    const phoneNo = this.inputFormField.phone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف البديل بالرقم 07.");
    }
  }

  if (this.inputFormField.phonetwo) {
    const phoneNo = this.inputFormField.phonetwo;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف البديل بالرقم 07.");
    }
  }
}
