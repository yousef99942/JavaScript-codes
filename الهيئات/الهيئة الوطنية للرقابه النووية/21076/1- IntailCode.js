{
  //جلب المعلومات من بوابة اور
  this.inputFormField.PFirstName = this.user.first_name;
  document.getElementsByName("PFirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.PSecondName = this.user.middle_name;
  document.getElementsByName("PSecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.PThirdName = this.user.last_name;
  document.getElementsByName("PThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.PPhoneNumber = this.user.phone_num;
  document.getElementsByName("PPhoneNumber")[0].disabled = true; //رقم الهاتف

  //----------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  var Labels_ID = [
    "48041", //معلومات المنشأة الصناعية طالبة الاجازة
    "48052", //مسؤول المؤسسة
    "48057", //المخول عن مسؤول المؤسسة
    "48068", //مسؤول الوقاية من الإشعاع
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: rgb(107, 7, 3); font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 15px";
  }

  //----------------------------------------------------------------------------------
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
    "73650", //اسم المؤسسة الصناعية
    "48058", //الاسم الاول للمخول
    "73655", //الاسم الثاني للمخول
    "73656", //الاسم الثالث للمخول
    "48059", //الصفة الرسمية
    "48069", //الاسم الاول لمسؤول الوقاية
    "73658", //الاسم الثاني لمسؤول الوقاية
    "73659", //الاسم الثالث لمسؤول الوقاية
    "48070", //التخصص
    "48072", //التحصيل الدراسي للمسؤول
    "48074", //مجال الخبرة
    "48053", //الاسم الاول لمسؤول المؤسسة
    "73653", //الاسم الثاني لمسؤول المؤسسة
    "73654", //الاسم الثالث لمسؤول المؤسسة
    "48054", //الصفة الرسمية ( المنصب )
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------
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
    "88926", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //----------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز فقط
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
    "88927", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //----------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز واللغة العربية
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
    "48038", //رقم الاجازة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //----------------------------------------------------------------------------------
  //حصر حقول التاريخ
  //تاريخ الاجازة
  document
    .getElementById("48039")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dat")[0].setAttribute("min", "2020-01-01");
  document
    .getElementsByName("dat")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ التخويل
  document
    .getElementById("73657")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("TaDate")[0].setAttribute("min", "2020-01-01");
  document
    .getElementsByName("TaDate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //التاريخ المتوقع لبدء الممارسة ( منشآة جديدة )
  document
    .getElementById("48063")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("exptm")[0].setAttribute("min", "2020-01-01");
  document
    .getElementsByName("exptm")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //نافذة لغاية
  document
    .getElementById("48077")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dsc")[0].setAttribute("min", "2020-01-01");
  document
    .getElementsByName("dsc")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
