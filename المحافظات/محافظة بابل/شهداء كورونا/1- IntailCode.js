{
  //جلب المعلومات من بوابة اور
  this.inputFormField.nameRequster = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("nameRequster")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecoNameReq = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecoNameReq")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.therNameReq = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("therNameReq")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.forhNameReq = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("forhNameReq")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.Phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("Phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.numcard = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  document.getElementsByName("numcard")[0].disabled = true; //قفل حقل رقم الموحدة

  //-----------------------------------------------------------------------------------------------
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
    "89875", //الاسم الاول للشهيد
    "89876", //الاسم الثاني للشهيد
    "89877", //الاسم الثالث للشهيد
    "89878", //الاسم الرابع للشهيد
    "89879", //اللقب للشهيد
    "90727", //اسم الام للشهيد
    "91333", //اسم اب الام للشهيد
    "91338", //اسم جد الام للشهيد
    "94930", //اسم الزوجة
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------------------
  //حصر حقل التاريخ
  //تاريخ الاستشهاد
  document
    .getElementById("89885")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("date")[0].setAttribute("min", "2019-01-01");
  document
    .getElementsByName("date")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
