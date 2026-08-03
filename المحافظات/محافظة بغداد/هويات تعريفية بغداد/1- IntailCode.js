{
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.vvv = this.user.family_name; //جلب اللقب
  //document.getElementsByName("vvv")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.numm = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  document.getElementsByName("numm")[0].disabled = true; //قفل حقل رقم الموحدة

  this.inputFormField.date = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("date")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //------------------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  document.getElementById("35749").style.cssText =
    "color: #5f0000; font-size: 22px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";

  //------------------------------------------------------------------------------------------------
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
    "35737", //اسم الام للثلاثي
    "93684", //اللقب
    "53431", //جهة الاصدار
    "35738", //محل الولادة
    "53428", //اسم الزوج/ة
    "53429", //وظيفة الزوج/ة
    //المعلومات الوظيفية
    "53433", //العنوان الوظيفي
    "53435", //المنصب
    "53437", //الجهة المنسب منها
    //معلومات السكن
    "53439", //اسم المنطقة
  ];

  Arabic_Only(Fields_ID);

  //------------------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز
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
    "35752", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);
}
