{
  //جلب المعلومات من بوابة اور
  var First_Name = this.user.first_name; //جلب الاسم الاول
  var Second_Name = this.user.middle_name; //جلب الاسم الثاني
  var Third_Name = this.user.last_name; //جلب الاسم الثالث
  var Fourth_Name = this.user.forth_name; //جلب الاسم الرابع

  this.inputFormField.name =
    First_Name + " " + Second_Name + " " + Third_Name + " " + Fourth_Name;
  document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الكامل لمقدم الطلب

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  //------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية فقط
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
    "88069", //الغرض من التائيد
    "87103", //صلة القرابة
    "87111", //اسم الشهيد
    "87112", //اسم الجريح
    "87104", //مكان الاصابة
    "87105", //مكان الاستشهاد
    "87103", //صلة القرابة
  ];

  Arabic_Only(Fields_ID);
}
