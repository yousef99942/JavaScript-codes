{
  document.getElementById("86608").style.display = "none"; //اذا كانت الاجابة نعم : ماابرز البرامج ؟

  //جلب المعلومات من بوابة اور
  this.inputFormField.fname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("fname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.sname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("sname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.foname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("foname")[0].disabled = true; //قفل حقل الاسم الرابع

  //------------------------------------------------------------------------------------
  //تغيير خصائص الليبلات
  var Labels_ID = [
    //استمارة موحدة للتقديم والتسجيل
    "86527", //المعلومات الشخصية الاساسية
    "86580", //معلومات اﻻﺗﺻﺎل
    "86587", //معلومات اﻟﺗﺳﺟﯾل اﻟوظﯾﻔﯾﺔ  الحالية
    "86597", //المؤهلات العلمية
    "86605", //الخبرات والدورات والاهتمامات التدريبية
    "86611", //المهارات و الاعتمادات
    //التقييم الذاتي لفجوات المهارات القيادية
    "86533", //القيادة الاستراتيجية وصنع القرار
    "86619", //إدارة الأداء وتحلیل الفجوات
    "86624", //الذكاء المعلوماتي والتحول الرقمي
    "86629", //القیادة بالقیم والنزاھة
    "86634", //إدارة الموارد البشریة
    "86639", //إدارة الأزمات
    "86643", //الاحتیاجات التدریبیة والأسئلة المفتوحة
    "86648", //التعھد والإقرار
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #740505; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
  }

  //------------------------------------------------------------------------------------
  //ليبلات التعهد
  var Second_Labels = [
    "86649", //أتعھد بأن جمیع المعلومات المقدمة صحیحة وأتحمل المسؤولیة القانونیة خلاف ذلك
    "86651", //أقر بأن المعلومات والوثائق المرفقة المدخلة في المنصة صحیحة ومحدثة
    "86650", //أوافق على استخدام البیانات لأغراض التطویر المؤسسي والتقییم الإداري فقط
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #740505; font-size: 15px; font-weight: bold; padding-top: 13px; padding-bottom: 13px;";
  }

  //------------------------------------------------------------------------------------
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
    //استمارة موحدة للتقديم والتسجيل
    "86578", //رقم البطاقة الوطنية
    "86595", //ﺳﻧوات اﻟﺧدﻣﺔ اﻟﻛﻠﯾﺔ
    "86606", //عدد الدورات اﻟﺗﻲ ﺣﺻل ﻋﻠﯾﮭﺎ (ان وجدت)
  ];

  Numbers_Only(Fields_ID);

  //------------------------------------------------------------------------------------
  //حصر الحقول بالارقام واللغة الانكليزية فقط
  function Numbers_And_Specific_English(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // أرقام + أحرف محددة فقط
        const allowedRegex = /^[0-9BVRKAEDC]$/i;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //استمارة موحدة للتقديم والتسجيل
    "86681", //رقم جواز السفر
  ];

  Numbers_And_Specific_English(Fields_ID);

  //------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز
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
    //استمارة موحدة للتقديم والتسجيل
    "86586", //العنوان الكامل
    "86608", //اذا كانت الاجابة نعم : ماابرز البرامج ؟
  ];

  Arabic_Symbols_Only(Fields_ID);

  //------------------------------------------------------------------------------------
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
    //استمارة موحدة للتقديم والتسجيل
    "86592", //اﻟداﺋرة / اﻟﺗﺷﻛﯾل
    "86589", //القسم
    "86599", //الاختصاص العام
    "86600", //الاختصاص الدقيق
    "86604", //اللقب العلمي (أن وجد)
    "86612", //شهادات مهنية دولية ( ان وجدت )
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------
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
    //استمارة موحدة للتقديم والتسجيل
    "86609", //نماذج من الدورات الحاصل عليها ( عنوان الدورة + سنة التنفيذ )
    "86615", //اﻟﻣﮭﺎرات اﻟﺗﻘﻧﯾﺔ ( ﺑراﻣﺞ/أﻧظﻣﺔ)
    //التقييم الذاتي لفجوات المهارات القيادية
    "86644", //ما أكبر 3 تحدیات قیادیة تواجھك حالیا؟
    "86646", //ما المھارات التي ترى أنك بحاجة إلى تطویرھا؟
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------
  //حصر التواريخ
  //تاريخ الميلاد
  document
    .getElementById("86577")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("birthdate")[0]
    .setAttribute("min", `${new Date().getFullYear() - 100}-12-31`);
  document
    .getElementsByName("birthdate")[0]
    .setAttribute("max", `${new Date().getFullYear() - 18}-12-31`);

  //تاريخ استلام المنصب
  document
    .getElementById("86593")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("date")[0].setAttribute("min", "1980-01-01");
  document
    .getElementsByName("date")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
