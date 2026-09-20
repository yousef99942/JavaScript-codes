{
  //جلب المعلومات من بوابة اور
  this.inputFormField.nameA = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("nameA")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.nameb = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("nameb")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.namec = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("namec")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.nameD = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("nameD")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.date = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("date")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //التعهد
  document.getElementById("86888").style.cssText =
    "color: #490000; font-size: 20px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";
  //------------------------------------------------------------------------------------------
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
    "86867", //اسم الام الاول
    "86868", //اسم الام الثاني
    "86869", //اسم الام الثالث
    "86871", //اسم الزوجة الاول
    "86872", //اسم الزوجة الثاني
    "86873", //اسم الزوجة الثالث
    "86882", //مكان الاصابة
  ];

  Arabic_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز
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
    "95167", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
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
    "95168", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربيه والارقام والرموز
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
    "86884", //رقم قرار اللجنة الطبية
    "89728", //رقم قرار اللجنة الطبية الاستئنافية
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  function Date_Limit(Fields_Value) {
    Fields_Value.forEach((Values) => {
      document
        .getElementById(Values.Field_ID)
        .addEventListener("keydown", function (event) {
          event.preventDefault();
        });
      document
        .getElementsByName(Values.Field_Prog)[0]
        .setAttribute("min", Values.Min_Date);
      document
        .getElementsByName(Values.Field_Prog)[0]
        .setAttribute("max", Values.Max_Date);
    });
  }

  let Fields_Value = [
    {
      Field_ID: "86883",
      Field_Prog: "dataW",
      Min_Date: "1980-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ الاصابة
    {
      Field_ID: "86885",
      Field_Prog: "dateDECISION",
      Min_Date: "1980-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ قرار اللجنة الطبية
    {
      Field_ID: "89729",
      Field_Prog: "deciDate",
      Min_Date: "1980-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ قرار اللجنة الطبية الاستئنافية
  ];

  Date_Limit(Fields_Value);
}
