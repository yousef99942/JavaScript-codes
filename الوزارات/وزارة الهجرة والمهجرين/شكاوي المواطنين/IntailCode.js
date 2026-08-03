{
  this.inputFormField.namea = this.user.first_name;
  document.getElementsByName("namea")[0].disabled = true; //الاسم الاول

  this.inputFormField.nameb = this.user.middle_name;
  document.getElementsByName("nameb")[0].disabled = true; //الاسم الثاني

  this.inputFormField.namec = this.user.last_name;
  document.getElementsByName("namec")[0].disabled = true; //الاسم الثالث

  this.inputFormField.named = this.user.forth_name;
  document.getElementsByName("named")[0].disabled = true; //الاسم الرابع

  this.inputFormField.nameph = this.user.phone_num;
  document.getElementsByName("nameph")[0].disabled = true; //رقم الهاتف

  //------------------------------------------------------------------------------------
  // دالة للسماح بإدخال الأحرف العربية فقط
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

  var Fields_ID = [
    //مجموعة اسم صاحب الشكوى
    "69553", //اسم الام الاول
    "75110", //اسم الام الثاني
    "75111", //اسم الام الثالث
    "69556", //العنوان الوظيفي
    "69560", //القضاء
    "69561", //الناحية
    //مجموعة موضوع الشكوى
    "75112", //موضوع الشكوى
    "69565", //مكان الشكوى
    "69582", //ملاحظات عن الشكوى
    "69569", //الجهة المعنية بالشكوى
  ];

  for (var i = 0; i < Fields_ID.length; i++) {
    Arabic_Only(Fields_ID[i]);
  }

  document.getElementById("69571").style.cssText =
    "color: #4e0808; font-size: 19px; font-weight: bold; padding-top: 15px; padding-bottom: 15px";

  //-------------------------------------------------------------------------------------------------------
  function English_Limited_And_Numbers(Field_ID) {
    const input = document.getElementById(Field_ID);
    input.addEventListener("keydown", (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

      // الأرقام + الأحرف الإنجليزية المحددة فقط
      if (!/^[0-9ADECBVRK]$/.test(e.key)) {
        e.preventDefault(); // منع أي شيء غير مسموح
      }
    });
  }

  English_Limited_And_Numbers("69558"); //رقم جواز السفر
}
