{
  //اخفاء مجاميع
  document.getElementById("35444_group").style.display = "none"; //البيانات الشخصية
  document.getElementById("35445_group").style.display = "none"; //معلومات السكن
  document.getElementById("35446_group").style.display = "none"; //التحصيل الدراسي والعمل
  document.getElementById("35448_group").style.display = "none"; //التعهد القانوني الالكتروني

  //التعهد الاول
  document.getElementById("92491").style.cssText =
    "color: #400000; font-size: 20px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";

  //التعهد الثاني
  document.getElementById("92267").style.cssText =
    "color: #400000; font-size: 20px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";

  //-------------------------------------------------------------------------------------------
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
    //البيانات الشخصية
    "92219", //الاسم الاول
    "92230", //الاسم الثاني
    "92231", //الاسم الثالث
    "92232", //اللقب
    "92241", //اسم الام
    "92503", //اسم اب الام
    "92504", //اسم جد الام
  ];

  Arabic_Only(Fields_ID);

  //-------------------------------------------------------------------------------------------
  //حصر الحقول باللغة الانكليزية والارقام فقط
  function English_Numbers_Only(Fields_ID) {
    for (let i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;
        // الأحرف الإنجليزية + الأرقام + المسافة
        const regex = /^[A-Za-z0-9\s]$/;
        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //البيانات الشخصية
    "92233", //رقم الجواز
  ];

  English_Numbers_Only(Fields_ID);

  //-------------------------------------------------------------------------------------------
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
    "92258", //رقم الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-------------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  //التولد
  let Start_Date = "1900-01-01";
  let End_Date = `${new Date().getFullYear() - 18}-12-31`;
  document
    .getElementById("92235")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("birth")[0].setAttribute("min", Start_Date);
  document.getElementsByName("birth")[0].setAttribute("max", End_Date);
}
