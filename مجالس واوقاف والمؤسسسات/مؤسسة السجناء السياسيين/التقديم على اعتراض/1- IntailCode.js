{
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
    "94485", //الاسم الاول للمشمول
    "94486", //الاسم الثاني للمشمول
    "94487", //الاسم الثالث للمشمول
    "94488", //الاسم الرابع للمشمول
    "94489", //اللقب
    "94490", //اسم الام الاول للمشمول
    "94491", //اسم الام الثاني للمشمول
    "94492", //اسم الام الثالث للمشمول
    "94494", //اسم الوريث الرباعي
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام والرموز
  function Arabic_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;
        // العربية + المسافة + الرموز
        const regex = /^[\u0600-\u06FF\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "94497", //سبب الاعتراض
  ];

  Arabic_Symbols_Only(Fields_ID);
}
