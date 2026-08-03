{
  document.getElementById("35092_group").style.display = "none"; //اعداد تصاميم شبكات الغاز السائل

  //----------------------------------------------------------------------------------
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
    "28086", //الاسم الاول
    "68808", //الاسم الثاني
    "68809", //الاسم الثالث
    "28096", //نوع او صنف الموقع مثل (مجمع سكني-دار-افران-مطعم-......-الخ)
  ];

  Arabic_Only(Fields_ID);
}
