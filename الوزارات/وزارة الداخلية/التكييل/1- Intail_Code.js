{
  //جلب المعلومات من البوابة
  this.inputFormField.phoneNumber = this.user.phone_num;
  document.getElementsByName("phoneNumber")[0].disabled = true; //رقم الهاتف

  this.inputFormField.ownerfirtsname = this.user.first_name; //جلب الاسم الاول
  //document.getElementsByName("ownerfirtsname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.ownersecondname = this.user.middle_name; //جلب الاسم الثاني
  //document.getElementsByName("ownersecondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ownerthirdname = this.user.last_name; //جلب الاسم الثالث
  //document.getElementsByName("ownerthirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.ownerforthname = this.user.forth_name; //جلب الاسم الرابع
  //document.getElementsByName("ownerforthname")[0].disabled = true; //قفل حقل الاسم الرابع

  //----------------------------------------------------------------------------------------------
  this.group_of_form[0].fields[18].properties[0].values = [
    "شركة توزيع المنتجات النفطية/البصرة",
    "شركة توزيع المنتجات النفطية/نينوى",
    "شركة توزيع المنتجات النفطية/القادسية",
    "شركة توزيع المنتجات النفطية/بابل",
    "شركة توزيع المنتجات النفطية/الانبار",
    "شركة توزيع المنتجات النفطية/كركوك",
    "هيئة توزيع منتجات بغداد",
    "شركة توزيع المنتجات النفطية / النجف الاشرف",
    "شركة توزيع المنتجات النفطية / كربلاء المقدسة",
    "شركة توزيع المنتجات النفطية/الدورة",
  ];

  //----------------------------------------------------------------------------------------------
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
    "26503", //الاسم الاول
    "26504", //الاسم الثاني
    "26505", //الاسم الثالث
    "26506", //الاسم الرابع
    "26515", //اسم الوكيل الاول
    "75338", //اسم الوكيل الثاني
    "75339", //اسم الوكيل الثالث
  ];

  Arabic_Only(Fields_ID);
}
