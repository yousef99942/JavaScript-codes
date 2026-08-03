{
  const Values = [
    {
      Selected_Value: "الرعاية الاجتماعية",
      Fields_Prog: ["relation"], //صلة قرابة قناة الرعاية
      Group_Location: 1,
      Fields_Location: [7],
    },
    {
      Selected_Value: "الاقارب",
      Fields_Prog: [
        "firstna", //الاسم الاول
        "secondna", //اسم الاب
        "thiredna", //اسم الجد
        "fourthna", //اسم الرابع
        "relationsh", //صلة القرابة
        "nameinstitution", //الطالب القريب في اي محافظة؟
        "departmentrelation", //في اي قسم يتواجد الطالب القريب؟
        "stagereal", //في اي مرحلة يتواجد الطالب القريب؟
        "studyreal", //الدراسة
        "pledgereal", //اتعهد بصحة كافة المعلومات والمستمسكات المرافقة وخلافه اتحمل كافة المسؤولية عند رفض طلب التخفيض
      ],
      Group_Location: 2,
      Fields_Location: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      Selected_Value: "الاوائل",
      Fields_Prog: ["topranking"],
      Group_Location: 1,
      Fields_Location: [8],
    },
    {
      Selected_Value: "ذوي الاعاقة (العجز) بنسبة 70%",
      Fields_Prog: ["rate"],
      Group_Location: 1,
      Fields_Location: [9],
    },
    {
      Selected_Value: "ممن ذويهم لديهم عجز بنسبة 70%",
      Fields_Prog: [
        "disabilityrelation", //ذوي الطالب ممن لديهم عجز
        "ratedisable", //نسبة العجز %
        "pledgedisable", //اتعهد بصحة كافة المعلومات والمستمسكات المرافقة وخلافه اتحمل كافة المسؤولية عند رفض طلب التخفيض
      ],
      Group_Location: 3,
      Fields_Location: [0, 1, 2],
    },
    {
      Selected_Value: "حافظي القرآن 5 اجزاء",
      Fields_Prog: ["partnum"], //عدد الاجزاء المحفوظة
      Fields_Location: [10],
    },
    {
      Selected_Value: "ابناء الاساتذة والموظفين وابناؤهم",
      Fields_Prog: [
        "nameprof", //اسم الرباعي للتدريسي او الموظف
        "affiliation", //جهة انتساب التدريسي او الموظف
        "jobtitle", //العنوان الوظيفي
        "pledgeprof", //اتعهد بصحة كافة المعلومات والمستمسكات المرافقة وخلافه اتحمل كافة المسؤولية عند رفض طلب التخفيض
      ],
      Fields_Location: [0, 1, 2, 3],
    },
    {
      Selected_Value: "منتسبي الحشد الشعبي ورجال الدين في الحوزة العلمية",
      Fields_Prog: ["exception"], //الاقسام المشمولة بالتخفيض لقناة منتسبي الحشد ورجال الدين
      Fields_Location: [11],
    },
  ];

  let Result = Values.find(
    (Finding) => Finding.Selected_Value === this.inputFormField.requesttype,
  );

  if (Result) {
    Result.Fields_Prog.forEach((Checking) => {
      if (
        this.inputFormField[Checking] == "" ||
        this.inputFormField[Checking] == null
      ) {
        let index = Result.Fields_Prog.indexOf(Checking);
        this.evalErr.push(
          `الحقل ${this.group_of_form[Result.Group_Location].fields[Result.Fields_Location[index]].label} مطلوب`,
        );
      }
    });
  }
}
