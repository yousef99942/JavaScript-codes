{
  //جلب المعلومات من بوابة اور
  //   this.inputFormField.fullName = this.user.first_name; //جلب الاسم الاول
  //   document.getElementsByName("fullName")[0].disabled = true; //قفل حقل الاسم الاول

  //   this.inputFormField.secondName = this.user.middle_name; //جلب الاسم الثاني
  //   document.getElementsByName("secondName")[0].disabled = true; //قفل حقل الاسم الثاني

  //   this.inputFormField.thiredName = this.user.last_name; //جلب الاسم الثالث
  //   document.getElementsByName("thiredName")[0].disabled = true; //قفل حقل الاسم الثالث

  //   this.inputFormField.fourName = this.user.forth_name; //جلب الاسم الرابع
  //   document.getElementsByName("fourName")[0].disabled = true; //قفل حقل الاسم الرابع

  //   this.inputFormField.sirName = this.user.family_name; //جلب اللقب
  //   //document.getElementsByName("sirName")[0].disabled = true; //قفل حقل اللقب

  //   this.inputFormField.phoneNum = this.user.phone_num; //جلب رقم الهاتف
  //   document.getElementsByName("phoneNum")[0].disabled = true; //قفل حقل رقم الهاتف

  //-------------------------------------------------------------------------------------
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
    "87417", //الاسم الاول
    "88296", //الاسم الثاني
    "88297", //الاسم الثالث
    "88299", //الاسم الرابع
    "88300", //اللقب
    "88301", //اسم الام
    "88302", //اسم اب الام
    "88303", //اسم جد الام
    "88310", //اسم الزوج/ة
    "88312", //اسم اب الزوج/ة
    "88315", //اسم جد الزوج/ة
  ];

  Arabic_Only(Fields_ID);

  //-------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز
  function Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // الأرقام + الرموز + المسافة
        const regex =
          /^[0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "88346", //دار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-------------------------------------------------------------------------------------
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
    "87427", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
