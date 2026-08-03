{
  //جلب المعلومات من بوابة اور
  this.inputFormField.PFirstName = this.user.first_name;
  //document.getElementsByName("PFirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.PSecondName = this.user.middle_name;
  //document.getElementsByName("PSecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.PThirdName = this.user.last_name;
  //document.getElementsByName("PThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.MoPhoneNumber = this.user.phone_num;
  //document.getElementsByName("MoPhoneNumber")[0].disabled = true; //رقم الهاتف

  document
    .getElementById("27398")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dat")[0].setAttribute("min", "2010-01-01");
  document.getElementsByName("dat")[0].setAttribute("max", "2060-12-31");

  //------------------------------------------------------------------------------
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

  //مجموعة معلومات المؤسسة الطالبة للتخويل
  Arabic_Only("27375"); //المؤسسة
  Arabic_Only("53840"); //اسم الوزارة او الجهة غير المرتبطة بوزارة
  Arabic_Only("27381"); //اسم المنطقة

  //مجموعة معلومات مسؤول الوقاية من الاشعاع
  Arabic_Only("27394"); //اسم مسؤول الوقاية من الاشعاع
}
