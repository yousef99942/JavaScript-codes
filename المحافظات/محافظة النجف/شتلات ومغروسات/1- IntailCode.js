{
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name;
  document.getElementsByName("name")[0].disabled = true; //الاسم الاول

  this.inputFormField.Fname = this.user.middle_name;
  document.getElementsByName("Fname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.GFname = this.user.last_name;
  document.getElementsByName("GFname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.GGfname = this.user.forth_name;
  document.getElementsByName("GGfname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.mobile = this.user.phone_num;
  document.getElementsByName("mobile")[0].disabled = true; //رقم الهاتف

  //-----------------------------------------------------------------------------
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
    "75790", //اللقب
    "75814", //اسم الدائرة الحكومية او المؤسسة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز فقط
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
    "75816", //عنوان الموقع المستهدف للزراعة
  ];

  Arabic_Symbols_Only(Fields_ID);
}
