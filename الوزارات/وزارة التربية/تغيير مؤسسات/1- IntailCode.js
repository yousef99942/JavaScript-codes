{
  //تغيير خصائص حقل
  var Labels_ID = [
    "90796", //التعهد الاول
    "90798", //التعهد الثاني
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #4d0000; font-size: 20px; font-weight: bold; padding-top: 12px; padding-bottom: 12px;";
  }

  //نوع التغيير
  document.getElementById("93091").style.cssText =
    "color: #420101; font-size: 22px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";

  var Labels_ID = [
    "93070", //طابع الدوام
    "93071", //جنس المؤسسة
    "93093", //شطر
    "93094", //الاسم
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #000000; font-size: 18px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";
  }
  //-----------------------------------------------------------------------------------------------
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
    //معلومات الطلب
    "89290", //اسم المؤسسة
    "90676", //الناحية
    "89301", //اسم المؤسسة الجديد
    "93074", //قبل الشطر
    "93075", //بعد الشطر
    //معلومات المؤسسين
    "90685", //الاسم الاول للمؤسس الاول
    "90686", //الاسم الثاني للمؤسس الاول
    "90688", //الاسم الثالث للمؤسس الاول
    "90689", //الاسم الرابع للمؤسس الاول
    "90692", //نوع التخصص للمؤسس الاول
    "90711", //الاسم الاول للمؤسس الثاني
    "90722", //الاسم الثاني للمؤسس الثاني
    "90723", //الاسم الثالث للمؤسس الثاني
    "90725", //الاسم الرابع للمؤسس الثاني
    "90786", //نوع التخصص للمؤسس الثاني
    "90788", //الاسم الاول للمؤسس الثالث
    "90789", //الاسم الثاني للمؤسس الثالث
    "90790", //الاسم الثالث للمؤسس الثالث
    "90791", //الاسم الرابع للمؤسس الثالث
    "90793", //نوع التخصص للمؤسس الثالث
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام
  function Arabic_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;
        // العربية + الأرقام + المسافة (بدون رموز)
        const regex = /^[\u0600-\u06FF0-9\u0660-\u0669\s]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });

      // حماية من اللصق
      input.addEventListener("input", () => {
        input.value = input.value.replace(
          /[^\u0600-\u06FF0-9\u0660-\u0669\s]/g,
          "",
        );
      });
    }
  }

  var Fields_ID = [
    //معلومات الطلب
    "89301", //تغيير مــــــــــــــــــــن
    "89302", //الــــــــــــــــــــــــى
  ];

  Arabic_Numbers_Only(Fields_ID);

  //-----------------------------------------------------------------------------------------------
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
    "90680", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);
}
