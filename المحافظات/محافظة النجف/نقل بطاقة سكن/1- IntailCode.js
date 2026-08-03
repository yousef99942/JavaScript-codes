{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.sacondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("sacondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.tital = this.user.family_name; //جلب اللقب
  //document.getElementsByName("tital")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  //----------------------------------------------------------------------------------------------
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
    "51437", //اللقب
    "52901", //اسم الام
    "74573", //اسم  أب الأم
    "74574", //اسم جد الام
    "89584", //لقب الام
    "89585", //محل الولادة
    "89587", //الحالة الاجتماعية
    "89595", //جهة اصدار بطاقة السكن
    "89590", //جهة اصدار البطاقة الوطنية
    "89592", //اسم مركز التموين
    "89588", //اسم الزوجة الثلاثي واللقب
    "89600", //اسم المختار الحالي
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
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
    "89598", //العنوان الحالي مع اقرب نقطة دالة
    "89599", //عنوان العمل الحالي
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
  //تحديد حقول التواريخ
  document
    .getElementById("89586")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dat")[0].setAttribute("min", "1950-01-01");
  document
    .getElementsByName("dat")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
