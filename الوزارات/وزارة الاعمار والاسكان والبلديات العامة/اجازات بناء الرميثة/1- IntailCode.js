{
  //جلب المعلومات من اور
  this.inputFormField.fisrtname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("fisrtname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

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
    "75445", //العنوان
    "75450", //مديرية التسجيل العقاري
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------
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
    "75446", //رقم القطعة وتسلسلها
  ];

  Arabic_Numbers_Only(Fields_ID);

  //---------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز
  function Arabic_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;
        // العربية + المسافة + الرموز
        const regex = /^[\u0600-\u06FF\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "75447", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //---------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز فقط
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
    "75449", //رقم السند
  ];

  Numbers_Symbols_Only(Fields_ID);
}
