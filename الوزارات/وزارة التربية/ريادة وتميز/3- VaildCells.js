{
  //اختار احدى القوائم
  let Values = [
    {
      Selected_Value: "استمارة ترشيح مدرب/ة ضمن مبادرة الريادة والتميز",
      Fields_Prog: [
        "rate", //ماهي النسبة المئوية النجاح لطلبتك خلال العام الماضي؟
        "sharing", //هل سبق لك المشاركة في دورات تدريبية؟
        "level", //ما مستوى معرفتك باستخدام الحاسوب؟
        "sel", //هل سبق لك تقديم ورشة او تدريب داخل المدرسة او خارجها؟
        "soq", //هل لديك خبرة في الانشطة اللاصفية او المبادرات الطلابية؟ مسابقات, معارض ,مشاريع طلابية ,او لجان مدرسية ؟
        "three", //هل لديك موافقة مبدئية من ادارة المدرسة للمشاركة في المبادرة ؟
        "for", //هل تستطيع حضور دورة اعداد المدربين الخاصة بالمبادرة ؟
        "faife", //هل تلتزم بتنفيذ ورش او انشطة داخل المدرسة بعد انتهاء التدريب؟
        "qustion", //كم نشاطا تستطيع تنفيذه خلال الفصل الدراسي؟
        "governorate", //المحافظة
        "district", //القضاء
        "adrr", //الناحية
        "adde", //المنطقة
        "ssex", //جنس المدرسة
      ],
      Fields_Location: [18, 19, 21, 23, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36],
    },
    {
      Selected_Value: "استمارة المدارس",
      Fields_Prog: [
        "namemager", //اسم مدير/ة المدرسة
        "phooone", //رقم الهاتف (مدير/ة) المدرسة
        "mailall", //البريد الالكتروني ان وجد (مدير/ة) المدرسة
        "Assistant", //اسم معاون /ة المدرسة
        "becoues", //ماسبب رغبة المدرسة بالمشاركة في المبادرة
        "hall", //هل توجد قاعة او مكان مناسب لتنفيذ الورش
        "blackboard", //هل توجد سبورة ذكية أو شاشة عرض
        "Allocation", //هل تستطيع المدرسة تخصيص وقت للأنشطة
        "Students", //عدد الطلبة المتوقع إشتراكهم
        "participated", //هل شاركت المدرسة سابقاً في مسابقات أو مبادرات
        "ngn", //الرابع الاعدادي
        "nbn", //الخامس الاعدادي
        "nhn", //السادس الاعدادي
        "onerate", //معدل نسبة النجاح لاخر ثلاث اعوام للمراحل الثلاثة
      ],
      Fields_Location: [38, 39, 40, 42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53],
    },
  ];

  let Result = Values.find(
    (Finding) => this.inputFormField.slecter === Finding.Selected_Value,
  );

  if (Result) {
    for (let i = 0; i < Result.Fields_Prog.length; i++) {
      if (
        this.inputFormField[Result.Fields_Prog[i]] == null ||
        this.inputFormField[Result.Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Result.Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  let Competitions_Fields_Prog = [
    "Scientificcompetitions", //مسابقات علمية
    "activities", //أنشطة فنية
    "Exhibitions", //معارض
    "Voluntary", //مبادرات تطوعية
    "projects", //مشاريع تقنية
    "Other", //اخـــــــــــــــرى
  ];

  if (this.inputFormField.participated === "نعم") {
    let Check = false;
    Competitions_Fields_Prog.forEach((Checking) => {
      if (this.inputFormField[Checking]) {
        Check = true;
      }
    });

    if (!Check) {
      this.evalErr.push("يجب اختيار على الاقل واحدة من المسابقات");
    }
  }

  //هل سبق لك المشاركة في دورات تدريبية؟
  if (this.inputFormField.sharing == "نعم") {
    if (
      this.inputFormField["CERCL"] == null ||
      this.inputFormField["CERCL"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[21].label} مطلوب`,
      );
    }
  }

  //هل سبق لك تقديم ورشة او تدريب داخل المدرسة او خارجها؟
  if (this.inputFormField.sel == "نعم") {
    if (
      this.inputFormField["selone"] == null ||
      this.inputFormField["selone"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[23].label} مطلوب`,
      );
    }
  }

  //هل لديك خبرة في الانشطة اللاصفية او المبادرات الطلابية؟ مسابقات, معارض ,مشاريع طلابية ,او لجان مدرسية ؟
  if (this.inputFormField.soq == "نعم") {
    if (
      this.inputFormField["ree"] == null ||
      this.inputFormField["ree"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[25].label} مطلوب`,
      );
    }
  }

  //للتاكد من رقم الهاتف
  if (this.inputFormField.phooone) {
    const phoneNo = this.inputFormField.phooone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم رقم هاتف (مدير/ة) المدرسة بالرقم 07.");
    }
  }
}
