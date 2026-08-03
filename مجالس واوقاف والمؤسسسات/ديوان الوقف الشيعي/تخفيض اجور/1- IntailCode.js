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

  this.inputFormField.mobnum = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("mobnum")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.birthday = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("birthday")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //--------------------------------------------------------------------------------------------------
  //اخفاء مجاميع
  document.getElementById("35511_group").style.display = "none"; //معلومات المطلوبة للقريب في قناة الاقارب
  document.getElementById("35513_group").style.display = "none"; //معلومات المطلوبة لقناة ممن لدى ذويهم عجز
  document.getElementById("35514_group").style.display = "none"; //معلومات التدريسي او الموظف من والدي الطالب (قناة ابناء الاساتذة والموظفين)

  //--------------------------------------------------------------------------------------------------
  //تغيير خصائص ليبل التعهد
  const Labels_ID = [
    //معلومات الطلب
    "93390", //التعهد
    //معلومات المطلوبة للقريب في قناة الاقارب
    "93409", //التعهد
    //معلومات المطلوبة لقناة ممن لدى ذويهم عجز
    "93463", //التعهد
    //معلومات التدريسي او الموظف من والدي الطالب (قناة ابناء الاساتذة والموظفين)
    "93487", //التعهد
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #5c0000; font-size: 19px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";
  }

  //--------------------------------------------------------------------------------------------------
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
    "93388", //السنة الدراسية
  ];

  Numbers_Symbols_Only(Fields_ID);

  //--------------------------------------------------------------------------------------------------
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
    //المعلومات الاساسية
    "93314", //اسم الام الثلاثي
    //معلومات المطلوبة للقريب في قناة الاقارب
    "93395", //الاسم
    "93396", //اسم الاب
    "93397", //اسم الجد
    "93398", //اسم الرابع
    //معلومات التدريسي او الموظف من والدي الطالب (قناة ابناء الاساتذة والموظفين)
    "93467", //اسم الرباعي للتدريسي او الموظف
    "93470", //جهة انتساب التدريسي او الموظف
    "93473", //العنوان الوظيفي
  ];

  Arabic_Only(Fields_ID);
}
