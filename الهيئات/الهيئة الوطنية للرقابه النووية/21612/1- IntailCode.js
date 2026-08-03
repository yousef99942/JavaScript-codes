{
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.forthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("forthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phoonreqoust = this.user.phone_num;
  document.getElementsByName("phoonreqoust")[0].disabled = true; //رقم الهاتف

  document.getElementById("73915").style.display = "none"; //انواع الاوساط الزراعية المستخدمة
  //-----------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  //عنوان الشركة او المؤسسة
  document.getElementById("75365").style.cssText =
    "color: #560404; font-size: 20px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";

  //-----------------------------------------------------------------------------------
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
    "73835", //الاسم الاول لمدير المرفق
    "75374", //الاسم الثاني لمدير المرفق
    "75375", //الاسم الثالث لمدير المرفق
    "75376", //الاسم الرابع لمدير المرفق
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والانكليزية فقط
  function Arabic_English_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // العربية + الإنجليزية + المسافة
        const regex = /^[\u0600-\u06FFA-Za-z\s]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "73814", //اسم الشركة او المؤسسة
  ];

  Arabic_English_Only(Fields_ID);

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
    "75367", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
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
    "73818", //محلة
    "75366", //زقاق
  ];

  Numbers_Only(Fields_ID);
}
