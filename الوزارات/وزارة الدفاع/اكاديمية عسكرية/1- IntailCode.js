{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecondName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.FourthName = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("FourthName")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.Birth = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("Birth")[0].disabled = true; //قفل حقل تاريخ الميلاد

  this.inputFormField.PhoneNum = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("PhoneNum")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------------
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
    "89753", //اسم الام الاول
    "89754", //اسم الام الثاني
    "89755", //اسم الام الثالث
    "89757", //اسم الام الرابع
    //المعلومات الوظيفية و الدراسية
    "96751", //التخصص العلمي الدقيق
    "97002", //يرجى ذكر الصفة
    //الاستفسارات و الشكوى
    "96756", //الاستفسار او الشكوى
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام
  function Arabic_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;
        // العربية + الأرقام + المسافة (بدون رموز)
        const regex = /^[\u0600-\u06FF0-9\u0660-\u0669\s]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
      // حماية من اللصق
      input.addEventListener("input", () => {
        input.value = input.value.replace(
          /[^\u0600-\u06FF0-9\u0660-\u0669\s]/g,
          "",
        );
      });
    }
  }

  var Fields_ID = [
    "96755", //اقرب نقطة دالة
  ];

  Arabic_Numbers_Only(Fields_ID);
}
