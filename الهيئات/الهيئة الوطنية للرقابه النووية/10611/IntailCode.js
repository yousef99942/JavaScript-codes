{
  //تفاصيل الحماية الامنية
  document.getElementById("11796_group").style.display = "none";

  //تاريخ تخويل النقل الاشعاعي
  document
    .getElementById("73766")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("TaDate")[0].setAttribute("min", "2000-01-01");
  document.getElementsByName("TaDate")[0].setAttribute("max", "2060-12-31");

  //تاريخ العقد
  document
    .getElementById("28912")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dtt")[0].setAttribute("min", "2000-01-01");
  document.getElementsByName("dtt")[0].setAttribute("max", "2060-12-31");

  //صالح لغاية
  document
    .getElementById("28913")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("der")[0].setAttribute("min", "2000-01-01");
  document.getElementsByName("der")[0].setAttribute("max", "2060-12-31");

  //------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية فقط
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

  //مجموعة معلومات المؤسسة  الناقلة
  Arabic_Only("28812"); //اسم المؤسسة الناقلة :
  Arabic_Only("74865"); //اسم القضاء
  Arabic_Only("28815"); //اسم المنطقة

  //مجموعة تفاصيل عملية النقل
  Arabic_Only("28885"); //اسم المنفذ
  //Arabic_Only("28888"); //نقطة الانطلاق
  //Arabic_Only("28889"); //نقطة الوصول
  Arabic_Only("28890"); //وصف حاوية النقل
  Arabic_Only("28892"); //الجهة المرسلة
  Arabic_Only("28893"); //الجهة النهائية المرسل اليها
  Arabic_Only("28894"); //المستخدم النهائي للمصادر المشعة

  //مجموعة تفاصيل الحماية الامنية
  Arabic_Only("28911"); //شركة الحماية الامنية المرافقة للشحنة
  Arabic_Only("28924"); //اجراءات الحماية الامنية اثناء عملية النقل:

  //مجموعة خطة الطوارئ الاشعاعية اثناء عملية النقل
  Arabic_Only("28928"); //وصف الاجراءات المتخذة في حالة وقوع حادث سير وخروج المصدر من الحاوية والاضرار في المصادر المشعة:
  Arabic_Only("28929"); //وصف الاجراءات المتخذة في حالة وقوع حريق في سيارة النقل:
  Arabic_Only("28930"); //وصف الاجراءات المتخذة في حالة سرقة المصدر المشع اثناء النقل او التوقف الطارئ:

  //-----------------------------------------------------------------------------------------------------------------
  //حصر حقل جواز السفر باحرف معينه وارقام
  function English_Limited_And_Numbers(Field_ID) {
    const input = document.getElementById(Field_ID);
    input.addEventListener("keydown", (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

      // الأرقام + الأحرف الإنجليزية المحددة فقط
      if (!/^[0-9ADECBVRK]$/.test(e.key)) {
        e.preventDefault(); // منع أي شيء غير مسموح
      }
    });
  }

  English_Limited_And_Numbers("28875"); //رقم جواز السفر
}
