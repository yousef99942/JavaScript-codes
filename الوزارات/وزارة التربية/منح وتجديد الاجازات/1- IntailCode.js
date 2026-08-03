{
  //مجموعة  معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
  document.getElementById("22950_group").style.display = "none";

  //this.group_of_form[0].fields[4].properties[0].values = ["روضة", "معهد"];
  //-------------------------------------------------------------------------
  //تحديد الحقول باللغة العربية فقط
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
    //مجموعة معلومات الطلب
    "47897", //اسم المؤسسة
    //مجموعة معلومات المؤسسة
    "72421", //حق التصرف بالعقار
    "71967", //اسم المقاطعة
    "50685", //المنطقة
    //مجموعة معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
    "47970", //الاسم الاول للمؤسس الاول
    "47971", //الاسم الثاني للمؤسس الاول
    "47972", //الاسم الثالث للمؤسس الاول
    "47975", //الاسم الرابع للمؤسس الاول
    "47977", //التحصيل الدراسي للمؤسس الاول
    "47978", //نوع التخصص للمؤسس الاول
    "50719", //الاسم الاول للمؤسس الثاني
    "50721", //الاسم الثاني للمؤسس الثاني
    "50722", //الاسم الثالث للمؤسس الثاني
    "50723", //الاسم الرابع للمؤسس الثاني
    "50724", //التحصيل الدراسي للمؤسس الثاني
    "50725", //نوع التخصص للمؤسس الثاني
    "50727", //الاسم الاول للمؤسس الثالث
    "50728", //الاسم الثاني للمؤسس الثالث
    "50729", //الاسم الثالث للمؤسس الثالث
    "50730", //الاسم الرابع للمؤسس الثالث
    "50731", //التحصيل الدراسي للمؤسس الثالث
    "50732", //نوع التخصص للمؤسس الثالث
    "50808", //اسم الشركة
    "50737", //الاسم الاول للمدير المفوض
    "75781", //الاسم الثاني للمدير المفوض
    "75782", //الاسم الثالث للمدير المفوض
    "50739", //عنوان السكن للمدير المفوض
    "67633", //نوع التخصص للمدير المفوض
    "67634", //التحصيل الدراسي للمدير المفوض
  ];

  Arabic_Only(Fields_ID);

  //-------------------------------------------------------------------------
  //حصر الحقول بالارقام الانكليزية والعربية فقط
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
    //مجموعة معلومات الطلب
    "67215", //يرجى إدخال سنة اخر تجديد
    "68770", //يرجى إدخال سنة انتهاء آخر تجديد
    "47957", //عدد (الطلاب / التلاميذ) للعام الدراسي الماضي
    "68060", //يبدأ التجديد الجديد في سنة
    "68771", //ينتهي التجديد الجديد في سنة
    "47960", //رقم آخر تجديد
    "47962", //رقم الاجازة الجدارية للتأسيس
    "47964", //رقم امر التأسيس
    //مجموعة معلومات المؤسسة
    "50715", //مساحة العقار (بالمتر المربع)
    "50716", //رقم العقار
    "72105", //رقم العقار (البسط)
    "72106", //رقم العقار (المقام)
    //مجموعة معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
    "71968", //الرقم الضريبي لمؤجر العقار
  ];

  Numbers_Only(Fields_ID);

  //-------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز والارقام فقط
  function Arabic_Symbols_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      if (!input) continue;

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالمفاتيح الخاصة (Backspace, الأسهم...)

        const isArabic = /^[\u0600-\u06FF]$/.test(e.key);
        const isNumber = /^[0-9\u0660-\u0669]$/.test(e.key); // إنكليزي + عربي
        const isSymbol = /^[^\p{L}\p{N}\s]$/u.test(e.key); // أي رمز

        if (!(isArabic || isNumber || isSymbol)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //مجموعة معلومات الطلب
    "75337", //أسباب التأخير (إن وجدت)
    //مجموعة معلومات المؤسسة
    "73922", //اذكر رقم عقار اخر مع تحديد ملك او ايجار
    //مجموعة معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
    "50735", //رقم تسجيل الشركة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //-------------------------------------------------------------------------
  //لحصر الحقول بالارقام والرموز
  function Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      if (!input) continue;

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالمفاتيح الخاصة والاختصارات

        const isNumber = /^[0-9\u0660-\u0669]$/.test(e.key); // 0-9 + ٠-٩
        const isSymbol = /^[^\p{L}\p{N}\s]$/u.test(e.key); // الرموز فقط

        if (!(isNumber || isSymbol)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //مجموعة معلومات المؤسسة
    "71966", //رقم المقاطعة
    "50688", //المبنى
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز فقط
  function Arabic_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      if (!input) continue;

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالمفاتيح الخاصة والاختصارات

        const isArabic = /^[\u0600-\u06FF]$/.test(e.key);
        const isSymbol = /^[^\p{L}\p{N}\s]$/u.test(e.key); // الرموز فقط

        if (!(isArabic || isSymbol)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //مجموعة معلومات المؤسسة
    "50690", //اقرب نقطة دالة
    //مجموعة معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
    "50739", //عنوان السكن للمدير المفوض
  ];

  Arabic_Symbols_Only(Fields_ID);

  //-------------------------------------------------------------------------
  //حصر التواريخ
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
    //مجموعة معلومات الطلب
    {
      Field_ID: "47961",
      Field_Prog: "lastcerdate",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ اخر تجديد
    {
      Field_ID: "47963",
      Field_Prog: "ecerdate",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ الاجازة الجدارية
    {
      Field_ID: "47965",
      Field_Prog: "cerdateofestab",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ امر التأسيس
    //مجموعة معلومات المؤسسين (على ان يكون احد المؤسسين تربوي)
    {
      Field_ID: "75783",
      Field_Prog: "regdate",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ تسجيل الشركة
  ];

  Date_Filter(Values);
}
