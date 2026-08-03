{
  //جلب المعلومات من بوابة اور
  this.inputFormField.namenoeProvided = this.user.first_name;
  document.getElementsByName("namenoeProvided")[0].disabled = true; //الاسم الاول

  this.inputFormField.nametowProvided = this.user.middle_name;
  document.getElementsByName("nametowProvided")[0].disabled = true; //الاسم الثاني

  this.inputFormField.nametheirdProvided = this.user.last_name;
  document.getElementsByName("nametheirdProvided")[0].disabled = true; //الاسم الثالث

  this.inputFormField.ohonProvided = this.user.phone_num;
  document.getElementsByName("ohonProvided")[0].disabled = true; //رقم الهاتف

  //-----------------------------------------------------------------------------------
  document.getElementById("69056").style.cssText =
    "color: #580404; font-size: 16px; font-weight: bold; padding-top: 15px; padding-bottom: 13px;";

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
    "68992", //الاسم الاول للطفل
    "68993", //الاسم الثاني للطفل
    "68994", //الاسم الثالث للطفل
    "68996", //اللقب
    "68997", //اسم الاب الاول
    "73874", //اسم الاب الثاني
    "73875", //اسم الاب الثالث
    "68999", //اسم الام الاول
    "73876", //اسم الام الثاني
    "73877", //اسم الام الثالث
    "69008", //صلة الطفل ب ولي الامر
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //لحصر الحقول باللغة العربية والرموز فقط
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
    "69004", //عنوان السكن الحالي
  ];

  Arabic_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //لحصر الحقول بالارقام فقط
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
    "69005", //المحلة
    "69006", //الزقاق
  ];

  Numbers_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
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
    "69007", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);
}
