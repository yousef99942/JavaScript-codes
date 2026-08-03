{
  this.inputFormField.nbn = this.user.first_name;
  //document.getElementsByName("nbn")[0].disabled = true; //الاسم الاول

  this.inputFormField.MSecondName = this.user.middle_name;
  //document.getElementsByName("MSecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.MThirdName = this.user.last_name;
  //document.getElementsByName("MThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.imobi = this.user.phone_num;
  //document.getElementsByName("imobi")[0].disabled = true; //رقم الهاتف

  //Labels
  //الشركة الناقلة
  document.getElementById("73580").style.cssText =
    "color: #082262ff; font-size: 19px; font-weight: bold; padding-top: 15px; padding-bottom: 13px; text-align: center;";

  //second group
  document
    .getElementById("31929")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("kht")[0].setAttribute("min", "2010-01-01");
  document.getElementsByName("kht")[0].setAttribute("max", "2060-12-31");

  //-------------------------------------------------------------------------------------------------------
  //تحديد الحقول باللغة العربية فقط
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

  //مجموعة معلومات الشركة المستوردة او المُعيدة
  Arabic_Only("74543"); //اسم القضاء
  Arabic_Only("27451"); //المنطقة
  Arabic_Only("27454"); //الاسم الاول لمدير الشركة
  Arabic_Only("73578"); //الاسم الثاني لمدير الشركة
  Arabic_Only("73579"); //الاسم الثالث لمدير الشركة
  Arabic_Only("27462"); //اسم المنفذ

  //مجموعة معلومات الشركة الناقلة
  Arabic_Only("74568"); //اسم القضاء
  Arabic_Only("29384"); //اسم مسؤول الوقاية
  Arabic_Only("27483"); //المنطقة

  //مجموعة الجهة المصنعة او المجهزة (خاص بإعادة التصدير)
  Arabic_Only("27489"); //المنشأ /المستقبل النهائي: (في حالة اعادة التصدير)

  //مجموعة المؤسسة المستخدمة
  Arabic_Only("27494"); //البلد
  Arabic_Only("74569"); //اسم القضاء
  Arabic_Only("27498"); //المنطقة
}
