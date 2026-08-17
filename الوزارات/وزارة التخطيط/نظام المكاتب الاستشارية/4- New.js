{
  document.getElementsByClassName("46259")[0].style.display = "none"; //مادة 2 عاشرا
  document.getElementsByClassName("46263")[0].style.display = "none"; //وكالة خاصة بالوكيل

  //هل يوجد مؤسس ثاني؟
  if (this.form_data.hasSecondOwner != "نعم") {
    //الصورة الشخصية للمؤسس الثاني
    document.getElementsByClassName("47251")[0].style.display = "none";
  }

  var First_Docs_IDs = [
    //اختياري
    "46247", //تعهد  خطي بعدم الانتماء الى نقابة مختصة
    "46249", //تاييد من النقابة تدل على عدم انتماء
    "46256", //الدورات والورش للمؤسس
    "46257", //شهادات تقديرية او براعة اختراع او جوائز
    "46260", //وصل الحسابات
    "46266", //اخرى
    "46261", //استمارة كشف الموقع
    "46262", //تقرير الكشف
  ]; //الطلب الطبيعي والجمعية

  if (this.form_data.requset == "نقابة") {
    First_Docs_IDs.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );
  }

  if (this.form_data.requset == "جمعية") {
    document.getElementsByClassName("46247")[0].style.display = "none"; //تعهد  خطي بعدم الانتماء الى نقابة مختصة
    document.getElementsByClassName("46249")[0].style.display = "none"; //تاييد من النقابة تدل على عدم انتماء
  }

  var Selected_Values = ["تأسيس مكتب", "تجديد اجازة المكتب", "بدل تالف"];
  if (Selected_Values.includes(this.form_data.Procedure)) {
    document.getElementsByClassName("46575")[0].style.display = "none"; //صورة ملونة للاجازة الممنوحة (كلا الوجهين)
    document.getElementsByClassName("46576")[0].style.display = "none"; //كتاب الموافقة على منح الاجازة
    document.getElementsByClassName("47218")[0].style.display = "none"; //تعهد بعدم وجود اي التزام لدى المكتب
    document.getElementsByClassName("47219")[0].style.display = "none"; //طلب خطي لتجميد المكتب مع بيان اسباب التجميد
  }

  //"طلب شهادة جدارية"
  var All_IDs = [
    "46251", //المستمسكات الشخصية
    "46252", //صورة شخصية للمؤسس
  ];
  //الملفات المشتركة بين طلب شهادة جدارية وتجميد مكتب
  var common_IDs = [
    "46246", //النظام الداخلي للمكتب
    "46247", //تعهد خطي بعدم الانتماء الى نقابة مختصة
    "46248", //سند ملكية او عقد ايجار
    "46249", //تاييد من النقابة تدل على عدم انتماء
    "46250", //وثيقة تخرج او كتاب تأييد (مع الباركود) لمؤسس المكتب
    "46253", //السيرة الذاتية
    "46254", //هوية التقاعد
    "46255", //بحوث ودراسات علمية وتطبيقية للمؤسس
    "46256", //الدورات والورش للمؤسس
    "46257", //شهادات تقديرية او براعة اختراع او جوائز
    "46258", //تعهد خطي من المؤسس /غير محكوم عليه مسبقا
    "46264", //تعهد خطي ليس موظف في دائرة حكومية
    "46265", //الهوية الضريبية
    "46266", //اخرى (اية اوامر ادارية او وزارية سابقة بشأن توليه مناصب او اية اعمال)
  ];

  if (this.form_data.Procedure == "طلب شهادة جدارية") {
    All_IDs.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );

    common_IDs.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );

    document.getElementsByClassName("47218")[0].style.display = "none"; //تعهد بعدم وجود اي التزام لدى المكتب
    document.getElementsByClassName("47219")[0].style.display = "none"; //طلب خطي لتجميد المكتب مع بيان اسباب التجميد
  }

  if (this.form_data.Procedure == "تجميد مكتب") {
    common_IDs.forEach(
      (Hiding) =>
        (document.getElementsByClassName(Hiding)[0].style.display = "none"),
    );

    document.getElementsByClassName("46576")[0].style.display = "none"; //كتاب الموافقة على منح الاجازة
  }
}
