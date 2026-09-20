//Write your code here
{
  //تعديل خصائص الليبلات
  var Labels_ID = [
    "51966", //المعلومات الشخصية للمقترض
    "70253", //معلومات هوية غرفة التجارة
    "93920", //معلومات مسجل الشركات
    "72302", //عنوان موقع المشروع
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #440101; font-size: 22px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
  }

  //تقييد تاريخ الولادة
  const today = new Date();
  const year = today.getFullYear();

  document
    .getElementById("51964")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("date")[0].setAttribute("min", "1900-01-01");
  document
    .getElementsByName("date")[0]
    .setAttribute("max", `${year - 18}-12-31`);

  //تقييد  تاريخ نفاذ البطاقة الوطنية
  document
    .getElementById("51973")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("detex")[0].setAttribute("min", "2015-01-01");
  document
    .getElementsByName("detex")[0]
    .setAttribute("max", `${year + 20}-12-31`);
  //تقييد  تاريخ اصدار هوية غرفة التجارة
  document
    .getElementById("70257")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("releasedate")[0]
    .setAttribute("min", "1926-01-01");
  document
    .getElementsByName("releasedate")[0]
    .setAttribute("max", `${year}-12-31`);
  //تقييد  تاريخ نفاذ هوية غرفة التجارة
  document
    .getElementById("70258")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("effectivedate")[0]
    .setAttribute("min", "1926-01-01");
  document
    .getElementsByName("effectivedate")[0]
    .setAttribute("max", `${year + 20}-12-31`);

  document.getElementById("34364_group").style.display = "none"; // استمارة قرض تجاري
  document.getElementById("34365_group").style.display = "none"; // استمارة قرض زراعي
  document.getElementById("34560_group").style.display = "none"; // استمارة قرض منظومة الطاقة
  document.getElementById("34367_group").style.display = "none"; // استمارة قرض السيارات

  this.inputFormField.nam = this.user.first_name;
  this.inputFormField.namet = this.user.middle_name;
  this.inputFormField.nameth = this.user.last_name;
  this.inputFormField.namefo = this.user.forth_name;
  //جعل رقم الهاتف من حساب اور 11 رقم
  let phoneNum = this.user.phone_num.substring(3);
  this.inputFormField.hoo = `0${phoneNum}`;
  document.getElementsByName("nam")[0].disabled = true; //الاسم الاول
  document.getElementsByName("namet")[0].disabled = true; //الاسم الثاني
  document.getElementsByName("nameth")[0].disabled = true; //الاسم الثالث
  document.getElementsByName("namefo")[0].disabled = true; //الاسم الرابع
  document.getElementsByName("hoo")[0].disabled = true; //رقم الهاتف

  //----------------------------------------------------------------------------------------------
  //اخفاء محافظة ميسان
  this.group_of_form[0].fields[12].properties[0].values = [
    "بغداد",
    "بابل",
    "البصرة",
    "ذي قار",
    "المثنى",
    "الانبار",
    "كركوك",
    "واسط",
    "كربلاء المقدسة",
    "النجف الاشرف",
    "القادسية",
    "صلاح الدين",
    "ديالى",
    "نينوى",
  ];

  //----------------------------------------------------------------------------------------------
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
    //المعلومات المطلوبة
    "51960", //اللقب
    "51961", //اسم الام الاول
    "51962", //اسم الام الثاني
    "51963", //اسم الام الثالث
    "53593", //مبلغ القرض بالدينار العراقي (كتابةً)
    //المعلومات المطلوبة للحصول على قرض تجاري
    "70247", //الاسم التجاري
    "93919", //قطعة / مقاطعة
    "70263", //عائدية موقع العمل
    "70297", //الغرض من القرض
    "70255", //جهة الاصدار
    //المعلومات المطلوبة للحصول على قرض زراعي
    "70303", //الغرض من القرض
    //المعلومات المطلوبة للحصول على قرض شراء سيارات
    "70282", //اسم الشركة المجهزة
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
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
    //المعلومات المطلوبة للحصول على قرض تجاري
    "70251", //اقرب نقطة دالة
    //المعلومات المطلوبة للحصول على قرض زراعي
    "70268", //اقرب نقطة دالة
    //المعلومات المطلوبة للحصول على قرض شراء منظومات الطاقة المتجددة
    "72315", //اقرب نقطة دالة
  ];

  Arabic_Symbols_Only(Fields_ID);

  //----------------------------------------------------------------------------------------------
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
    //المعلومات المطلوبة للحصول على قرض تجاري
    {
      Field_ID: "70257",
      Field_Prog: "releasedate",
      Min_Date: "2003-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ الاصدار
    {
      Field_ID: "70258",
      Field_Prog: "effectivedate",
      Min_Date: "2003-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ النفاذ
    {
      Field_ID: "93922",
      Field_Prog: "licenseDate",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    }, //تاريخ اجازة التأسيس
  ];

  Date_Limit(Fields_Value);
}
