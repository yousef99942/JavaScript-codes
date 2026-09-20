{
  //تعديل خصائص الليبلات
  var Labels_ID = [
    "95447", //التعهد الاول
    "94483", //التعهد الثاني
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #500000; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px;";
  }

  //-----------------------------------------------------------------------------------
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
    //المعلومات الشخصية
    "94467", //الاسم الاول
    "94468", //اسم الاب
    "94469", //اسم الجد
    "94470", //اسم اب الجد
    "94471", //اللقب (حسب الجواز)
    "94476", //اسم الام
    "95448", //اسم اب الام
    "95449", //اسم جد الام
    "94472", //محل الولادة
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة الانكليزية والارقام
  function English_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم
        // الحروف الإنكليزية + الأرقام + المسافة
        if (!/^[a-zA-Z0-9\s]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //المعلومات الشخصية
    "94465", //رقم الجواز
  ];

  English_Numbers_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز فقط
  function Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;
        // الأرقام + الرموز + المسافة
        const regex =
          /^[0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //معلومات السكن
    "94481", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز واللغة العربية
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
    "94482", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر حقل التاريخ
  //تاريخ التولد
  document
    .getElementById("94473")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("date")[0].setAttribute("min", "1930-01-01");
  document
    .getElementsByName("date")[0]
    .setAttribute("max", `${new Date().getFullYear() - 18}-12-31`);
}
