{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fouName = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fouName")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  //-----------------------------------------------------------------------------------------------------------------------
  //تغيير خصائص الليبلات
  //الجهاز المركزي للتقييس والسيطرة النوعية/دائرة التقييس/ قسم وسم المصوغات/ استمارة رقم (1)
  document.getElementById("75693").style.cssText =
    "color: #860404; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 13px; text-align: center;";
  //التعهدات
  var Labels_ID = [
    //-اتعهد بعدم وجود قوالب لتقليد المسكوكات الذهبية التي كانت عملة متداولة سابقاً.
    "75327",
    //- اتعهد بإبلاغ دائرتكم عن اي تغيير يطرأ على المعلومات والبيانات الواردة  اعلاه وبمسك السجلات الخاصة ببيع وشراء المصوغات والمعدة من قبل قسم وسم المصوغات.
    "75595",
    //- اتعهد بعدم بيع المصوغات بعيار اقل مما نص عليه قانون وسم المصوغات.
    "75594",
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #860404; font-size: 16px; font-weight: bold; padding-top: 15px; padding-bottom: 13px;";
  }

  //-----------------------------------------------------------------------------------------------------------------------
  document
    .getElementById("75323")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("birthDate")[0]
    .setAttribute("min", `${new Date().getFullYear() - 100}-12-31`);
  document
    .getElementsByName("birthDate")[0]
    .setAttribute("max", `${new Date().getFullYear() - 18}-12-31`);

  //-----------------------------------------------------------------------------------------------------------------------
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
    "75372", //اسم الام الاول
    "75590", //اسم الام الثاني
    "75591", //اسم الام الثالث
    "86853", //اسم الثلاثي للشاهد الاول
    "86854", //الاسم الثلاثي للشاهد الثاني
    "75322", //محل الولادة
    "75325", //الاسم التجاري
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------------------------------------------
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
    "75315", //عنوان المحل
    "75316", //عنوان السكن
    "14789", //الحقل الثالث ID
  ];

  Arabic_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------------------------------------------
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
    "75600", //دار
  ];

  Numbers_Symbols_Only(Fields_ID);
}
