{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.therdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("therdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.phonunerdus = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonunerdus")[0].disabled = true; //قفل حقل رقم الهاتف

  //---------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  //ثانياً : تفاصيل المواد والمعدات المراد نقلها
  //ملاحظة: يرجى إرفاق قوائم تفصيلية في حال تعدد المواد
  document.getElementById("86161").style.cssText =
    "color: #000000; font-size: 19px; font-weight: bold; padding-top: 13px; padding-bottom: 13px;";

  //---------------------------------------------------------------------------------------
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
    //اولا : معلومات الجهة الطالبة للتخويل
    "86148", //اسم المؤسسة
    "86156", //الاسم الاول لمسؤول المؤسسة
    "88111", //الاسم الثاني لمسؤول المؤسسة
    "88112", //الاسم الثالث لمسؤول المؤسسة
    "86157", //المنصب الوظيفي
    //ثالثا: تفاصيل عملية النقل
    "86162", //نقطة الانطلاق
    "86163", //نقطة الوصول
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------
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
    "88105", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //---------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والارقام والرموز
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
    //ثالثا: تفاصيل عملية النقل
    "86166", //الوقت المقترح من
    "88224", //الوقت المقترح الى
    "88223", //مسار النقل المقترح
    //رابعا: إجراءات الأمن والسلامة
    "88225", //تامين الشحنة
    "86176", //السلامة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //---------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  //ثالثا: تفاصيل عملية النقل
  //تاريخ النقل المقترح
  document
    .getElementById("86164")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("daq")[0]
    .setAttribute("min", `${new Date().getFullYear()}-12-31`);
  document
    .getElementsByName("daq")[0]
    .setAttribute("max", `${new Date().getFullYear() + 5}-12-31`);
}
