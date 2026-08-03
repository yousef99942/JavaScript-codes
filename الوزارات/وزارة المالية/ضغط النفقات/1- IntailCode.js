{
  //تثبيت نسب التخفيض
  this.inputFormField.FirstPrimeMinister = "90%"; //تخفيض الايفاد الخارجي حسب قرارات مجلس الوزراء
  document.getElementsByName("FirstPrimeMinister")[0].disabled = true; //تخفيض الايفاد الخارجي حسب قرارات مجلس الوزراء

  this.inputFormField.SecondPrimeMinister = "50%"; //تخفيض الوقود حسب قرارات مجلس الوزراء
  document.getElementsByName("SecondPrimeMinister")[0].disabled = true; //تخفيض الوقود حسب قرارات مجلس الوزراء

  //--------------------------------------------------------------------------------------
  //تعديل الليبلات
  var Labels_ID = [
    "89055", //الايفاد الخارجي
    "89059", //الوقود
    "89064", //المكافات
    "89069", //التفصيلات اخرى
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #5c0303; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
  }

  //--------------------------------------------------------------------------------------
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
    "89053", //اسم التشكيل الرئيسي
    "89054", //اسم الدائرة
  ];

  Arabic_Only(Fields_ID);
}
