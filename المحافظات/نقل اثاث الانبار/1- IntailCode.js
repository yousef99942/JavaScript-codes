{
  //لاخفاء خيار من حقل اختيار نوع الهوية
  this.group_of_form[0].fields[2].properties[0].values = [
    "هوية تعريفية",
    "باج للسيارات الخصوصي",
  ];

  //--------------------------------------------------------------------------------
  document.getElementById("33791_group").style.display = "none";

  this.inputFormField.fullname = this.user.first_name;
  document.getElementsByName("fullname")[0].disabled = true; //الاسم الاول

  this.inputFormField.sacond = this.user.middle_name;
  document.getElementsByName("sacond")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thirnam = this.user.last_name;
  document.getElementsByName("thirnam")[0].disabled = true; //الاسم الثالث

  this.inputFormField.fornam = this.user.forth_name;
  document.getElementsByName("fornam")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phone = this.user.phone_num;
  document.getElementsByName("phone")[0].disabled = true; //رقم الهاتف

  this.inputFormField.tit = this.user.family_name; //اللقب

  //--------------------------------------------------------------------------------------
  //اخفاء قيم من سلكتر
  this.group_of_form[1].fields[1].properties[0].values = [
    "رئيس المجلس /الدكتور حسين العيساوي",
    //"نائب رئيس المجلس/ الدكتور غيث شبع",
    //"نائب رئيس المجلس / الأستاذ ماجد حاكم كاظم",
    "عضو مجلس/ الأستاذ ماجد حاكم كاظم",
    "عضو مجلس/ الأستاذ فاضل جابر",
    //"عضو مجلس/ الست سهام المحنة",
    "عضو مجلس/ الست نور موحان الخزعلي",
    "عضو مجلس/ الأستاذ أنور الشبلي",
    "عضو مجلس/ الأستاذ زيد الشمخي",
    "عضو مجلس/ الأستاذ طيف الحاتمي",
    "عضو مجلس/ الأستاذ سمير العياشي",
    "عضو مجلس/ الست انصاف الموسوي",
    "عضو مجلس/ الست ايمان الساعدي",
    "عضو مجلس/ الأستاذ اكرم شربة",
    "عضو مجلس/ الست هبة الكوفي",
    "عضو مجلس/ الأستاذ حسن أبو السبح",
    "عضو مجلس/ الأستاذ محمد العباسي",
    "عضو مجلس/ الأستاذ فاروق الغزالي",
  ];

  //--------------------------------------------------------------------------------------
  //لتحديد اللغة العربية للحقول
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
    //المعلومات الشخصية
    "65448", //اللقب
    "15161", //اسم الام الثلاثي
    "15163", //محل الولادة
    //معلومات السكن
    "15167", //رقم بطاقة السكن
    "15168", //الحي او المنطقة
    "15169", //اسم المختار
    //المعلومات الخاصة بالمركبة
    "66598", //نوع المركبة
    "66599", //لون المركبة
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
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
    "64216", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
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
    "64213", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //--------------------------------------------------------------------------------------
  //فلترة حقول التاريخ
  function Date_Limition(Field_ID, Field_Prog, Date_Min, Date_Max) {
    document
      .getElementById(Field_ID)
      .addEventListener("keydown", function (event) {
        event.preventDefault();
      });
    document.getElementsByName(Field_Prog)[0].setAttribute("min", Date_Min);
    document.getElementsByName(Field_Prog)[0].setAttribute("max", Date_Max);
  }

  //مجموعة المعلومات الشخصية
  Date_Limition("25390", "dateofcard", "1900-01-01", "2060-12-31"); //تاريخ اصدار البطاقة
  Date_Limition(
    "15164",
    "dateofbri",
    "1900-01-01",
    `${new Date().getFullYear()}-12-31`,
  ); //تاريخ الميلاد

  //مجموعة معلومات السكن
  Date_Limition("25377", "dateofcrad", "2003-01-01", "2060-12-31"); //تاريخ اصدار بطاقة السكن
}
