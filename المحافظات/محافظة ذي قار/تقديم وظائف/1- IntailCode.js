{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.familyname = this.user.family_name; //جلب اللقب
  //document.getElementsByName("familyname")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.birth = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("birth")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  document.getElementById("93761").style.cssText =
    "color: #680000; font-size: 22px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";

  //------------------------------------------------------------------------------------
  //اخفاء المحافظات
  this.group_of_form[0].fields[9].properties[0].values = ["ذي قار"];

  //اخفاء الاقضية
  this.group_of_form[0].fields[10].properties[0].values = [
    "الدواية",
    "البطحاء",
    "الفضيلة",
    "الفجر",
    "الفهود",
    "الغراف",
    "الحمار (المنار)",
    "الاصلاح",
    "الجبايش",
    "الناصرية",
    "النصر",
    "الرفاعي",
    "الشطرة",
    "الطار",
    "أور",
    "كرمة بني سعد",
    "قلعة سكر",
    "سيد دخيل",
    "سوق الشيوخ",
    "عكيكة",
  ];

  //------------------------------------------------------------------------------------
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
    "93270", //اللقب
    "93280", //اسم الجامعة او المعهد
  ];

  Arabic_Only(Fields_ID);

  //------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز
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
    "93277", //عنوان السكن
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  //سنة التخرج
  document
    .getElementById("93404")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("gradtiondate")[0]
    .setAttribute("min", "2000-01-01");
  document
    .getElementsByName("gradtiondate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
