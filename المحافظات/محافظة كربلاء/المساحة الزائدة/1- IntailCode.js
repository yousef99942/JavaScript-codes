{
  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.Thirdname = this.user.last_name;
  document.getElementsByName("Thirdname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.Thefourthname = this.user.forth_name;
  document.getElementsByName("Thefourthname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phonenumber = this.user.phone_num;
  document.getElementsByName("phonenumber")[0].disabled = true; //رقم الهاتف

  this.inputFormField.fifthname = this.user.family_name; //اللقب

  //--------------------------------------------------------------------------------
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
    //معلومات مقدم الطلب
    "72663", //اللقب
    //معلومات العقار
    "72666", //اسم الوكيل (ان وجد)
    "72668", //اقرب نقطة دالة
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام والرموز
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
    "72667", //رقم الوكالة (ان وجدت)
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //--------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام فقط
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
    "72665", //اسم الحي
    "72669", //اسم المقاطعة
  ];

  Arabic_Numbers_Only(Fields_ID);
}
