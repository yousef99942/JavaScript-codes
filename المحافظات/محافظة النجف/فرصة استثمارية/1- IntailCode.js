{
  //اخفاء مجاميع
  var Group_ID = [
    "34827_group", // معلومات عن المستثمر (الشخص الطبيعي)
    "34829_group", // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
    "34832_group", // معلومات عن المستثمر (الشخص المعنوي)
    "34897_group", // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
  ];

  for (var i = 0; i < Group_ID.length; i++) {
    document.getElementById(Group_ID[i]).style.display = "none";
  }

  //الطلب الذي قدمتة
  document.getElementById("87446").style.display = "none";
  //هل هناك علاقة بين المشروع في الطلب الحالي والطلب السابق؟
  document.getElementById("75211").style.display = "none";
  //هل سبق وان حصل المستثمر على اجازة استثمار؟
  document.getElementById("87447").style.display = "none";
  //معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
  //الطلب الذي قدمته
  document.getElementById("87425").style.display = "none";

  //--------------------------------------------------------------------------------------------------------------------
  //جلب المعلومات من بوابة اور
  this.inputFormField.applicant = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("applicant")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecondNameOfApplicant = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecondNameOfApplicant")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThirdNameOfApplicant = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThirdNameOfApplicant")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.FourthNameOfApplicant = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("FourthNameOfApplicant")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phon = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phon")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  var Labels_ID = [
    //معلومات عن المستثمر (الشخص الطبيعي)
    "74457", //عنوان العمل:
    //معلومات عن المشروع
    "74657", //فرص العمل
    "74812", //البيانات المالية (رأس المال):
    "74818", //مصادر التمويل:
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #790303; font-size: 20px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";
  }

  //الملاحظة
  document.getElementById("74966").style.cssText =
    "color: #630404; font-size: 24px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";

  //--------------------------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية فقط
  function Arabic_English_Only(Fields_ID) {
    for (let i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الأحرف العربية + الإنجليزية + المسافة
        if (!/^[\u0600-\u06FFA-Za-z\s]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //معلومات عن المستثمر (الشخص الطبيعي)
    "86849", //الاسم الأول
    "86850", //الاسم الثاني
    "86851", //الاسم الثالث
    "86852", //الاسم الرابع
    "75123", //جنسية المستثمر
    "74462", //المنطقة/ القرية
    "74472", //الدولة
    "74473", //المحافظة:
    "74475", //المدينة
    //معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
    "74451", //الاسم الكامل
    "74452", //الجنسية
    "74454", //العنوان الوظيفي / الصفة
    "74456", //نوع التخويل
    "74491", //اسم الجهة التي قدم اليها الطلب؟
    "74501", //سبب الرفض
    "74506", //اسم الجهة التي منحت الاجازة
    "74510", //سبب السحب
    "74571", //الدولة و المدينة او الاقليم
    //معلومات عن المستثمر (الشخص المعنوي)
    "74593", //اذكر الصفة الاخرى
    "74497", //الجنسية الأخرى
    "74498", //محل التأسيس
    "74509", //ماهو النشاط الأساسي للشركة او الجهة المستثمرة؟
    "74554", //إذا كانت الإجاية نعم، يرجى ذكر الفرع
    //معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
    "75195", //الاسم الكامل
    "75196", //العنوان الوظيفي / الصفة
    "75197", //نوع التخويل
    "75201", //الجنسية
    "75208", //اسم الجهة التي قدم اليها الطلب؟
    "75210", //سبب الرفض
    "75212", //اسم الجهة التي منحت الاجازة
    "75231", //سبب السحب
    "75233", //الدولة و المدينة او الاقليم
    //معلومات عن المشروع
    "74647", //السلع والخدمات الي يقدمها المشروع
    "74655", //اسم المشروع
    "74696", // نوع الموجودات والمكائن والمدخلات الاخرى , الخ . التي سيتم استيرادها الى العراق او شراؤها من الاسواق المحلية لاغراض المشروع. *
    "74719", //ماهية ميزة السلع او الخدمات التي تقدمها مقارنة بالسلع والخدمات الاخرى التي يقدمها المستثمرين الاخرين؟
    "74722", //ماهو تقيمك للسلع او الخدمات التي تقدمها الشركة او الجهة المستثمرة بالمقارنة مع المستثمرين الاخرين في المجال نفسه؟
    "74929", //مصادر أخرى للتمويل (يرجى ذكرها)
    //مقدم الطلب
    "74996", //صلته بالشركة / الجهة المستثمرة
    "74998", //نوع التخويل
    "74999", //الجنسية
  ];

  Arabic_English_Only(Fields_ID);

  //--------------------------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة الانكليزية والرموز فقط
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
    //معلومات عن المستثمر (الشخص الطبيعي)
    "74450", //الموقع الإلكتروني
    //معلومات عن المستثمر (الشخص المعنوي)
    "74503", //الموقع الالكتروني
  ];

  English_Symbols_Only(Fields_ID);

  //--------------------------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز والارقام
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
    //معلومات عن المستثمر (الشخص الطبيعي)
    "74467", //محلة، زقاق، دار
    "74476", //العنوان الكامل
    //معلومات عن المستثمر (الشخص المعنوي)
    "74579", //العنوان بالتفصيل
    "74587", //يتم ذكر الأسباب (إذا كانت الإجابة كلا)
    "74566", //اذا كانت الاجابه نعم فما هي وكم عددها
    "74590", //يرجى التوضيح (إذا اكنت الإجابة نعم عن الحقل السابق)
    //معلومات عن المشروع
    "74648", //موقع المشروع (إذا كان معروفاً)
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //--------------------------------------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  function Date_Limit(Fields_Value) {
    Fields_Value.forEach((Values) => {
      document
        .getElementById(Values.Field_ID)
        .addEventListener("keydown", function (event) {
          event.preventDefault();
        });
      document
        .getElementsByName(Values.Field_Prog)[0]
        .setAttribute("min", Values.Min_Date);
      document
        .getElementsByName(Values.Field_Prog)[0]
        .setAttribute("max", Values.Max_Date);
    });
  }

  let Fields_Value = [
    //معلومات عن المستثمر (الشخص الطبيعي)
    {
      Field_ID: "74443",
      Field_Prog: "BrithDate",
      Min_Date: "1940-01-01",
      Max_Date: `${new Date().getFullYear() - 18}-12-31`,
    }, //تأريخ الولادة
    //
    {
      Field_ID: "74483",
      Field_Prog: "dateapl",
      Min_Date: "2000-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ الطلب السابق
    {
      Field_ID: "74499",
      Field_Prog: "DateOfEstablishment",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تأريخ التأسيس
    {
      Field_ID: "75205",
      Field_Prog: "DateOfThePreviousApplication",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ الطلب السابق
  ];

  Date_Limit(Fields_Value);
}
