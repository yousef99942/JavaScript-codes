{
  //----------------------------------------------------------------------------------------
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstnmae = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstnmae")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.founame = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("founame")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phonnumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonnumber")[0].disabled = true; //قفل حقل رقم الهاتف

  //----------------------------------------------------------------------------------------
  //اخفاء مجاميع
  document.getElementById("35459_group").style.display = "none"; //ادخال قيود

  //----------------------------------------------------------------------------------------
  if (event) {
    let Values = [
      {
        Phone_Number: "9647709941547",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الرصافة الاولى",
        Sub_Dept_Name: "شعبة 1",
      }, //محمد غسان
      {
        Phone_Number: "9647702522161",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكرخ الاولى",
        Sub_Dept_Name: "شعبة 2",
      }, //دكتور عمار
      // {
      //   Phone_Number: "9647811911618",
      //   Governorate: "بغداد",
      //   Dept_Name: "مديرية التسجيل العقاري الكرخ الاولى",
      //   Sub_Dept_Name: "شعبة 1",
      // }, //يوسف
      {
        Phone_Number: "9647707843772",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الاعظمية",
        Sub_Dept_Name: "شعبة 1",
      }, //العدل الاول
      {
        Phone_Number: "9647703285050",
        Governorate: "بغداد",
        Dept_Name: "مديرية التسجيل العقاري الكاظمية الاولى",
        Sub_Dept_Name: "شعبة 2",
      }, //العدل الثاني
    ];

    let Result = Values.find(
      (Finding) => this.user.phone_num === Finding.Phone_Number,
    );

    if (Result) {
      document.getElementById("35490_group").style.display = "none";
      document.getElementById("35459_group").style.display = "block";

      //معلومات مدخل البيانات
      this.inputFormField.officesnames = Result.Dept_Name;
      document.getElementsByName("officesnames")[0].disabled = true;
      this.inputFormField.selecterff = Result.Sub_Dept_Name;
      document.getElementsByName("selecterff")[0].disabled = true;
      //ادخال القيود
      this.inputFormField.governorate = Result.Governorate;
      document.getElementsByName("governorate")[0].disabled = true;
      this.inputFormField.direcotorate = Result.Dept_Name;
      document.getElementsByName("direcotorate")[0].disabled = true;
    } else {
      document.getElementById("35490_group").style.display = "block";
      document.getElementById("35459_group").style.display = "none";

      document.getElementById("93127").style.display = "none"; //اسم المديرية او الملاحظية
      document.getElementById("93128").style.display = "none"; //الشعبة

      document.getElementById("93123").style.cssText =
        "color: #ff0000; font-size: 22px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";
    }
  }

  //----------------------------------------------------------------------------------------
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
    "92514", //الاسم الاول لمالك العقار
    "92515", //الاسم الثاني لمالك العقار
    "92516", //الاسم الثالث لمالك العقار
    "92545", //الاسم الرابع لمالك العقار
  ];

  Arabic_Only(Fields_ID);

  //------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية ورمز @
  function Arabic_One_Symbol_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // السماح بـ @ مرة واحدة فقط
        if (e.key === "@") {
          if (input.value.includes("@")) {
            e.preventDefault();
          }
          return;
        }

        // السماح بالأحرف العربية والمسافة فقط
        if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "92517", //اسم الام الاول
    "92546", //اسم اب الام
  ];
}
