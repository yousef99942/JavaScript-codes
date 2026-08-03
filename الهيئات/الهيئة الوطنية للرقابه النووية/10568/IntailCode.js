{
  //جلب المعلومات من بوابة اور
  this.inputFormField.ldc = this.user.first_name;
  document.getElementsByName("ldc")[0].disabled = true; //الاسم الاول

  this.inputFormField.MSecondName = this.user.middle_name;
  document.getElementsByName("MSecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.MThirdName = this.user.last_name;
  document.getElementsByName("MThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.dcc = this.user.phone_num;
  document.getElementsByName("dcc")[0].disabled = true; //رقم الهاتف

  document
    .getElementById("27968")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("jhvf")[0].setAttribute("min", "2010-01-01");
  document.getElementsByName("jhvf")[0].setAttribute("max", "2060-12-31");

  //-------------------------------------------------------------------------------------------------------
  //تحديد الحقول باللغة العربية فقط
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

  //مجموعة معلومات المؤسسة الطالبة للتخويل
  Arabic_Only("74864"); //اسم القضاء
  Arabic_Only("27955"); //اسم المنطقة

  //مجموعة معلومات مسؤول الوقاية من الاشعاع
  Arabic_Only("27964"); //اسم مسؤول الوقاية
}
