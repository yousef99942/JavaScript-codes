{
  this.inputFormField.namenoeProvided = this.user.first_name;
  //document.getElementsByName("namenoeProvided")[0].disabled = true; //الاسم الاول

  this.inputFormField.nametowProvided = this.user.middle_name;
  //document.getElementsByName("nametowProvided")[0].disabled = true; //الاسم الثاني

  this.inputFormField.nametheirdProvided = this.user.last_name;
  //document.getElementsByName("nametheirdProvided")[0].disabled = true; //الاسم الثالث

  this.inputFormField.ohonProvided = this.user.phone_num;
  //document.getElementsByName("ohonProvided")[0].disabled = true; //رقم الهاتف

  //------------------------------------------------------------------------------------
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
    "73305", //الاسم الاول لمقدم الطلب
    "73306", //الاسم الثاني لمقدم الطلب
    "73307", //الاسم الثالث لمقدم الطلب
    "69031", //اسم الام الاول
    "69032", //اسم الام الثاني
    "69033", //اسم الام الثالث
    "69051", //اسم المدرسة المتخرج منها
    "69047", //جهة الاصدار
  ];

  Arabic_Only(Fields_ID);

  //------------------------------------------------------------------------------------
  //حصر الحقول بالارقام فقط
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
    "69038", //المحلة
    "69039", //الزقاق
    "69041", //رقم البطاقة الوطنية
    "69046", //الرقم العائلي
    "69049", //رقم بطاقة السكن
  ];

  Numbers_Only(Fields_ID);

  //------------------------------------------------------------------------------------
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
    "69040", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //------------------------------------------------------------------------------------
  //تاريخ التولد
  document
    .getElementById("69036")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("BirthDay")[0].setAttribute("min", "2000-01-01");
  document
    .getElementsByName("BirthDay")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ اصدار البطاقة الوطنية
  document
    .getElementById("69048")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("IDDate")[0].setAttribute("min", "2000-01-01");
  document
    .getElementsByName("IDDate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ اصدار بطاقة السكن
  document
    .getElementById("69050")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("HouseDate")[0].setAttribute("min", "2000-01-01");
  document
    .getElementsByName("HouseDate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //سنة االتخرج
  document
    .getElementById("69059")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("GraudationDate")[0]
    .setAttribute("min", "2000-01-01");
  document
    .getElementsByName("GraudationDate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
