{
  //---------------------------------------------------------------------------------------------
  //تغيير خصائص ليبلات
  var Labels_ID = [
    "74350", //معلومات مقدم الطلب
    "74361", //معلومات العقار
    "86225", //التعهد القانوني
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #770404; font-size: 19px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
  }

  //---------------------------------------------------------------------------------------------
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
    "74355", //اللقب
    "74356", //اسم الام
    "74357", //اسم اب الام
    "74358", //اسم جد الام
    "74363", //اسم صاحب الاشتراك الحالي
    "74364", //الحي / المنطقة
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name;
  document.getElementsByName("name")[0].disabled = true; //الاسم الاول

  this.inputFormField.sname = this.user.middle_name;
  document.getElementsByName("sname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.fname = this.user.last_name;
  document.getElementsByName("fname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.gfname = this.user.forth_name;
  document.getElementsByName("gfname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.mobilno = this.user.phone_num;
  document.getElementsByName("mobilno")[0].disabled = true; //رقم الهاتف
}
