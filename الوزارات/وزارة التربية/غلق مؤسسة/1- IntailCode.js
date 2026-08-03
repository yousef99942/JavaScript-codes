{
  //تغيير خصائص ليبل
  //الى السيد مدير عام التعليم العام والاهلي والاجنبي المحترم
  document.getElementById("92026").style.cssText =
    "color: #3d0000; font-size: 22px; font-weight: bold; padding-top: 12px; padding-bottom: 12px; text-align: center;";

  //معلومات المؤسسين
  document.getElementById("92046").style.cssText =
    "color: #3d0000; font-size: 22px; font-weight: bold; padding-top: 12px; padding-bottom: 12px; text-align: center;";

  //التعهد
  document.getElementById("92082").style.cssText =
    "color: #3d0000; font-size: 20px; font-weight: bold; padding-top: 12px; padding-bottom: 12px;";

  //---------------------------------------------------------------------------------------------------------------------
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
    "92027", //اسم المؤسسة
    "92028", //نوع المؤسسة
    "92036", //الناحية
    "92038", //المنطقة
    "92047", //الاسم الاول للمؤسس الاول
    "92048", //الاسم الثاني للمؤسس الاول
    "92049", //الاسم الثالث للمؤسس الاول
    "92050", //الاسم الرابع للمؤسس الاول
    "92051", //التحصيل الدراسي للمؤسس الاول
    "92052", //نوع التخصيص للمؤسس الاول
    "92054", //الاسم الاول للمؤسس الثاني
    "92055", //الاسم الثاني للمؤسس الثاني
    "92056", //الاسم الثالث للمؤسس الثاني
    "92057", //الاسم الرابع للمؤسس الثاني
    "92067", //التحصيل الدراسي للمؤسس الثاني
    "92068", //نوع التخيص للمؤسس الثاني
    "92070", //الاسم الاول للمؤسس الثالث
    "92071", //الاسم الثاني للمؤسس الثالث
    "92072", //الاسم الثالث للمؤسس الثالث
    "92073", //الاسم الرابع للمؤسس الثالث
    "92074", //التحصيل الدراسي للمؤسس الثالث
    "92075", //نوع التخصيص للمؤسس الثالث
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز والارقام
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
    "92042", //اقرب نقطة دالة
    "92043", //الامر الوزاري اخر تجديد
    "92044", //الامر الوزاري للتاسيس
    "92045", //الامر الوزاري بتغيير المؤسسين ان وجد
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------------------------------
  //تحديد حقول التاريخ
  //العام الدراسي
  document
    .getElementById("92032")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("data")[0].setAttribute("min", "2000-01-01");
  document
    .getElementsByName("data")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
