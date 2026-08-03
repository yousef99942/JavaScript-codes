{
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
    //مجموعة المعلومات المطلوبة
    "74427", //الاسم الاول للمتقدم بالشمول
    "74428", //الاسم الثاني
    "74429", //الاسم الثالث
    "74430", //الاسم الرابع
    "74431", //اللقب
    "74433", //اسم الام الاول
    "75474", //اسم الام الثاني
    "75475", //اسم الام الثالث
    //معلومات الاحتجاز
    "74480", //دولة الاحتجاز
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والانكليزية فقط
  function Arabic_English_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // عربي + إنجليزي + مسافة
        if (!/^[\u0600-\u06FFa-zA-Z\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير ذلك
        }
      });
    }
  }

  var Fields_ID = [
    //معلومات الاحتجاز
    "74482", //المهنة قبل الاحتجاز
    "74484", //اسم الشاهد الاول
    "74485", //اسم الشاهد الثاني
  ];

  Arabic_English_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------------
  //تغيير خصائص النص
  //اتعهد بصحة كافة البيانات المذكورة
  document.getElementById("74493").style.cssText =
    "color: #6c0606; font-size: 18px; font-weight: bold; padding-top: 13px; padding-bottom: 13px;";

  //---------------------------------------------------------------------------------------------------
  //تحديد التواريخ
  function Date_Limit(Field_ID, Field_Prog, Date_Min, Date_Max) {
    document
      .getElementById(Field_ID)
      .addEventListener("keydown", function (event) {
        event.preventDefault();
      });
    document.getElementsByName(Field_Prog)[0].setAttribute("min", Date_Min);
    document.getElementsByName(Field_Prog)[0].setAttribute("max", Date_Max);
  }

  Date_Limit("74432", "birthday", "1950-01-01", "2008-12-31"); //تاريخ الميلاد
  Date_Limit("74676", "dataehtjaz", "1960-01-01", "2026-12-31"); //تاريخ الاحتجاز
  Date_Limit("74677", "dateeh", "1960-01-01", "2026-12-31"); //تاريخ فك الاحتجاز
}
