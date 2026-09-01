{
  // ==================================================
  // تغيير خصائص الـ Labels
  // ==================================================

  const Main_Labels_ID = [
    "92140", // السيد مدير عام التعليم العام والاهلي الاجنبي
    "92176", // معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
    "94499", //معلومات المؤسس الاول
    "94500", //معلومات المؤسس الثاني
    "94501", //معلومات المؤسس الثالث
  ];

  Main_Labels_ID.forEach((id) => {
    const label = document.getElementById(id);

    if (!label) return;

    label.style.cssText =
      "color: #5e0202; font-size: 20px; font-weight: bold; padding-top: 12px; padding-bottom: 12px; text-align: center;";
  });

  const Pledge_Labels_ID = [
    "92213", // التعهد الاول
    "92214", // التعهد الثاني
  ];

  Pledge_Labels_ID.forEach((id) => {
    const label = document.getElementById(id);

    if (!label) return;

    label.style.cssText =
      "color: #5e0202; font-size: 18px; font-weight: bold; padding-top: 12px; padding-bottom: 12px;";
  });

  // ==================================================
  // حصر الحقول باللغة العربية فقط
  // ==================================================

  function Arabic_Only(Fields_ID) {
    Fields_ID.forEach((id) => {
      const input = document.getElementById(id);

      if (!input) return;

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;

        // السماح بالاختصارات والأسهم و Backspace وغيرها
        if (ctrl || e.key.length > 1) return;

        // الأحرف العربية + المسافة
        if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    });
  }

  const Arabic_Fields_ID = [
    "92145", // اسم المؤسسة
    "92162", // الناحية
    "92164", // المنطقة
    "92175", // الاسم الجديد في حال نقل الى مديرية اخرى والاسم المستخدم
    "92178", // الاسم الاول للمؤسس الاول
    "92179", // الاسم الثاني للمؤسس الاول
    "92180", // الاسم الثالث للمؤسس الاول
    "92181", // الاسم الرابع للمؤسس الاول
    "92182", // التحصيل الدراسي للمؤسس الاول
    "92183", // نوع التخصص
    "92185", // الاسم الاول للمؤسس الثاني
    "92186", // الاسم الثاني للمؤسس الثاني
    "92187", // الاسم الثالث للمؤسس الثاني
    "92190", // الاسم الرابع للمؤسس الثاني
    "92191", // التحصيل الدراسي للمؤسس الثاني
    "92193", // نوع التخصص للمؤسس الثاني
    "92196", // الاسم الاول للمؤسس الثالث
    "92199", // الاسم الثاني للمؤسس الثالث
    "92201", // الاسم الثالث للمؤسس الثالث
    "92203", // الاسم الرابع للمؤسس الثالث
    "92204", // التحصيل الدراسي للمؤسس الثالث
    "92205", // نوع التخصص للمؤسس الثالث
  ];

  Arabic_Only(Arabic_Fields_ID);

  // ==================================================
  // حصر الحقول باللغة العربية والرموز فقط
  // ==================================================

  function Arabic_Symbols_Only(Fields_ID) {
    Fields_ID.forEach((id) => {
      const input = document.getElementById(id);

      if (!input) return;

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;

        // السماح بالاختصارات والأسهم و Backspace وغيرها
        if (ctrl || e.key.length > 1) return;

        // العربية + المسافة + الرموز
        const regex = /^[\u0600-\u06FF\s!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    });
  }

  const Arabic_Symbols_Fields_ID = [
    "92170", // اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Arabic_Symbols_Fields_ID);

  // ==================================================
  // حصر الحقول باللغة العربية والأرقام والرموز
  // ==================================================

  function Arabic_Symbols_Numbers_Only(Fields_ID) {
    Fields_ID.forEach((id) => {
      const input = document.getElementById(id);

      if (!input) return;

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;

        // السماح بالاختصارات والأسهم و Backspace وغيرها
        if (ctrl || e.key.length > 1) return;

        // العربية + الأرقام الإنجليزية والعربية + المسافة + الرموز
        const regex =
          /^[\u0600-\u06FF0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    });
  }

  const Arabic_Symbols_Numbers_Fields_ID = [
    "92172", // الامر الوزاري اخر تجديد
    "92173", // الامر الوزاري للتأسيس
    "92174", // الامر الوزاري بتغيير المؤسسين ان وجد
  ];

  Arabic_Symbols_Numbers_Only(Arabic_Symbols_Numbers_Fields_ID);

  // ==================================================
  // حصر حقل التاريخ
  // العام الدراسي
  // ==================================================

  const Date_Field = document.getElementById("92159");
  const Date_Input = document.getElementsByName("dfh")[0];

  // منع الكتابة اليدوية
  if (Date_Field) {
    Date_Field.addEventListener("keydown", (event) => {
      event.preventDefault();
    });
  }

  // تحديد الحد الأدنى والأقصى للتاريخ
  if (Date_Input) {
    Date_Input.min = "2003-01-01";

    Date_Input.max = `${new Date().getFullYear()}-12-31`;
  }
}
