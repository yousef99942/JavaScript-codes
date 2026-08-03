{
  //جلب المعلومات من بوابة اور
  this.inputFormField.mae = this.user.first_name;
  //document.getElementsByName("mae")[0].disabled = true; //الاسم الاول

  this.inputFormField.MSecondName = this.user.middle_name;
  //document.getElementsByName("MSecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.MThirdName = this.user.last_name;
  //document.getElementsByName("MThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.mob = this.user.phone_num;
  //document.getElementsByName("mob")[0].disabled = true; //رقم الهاتف

  //التاريخ
  document
    .getElementById("27287")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("vail")[0].setAttribute("min", "2010-01-01");
  document.getElementsByName("vail")[0].setAttribute("max", "2060-12-31");

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

  //مجموعة معلومات الجهة الطالبة للتخويل
  Arabic_Only("27240"); //الاسم الاول لمدير المؤسسة
  Arabic_Only("73599"); //الاسم الثاني لمدير المؤسسة
  Arabic_Only("73600"); //الاسم الثالث لمدير المؤسسة
  Arabic_Only("27241"); //الموقع الوظيفي
  Arabic_Only("74867"); //اسم القضاء

  //مجموعة معلومات مسؤول الوقاية من الاشعاع
  Arabic_Only("27283"); //اسم مسؤول الوقاية من الاشعاع

  document.getElementById("27310").style.cssText =
    "color: #7c0606; font-size: 18px; font-weight: bold; padding-top: 18px; padding-bottom: 15px";

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

  English_Limited_And_Numbers("27238"); //رقم جواز السفر
}
