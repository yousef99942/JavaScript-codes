{
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.namee = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("namee")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nameee = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nameee")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.nnameee = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("nnameee")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phon = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phon")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------
  //حصر الحقول بالارقام فقط
  function Arabic_Symbols_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // العربية + الأرقام + الرموز + المسافة
        const regex =
          /^[\u0600-\u06FF0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "64544", //التفاصيل
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //--------------------------------------------------------------------------------
  //حصر الحقول بالارقام فقط
  function Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // أرقام فقط
        const allowedRegex = /^[0-9]$/;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "65804", //محلة
    "65806", //الزقاق
  ];

  Numbers_Only(Fields_ID);
}
