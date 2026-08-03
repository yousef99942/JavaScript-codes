{
  //تغيير خصائص الليبل
  //الاختصاصات المطلوبة (يجب اختيار القسم )
  document.getElementById("73141").style.cssText =
    "color: #000000; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  var Labels_ID = [
    //معلومات الطلب
    "73142", //1-القسم التجاري (يمكن اختيار اكثر من فرع )
    "73146", //2-القسم الصناعي (يمكنك اختيار اكثر من فرع )
    "73150", //3- قسم الحاسبات (يمكنك اختيار اكثر من فرع )
    "73153", //4-الفنون
    "73155", //٥-الاعداديات الخاصه
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #570101; font-size: 18px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";
  }

  //------------------------------------------------------------------------------------------
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
    //معلومات الطلب
    "70704", //اسم المؤسسة
    "88562", //الناحية
    "88563", //المنطقة
    //معلومات المؤسسين
    "88601", //االاسم الاول للمؤسس الاول
    "88605", //الاسم الثاني للمؤسس الاول
    "88607", //الاسم الثالث للمؤسس الاول
    "88611", //الاسم الرابع للمؤسس الاول
    "88614", //التحصيل الدراسي للمؤسس الاول
    "88616", //الاسم الاول للمؤسس الثاني
    "88619", //الاسم الثاني لللمؤسس الثاني
    "88620", //الاسم الثالث للمؤسس الثاني
    "88621", //الاسم الرابع للمؤسس الثاني
    "88622", //التحصيل الدراسي للمؤسس الثاني
    "88626", //الاسم الاول للمؤسس الثالث
    "88628", //الاسم الثاني للمؤسس الثالث
    "88630", //الاسم الثالث للمؤسس الثالث
    "88633", //الاسم الرابع للمؤسس الثالث
    "88637", //التحصيل الدراسي للمؤسس الثالث
  ];

  Arabic_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز فقط
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
    //معلومات الطلب
    "88576", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
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
    //معلومات الطلب
    "73139", //امر التاسيس
    "73278", //امر اخر تجديد
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
  //حصر حقول التواريخ
  //تاريخ التاسيس
  document
    .getElementById("70592")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("names")[0].setAttribute("min", "1980-01-01");
  document
    .getElementsByName("names")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
