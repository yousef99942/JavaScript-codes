{
  //جلب المعلومات من بوابة اور
  let First_Name = this.user.first_name; //الاسم الاول
  let Second_Name = this.user.middle_name; //الاسم الثاني
  let Third_Name = this.user.last_name; //الاسم الثالث

  this.inputFormField.pop = First_Name + " " + Second_Name + " " + Third_Name;
  document.getElementsByName("pop")[0].disabled = true;

  //-----------------------------------------------------------------------------
  const today = new Date();

  const Thedate =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  this.inputFormField.date = Thedate;
  document.getElementsByName("date")[0].disabled = true;

  //-----------------------------------------------------------------------------
  //اخفاء جداول
  //اذا كانت الاجابة نعم يرجى ملئ الجدول التالي
  document.getElementById("67971").style.display = "none";
  //اذا كانت الاجابة لا, هل توجد خطة للاشتراك  في برامج اختبار المهارة الفنية/ مقارنات بينية ؟املئ الجدول التالي:
  document.getElementById("67974").style.display = "none";

  //-----------------------------------------------------------------------------
  //تغيير خصائص الليبلات
  var First_Labels_ID = [
    "67943", //معلومات الشخص الذي يتم الاتصال به
    "67952", //الحالة القانونية للمختبر
    "67957", //معلومات عن المنتسبين
    "92125", //التعهد:
  ];

  for (var i = 0; i < First_Labels_ID.length; i++) {
    document.getElementById(First_Labels_ID[i]).style.cssText =
      "color: #4e0202; font-size: 20px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";
  }

  var Second_Labels_ID = [
    "92126", //نحن مقدمو الطلب المرفق نتعهد بما يلي :
    "92222", //النقطة الاولى
    "92223", //النقطة الثانية
    "92224", //النقطة الثالثة
    "92225", //النقطة الرابعه
    "92226", //النقطة الخامسة
    "92227", //النقطة السادسة
    "92228", //النقطة السابعه
    "92229", //النقطة الثامنة
  ];

  for (var i = 0; i < Second_Labels_ID.length; i++) {
    document.getElementById(Second_Labels_ID[i]).style.cssText =
      "color: #490000; font-size: 18px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";
  }

  //اتعهد بصحة كافة المعلومات المذكورة اعلاه
  document.getElementById("92927").style.cssText =
    "color: #000000; font-size: 20px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";

  //-----------------------------------------------------------------------------
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
    "67938", //اسم الشركة/ المختبر
    "91987", //اسم الشخص
    "67945", //العنوان الوظيفي
    "67954", //عنوان القانون/ الاجازة
    "67955", //نفاذية الترخيص
    "67966", //اسم المؤسسة الام
    "67967", //مجال عمل المؤسسة الام
    "67968", //ماهي المدة الزمنية التي تم خلالها تطبيق النظام الاداري للمختبر
    "91997", //اذا كان اختيار مجال الاعتماد (اخرى) يرجى ملء الحقل التالي:
    "92220", //المجال المراد التقدم فيه لاعتماد  عنوان المختبر:
  ];

  Arabic_English_Only(Fields_ID);

  //-----------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز فقط
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
    "67940", //العنوان الرئيسي
  ];

  Arabic_Symbols_Only(Fields_ID);
}
