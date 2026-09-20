{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstna = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstna")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secNa = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secNa")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdNa = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdNa")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthNa = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthNa")[0].disabled = true; //قفل حقل الاسم الرابع

  //this.inputFormField.Phone = this.user.phone_num; //جلب رقم الهاتف
  //document.getElementsByName("Phone")[0].disabled = true; //قفل حقل رقم الهاتف

  //this.inputFormField.birthDate = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("birthDate")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //--------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام فقط
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
    "95643", //المحلة
    "95644", //زقاق
    "95646", //الدار
  ];

  Arabic_Numbers_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
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
    //معلومات مقدم الطلب
    "70102", //الاسم الاول
    "70103", //الاسم الثاني
    "70104", //الاسم الثالث
    "70105", //الاسم الرابع
    "70106", //اسم الام الاول
    "70107", //اسم الام الثاني
    "70108", //اسم الام الثالث
    "95647", //اسم الديانة الاخرى
    //المعلومات الدراسية
    "70292", //اسم المدرسة الاعدادية
    "70316", //ممثلية التربية في الاقليم
    //معلومات الشهيد
    "70966", //اسم الشهيد
    "70334", //مديرية مؤسسة الشهداء
    //معلومات السكن
    "95673", //القضاء/الناحية
    //معلومات البطاقة الوطنية
    "95665", //جهة إصدار البطاقة الوطنية الموحدة
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
  //حصر الحقول بالارقام فقط
  function Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        // السماح بالتحكم والاختصارات مثل Ctrl+C و Ctrl+V
        if (ctrl || e.key.length > 1) return;
        // السماح بالأرقام الإنجليزية والعربية فقط
        const regex = /^[0-9\u0660-\u0669]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
      // حماية من اللصق
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9\u0660-\u0669]/g, "");
      });
    }
  }

  var Fields_ID = [
    "95602", //رقم الهاتف
    "95603", //رقم الهاتف البديل
    "95664", //رقم الموحدة
    "70293", //رقم البطاقة الامتحانية
  ];

  Numbers_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام والرموز
  function Arabic_Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        // السماح بمفاتيح التحكم مثل Backspace و Delete و الأسهم
        if (ctrl || e.key.length > 1) return;
        // منع الأحرف الإنجليزية فقط
        const englishRegex = /^[a-zA-Z]$/;
        if (englishRegex.test(e.key)) {
          e.preventDefault();
        }
      });
      // حماية من إدخال الأحرف الإنجليزية عن طريق اللصق
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[a-zA-Z]/g, "");
      });
    }
  }

  var Fields_ID = [
    //معلومات الشهيد
    "70968", //رقم القرار
  ];

  Arabic_Numbers_Symbols_Only(Fields_ID);
  //--------------------------------------------------------------------------------------
  //حصر حقل التاريخ
  //معلومات الشهيد
  //تاريخ القرار
  document
    .getElementById("70970")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("DecDate")[0].setAttribute("min", "1980-01-01");
  document
    .getElementsByName("DecDate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ الميلاد
  document
    .getElementById("70110")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("birthDate")[0]
    .setAttribute("min", `${new Date().getFullYear() - 24}-01-01`);
  document
    .getElementsByName("birthDate")[0]
    .setAttribute("max", `${new Date().getFullYear() - 17}-12-31`);
}
