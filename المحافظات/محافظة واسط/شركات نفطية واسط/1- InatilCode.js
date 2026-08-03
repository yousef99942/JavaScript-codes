{
  //اظهار محافظة واسط واقضيتها فقط
  //المحافظات
  this.group_of_form[0].fields[12].properties[0].values = ["واسط"];
  //الاقضية
  this.group_of_form[0].fields[13].properties[0].values = [
    "الخلفاء (دبوني)",
    "الذهب (زرباطية)",
    "الاحرار",
    "العزيزية",
    "البشائر",
    "الحي",
    "الكوت",
    "الموفقية",
    "النعمانية",
    "الشحمية",
    "الصويرة",
    "الزبيدية",
    "بدرة",
    "جصان",
    "شيخ سعد",
    "الحفرية (تاج الدين)",
    "ناحية واسط",
  ];

  //---------------------------------------------------------------------------------------------
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.fname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("fname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ffname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ffname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.fffname = this.user.family_name; //جلب اللقب
  document.getElementsByName("fffname")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.yname = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("yname")[0].disabled = true; //قفل حقل تاريخ الميلاد

  this.inputFormField.pname = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("pname")[0].disabled = true; //قفل حقل رقم الهاتف

  //---------------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  //تعهد
  document.getElementById("87096").style.cssText =
    "color: #880707; font-size: 18px; font-weight: bold; padding-top: 17px; padding-bottom: 17px;";

  //---------------------------------------------------------------------------------------------
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
    //معلومات مقدم الطلب
    "87047", //اسم الام الاول
    "88144", //اسم والد الام
    "88145", //اسم جد الام
    "87054", //الحي
    "87055", //أقرب نقطة دالة
    "87061", //مكتب المعلومات
    //التحصيل الدراسي
    "87064", //الكلية/المعهد
    "87065", //القسم
    "87067", //التخصص الدقيق
    "87072", //المهنة أو الحرفة
    //معلومات التقديم
  ];

  Arabic_Only(Fields_ID);
  //-------------------------------------------------------------------------------------------------
  //حصر الحقول عربية وانكليزية

  function Arabic_English_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الأحرف العربية + الإنجليزية + المسافة
        if (!/^[a-zA-Z\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير مسموح
        }
      });
    }
  }

  var Fields_ID = [
    "87084", //  التخصص
  ];

  Arabic_English_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام فقط
  function Arabic_And_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الأحرف العربية + الأرقام + المسافة
        if (!/^[\u0600-\u06FF0-9\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير عربي أو رقم
        }
      });
    }
  }

  var Fields_ID = [
    //معلومات التقديم
    "87087", //الدرجة التي يرغب لها المتقدم
  ];

  Arabic_And_Numbers_Only(Fields_ID);

  //---------------------------------------------------------------------------------------------
  //حصر التواريخ
  //تاريخ التولد
  document
    .getElementById("87048")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("yname")[0]
    .setAttribute("min", `${new Date().getFullYear() - 40}-01-01`);
  document
    .getElementsByName("yname")[0]
    .setAttribute("max", `${new Date().getFullYear() - 18}-12-31`);

  //تاريخ التخرج
  document
    .getElementById("87070")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dname")[0].setAttribute("min", "2000-01-01");
  document
    .getElementsByName("dname")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ تسجيل الاستشارية
  document
    .getElementById("87071")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("ddname")[0].setAttribute("min", "2000-01-01");
  document
    .getElementsByName("ddname")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
