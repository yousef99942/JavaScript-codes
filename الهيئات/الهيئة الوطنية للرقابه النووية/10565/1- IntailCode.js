{
  //جلب المعلومات من بوابة اور
  this.inputFormField.lscg = this.user.first_name;
  //document.getElementsByName("lscg")[0].disabled = true; //الاسم الاول

  this.inputFormField.WarehouseSecondName = this.user.middle_name;
  //document.getElementsByName("WarehouseSecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.WarehouseThirdName = this.user.last_name;
  //document.getElementsByName("WarehouseThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.mobni = this.user.phone_num;
  //document.getElementsByName("mobni")[0].disabled = true; //رقم الهاتف

  //------------------------------------------------------------------------------------------------------
  //Labels
  var Labels_ID = [
    "73619", //عنوان المؤسسة
    "73620", //عنوان المخزن
    "27868", ////متطلبات الامن للحماية الفيزيائ
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 10px; text-align: center;";
  }

  //-------------------------------------------------------------------------------------------------------
  //تحديد الحقول باللغة العربية فقط
  function Arabic_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID);
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
    //مجموعة معلومات المؤسسة  الطالبة للتخويل
    "74862", //اسم القضاء
    "27843", //المنطقة
    "74863", //اسم القضاء.
    "27852", //اسم المنطقة
    //مجموعة مسؤول الوقاية من الاشعاع
    "27855", //اسم مسؤول الوقاية
  ];

  Arabic_Only(Fields_ID);
}
