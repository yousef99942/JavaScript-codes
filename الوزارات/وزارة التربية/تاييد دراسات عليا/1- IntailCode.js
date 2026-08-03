{
  //جلب المعلومات من بوابة اور
  this.inputFormField.nameo = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("nameo")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.namef = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("namef")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nameg = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nameg")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.namefg = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("namefg")[0].disabled = true; //قفل حقل الاسم الرابع

  //---------------------------------------------------------------------------------------
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
    "89349", //اسم المديرية
    "89367", //اسم الجامعة او المعهد المرغوب بالتقديم اليه
    "89368", //اسم الجامعة او المعهد المتخرج منه
    "89369", //الاختصاص المرغوب بالتقديم عليه (العام والدقيق)
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والاحرف العربية والرموز
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
    "89354", //رقم كتاب الترشيح من المديرية
    "89356", //رقم كتاب اجتياز اختبار اللغة العربية
    "89358", //رقم كتاب  اجتياز اختبار اللغة الانجليزية
    "89360", //رقم كتاب اجتياز اختبار مهارات  الحاسوب
    "89364", //رقم الوثيقة التخرج
    "89370", //رقم العقد المبرم مع وزارة التربية
    "89372", //رقم كتاب تأييد المدرسة المسائية حصراً
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //-----------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز فقط
  function Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // الأرقام + الرموز + المسافة
        const regex =
          /^[0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "89495", //المعدل التراكمي
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------------
  //حصر حقول التواريخ
  function Date_Filter(Values) {
    Values.forEach((element) => {
      document
        .getElementById(element.Field_ID)
        .addEventListener("keydown", function (event) {
          event.preventDefault();
        });
      document
        .getElementsByName(element.Field_Prog)[0]
        .setAttribute("min", element.Min_Date);
      document
        .getElementsByName(element.Field_Prog)[0]
        .setAttribute("max", element.Max_Date);
    });
  }

  let Values = [
    {
      Field_ID: "89355",
      Field_Prog: "data",
      Min_Date: "2024-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ كتاب الترشيح من المديرية
    {
      Field_ID: "89379",
      Field_Prog: "dataarbice",
      Min_Date: "2024-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ كتاب اجتياز اختبار اللغة العربية
    {
      Field_ID: "89359",
      Field_Prog: "dataEN",
      Min_Date: "2024-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ كتاب اجتياز  اختبار اللغة الانجليزية
    {
      Field_ID: "89361",
      Field_Prog: "dataco",
      Min_Date: "2024-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ كتاب اجتياز اختبار مهارات الحاسوب
    {
      Field_ID: "89366",
      Field_Prog: "namere",
      Min_Date: "2024-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ الوثيقة التخرج
    {
      Field_ID: "89371",
      Field_Prog: "nemeeee",
      Min_Date: "2024-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ العقد المبرم مع وزارة التربية
    {
      Field_ID: "89373",
      Field_Prog: "datadata",
      Min_Date: "2024-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ كتاب تأييد المدرسة المسائية حصراً
  ];

  Date_Filter(Values);
}
