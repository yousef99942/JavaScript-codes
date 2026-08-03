{
  this.inputFormField.PersonFirstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("PersonFirstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.PersonSecondName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("PersonSecondName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.PersonThirdName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("PersonThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.PersonPhoneNumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("PersonPhoneNumber")[0].disabled = true; //قفل حقل رقم الهاتف

  //----------------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  //مجموعة معلومات الجهة المستوردة
  //معلومات مدير المؤسسة
  document.getElementById("75171").style.cssText =
    "color: #5d0404; font-size: 18px; font-weight: bold; padding-top: 12px; padding-bottom: 12px; text-align: center;";

  //مجموعة معلومات الجهة الحائزة والمستخدمة :
  //معلومات مدير الجهة الحائزة والمستخدمة
  document.getElementById("75183").style.cssText =
    "color: #5d0404; font-size: 18px; font-weight: bold; padding-top: 12px; padding-bottom: 12px; text-align: center;";

  //----------------------------------------------------------------------------------------------
  //حصر الحقل بالانكليزي والارقام
  function English_Limited_And_Numbers(Field_ID) {
    const input = document.getElementById(Field_ID);
    input.addEventListener("keydown", (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

      // الأرقام + الأحرف الإنجليزية المحددة فقط
      if (!/^[0-9ADECBVRK]$/.test(e.key)) {
        e.preventDefault(); // منع أي شيء غير مسموح
      }
    });
  }

  English_Limited_And_Numbers("74437"); //جواز السفر
  English_Limited_And_Numbers("74633"); //جواز السفر

  //----------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والانكليزية
  function English_Arabic_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // أرقام + أحرف إنجليزية + أحرف عربية
        if (!/^[a-zA-Z\u0600-\u06FF]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير مسموح
        }
      });
    }
  }

  var Fields_ID = [
    //معلومات الجهة المستوردة
    "74420", //اسم الجهة المستوردة
    //معلومات الجهة الحائزة والمستخدمة :
    "74617", //أسم الجهة الحائزة والمستخدمة
  ];

  English_Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
  //لحصر الحقول باللغة العربية فقط
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
    //معلومات الجهة المستوردة
    "75169", //اسم المنطقة
    "74434", //الاسم الاول للمدير
    "75172", //الاسم الثاني للمدير
    "75173", //الاسم الثالث للمدير
    "74435", //اسم المنطقة.
    //معلومات الجهة الحائزة والمستخدمة :
    "74625", //اسم المنطقة
    "74632", //الاسم الاول لمدير الجهة
    "75184", //الاسم الثاني لمدير الجهة
    "75185", //الاسم الثالث لمدير الجهة
    "74636", //اسم المنطقة.
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
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
    //معلومات الجهة المستوردة
    "74422", //المحلة
    "75168", //الزقاق
    "75177", //رقم البطاقة الوطنية
    //معلومات الجهة الحائزة والمستخدمة :
    "75180", //المحلة
    "75181", //الزقاق
    "75187", //رقم البطاقة الوطنية
    "75190", //المحلة.
    "75191", //الزقاق
  ];

  Numbers_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
  //لحصر الحقول بالارقام والرموز فقط
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
    //معلومات الجهة المستوردة
    "75170", //الدار
    //معلومات الجهة الحائزة والمستخدمة :
    "75182", //الدار
    "75192", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
  //فلترة التاريخ
  //التاريخ المتوقع لوصول الاجهزة
  document
    .getElementById("74440")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dre")[0].setAttribute("min", "2026-01-01");
  document.getElementsByName("dre")[0].setAttribute("max", "2050-12-31");
}
