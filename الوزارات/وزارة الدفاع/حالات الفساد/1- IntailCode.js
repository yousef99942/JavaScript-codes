{
  //جلب المعلومات من بوابة اور
  this.inputFormField.nameA = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("nameA")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.nameB = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("nameB")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nameC = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nameC")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.nameD = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("nameD")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  //----------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  var Labels_ID = [
    "89435",
    "89430", //اتصل بنا
    "89431", //هاتف: 512
    "89432", //البريد الالكتروني: military.prosecution@mad.mil.iq
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #4e0000; font-size: 22px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";
  }

  //----------------------------------------------------------------------------------------
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
    "89427", //وحدة المشتكي
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز والارقام
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
    "93455", //ملخص الشكوى
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
