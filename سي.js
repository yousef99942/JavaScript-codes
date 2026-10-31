{
  let First_Values = [
    {
      Field_Prog: "namewqt", //الاسم البرمجي للحقل الاول
      Field_Location: 1, //تسلسل الحقل الاول
    },
    {
      Field_Prog: "xcvb", //الاسم البرمجي للحقل الثاني
      Field_Location: 2, //تسلسل الحقل الثاني
    },
    {
      Field_Prog: "xcvbn", //الاسم البرمجي للحقل الثالث
      Field_Location: 3, //تسلسل الحقل الثالث
    },
    {
      Field_Prog: "xcfgg", //الاسم البرمجي للحقل الرابع
      Field_Location: 4, //تسلسل الحقل الرابع
    },
  ];

  //* في الشرط الخارجي نحتاج الاسم البرمجي للحقل الذي يحتوي على القيمة التي تجعل الحقل يظهر
  //* inputFormField ونضع الاسم البرمجي بعد النقطة التي بعد ايعاز
  if (this.inputFormField.nameswa == "نعم") {
    First_Values.forEach((Checking) => {
      //* وهنا نتاكد اذا الحقول التي تختفي وتظهر فارغة ام لا
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        //! المقصود به هو تسلسل المجموعة التي تحتوي على الحقل بعد طرح 1 منه group_of_form
        //! المقصود به تسلسل الحقل داخل مجموعته fields
        this.evalErr.push(
          الحقل ${this.group_of_form[7].fields[Checking.Field_Location].label} مطلوب,
        );
      }
    });
  }
}