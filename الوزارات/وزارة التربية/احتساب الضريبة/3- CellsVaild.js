{
  //المعلومات الشخصية
  //هل المنتسب مستمر بالعمل داخل المديرية ؟
  if (this.inputFormField.Status === "كلا") {
    if (
      this.inputFormField["Typeeee"] === null ||
      this.inputFormField["Typeeee"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`); //يرجى تحديد سبب عدم الاستمرار داخل المديرية
    }
  }

  //استمارة بيان قيام الزوجية وعدد الاولاد
  const Values = [
    {
      Selected_Value: "متزوج",
      Fields_Prog: [
        "birthdaymarried", // تاريخ الزواج
        "namespouwife", // اسم الزوج ( الزوجة)
        "cardspouwife", // رقم البطاقة الوطنية للزوج ( الزوجة)
        "ChildStat", //هل لدى المنتسب ابناء ؟
      ],
      Fields_Location: [
        1, // تاريخ الزواج
        2, // اسم الزوج ( الزوجة)
        4, // رقم البطاقة الوطنية للزوج ( الزوجة)
        10, //هل لدى المنتسب ابناء ؟
      ],
    },
    {
      Selected_Value: "أرمل",
      Fields_Prog: [
        "birthdaydeath", // تاريخ وفاة الزوج ( الزوجة)
        "ChildStat", //هل لدى المنتسب ابناء ؟
      ],
      Fields_Location: [
        5, // تاريخ وفاة الزوج ( الزوجة)
        9, //هل لدى المنتسب ابناء ؟
      ],
    },
    {
      Selected_Value: "مطلق",
      Fields_Prog: [
        "birthdayabsoiute", // تاريخ الطلاق
        "ChildStat", //هل لدى المنتسب ابناء ؟
      ],
      Fields_Location: [
        3, // تاريخ الطلاق
        9, //هل لدى المنتسب ابناء ؟
      ],
    },
  ];

  const Result = Values.find(
    (Finding) => this.inputFormField.maritstatus === Finding.Selected_Value,
  );

  if (Result) {
    Result.Fields_Prog.forEach((Checking) => {
      const Index = Result.Fields_Prog.indexOf(Checking);
      if (
        this.inputFormField[Checking] === null ||
        this.inputFormField[Checking] === ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Result.Fields_Location[Index]].label} مطلوب`,
        );
      }
    });
  }

  if (
    this.inputFormField.maritstatus === "متزوج" &&
    this.inputFormField.gender === "ذكر"
  ) {
    if (
      this.inputFormField["salary"] === null ||
      this.inputFormField["salary"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[6].label} مطلوب`); //هل الزوجة ربة بيت وليس لها دخل ؟
    }
  }

  if (
    (this.inputFormField.maritstatus === "متزوج" &&
      this.inputFormField.gender === "انثى") ||
    this.inputFormField.salary == "كلا"
  ) {
    if (
      this.inputFormField["PartnerJobType"] === null ||
      this.inputFormField["PartnerJobType"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[7].label} مطلوب`); //هل الزوج (الزوجة):
    }

    if (
      this.inputFormField["combinesalary"] === null ||
      this.inputFormField["combinesalary"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[8].label} مطلوب`); //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
    }

    if (
      this.inputFormField["GettingSpousalAllowances"] === null ||
      this.inputFormField["GettingSpousalAllowances"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[9].label} مطلوب`); //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
    }
  }

  if (this.inputFormField.ChildStat === "نعم") {
    if (
      this.inputFormField["GildAge"] === null ||
      this.inputFormField["GildAge"] === ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[11].label} مطلوب`,
      ); // هل لدى المنتسب أبناء بعمر 18 سنة فأكثر؟
    }

    if (
      this.inputFormField["WorkingChildren"] === null ||
      this.inputFormField["WorkingChildren"] === ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[12].label} مطلوب`,
      ); //هل لدى المنتسب ابناء قد تم تعيينهم؟
    }

    if (
      this.inputFormField["FirstTable"] === null ||
      this.inputFormField["FirstTable"] === ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[13].label} مطلوب`,
      ); //اسماء الابناء
    }
  }
}
