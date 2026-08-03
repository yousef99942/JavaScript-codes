{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  //-------------------------------------------------------------------------------------
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
    "72980", //اسم الاول للوكيل المشتكي عليه
    "72981", //الاسم الاب للوكيل المشتكى عليه
    "72982", //اسم الجد للوكيل المشتكى عليه
  ];

  Arabic_Only(Fields_ID);

  //-------------------------------------------------------------------------------------
  function Arabic_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // العربية + الرموز + الترقيم + المسافة
        const allowedRegex = /^[\p{Script=Arabic}\p{P}\p{S}\s]$/u;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير مسموح
        }
      });
    }
  }

  var Fields_ID = [
    "72984", //اقرب نقطة دالة للوكيل
  ];

  Arabic_Symbols_Only(Fields_ID);

  //-------------------------------------------------------------------------------------
  function Arabic_Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // العربية + الأرقام (عربية وإنجليزية) + الرموز + الترقيم + المسافة
        const allowedRegex = /^[\p{Script=Arabic}\p{N}\p{P}\p{S}\s]$/u;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "72987", //محتوى الشكوى
  ];

  Arabic_Numbers_Symbols_Only(Fields_ID);
}
