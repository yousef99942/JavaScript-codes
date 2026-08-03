{
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
    "73498", //اسم المدرسة
    "73478", //الاسم الاول
    "73479", //الاسم الثاني
    "73480", //الاسم الثالث
    "73500", //الاسم الرابع
    "73482", //اسم الام الاول
    "75341", //اسم الام الثاني
    "75342", //اسم الام الثالث
    "73487", //اسم الزوج / الزوجة الاول
    "75347", //اسم الزوج / الزوجة الثاني
    "75346", //اسم الزوج / الزوجة الثالث
    "73488", //العنوان الوظيفي
  ];

  Arabic_Only(Fields_ID);

  //------------------------------------------------------------------------
  //فلترة التاريخ
  document
    .getElementById("73492")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("Date")[0].setAttribute("min", "1950-01-01");
  document.getElementsByName("Date")[0].setAttribute("max", "2008-12-31");

  //------------------------------------------------------------------------
  //تغيير خصائص الليبل
  //معلومات السكن
  document.getElementById("75344").style.cssText =
    "color: #650000; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  //اوافق على الشروط والضوابط
  document.getElementById("73496").style.cssText =
    "color: #490202; font-size: 17px; font-weight: bold; padding-top: 15px; padding-bottom: 15px;";

  //------------------------------------------------------------------------
  this.inputFormField.name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.Father = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("Father")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.Grandfather = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("Grandfather")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.Grandfatherfathe = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("Grandfatherfathe")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.Phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("Phone")[0].disabled = true; //قفل حقل رقم الهاتف

  //-----------------------------------------------------------------------------------------------------
  //لحصر الحقول بالارقام والرموز فقط
  function Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      if (!input) continue;

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم وBackspace...

        // منع أي حرف (عربي/إنجليزي/أي لغة)، والسماح فقط بالأرقام والرموز
        if (/\p{L}/u.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "75345", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------------------------
  function Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      if (!input) continue;

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والمفاتيح الخاصة

        // السماح بالأرقام فقط (كل أنواع الأرقام Unicode)
        if (!/\p{Nd}/u.test(e.key)) {
          e.preventDefault();
        }
      });

      // تنظيف أي إدخال غير رقمي (مثل اللصق)
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^\p{Nd}]/gu, "");
      });
    }
  }

  var Fields_ID = [
    "73485", //المحلة
    "75343", //الزقاق
  ];

  Numbers_Only(Fields_ID);
}
