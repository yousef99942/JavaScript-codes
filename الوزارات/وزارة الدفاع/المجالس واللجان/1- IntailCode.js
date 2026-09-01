{
  this.inputFormField.nameA = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("nameA")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.nameB = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("nameB")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nameC = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nameC")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.nameD = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("nameD")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.famleName = this.user.family_name; //جلب اللقب
  //document.getElementsByName("famleName")[0].disabled = true; //قفل حقل اللقب

  //-----------------------------------------------------------------------------------
  //تغيير خصائص ليبل
  //اتعهد بصحة كافة المعلومات الواردة اعلاه ... وبخلافه اتحمل كافة التبعات القانونية.
  document.getElementById("90754").style.cssText =
    "color: #4e0000; font-size: 20px; font-weight: bold; padding-top: 12px; padding-bottom: 12px;";

  var Labels_ID = [
    "89420", //اتصل بنا
    "89421", //هاتف: 512
    "89422", //البريد الالكتروني: military.prosecution@mod.mil.iq
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #140000; font-size: 25px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
  }

  //-----------------------------------------------------------------------------------
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
    "89413", //اللقب
    "89416", //وحدة المستعلم
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
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
    "89418", //تقديم الاستعلام
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
