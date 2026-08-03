{
  document.getElementById("35353_group").style.display = "none";

  //تغيير خصائص الليبل
  document.getElementById("89874").style.cssText =
    "color: #640303; font-size: 18px; font-weight: bold; padding-top: 13px; padding-bottom: 13px;";

  //اتعهد بصحة كافة المعلومات الواردة اعلاه.
  document.getElementById("89905").style.cssText =
    "color: #640303; font-size: 18px; font-weight: bold; padding-top: 13px; padding-bottom: 13px;";

  //----------------------------------------------------------------------------------
  // دالة للسماح بإدخال الأحرف العربية فقط
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
    "73163", //الاسم الاول
    "73164", //الاسم الثاني
    "73165", //الاسم الثالث
    "73166", //الاسم الرابع
    "73167", //اسم الام الاول
    "74514", //اسم الام الثاني
    "74515", //اسم الام الثالث
    "73169", //اسم الزوجة الاول
    "74516", //اسم الزوجة الثاني
    "74517", //اسم الزوجة الثالث
    "73159", //الصنف
    "73160", //الرتبة
    "73161", //الوحدة
    "73175", //مكان الاصابة
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------
  //حصر الحقول بالرموز والارقام فقط
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
    "74522", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //----------------------------------------------------------------------------------
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
      Field_ID: "73172",
      Field_Prog: "birthday",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear() - 18}-12-31`,
    }, //تاريخ الولادة
    {
      Field_ID: "73176",
      Field_Prog: "dateAA",
      Min_Date: "1970-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ الاصابة
    {
      Field_ID: "73178",
      Field_Prog: "dateBB",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ قرار اللجنة الطبية
  ];

  Date_Filter(Values);
}
