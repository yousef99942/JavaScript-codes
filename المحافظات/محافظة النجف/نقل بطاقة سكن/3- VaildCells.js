{
  let Values = [
    {
      Selected_Value: "نقل بطاقة السكن من المحافظات الى محافظة النجف الاشرف",
      Fields_Prog: [
        "loca", //محل الولادة
        "dat", //تاريخ الولادة
        "mar", //الحالة الاجتماعية
        "numberr", //رقم بطاقة السكن
        "formmm", //جهة اصدار بطاقة السكن
        "Cardnumber", //رقم البطاقة الوطنية الموحدة
        "location", //جهة اصدار البطاقة الوطنية
        "numb", //رقم البطاقة التمونية
        "namee", //اسم مركز التموين
        "numbertam", //رقم المركز التمويني
        "name", //اسم الزوجة الثلاثي واللقب
        "ader", //العنوان السابق مع اقرب نقطة دالة
        "egovernorate", //المحافظة الحالية
        "aders", //العنوان الحالي مع اقرب نقطة دالة
        "job", //عنوان العمل الحالي
        "namemok", //اسم المختار الحالي
        "numaqar", //رقم العقار
        "typr", //نوع السكن
        "areyou", //هل كنت منتمي لحزب البعث المقبور
        "arey", //هل كنت منتسباً بالاجهزة الامنية في النظام البائد
      ],
      Fields_Location: [
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32,
        33, 34,
      ],
    },
    {
      Selected_Value: "نقل الاثاث من والى محافظة النجف الاشرف",
      Fields_Prog: [
        "governor", //المحافظة الحالية.
        "addrees", //عنوان السكن الحالي.
        "governorate", //المحافظة المطلوب نقل الأثاث لها.
      ],
      Fields_Location: [1, 2, 3],
    },
  ];

  let Result = Values.find(
    (Finding) => this.inputFormField.selecter === Finding.Selected_Value,
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
}
