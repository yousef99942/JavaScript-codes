{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.forthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("forthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.surname = this.user.family_name; //جلب اللقب
  //document.getElementsByName("surname")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.nid = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  //document.getElementsByName("nid")[0].disabled = true; //قفل حقل رقم الموحدة

  this.inputFormField.birthdate = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("birthdate")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //----------------------------------------------------------------------------------------
  //تغيير خصائص حقول
  var Labels_ID = [
    "92124", //التعهد الاول
    "92508", //التعهد الثاني
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #490000; font-size: 20px; font-weight: bold; padding-top: 12px; padding-bottom: 12px;";
  }

  //----------------------------------------------------------------------------------------
  //حصر الحقول بالارقام واللغة الانكليزية
  function English_Number_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        // السماح بالاختصارات، الأسهم، Backspace، Delete...
        if (ctrl || e.key.length > 1) return;
        // السماح بالحروف الإنجليزية والأرقام والمسافة فقط
        if (!/^[a-zA-Z0-9\s]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //البيانات الشخصية
    "92089", //رقم الجواز
  ];

  English_Number_Only(Fields_ID);

  //----------------------------------------------------------------------------------------
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
    //البيانات الشخصية
    "92096", //محل الولادة
    "92100", //اسم الام
    "92509", //اسم اب الام
    "92510", //اسم جد الام
    //معلومات اخرى
    "92108", //الشهادة الاكاديمية
    "92110", //جهة اصدار الشهادة
    "92112", //العنوان الوظيفي
    "92113", //الدراسة الحوزوية
    "92114", //اسماء الاساتذة او المدرسة الفعلية
    "92115", //المجلس العلمي
    "92117", //اسم الجامع او المجلس
    "92118", //مكان الجامع او المسجد
    "92123", //اللغات التي تجيدها
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز
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
    //معلومات السكن
    "92106", //دار
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //----------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  //تاريخ التخرج
  document
    .getElementById("92109")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("gradudate")[0].setAttribute("min", "1980-01-01");
  document
    .getElementsByName("gradudate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ المجلس العلمي
  document
    .getElementById("92116")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("majdate")[0].setAttribute("min", "1980-01-01");
  document
    .getElementsByName("majdate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
