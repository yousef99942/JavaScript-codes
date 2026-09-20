{
  //جلب المعلومات من بوابة اور
  // this.inputFormField.FirstName = this.user.first_name; //جلب الاسم الاول
  // document.getElementsByName("FirstName")[0].disabled = true; //قفل حقل الاسم الاول

  // this.inputFormField.SecondName = this.user.middle_name; //جلب الاسم الثاني
  // document.getElementsByName("SecondName")[0].disabled = true; //قفل حقل الاسم الثاني

  // this.inputFormField.ThirdName = this.user.last_name; //جلب الاسم الثالث
  // document.getElementsByName("ThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

  // this.inputFormField.FourthName = this.user.forth_name; //جلب الاسم الرابع
  // document.getElementsByName("FourthName")[0].disabled = true; //قفل حقل الاسم الرابع

  // this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  // document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  //---------------------------------------------------------------------------------------
  //التاكد من المخول
  const IDs = [
    // البيانات الشخصية
    "88979", // الاسم الاول
    "89277", // الاسم الثاني
    "89278", // الاسم الثالث
    "89279", // الاسم الرابع
    "88980", // أسم الأم الاول
    "89280", // اسم الأم الثاني
    "89281", // اسم الأم الثالث
    "88981", // رقم الهاتف
    "88982", // عدد افراد الاسرة
    "88985", // المستوى التعليمي
    "88986", // الحالة الأجتماعية
    "35226_group", // عنوان السكن
    "35227_group", // معلومات المشروع
    "35228_group", //الملائمة
    "35229_group", //الكفاءة
    "35230_group", //الفعالية
    "35231_group", //الأثر
    "35232_group", //الأستدامة
    "35245_group", //اقتراحتك
  ];

  IDs.forEach((id) => (document.getElementById(id).style.display = "none"));

  if (this.user.phone_num) {
    var Phone_Numbers = [
      "9647722438112", //ميادة عبد المحسن
      "9647719758854", //رسل عامر براك
      "9647706242275", //كرار
      "9647708860872", //علي غني
    ];

    let Result = false;
    Phone_Numbers.forEach((number) => {
      if (number === this.user.phone_num) Result = true;
    });
    if (Result) {
      IDs.forEach(
        (id) => (document.getElementById(id).style.display = "block"),
      );
      document.getElementById("95291").style.display = "none"; // تعذر اكمال عملية التحقق لكون المعلومات لا تطابق معلومات المخولين
    } else {
      document.getElementById("95291").style.display = "block"; // تعذر اكمال عملية التحقق لكون المعلومات لا تطابق معلومات المخولين
      IDs.forEach((id) => (document.getElementById(id).style.display = "none"));

      document.getElementById("95291").style.cssText =
        "color: #610000; font-size: 25px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
    }
  }

  //---------------------------------------------------------------------------------------
  //اخفاء مجاميع
  let Groups_ID = [
    "35228_group", //الملائمة
    "35229_group", //الكفاءة
    "35230_group", //الفعالية
    "35231_group", //الأثر
    "35232_group", //الأستدامة
  ];

  Groups_ID.forEach(
    (Showing) => (document.getElementById(Showing).style.display = "none"),
  );
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
    //البيانات الشخصية
    "88980", //أسم الأم الاول
    "89280", //اسم الأم الثاني
    "89281", //اسم الأم الثالث
    //عنوان السكن
    "88988", //قضاء / ناحية
    //معلومات المشروع
    "88992", //نوع المشروع
  ];

  Arabic_Only(Fields_ID);

  //---------------------------------------------------------------------------------------
  //حصر حقل التاريخ
  //معلومات المشروع
  //تاريخ البدء
  document
    .getElementById("88993")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("history")[0].setAttribute("min", "1980-01-01");
  document
    .getElementsByName("history")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
