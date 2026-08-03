{
  //تغيير خصائص الليبل
  var Labels_ID = [
    "92140", //السيد مدير عام التعليم العام والاهلي الاجنبي
    "92176", //معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
  ];

  Labels_ID.forEach(
    (Changing) =>
      (document.getElementById(Changing).style.cssText =
        "color: #5e0202; font-size: 20px; font-weight: bold; padding-top: 12px; padding-bottom: 12px; text-align: center;"),
  );

  var Labels_ID = [
    "92213", //التعهد الاول
    "92214", //التعهد الثاني
  ];

  Labels_ID.forEach(
    (Changing) =>
      (document.getElementById(Changing).style.cssText =
        "color: #5e0202; font-size: 18px; font-weight: bold; padding-top: 12px; padding-bottom: 12px;"),
  );

  //----------------------------------------------------------------------------------
  //حصر حقل التاريخ
  //العام الدراسي
  document
    .getElementById("92159")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dfh")[0].setAttribute("min", "2003-01-01");
  document
    .getElementsByName("dfh")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

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
    "92145", //اسم المؤسسة
    "92162", //الناحية
    "92164", //المنطقة
    "92175", //الاسم الجديد في حال نقل الى مديرية اخرى والاسم المستخدم
    "92178", //الاسم الاول للمؤسس الاول
    "92179", //الاسم الثاني للمؤسس الاول
    "92180", //الاسم الثالث للموسس الاول
    "92181", //الاسم الرايع للمؤسس الاول
    "92182", //التحصييل الدراسي للمؤسس الاول
    "92183", //نوع التخصيص
    "92185", //الاسم الاول للمؤسس الثاني
    "92186", //الاسم الثاني للمؤسس الثاني
    "92187", //الاسم الثالث للمؤسس الثاني
    "92190", //الاسم الرابع للمؤسس الثاني
    "92191", //التحصيل الدراسي للمؤسس الثاني
    "92193", //نوع التخصص للمؤسس الثاني
    "92196", //الاسم الاول للمؤسس الثالث
    "92199", //الاسم الثاني للمؤسس الثالث
    "92201", //الاسم الثالث للمؤسس الثالث
    "92203", //الاسم الرابع  للمؤسس الثالث
    "92204", //التحصيل الدراسي للمؤسس الثالث
    "92205", //نوع التخصيص للمؤسس الثالث
    "", //
    "", //
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------
  //حصر الحقول باللغه العربيه والرموز فقط
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
    "92170", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //----------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام والرموز
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
    "92172", //الامر الوزاري اخر تجديد
    "92173", //الامر الوزاري للتاسيس
    "92174", //الامر الوزاري بتغيير المؤسسين ان وجد
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
