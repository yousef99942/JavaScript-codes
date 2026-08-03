{
  this.inputFormField["firstName"] = this.user.first_name;
  this.inputFormField["secondName"] = this.user.middle_name;
  this.inputFormField["thirdName"] = this.user.last_name;
  this.inputFormField.fourthName = this.user.forth_name; //جلب الاسم الرابع
  this.inputFormField.surname = this.user.family_name; //جلب اللقب
  this.inputFormField["phoneNumber"] = this.user.phone_num;
  this.inputFormField.birthDate = this.user.birth_date; //جلب تاريخ الميلاد

  document.getElementsByName("firstName")[0].disabled = true;
  document.getElementsByName("secondName")[0].disabled = true;
  document.getElementsByName("thirdName")[0].disabled = true;
  document.getElementsByName("fourthName")[0].disabled = true; //قفل حقل الاسم الرابع
  document.getElementsByName("phoneNumber")[0].disabled = true;

  //-----------------------------------------------------------------------
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
    //المعلومات الشخصية
    "89813", //اللقب
    "89814", //اسم الام الثلاثي
    //المعلومات الدراسية
    "89858", //الاختصاص
    "89861", //الاختصاص الدقيق
    "89834", //اسم الجامعة/ المعهد/ المدرسة
    //نوع العمل المطلوب
    "89843", //الوظيفة المطلوبة
    //الحالة الإجتماعية والمعيشية
    "89849", //مصدر الدخل الآخر
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------
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
    //المعلومات الشخصية
    "89822", //العنوان الكامل
    "90542", //أقرب نقطة دالة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
