{
  const Values = [
    {
      Selected_Value: ["بيع وشراء اسهم شركات"],
      Fields_Prog: [
        "tabelOne", //معلومات البائع
        "tabel", //معلومات المشتري
      ],
      Fields_Location: [15, 16],
    },
    {
      Selected_Value: ["تصديق وكالة", "عدم ممانعة", "تسجيل وبيع مركبات"],
      Fields_Prog: [
        "Name", //اسم مقدم الطلب / المخول
        "Position", //الصفة القانونية
      ],
      Fields_Location: [5, 6],
    },
    {
      Selected_Value: ["صرف مستحقات"],
      Fields_Prog: [
        "Date", //النفاذية
        "ContractNumber", //رقم العقد
        "startDate", //تاريخ المباشرة
        "EndDate", //تاريخ الانجاز
        "pledgeNu", //قيمة التعهد رقما
        "pledge", //قيمة التعهد كتابه
        "receivedNu", //رقم وصل التسديد
        "receivedDate", //تاريخ الوصل
      ],
      Fields_Location: [7, 8, 9, 10, 11, 12, 13, 14],
    },
  ];

  let Result = Values.find((Finding) =>
    Finding.Selected_Value.includes(this.inputFormField.Type),
  );

  if (Result) {
    Result.Fields_Prog.forEach((Checking) => {
      if (
        this.inputFormField[Checking] == null ||
        this.inputFormField[Checking] == ""
      ) {
        let index = Result.Fields_Prog.indexOf(Checking);
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[index].label} مطلوب`,
        );
      }
    });
  }
}
