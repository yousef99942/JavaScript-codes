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
    //معلومات الطلب
    "52433", //اسم المؤسسة
    "52446", //الناحية
    "52450", //المنطقة

    //معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
    "52384", //الاسم الاول للمؤسس الاول
    "53269", //الاسم الثاني للمؤسس الاول
    "53270", //الاسم الثالث للمؤسس الاول
    "53271", //الاسم الرابع للمؤسس الاول
    "52385", //التحصيل الدراسي للمؤسس الاول
    "52386", //نوع التخصص للمؤسس الاول
    "52388", //الاسم الاول للمؤسس الثاني
    "53272", //الاسم الثاني للمؤسس الثاني
    "53273", //الاسم الثالث للمؤسس الثاني
    "53274", //الاسم الرابع للمؤسس الثاني
    "52389", //التحصيل الدراسي للمؤسس الثاني
    "52390", //نوع التخصص للمؤسس الثاني
    "52392", //الاسم الاول للمؤسس الثالث
    "53275", //الاسم الثاني للمؤسس الثالث
    "53276", //الاسم الثالث للمؤسس الثالث
    "53278", //الاسم الرابع للمؤسس الثالث
    "52393", //التحصيل الدراسي للمؤسس الثالث
    "52394", //نوع التخصص للمؤسس الثالث
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز
  function Arabic_And_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // عربي + مسافة + رموز
        const allowedRegex =
          /^[\u0600-\u06FF\s!@#$%^&*()_\-+=\[{\]};:'",.<>/?،؛؟~`|\\]$/;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //معلومات الطلب
    "52454", //اقرب نقطة دالة
  ];

  Arabic_And_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز
  function Numbers_And_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // أرقام + رموز فقط
        const allowedRegex = /^[0-9!@#$%^&*()_\-+=\[{\]};:'",.<>/?،؛؟~`|\\]$/;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //معلومات الطلب
    "52453", //مبنى
  ];

  Numbers_And_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------
  //حصر الحقول بالارقام فقط
  function Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // أرقام فقط
        const allowedRegex = /^[0-9]$/;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "52451", //محلة
    "52452", //زقاق
  ];

  Numbers_Only(Fields_ID);
  //-----------------------------------------------------------------------------
  //تغير خصائص ليبل
  //الاختصاصات المطلوبة (يجب اختيار القسم )
  document.getElementById("53507").style.cssText =
    "color: #7e0606; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";

  var Labels_ID = [
    "53510", //1-القسم التجاري (يمكن اختيار اكثر من فرع )
    "53523", //2-القسم الصناعي (يمكنك اختيار اكثر من فرع )
    "53537", //3- قسم الحاسبات (يمكنك اختيار اكثر من فرع )
    "64549", //4-الفنون
    "64551", //٥-الاعداديات الخاصه
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #480404; font-size: 17px; font-weight: bold; padding-top: 14px; padding-bottom: 13px; text-align: center;";
  }

  var Labels_ID = [
    "52401", //اتعهد بصحة المعلومات في الاعلى
    "52404", //ارجو التفضل بالموافقة على تشكيل لجنة فنية لغرض الكشف على البناية المذكور بياناتها أعلاه
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #630505; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px;";
  }
}
