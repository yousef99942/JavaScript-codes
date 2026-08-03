{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name;
  document.getElementsByName("thirdname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name;
  document.getElementsByName("fourthname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phonenumber = this.user.phone_num;
  document.getElementsByName("phonenumber")[0].disabled = true; //رقم الهاتف

  //--------------------------------------------------------------------------------------------------------------------
  //تعديل خصائص الليبل
  document.getElementById("67050").style.cssText =
    "color: #560404; font-size: 21px; font-weight: bold; padding-top: 12px; padding-bottom: 12px";

  //--------------------------------------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز
  function Numbers_And_Symbols_Only(Fields_ID) {
    for (let i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات وأزرار التحكم

        // يسمح: أرقام + رموز + مسافة
        // يمنع: جميع الحروف (عربي/إنجليزي)
        if (!/^[\p{N}\p{P}\p{S}\s]$/u.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "67660", //عدد ساعات الحجز
    "67216", //الوقت
  ];

  Numbers_And_Symbols_Only(Fields_ID);

  //--------------------------------------------------------------------------------------------------------------------
  //تحديد التواريخ
  //تاريخ الحجز
  document
    .getElementById("66437")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  const currentYear = new Date().getFullYear(); //تجيب السنة الحالية
  document
    .getElementsByName("bookingdate")[0]
    .setAttribute("min", `${currentYear}-01-01`);
  /*
  document
    .getElementsByName("bookingdate")[0]
    .setAttribute("max", "2026-12-31");
    */
}
