{
  this.inputFormField.frstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("frstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.fmily = this.user.family_name; //جلب اللقب
  document.getElementsByName("fmily")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.idnumber = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  document.getElementsByName("idnumber")[0].disabled = true; //قفل حقل رقم الموحدة

  //this.inputFormField.birthdate = this.user.birth_date; //تاريخ الميلاد

  //-------------------------------------------------------------------------------------------------
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
    "75432", //اسم الام
    "86207", //اسم والد الام
    "86208", //اسم جد الام
    "75435", //الاتحاد الرياضي
    "75436", //اسم البطولة
    "75437", //المركز المحقق
    "75439", //مبلغ المنحة السابق في فئة الابطال كتابة
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------------
  //فلترة حقل التاريخ
  //تاريخ الميلاد
  document
    .getElementById("75434")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("birthdate")[0].setAttribute("min", "1940-01-01");
  document
    .getElementsByName("birthdate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
