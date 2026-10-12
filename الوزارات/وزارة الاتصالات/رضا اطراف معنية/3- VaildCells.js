{
  /*
        Selected_Value الاختيار الذي تم اختياره من قبل المواطن
        Group_Number تسلسل المجموعة
        Fields_Prog الاسماء البرمجية للحقول
        Fields_Location تسلسل الحقول داخل المجموعة
    */
  let Values = [
    {
      Selected_Value: ["مواطن"],
      Group_Number: 1,
      Fields_Prog: [
        "address", //محل الاقامة
        "gove", //المحافظة
        "dist", //القضاء
        "gender", //الجنس
        "Disab", //العلامات الفارقة
        "work", //نوع العمل
        "certification", //التحصيل الدراسي
        "Social", //الحالة الاجتماعية
      ],
      Fields_Location: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    }, //قيم المجموعة الاولى
    {
      Selected_Value: ["مزود خارجي"],
      Group_Number: 2,
      Fields_Prog: [
        "prov", //مورد(مزود خارجي)1
        "placework", //مكان العمل
        "speci", //مجال العمل والتخصص
        "ourorganiz", //الجهة التي تتعامل معها في مؤسستنا
        "agency", //الوكالة الدولية الحاصل عليها
        "years", //عدد سنوات التعامل
        "rept", //تكرارية التعامل
      ],
      Fields_Location: [0, 1, 2, 3, 4, 5, 6],
    }, //قيم المجموعة الثانية
    {
      Selected_Value: ["شريك", "مزود خارجي"],
      Group_Number: 2,
      Fields_Prog: [
        "opni", //التعامل مع مؤسستنا يحقق منفعة متبادلة
        "eazy", //سهولة التواصل مع اصحاب القرار في مؤسستنا وبدون تعقيد
        "delll", //مؤسستنا تفي بالتزاماتها
        "rel", //علاقتكم مع مؤسستنا حققت لكم قيمة مضافة
      ],
      Fields_Location: [0, 1, 2, 3],
    }, //قيم المجموعة الثالثة
  ];

  let Result = Values.find((Finding) =>
    Finding.Selected_Value.includes(this.inputFormField.testrrr),
  );

  if (Result) {
    Result.Fields_Prog.forEach((Checking) => {
      let Index = Result.Fields_Prog.indexOf(Checking);

      if (
        this.inputFormField[Checking] == "" ||
        this.inputFormField[Checking] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[Result.Group_Number].fields[Result.Fields_Location[Index]].label} مطلوب`,
        );
      }
    });
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  if (
    this.inputFormField.testrrr == "مزود خارجي" ||
    this.inputFormField.testrrr == "شريك"
  ) {
    let Fields_Progs = [
        "FirstQuestion", //يعكس الأعلام صورة حقيقية عن اداء مؤسستنا
        "SecondQuestion", //تتمتع مؤسستنا بحيادية ومصداقية وشفافية في التعامل
        "ThirdQuestion", //انطباعكم الحالي عن اداء مؤسستنا افضل من الأنطباع السابق
        "FourthQuestion", //لدى مؤسستنا نشاطات مجتمعية تهدف الى تعزيز سمعتها
        "FifthQuestion", //تعكس مؤسستنا صورة ايجابية عن الأداء الحكومي
      ],
      FIelds_Location = [0, 1, 2, 3, 4];

    Fields_Progs.forEach((Checking) => {
      let Index = Fields_Progs.indexOf(Checking);
      if (
        this.inputFormField[Checking] == null ||
        this.inputFormField[Checking] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[5].fields[Index].label} مطلوب`,
        );
      }
    });
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  if (this.inputFormField.testrrr == "شريك") {
    if (
      this.inputFormField["part"] == null ||
      this.inputFormField["part"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
    }
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  let Second_Values = [
    {
      Selected_Value: "مؤسسات حكومية",
      Group_Number: 3,
      Fields_Prog: [
        "gov", // الجهة الحكومية
        "poscode", // المنصب
        "govname", // اسم الجهة الحكومية
        "location", // موقع العمل
        "kind", // نوع العمل
        "company", // الجهة التي تتعامل معها في مؤسستنا
        "repear", // اختر نوع تكرارية التعامل
      ],
      Fields_Location: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      Selected_Value: "شريك",
      Group_Number: 4,
      Fields_Prog: [
        "Nationality", //جنسية الجهة المانحة
        "type", //نوع العمل
        "ourorg", //الجهة التي تتعامل معها في مؤسستنا
        "redeal", //تكرارية التعامل
      ],
      Fields_Location: [0, 1, 2, 3],
    },
  ];

  let Second_Result = Second_Values.find(
    (Finding) => this.inputFormField.part === Finding.Selected_Value,
  );

  if (Second_Result) {
    Second_Result.Fields_Prog.forEach((Checking) => {
      let Index = Second_Result.Fields_Prog.indexOf(Checking);

      if (
        this.inputFormField[Checking] == "" ||
        this.inputFormField[Checking] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[Second_Result.Group_Number].fields[Second_Result.Fields_Location[Index]].label} مطلوب`,
        );
      }
    });
  }

  //--------------------------------------------------------------------------------------------------------------------------//
  let Fields_Progs = [
    "sha", //يتم مشاركتكم في تصميم الخدمات المقدمة لكم من مؤوسستنا
    "advise", //تقوم مؤسستنا بتقديم المشورة والدعم للأنشطة التي تقومون بها
    "exe", //تم تنفيذ التحسينات حسب ملاحظاتكم (التغذية الراجعة ) الناتجة عن المشاركة
    "culture", //لدى مؤسساتنا ثقافة مؤسسية لتعميق فاعلية التعاون
  ],
  Fields_Location = [0, 1, 2, 3];

  Fields_Progs.forEach((Checking) => {
    let Index = Fields_Progs.indexOf(Checking);
    if (
      this.inputFormField[Checking] == null ||
      this.inputFormField[Checking] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[7].fields[Fields_Location[Index]].label} مطلوب`
      );
    }
  });
}
