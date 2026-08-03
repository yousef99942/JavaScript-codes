{
  if (this.tab_click == "form") {
    var Fields_ID = [
        "64641",
        "64676",
        "64677",
        "64678",
        "64679",
        "65786",
        "92427",
      ],
      Fields_Prog = [
        "university",
        "collage",
        "department",
        "major",
        "graduationdate",
        "diploma",
        "UniversityType",
      ];

    for (var i = 0; i < Fields_ID.length; i++) {
      if (this.form_data[Fields_Prog[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }

    var Unwanted_Fields_ID = [
      //مجموعة معلومات مقدم الطلب
      "64640", //اقرب نقطة دالة
      "64777", //هل المتقدم ضمن نفس منطقة العمل
      "66269", //البريد الالكتروني
      "64633", //اسم الام الثلاثي
      //مجموعة التحصيل الدراسي
      "64681", //المهنة او الحرفة
      "64682", //عدد الدورات والورش
      //مجموعة معلومات التقديم
      "64683", //رقم الاعلان.
      "64686", //اسم الشركة.
      "64685", //التخصص المطلوب..
    ];

    for (var i = 0; i < Unwanted_Fields_ID.length; i++) {
      document.getElementById(Unwanted_Fields_ID[i]).style.visibility =
        "collapse";
    }
  }
}
