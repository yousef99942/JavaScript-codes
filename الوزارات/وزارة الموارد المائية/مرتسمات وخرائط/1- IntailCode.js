{
  //جلب المعلومات من بوابة اور
  this.inputFormField.FirstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("FirstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.idnumber = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  document.getElementsByName("idnumber")[0].disabled = true; //قفل حقل رقم الموحدة

  //--------------------------------------------------------------------------------------------------
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
    "69645", //أسم المهنة
    "69646", //محل السكن
  ];

  Arabic_Only(Fields_ID);
  //--------------------------------------------------------------------------------------------------
  //حصر حقل التاريخ
  document
    .getElementById("69649")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("date")[0].setAttribute("min", "2003-01-01");
  document
    .getElementsByName("date")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
