{
  //جلب المعلومات من بوابة اور
  this.inputFormField.hghslhghg = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("hghslhghg")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.hslhghf = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("hslhghf")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.hslhg = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("hslhg")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.hggrf = this.user.family_name; //جلب اللقب
  document.getElementsByName("hggrf")[0].disabled = true; //قفل حقل اللقب

  //-----------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  //عنوان السكن
  document.getElementById("66925").style.cssText =
    "color: #690707; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";

  //معلومات الزبون
  document.getElementById("66973").style.cssText =
    "color: #690707; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";

  //معلومات الحساب المصرفي
  document.getElementById("66991").style.cssText =
    "color: #690707; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";

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
    "66917", //اسم الام الاول
    "66919", //اسم الام الثاني
    "66918", //اسم الام الثالث
    "66920", //اسم ولي الامر /الوصي
    "66921", //صلة القرابة
    "66922", //محل الولادة
    "66924", //المهنة
    "66929", //الناحية
    "66930", //المنطقة
    "66976", //جهة الاصدار
    "66982", //جهة اصدار الجواز
    "66992", //اسم المصرف
    "66987", //جهة اصدار البطاقة الوطنية (لولي الامر ) / الوصي
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول بالارقام فقط
  function Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // السماح بالأرقام فقط
        if (!/^[0-9]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير رقم
        }
      });
    }
  }

  var Fields_ID = [
    "66932", //المحلة
    "66933", //الزقاق
  ];

  Numbers_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز فقط
  function Numbers_And_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // أسهم، Backspace، Tab، اختصارات

        // منع أي حرف (عربي أو إنجليزي)
        if (/\p{L}/u.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "66934", //الدار
  ];

  Numbers_And_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز فقط
  function Arabic_And_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // أسهم، Backspace، Tab، اختصارات

        // السماح بالحروف العربية
        const isArabic = /^[\u0600-\u06FF]$/.test(e.key);

        // منع الأرقام (عربية وإنجليزية) والحروف الإنجليزية
        const isNumber = /^[0-9\u0660-\u0669]$/.test(e.key);
        const isEnglish = /^[a-zA-Z]$/.test(e.key);

        if (!isArabic && !isNumber && !isEnglish) {
          // رمز → مسموح
          return;
        }

        if (isNumber || isEnglish) {
          e.preventDefault(); // منع أرقام أو إنجليزي
        }
      });
    }
  }

  var Fields_ID = [
    "66953", //أقرب نقطة دالة
  ];

  Arabic_And_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  function English_And_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // أسهم، Backspace، Tab، اختصارات

        // السماح بالأحرف الإنجليزية والأرقام فقط
        if (!/^[a-zA-Z0-9]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "66980", //رقم الجواز
  ];

  English_And_Numbers_Only(Fields_ID);
  //-----------------------------------------------------------------------------------
  //حصر التواريخ
  //تاريخ التولد
  // منع الكتابة اليدوية
  document
    .getElementById("66923")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });

  document
    .getElementsByName("jhvdohgjg")[0]
    .setAttribute("min", `${new Date().getFullYear() - 17}-01-01`);
  document
    .getElementsByName("jhvdohgjg")[0]
    .setAttribute("max", `${new Date().getFullYear() - 13}-12-31`);

  //تاريخ الاصدار
  document
    .getElementById("66979")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("hjsdhfhw")[0].setAttribute("min", "2003-01-01");
  document
    .getElementsByName("hjsdhfhw")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ اصدار البطاقة الوطنية (لولي الامر ) الوصي
  document
    .getElementById("66990")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("nisdifhow")[0].setAttribute("min", "2003-01-01");
  document
    .getElementsByName("nisdifhow")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
