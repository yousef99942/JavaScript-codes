{
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.FName = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("FName")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.SName = this.user.family_name; //جلب اللقب
  //document.getElementsByName("SName")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------
  //حصر الحقول باللغة الانكليزية
  function English_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الحروف الإنكليزية + المسافة
        if (!/^[a-zA-Z\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير إنكليزي
        }
      });
    }
  }

  var Fields_ID = [
    "65597", //الاسم الاول باللغة الانجليزية
    "75246", //الاسم الثاني باللغة الانجليزية
    "75247", //الاسم الثالث باللغة الانجليزية
  ];

  English_Only(Fields_ID);

  //--------------------------------------------------------------------------------
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
    "75245", //اللقب
    "65598", //اسم الام الاول
    "75248", //اسم الام الثاني
    "75249", //اسم الام الثالث
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------
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
    "75329", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);
}
