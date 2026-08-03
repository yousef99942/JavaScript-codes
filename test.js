{
  this.inputFormField.FirstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("FirstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.FourthName = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("FourthName")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.laq = this.user.family_name; //جلب اللقب

  this.inputFormField.Phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("Phone")[0].disabled = true; //قفل حقل رقم الهاتف
  ////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  //الخاص بالحقول داخل المصفوفة IDيتم اضافة الـ
  //التي يتم اضافتها داخل المصفوفة يعتمد على عدد الحقول المطلوب اخفائها IDعدد الـ
  var Fields_ID = [
    "88606", //الحقل الاولى ID
    "88646", //الحقل الاولى ID
    "88648", //الحقل الثاني ID
    "88650", //الحقل الثالث ID
    "88632", //الحقل الثالث ID
  ];

  //لا يحتاج تغيير في ما يخص استدعاء الدالة التي سوف تقوم بغلق الحقل على الاحرف المطلوبة
  Arabic_Only(Fields_ID);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // أرقام فقط
        const allowedRegex = /^[0-9]$/;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  //الخاص بالحقول داخل المصفوفة IDيتم اضافة الـ
  //التي يتم اضافتها داخل المصفوفة يعتمد على عدد الحقول المطلوب اخفائها IDعدد الـ
  var Fields_ID = [
    "88640", //الحقل الاولى ID
    "88641", //الحقل الثاني ID
    "88645", //الحقل الثاني ID
  ];

  //لا يحتاج تغيير في ما يخص استدعاء الدالة التي سوف تقوم بغلق الحقل على الاحرف المطلوبة
  Numbers_Only(Fields_ID);
}
