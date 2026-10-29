{
    //جلب الاسم من بوابة اور
    this.inputFormField.name = this.user.first_name; //جلب الاسم الاول
    document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الاول

    this.inputFormField.secondName = this.user.middle_name; //جلب الاسم الثاني
    document.getElementsByName("secondName")[0].disabled = true; //قفل حقل الاسم الثاني

    this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
    document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

    this.inputFormField.fouthName = this.user.forth_name; //جلب الاسم الرابع
    document.getElementsByName("fouthName")[0].disabled = true; //قفل حقل الاسم الرابع

    this.inputFormField.surName = this.user.family_name; //جلب اللقب
    //document.getElementsByName("surName")[0].disabled = true; //قفل حقل اللقب

    this.inputFormField["mother"] = this.user.profile.mother; //جلب اسم الام
    document.getElementsByName("mother")[0].disabled = true; //قفل حقل اسم الام

    this.inputFormField["gender"] = this.user.gender; //جلب الجنس
    document.getElementsByName("gender")[0].disabled = true; //قفل حقل الجنس

    this.inputFormField.birth = this.user.birth_date; //جلب تاريخ الميلاد
    //document.getElementsByName("birth")[0].disabled = true; //قفل حقل تاريخ الميلاد

    this.inputFormField.phoone = this.user.phone_num; //جلب رقم الهاتف
    document.getElementsByName("phoone")[0].disabled = true; //قفل حقل رقم الهاتف

    // this.inputFormField.idcardnum = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
    // document.getElementsByName("idcardnum")[0].disabled = true; //قفل حقل رقم الموحدة

    //--------------------------------------------------------------------------------------------------------
    //اخفاء قيم
    this.group_of_form[0].fields[6].properties[0].values = [ "رئيس مجلس", "نائب" ]; //المنصب المتقدم له
    //اجادة استخدام الحاسوب
    document.getElementById("27711").style.display = "none"; //المتقدم سيخضع لاختبار عملي.

    //--------------------------------------------------------------------------------------------------------
    //تغيير خصائص الليبل
    var Labels_ID = [
        //المعلومات الشخصية
        "27707", //المجموعة الاولى
        //الخدمة والمناصب
        "27605", //1- عدد سنوات الخدمة الفعلية
        "27632", //2- المناصب التي شغلها المتقدم ((وزير او رئيس جهة غير مرتبطة بوزارة / وكيل وزير / مستشار (درجة خاصة) / مدير عام / مدير تشكيل / اخرى))
        "27635", //3- الخبرات
        //الانجازات والمبادرات
        "27637", //ارفاق ما يؤيد المذكور انفاً
        //المؤلفات والدراسات والبحوث واوراق العمل
        "27708", //يرفق ما يؤيد ما تم ذكره.
        //الدورات وورش العمل التطويرية
        "27709", //يرفق ما يؤيد المذكور اعلاه
        //اللغات الحية التي يجيدها المتقدم
        "27710", //المتقدم سيخضع لاختبار اللغة
        //اجادة استخدام الحاسوب
        "27641", //المتقدم سيخضع لاختبار عملي  
    ];

    for (var i = 0; i < Labels_ID.length; i++) {
        document.getElementById(Labels_ID[i]).style.cssText =
        "color: #770000; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
    }

    var Second_Labels_ID = [
        //المعرفون والشهود
        "27804", //التعهد الاول
        "27803", //التعهد الثاني
        "27805", //التعهد الثالث
    ];

    for (var i = 0; i < Second_Labels_ID.length; i++) {
        document.getElementById(Second_Labels_ID[i]).style.cssText =
        "color: #770000; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px;";
    }

    //--------------------------------------------------------------------------------------------------------
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
    //المعلومات الشخصية
    "27652", //اللقب
    "27602", //جهة الاصدار
    "97499", //التخصص الاخر
    "97500", //الشهادة الاخرى
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------------------------------
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
    //الرؤيا والاهداف وتطوير العمل حول المنصب المتقدم اليه
    "27642", //الرؤيا والاهداف
    "27643", //التطوير 
    "27644", //المشكلات والتحديات
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);  

  //--------------------------------------------------------------------------------------------------------
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
    {
      Field_ID: "27603",
      Field_Prog: "provDate",
      Min_Date: "2003-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ الاصدار
    // {
    //   Field_ID: "27613",
    //   Field_Prog: "birth",
    //   Min_Date: `${new Date().getFullYear() - 65}-01-01`,
    //   Max_Date: `${new Date().getFullYear() - 37}-12-31`,
    // }, //تاريخ الميلاد
  ];

  Date_Limit(Fields_Value);
}