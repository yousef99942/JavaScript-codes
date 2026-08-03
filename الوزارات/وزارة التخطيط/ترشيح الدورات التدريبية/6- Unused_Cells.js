{
  if (this.tab_click == "form") {
    //اخفاء مجموعات
    if (this.form_data.Registration == "تسجيل جديد") {
      document.getElementById("33609_group").style.display = "none";
    }

    if (
      this.form_data.Registration ==
      "التسجیل للحصول على شھادة جداریة للدورات والورش السابقة"
    ) {
      document.getElementById("22935_group").style.display = "none";
    }

    //اخفاء حقول
    var Fields_ID = [
        "48096", //الوزارة
        "47830", // اسم الدائرة
        "47831", //العنوان الوظيفي
        "47834", //سنوات الخدمة
        "51521", //الدرجة الوظيفية
        "53654", //اسم الوزارة
        "53655", //الدائرة
      ],
      Progs = [
        "ministryNamee", //الوزارة
        "OrgName", //اسم الدائرة
        "jobName", //العنوان الوظيفي
        "yearsNumber", //سنوات الخدمة
        "Jobgrade", //الدرجة الوظيفية
        "Ministryname", //اسم الوزارة
        "Department", //الدائرة
      ];

    for (var i = 0; i < Fields_ID.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }

    //اخفاء ليبل مال اجور الشهادة
    if (this.form_data.certificate != "نعم") {
      document.getElementById("53184").style.visibility = "collapse";
    }

    //الحقول المخفيه من الخدمة
    var Fields_IDs = [
      "49294", //دورات تدريبية/بغداد
      "49381", //دورات تدريبية /الموصل
      "49397", //دورات تدريبية/ الديوانية
      "49431", //دورات تدريبية/ البصرة
      "47823", //اسم المرشح الثلاثي
      "49083", //اختر المحافظة
    ];

    for (var i = 0; i < Fields_ID.length; i++) {
      document.getElementById(Fields_IDs[i]).style.visibility = "collapse";
    }
  }
}
