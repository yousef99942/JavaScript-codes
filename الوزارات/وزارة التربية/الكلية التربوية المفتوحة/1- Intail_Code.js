{
  //اذا كان الطلب للوثائق باللغة الانكليزية يرجى ملئ الحقول التالية:
  document.getElementById("14333").style.display = "none";

  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.FatherName = this.user.middle_name;
  document.getElementsByName("FatherName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.GranFathName = this.user.last_name;
  document.getElementsByName("GranFathName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.GraGraName = this.user.forth_name;
  document.getElementsByName("GraGraName")[0].disabled = true; //الاسم الرابع

  this.inputFormField.PhoneNo = this.user.phone_num;
  document.getElementsByName("PhoneNo")[0].disabled = true; //رقم الهاتف

  //-----------------------------------------------------------------------------------
  //انـــــــي خريج /خريجة كليتكم
  document.getElementById("14310").style.cssText =
    "color: #770202; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  //هل تود توصيل وثيقة الطلب عبر منصة تسهيل
  document.getElementById("87248").style.cssText =
    "color: #530202; font-size: 17px; font-weight: bold; padding-top: 18px; padding-bottom: 18px;";

  //خدمة تقدمها الشركة العامة للبريد والتوفير لنقل وتوصيل الوثائق بأسعار تنافسية الى المنزل
  document.getElementById("87109").style.cssText =
    "color: #500101; font-size: 17px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  //-----------------------------------------------------------------------------------
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
    "26318", //العام الدراسي
    "87119", //رقم القطعة
    "87121", //رقم الدار
    "26318", //العام الدراسي
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية فقط
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
    "73225", //الجهة المعنون اليها
  ];

  Arabic_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة الانكليزية
  function English_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الحروف الإنكليزية + المسافة
        if (!/^[a-zA-Z\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير إنكليزي
        }
      });
    }
  }

  var Fields_ID = [
    "14334", //ذكر العنوان باللغة الانكليزية
  ];

  English_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة الانكليزية والرموز
  function English_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // الأحرف الإنجليزية + الرموز + المسافة
        const regex = /^[A-Za-z\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "14336", //(كتابة الاسم باللغة الانكليزية )Full Name
  ];

  English_Symbols_Only(Fields_ID);

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
    "87125", //اقرب نقطة دالة
  ];

  Arabic_Only(Fields_ID);
}
