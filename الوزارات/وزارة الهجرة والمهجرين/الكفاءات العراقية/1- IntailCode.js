{
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name;
  document.getElementsByName("name")[0].disabled = true; //الاسم الاول

  this.inputFormField.namef = this.user.middle_name;
  document.getElementsByName("namef")[0].disabled = true; //الاسم الثاني

  this.inputFormField.namet = this.user.last_name;
  document.getElementsByName("namet")[0].disabled = true; //الاسم الثالث

  this.inputFormField.namem = this.user.forth_name;
  document.getElementsByName("namem")[0].disabled = true; //الاسم الرابع

  this.inputFormField.nameph = this.user.phone_num;
  document.getElementsByName("nameph")[0].disabled = true; //رقم الهاتف

  //---------------------------------------------------------------------------
  //تغيير ليبل
  //تعهد
  document.getElementById("86512").style.cssText =
    "color: #690404; font-size: 19px; font-weight: bold; padding-top: 15px; padding-bottom: 15px;";

  //---------------------------------------------------------------------------
  //حصر الحقول باللغة العربية فقط
  function Arabic_Only(Field_ID) {
    const input = document.getElementById(Field_ID);
    input.addEventListener("keydown", (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

      // الأحرف العربية + الهمزة + المسافة
      if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
        e.preventDefault(); // منع أي شيء غير عربي
      }
    });
  }

  var Fields_IDs = [
    //مجموعة المعلومات الشخصية
    "74945", //محل الولادة (الدولة)
    "74946", //عنوان الولادة (مدينة)
    "74947", //الحالة الاجتماعية
    //مجموعة المعلومات الاخرى
    "74957", //اسباب المعوقات الاخرى
    "74959", //المجالات الاخرى
    "74961", //الخدمات الاخرى
    "74964", //طبيعة العمل الاخرى
    //مجموعة معلومات الدراسة
    "74951", //تحصيل دراسي اخر
    "74952", //التخصص الدقيق
    "74954", //بلد المهجر
    "74955", //المهنة في بلد المهجر
  ];

  for (var i = 0; i < Fields_IDs.length; i++) {
    Arabic_Only(Fields_IDs[i]);
  }

  //---------------------------------------------------------------------------
  //حصر حقل التاريخ
  function Date_Limit(Field_ID, Field_Prog, Date_Min, Date_Max) {
    document
      .getElementById(Field_ID)
      .addEventListener("keydown", function (event) {
        event.preventDefault();
      });
    document.getElementsByName(Field_Prog)[0].setAttribute("min", Date_Min);
    document.getElementsByName(Field_Prog)[0].setAttribute("max", Date_Max);
  }

  //مجموعة المعلومات الشخصية
  Date_Limit(
    "74949",
    "namedate",
    "1960-01-01",
    `${new Date().getFullYear()}-12-31`,
  ); //تاريخ الميلاد
  //مجموعة التحصيل الدراسي
  Date_Limit(
    "74953",
    "nameimg",
    "1960-01-01",
    `${new Date().getFullYear() - 18}-12-31`,
  ); //تاريخ مغادرة العراق
}
