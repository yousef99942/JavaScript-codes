{
//! لاخفاء عدة حقول
  if (this.tab_click == "form") {
    //! منهم يمثل حقل من الحقول التي سوف نتاكد منهم object وكل objects تحتوي على Values المصفوفة
    //! خاص بالاسم البرمجي للحقل Field_Prog
    //! الخاص بالحقل IDخاص بالـ Field_ID
    //! يتم تكرار الجزء المحصور داخل اقواس {} مع اقواسه مع كل اضافة جديدة لحقل من نوع تاريخ داخل المصفوفة
    let Values = [
      { Field_Prog: "namewqt", Field_ID: "96177", }, //الحقل الاول ID
      { Field_Prog: "xcvb", Field_ID: "96179", }, //الحقل الثاني ID
      { Field_Prog: "xcvbn", Field_ID: "96180", }, //الحقل الثالث ID
      { Field_Prog: "xcfgg", Field_ID: "96181", },//الحقل الرابع ID
      { Field_Prog: "district", Field_ID: "97330", },//الحقل الخامس ID
      { Field_Prog: "otherDistrict", Field_ID: "97328", },//الحقل السادس ID
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  };
  
}