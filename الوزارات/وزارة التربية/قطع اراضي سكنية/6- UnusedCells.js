{
  if (this.tab_click == "form") {
    //المحافظة
    document.getElementById("75351").style.visibility = "collapse";
    //القضاء القديم
    document.getElementById("75350").style.visibility = "collapse";

    //اسماء الحقول البرمجية
    var Fields_ID = [
        "73487", //اسم الزوج / الزوجة الاول
        "75347", //اسم الزوج / الزوجة الثاني
        "75346", //اسم الزوج / الزوجة الثالث
        "75503", //هل يوجد تعدد زوجات
        "75506", //بيانات الزوجات الأخريات
      ],
      Fields_Prog = [
        "Wife", //اسم الزوج / الزوجة الاول
        "Swifename", //اسم الزوج / الزوجة الثاني
        "Wifename", //اسم الزوج / الزوجة الثالث
        "Swife", //هل يوجد تعدد زوجات
        "Otherwife", //بيانات الزوجات الأخريات
      ];

    for (var i = 0; i < Fields_ID.length; i++) {
      if (this.form_data[Fields_Prog[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }
  }
}
