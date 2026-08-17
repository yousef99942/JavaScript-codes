{
  const input72896 = document.getElementsByName("num")[0];
  if (input72896) {
    const today = new Date().toISOString().split("T")[0];
    this.minDate = today;
  } else {
    this.minDate = null;
    this.maxDate = null;
  }

  //------------------------------------------------------------
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
    "72888", //اسم الشركة
    "72890", //اسم مقدم الطلب / المخول
    "73721", //قيمة التعهد كتابه
    "72898", //الجهة المتعاقد معها
  ];

  Arabic_Only(Fields_ID);
}
