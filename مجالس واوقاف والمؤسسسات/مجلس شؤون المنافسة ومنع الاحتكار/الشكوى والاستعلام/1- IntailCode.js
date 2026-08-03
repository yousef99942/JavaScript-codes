{
  document.getElementById("33585_group").style.display = "none";
  document.getElementById("23341_group").style.display = "none";

  //-----------------------------------------------------------------------------
  document.getElementById("51345").style.cssText =
    "color: #dd0000; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px;";

  //-----------------------------------------------------------------------------
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
    //الاستعلام
    "53229", //الاسم الاول
    "53230", //الاسم الثاني
    "53231", //الاسم الثالث
    "53232", //الاسم الرابع
    //مجموعة طلب شكوى
    "52463", //الاسم الاول للمشكو منه
    "52489", //الاسم الثاني للمشكو منه
    "52495", //الاسم الثالث للمشكو منه
    "52500", //الاسم الاول للمشتكي
    "52501", //الاسم الثاني للمشتكي
    "52521", //الاسم الثالث للمشتكي
    "51331", //القطاع
    "51332", //التأثير على السوق
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------
  function Arabic_Symbols_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // العربية + الأرقام + الرموز + المسافة
        const regex =
          /^[\u0600-\u06FF0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //مجموعة الاستعلام
    "53233", //تفاصيل الطلب
    //مجموعة طلب شكوى
    "51330", //موضوع الشكوى
    "51344", //ما هي الاجراءات المتخذة بذلك ؟
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
