{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.sename = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("sename")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thiname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thiname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.funame = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("funame")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phonenu = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonenu")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.badate = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("badate")[0].disabled = true; //قفل حقل تاريخ الميلاد

  this.inputFormField.idn = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  //document.getElementsByName("idn")[0].disabled = true; //قفل حقل رقم الموحدة

  //---------------------------------------------------------------------------------------------
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
    "74988", //اسم الام
    "87328", //اسم والد الام
    "87330", //اسم جد الام
    "71875", //الجهة المطلوب ارسال الطلب اليها
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز والارقام فقط
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
    "75089", //تفاصيل الطلب
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
