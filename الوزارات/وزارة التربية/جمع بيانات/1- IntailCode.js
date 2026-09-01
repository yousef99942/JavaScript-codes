{
  this.inputFormField.nameo = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("nameo")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.namet = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("namet")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nameth = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nameth")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.namef = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("namef")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.numbero = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  //document.getElementsByName("numbero")[0].disabled = true; //قفل حقل رقم الموحدة

  this.inputFormField.namem = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("namem")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //----------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام
  function Arabic_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;
        // العربية + الأرقام + المسافة (بدون رموز)
        const regex = /^[\u0600-\u06FF0-9\u0660-\u0669\s]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
      // حماية من اللصق
      input.addEventListener("input", () => {
        input.value = input.value.replace(
          /[^\u0600-\u06FF0-9\u0660-\u0669\s]/g,
          "",
        );
      });
    }
  }

  var Fields_ID = [
    "89284", //رقم البطاقة التموينية واسم مركز التموين
  ];

  Arabic_Numbers_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
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
    "89287", //التخصص
    "89267", //اسم الام
    "89268", //اسم اب الام
    "89269", //اسم جد الام
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  document
    .getElementById("89270")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("named")[0].setAttribute("min", "1960-01-01");
  document
    .getElementsByName("named")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
