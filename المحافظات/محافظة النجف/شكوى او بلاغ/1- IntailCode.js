{
  //جلب المعلومات من بوابة اور
  this.inputFormField.FirstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("FirstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecondName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThridName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThridName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.FourthName = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("FourthName")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.Surname = this.user.family_name; //جلب اللقب
  //document.getElementsByName("Surname")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phoneNumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phoneNumber")[0].disabled = true; //قفل حقل رقم الهاتف

  //----------------------------------------------------------------------------------------
  //تعديل خصائص الليبل
  //معلومات المشتكي
  document.getElementById("88039").style.cssText =
    "color: #630202; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";

  //معلومات الشكوى
  document.getElementById("88054").style.cssText =
    "color: #630202; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";

  //----------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية فقط
  function Arabic_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الأحرف العربية + الهمزة + المسافة
        if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير عربي
        }
      });
    }
  }

  var Fields_ID = [
    "88060", //القسم او الشعبة
  ];

  Arabic_Only(Fields_ID);
}
