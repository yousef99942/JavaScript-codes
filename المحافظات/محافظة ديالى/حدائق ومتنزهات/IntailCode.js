{
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.namee = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("namee")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nameee = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nameee")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.nname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("nname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phon = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phon")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية
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
    "65815", //اسم الحديقة او المتنزه
    "65817", //اقرب معلم واضح
  ];

  Arabic_Only(Fields_ID);
}
