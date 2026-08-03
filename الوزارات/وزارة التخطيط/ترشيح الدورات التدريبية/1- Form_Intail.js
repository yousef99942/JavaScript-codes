{
  //فلترة سلكتر التحصيل الدراسي
  this.group_of_form[1].fields[9].properties[0].values = [
    "ابتدائية",
    "متوسطة",
    "اعدادية",
    "بكالوريوس",
    "ماجستير",
    "دكتوراه",
    "اخرى",
  ];
  //-------------------------------------------------------------------------------------------------------------
  //مجموعة استمارة ترشيح للبرامج التدريبية
  document.getElementById("22935_group").style.display = "none";

  //مجموعة التسجیل للحصول على شھادة جداریة للدورات والورش السابقة
  document.getElementById("33609_group").style.display = "none";

  //مجموعة استمارة ترشيح للبرامج التدريبية
  //علماً ان اجور الحصول على الشهادة الجدارية تبلغ ( ۳٥،۰۰۰ ) خمسة وثلاثون الف دينار عراقي عدا اجور الدورة
  document.getElementById("53184").style.display = "none";

  //-------------------------------------------------------------------------------------------------------------
  //المبلغ المدفوع غير قابل للاسترجاع ، الا في حال تعذر انعقاد الدورة
  document.getElementById("70681").style.cssText =
    "color: #4f0303; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 15px";

  //-------------------------------------------------------------------------------------------------------------
  //مجموعة تسجيل جديد
  //تاريخ بدء انعقاد البرنامج
  document
    .getElementById("49392")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("period")[0].setAttribute("min", "2026-01-01");
  document.getElementsByName("period")[0].setAttribute("max", "2026-12-31");

  //تاريخ انتهاء البرنامج
  document
    .getElementById("49392")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("pojg")[0].setAttribute("min", "2026-01-01");
  document.getElementsByName("pojg")[0].setAttribute("max", "2026-12-31");

  //-------------------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية
  function Arabic_Only(Field_ID) {
    const input = document.getElementById(Field_ID);
    input.addEventListener("keydown", (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

      // الأحرف العربية + الهمزة + المسافة
      if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
        e.preventDefault(); // منع أي شيء غير عربي
      }
    });
  }

  //مجموعة تسجيل جديد
  Arabic_Only("47830"); //اسم الدائرة
  Arabic_Only("47831"); //العنوان الوظيفي
  Arabic_Only("51521"); //الدرجة الوظيفية

  //مجموعة التسجیل للحصول على شھادة جداریة للدورات والورش السابقة
  Arabic_Only("53655"); //الدائرة
}
