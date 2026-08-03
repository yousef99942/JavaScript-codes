{
  //تعديل خصائص الليبل
  //التقديم يكون لمرة واحدة / يرجى التأكد من البيانات التي يتم ملؤها و ارفاقها
  document.getElementById("75377").style.cssText =
    "color: #5f0404; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 13px; text-align: center;";

  //اذكر اسماء مراحل الدراسة التي مررت بها
  document.getElementById("75394").style.cssText =
    "color: #5f0404; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 13px; text-align: center;";

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز
  function Arabic_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      if (!input) continue; // تجنب الخطأ إذا العنصر غير موجود

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // عربي + مسافة + جميع الرموز الشائعة
        const regex = /^[\u0600-\u06FF\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //معلومات السكن و العمل
    "75390", //محل السكن قبل الاعتقال
    "75391", //محل السكن بعد الاعتقال
    "75392", //اسم ومكان المهنة قبل الاعتقال
    "75393", //اسم ومكان المهنة بعد الاعتقال
    //معلومات السجن او الاعتقال
    "75403", //جهة ومحل الاعتقال
    "75406", //اذكر اسم ضابط التحقيق او الاشخاص المسؤولين عن الاعتقال
    "75407", //اذكر الادلة الرسمية
    "75408", //اذكر الادلة الغير رسمية
  ];

  Arabic_Symbols_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
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
    //المعلومات الشخصية للمتقدم بالشمول
    "75378", //الاسم الاول
    "75379", //الاسم الثاني
    "75380", //الاسم الثالث
    "75381", //الاسم الرابع
    "75382", //اللقب
    "75383", //اسم الام الاول
    "76034", //اسم الام الثاني
    "76035", //اسم الام الثالث
    "76036", //اسم الوكيل الاول
    "76108", //اسم الوكيل الثاني
    "76109", //اسم الوكيل الثالث
    "76110", //اسم الوكيل الرابع
    "76037", //اسم الوريث الاول
    "76111", //اسم الوريث الثاني
    "76112", //اسم الوريث الثالث
    "76113", //اسم الوريث الرابع
    //معلومات السكن و العمل
    "75395", //اسم المدرسة الابتدائية
    "75396", //اسم المدرسة المتوسطة
    "75397", //اسم المدرسة الاعدادية
    "75399", //اسم المعهد
    "75398", //اسم الجامعة
    "75400", //اخرى
    //معلومات السجن او الاعتقال
    "75403", //جهة ومحل الاعتقال
    "75414", //الاسم الاول للشاهد الاول
    "75415", //الاسم الثاني للشاهد الاول
    "75406", //ذكر اسم ضابط التحقيق او الاشخاص المسؤولين عن الاعتقال
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر حقول التواريخ
  //تاريخ الاعتقال
  document
    .getElementById("75404")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("datestart")[0].setAttribute("min", "1960-01-01");
  document.getElementsByName("datestart")[0].setAttribute("max", "2003-12-31");

  //تاريخ اطلاق السراح
  document
    .getElementById("75405")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("endd")[0].setAttribute("min", "1960-01-01");
  document.getElementsByName("endd")[0].setAttribute("max", "2003-12-31");
}
