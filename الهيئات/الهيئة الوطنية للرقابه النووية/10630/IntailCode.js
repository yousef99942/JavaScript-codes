{
  this.inputFormField.ytr = this.user.first_name;
  //document.getElementsByName("ytr")[0].disabled = true; //الاسم الاول

  this.inputFormField.MSecondName = this.user.middle_name;
  //document.getElementsByName("MSecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.MThirdName = this.user.last_name;
  //document.getElementsByName("MThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.mmo = this.user.phone_num;
  //document.getElementsByName("mmo")[0].disabled = true; //رقم الهاتف

  //------------------------------------------------------------------------------------
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

  //مجموعة معلومات المؤسسة  الطالبة للتخويل
  Arabic_Only("74866"); //اسم القضاء
  Arabic_Only("29148"); //المنطقة
  Arabic_Only("29154"); //الاسم الاول لمدير المؤسسة
  Arabic_Only("73606"); //الاسم الثاني لمدير المؤسسة
  Arabic_Only("73607"); //الاسم الثالث لمدير المؤسسة

  //مجموعة مسؤول الوقاية من الاشعاع
  Arabic_Only("29158"); //اسم مسؤول الوقاية
}
