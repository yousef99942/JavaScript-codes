{
  this.inputFormField.FirstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("FirstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecondName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.FourthName = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("FourthName")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.SurName = this.user.family_name; //جلب اللقب
  //document.getElementsByName("SurName")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.PhoneNumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("PhoneNumber")[0].disabled = true; //قفل حقل رقم الهاتف

  //---------------------------------------------------------------------------------------
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
    "90526", //اللقب
  ];

  Arabic_Only(Fields_ID);
}
