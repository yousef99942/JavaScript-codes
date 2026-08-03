{
  //جلب المعلومات من بوابة اور
  this.inputFormField.therd = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("therd")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.thefored = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("thefored")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.fivename = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("fivename")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.sixnumber = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("sixnumber")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phonemang = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonemang")[0].disabled = true; //قفل حقل رقم الهاتف

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
    "88217", //الجهة
    "75277", //العنوان الوظيفي
  ];

  Arabic_Only(Fields_ID);
}
