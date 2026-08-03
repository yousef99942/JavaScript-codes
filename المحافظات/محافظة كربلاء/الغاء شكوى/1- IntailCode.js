{
  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.fathername = this.user.middle_name;
  document.getElementsByName("fathername")[0].disabled = true; //الاسم الثاني

  this.inputFormField.Grandfathersname = this.user.last_name;
  document.getElementsByName("Grandfathersname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.Secondgrandfathersname = this.user.forth_name;
  document.getElementsByName("Secondgrandfathersname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phone = this.user.phone_num;
  document.getElementsByName("phone")[0].disabled = true; //رقم الهاتف

  this.inputFormField.surname = this.user.family_name;

  //---------------------------------------------------------------------
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
    "75585", //اللقب
    "73338", //اسم الحي
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------
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
    "73341", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
