{
  if (this.tab_click == "form") {
    var Fields_ID = [
        "75090", //تاريخ التخرج
        "48839", //عنوان الجهة
        "75093", //عنوان الجامعة المراد النقل اليها
        "75095", //اسباب النقل
        "75096", //اسباب التأجيل
        "75097", //اسباب تخفيض القسط
        "75098", //هل لديك تخفيض سابق
        "75100", //سبب ترقين القيد
        "75101", //هل تمت الاستفادة من قرار العودة سابقاً
        "75102", //سبب ترقين القيد (الانسحاب بعد المباشرة)
        "75103", //سبب الغاء القبول
        "75104", //سبب النقل من كليتك
        "75105", //ذكر اسم الجامعة المنقول منها
      ],
      Fields_Progs = [
        "graduatdate", //تاريخ التخرج
        "addressEntity", //عنوان الجهة
        "transporttitel", //عنوان الجامعة المراد النقل اليها
        "reasonstransfer", //اسباب النقل
        "reasonspostpone", //اسباب التأجيل
        "reasonslow", //اسباب تخفيض القسط
        "previouslydiscount", //هل لديك تخفيض سابق
        "reasonsclose", //سبب ترقين القيد
        "returnQ", //هل تمت الاستفادة من قرار العودة سابقاً
        "withdrawal", //سبب ترقين القيد (الانسحاب بعد المباشرة)
        "withdrawall", //سبب الغاء القبول
        "reasonstransformfrom", //سبب النقل من كليتك
        "nameuniversity", //ذكر اسم الجامعة المنقول منها
      ];

    for (var i = 0; i < Fields_ID.length; i++) {
      if (this.form_data[Fields_Progs[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }
  }
}
