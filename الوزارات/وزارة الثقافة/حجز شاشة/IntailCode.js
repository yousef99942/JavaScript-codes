{
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.forthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("forthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.fifthname = this.user.family_name; //جلب اللقب
  document.getElementsByName("fifthname")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phonenumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonenumber")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.nidnumber = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  document.getElementsByName("nidnumber")[0].disabled = true; //قفل حقل رقم الموحدة

  //-------------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز فقط
  function Arabic_Symbol_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // عربي + رموز + مسافة
        const allowedRegex =
          /^[\u0600-\u06FF\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~،؛؟]$/;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "65147", //عنوان السكن
  ];

  Arabic_Symbol_Only(Fields_ID);

  //-------------------------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز فقط
  function Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // أرقام إنجليزية + أرقام عربية + رموز + مسافة
        const allowedRegex =
          /^[0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~،؛؟]$/;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "65153", //دار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-------------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام والرموز
  function Arabic_Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // عربي + أرقام عربية وإنجليزية + رموز + مسافة
        const allowedRegex =
          /^[\u0600-\u06FF0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~،؛؟]$/;

        if (!allowedRegex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "65162", //محتوى العرض (المضمون المراد عرضه على الشاشة)
    "65155", //ملاحظات و استفسارات مثل يوم الحجز/وقت الحجز/ السعر (دفع الكتروني)
  ];

  Arabic_Numbers_Symbols_Only(Fields_ID);

  //-------------------------------------------------------------------------------------------------------
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
    "65150", //محلة
    "65151", //زقاق
  ];

  Numbers_Only(Fields_ID);
}
