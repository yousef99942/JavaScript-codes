{
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.scondename = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("scondename")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.therdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("therdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.dsewdg = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("dsewdg")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------------
  //لحصر الحقول باللغة العربية فقط
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
    "74925", //الاختصاص
    "74932", //الدولة المانحة للشهادة
    "74933", //مكان العمل  (المدرسة / القسم)
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
  //لحصر التواريخ
  //تاريخ  الامر الوزاري لمنح اللقب العلمي
  document
    .getElementById("74928")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dtatav")[0].setAttribute("min", "1950-01-01");
  document
    .getElementsByName("dtatav")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ الامر الاداري لمنح اللقب العلمي
  document
    .getElementById("74931")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("huhgtrhj")[0].setAttribute("min", "1950-01-01");
  document
    .getElementsByName("huhgtrhj")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
