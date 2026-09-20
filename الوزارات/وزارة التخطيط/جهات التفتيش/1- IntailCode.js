{
  //جلب المعلومات من بوابة اور
  let First_Name = this.user.first_name; //الاسم الاول
  let Second_Name = this.user.middle_name; //الاسم الثاني
  let Third_Name = this.user.last_name; //الاسم الثالث

  this.inputFormField.sign = First_Name + " " + Second_Name + " " + Third_Name;
  document.getElementsByName("sign")[0].disabled = true;

  //-----------------------------------------------------------------------------------
  //تاريخ تقديم الطلب
  const today = new Date();

  const Thedate =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  this.inputFormField.applicationdate = Thedate;
  document.getElementsByName("applicationdate")[0].disabled = true;

  //-----------------------------------------------------------------------------------
  //اخفاء جداول
  //اذا كانت الاجابة نعم  املأ الجدول التالي:
  document.getElementById("92526").style.display = "none";

  //-----------------------------------------------------------------------------------
  //تغيير خصائص الليبلات
  //التعهد
  document.getElementById("92532").style.cssText =
    "color: #740000; font-size: 25px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  //اتعهد بصحة المعلومات المقدمة
  document.getElementById("92542").style.cssText =
    "color: #740000; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px;";

  let Labels_ID = [
    "92533", //نحن مقدمو الطلب المرفق نتعهد بما يلي :
    "92534", //النقطة الاولى
    "92535", //النقطة الثانية
    "92536", //النقطة الثالثة
    "92537", //النقطة الرابعه
    "92538", //النقطة الخامسة
    "92539", //النقطة السادسة
    "92540", //النقطة السابعه
    "92541", //النقطة الثامنة
  ];

  Labels_ID.forEach((id) => {
    document.getElementById(id).style.cssText =
      "color: #490000; font-size: 18px; font-weight: bold; padding-top: 10px; padding-bottom: 10px;";
  });

  //
  document.getElementById("92430").style.cssText =
    "color: #490000; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة الانكليزية والعربية
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
    "92391", //اسم جهة التفتيش:
    "92393", //العنوان الرئيسي :
    "92397", //الشخص الذي يتم الاتصال به :
    "92398", //العنوان الوظيفي :
    "92401", //الحالة القانونية:
    "92403", //عنوان القانون/ الاجازة:
    "92416", //نوع ونفاذية الترخيص
    "92428", //مجال عمل المؤسسة :
    "92425", //اذا كانت الاجابة نعم - اسم المؤسسة الام :
    "92432", //أسم مديرالشركة :
    "92434", //مؤهله العلمي :
    "92437", //خبرته :
    "92439", //المنصب في المؤسسة :
    "92441", //اسم المدير الفني:
    "92442", //مؤهله العلمي :
    "92444", //خبرته
    "92445", //المنصب في المؤسسة :
    "92446", //اسم المدير المسؤول عن التدقيق:
    "92447", //مؤهله العلمي :
    "92448", //خبرته
    "92449", //المنصب في المؤسسة :
  ];

  Arabic_English_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //تحديد التواريخ
  //نفاذية الترخيص
  document
    .getElementById("92422")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("expirey")[0].setAttribute("min", "2003-01-01");
  document
    .getElementsByName("expirey")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
