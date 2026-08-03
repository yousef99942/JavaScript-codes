{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.therdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("therdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.phonunerdus = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonunerdus")[0].disabled = true; //قفل حقل رقم الهاتف

  //-------------------------------------------------------------------------------------
  //تغيير الليبلات
  var Labels_ID = [
    //معلومات الجهة طالبة الاجازة
    "88920", //عنوان المؤسسة
    "88919", //عنوان المسؤول
    //وصف الوسائل المترابطة مع جهاز العلاج
    "74260", //أولاً : المؤشرات الكهربائية لحزمة العلاج الاشعاعي‌
    "74264", //باب غرفة المعجل :
    "74266", //ثانياً : عروض رأس حزمة الإشعاع العلاجي
    "74292", //ثالثاً :مؤشرات عمل لوحة السيطرة للاشعة الخارجية
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #670505; font-size: 18px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";
  }

  //-------------------------------------------------------------------------------------
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
    //معلومات الجهة طالبة الاجازة
    "74219", //اسم المؤسسة
    "74224", //اسم المسؤول الثلاثي
    "74225", //القضاء
    "74226", //الصفة الرسمية (المنصب)
    "74230", //مخول مسؤول المؤسسة
    "74233", //اسم المخول الثلاثي
    "74234", //الصفة الرسمية للمخول
  ];

  Arabic_Only(Fields_ID);

  //-------------------------------------------------------------------------------------
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
    //معلومات الجهة طالبة الاجازة
    "88917", //الدار
    "88923", //دار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  //تاريخ الكتاب او الوكالة
  document
    .getElementById("88918")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dataa")[0].setAttribute("min", "2020-01-01");
  document
    .getElementsByName("dataa")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //التاريخ المتوقع لبدء الممارسة ( منشآة جديدة )
  document
    .getElementById("74239")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("xswe")[0]
    .setAttribute("min", `${new Date().getFullYear()}-12-31`);
  document
    .getElementsByName("xswe")[0]
    .setAttribute("max", `${new Date().getFullYear() + 5}-12-31`);
}
