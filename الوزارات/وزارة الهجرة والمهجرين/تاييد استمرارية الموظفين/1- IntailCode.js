{
  //جلب المعلومات من بوابة اور
  this.inputFormField.FirstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("FirstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.SureName = this.user.family_name; //جلب اللقب
  document.getElementsByName("SureName")[0].disabled = true; //قفل حقل اللقب

  //---------------------------------------------------------------------------------------
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
    "67493", //اسم الام الاول
    "67495", //اسم  الام الثاني
    "67494", //اسم الام الثالث
    "67498", //القسم
    "67500", //الدرجة الوظيفيه
    "67690", //اسم الجهة المعنون اليها التاييد
  ];

  Arabic_Only(Fields_ID);
}
