{
  //يخفي كل المحافظات عدا ميسان
  this.group_of_form[0].fields[11].properties[0].values = ["ميسان"];
  //يخفي كل الاقضية عدا اقضية ميسان
  this.group_of_form[0].fields[12].properties[0].values = [
    "العدل",
    "العمارة",
    "علي الغربي",
    "علي الشرقي",
    "الكحلاء",
    "الخير",
    "الميمونة",
    "المجر الكبير",
    "المشرح",
    "العزيز",
    "سيد أحمد الرفاعي",
    "السلام",
    "بني هاشم",
    "كميت",
    "قلعة صالح",
  ];

  //يخفي ارقام الاعلان عدا رقم 3
  this.group_of_form[2].fields[0].properties[0].values = ["8"];
  //اخفي اسماء الشركات عدا شركة محددة
  this.group_of_form[2].fields[1].properties[0].values = ["KAR"];
  //اخفاء الاختصاصات عدا اختصاصات محددة
  this.group_of_form[2].fields[2].properties[0].values = [
    "مهندس سوائل الحفر",
    "مشرف الصحة والسلامة والبيئة",
    "مشرف المواد والخدمات اللوجستية",
    "مشرف الحفر",
    "مشرف الحفر الليلي",
    "مهندس ضمان الجودة والسيطرة النوعية",
    "مشرف اقدم لاكمال واختبارات الانتاج",
    "مهندس الحفر في موقع البئر",
    "مهندس انشاءات مدنية",
  ];

  //----------------------------------------------------------------------------------
  //التعهد
  document.getElementById("75845").style.cssText =
    "color: #880707; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 15px;";

  //----------------------------------------------------------------------------------
  //جلب المعلومات من البوابة
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.familyname = this.user.family_name; //جلب اللقب
  document.getElementsByName("familyname")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phinenumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phinenumber")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------------------
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
    "75850", //اسم الام الاول
    "75851", //اسم اب الام
    "75852", //اسم جد الام
    "64639", //الحي
  ];

  Arabic_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والرموز
  function Arabic_With_Symbols(Field_ID) {
    const input = document.getElementById(Field_ID);

    input.addEventListener("input", () => {
      // الأحرف العربية + المسافة + الرموز
      input.value = input.value.replace(
        /[^\u0600-\u06FF\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g,
        "",
      );
    });
  }

  var Fields_ID = [
    "64640", //اقرب نقطة دالة
  ];

  Arabic_With_Symbols(Fields_ID);

  //------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية والانكليزية فقط
  function Arabic_English_Only(Fields_ID) {
    for (let i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // عربي + إنجليزي + مسافة
        if (!/^[\u0600-\u06FFa-zA-Z ]$/.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    //مجموعة التحصيل الدراسي
    "64641", //الجامعة
    "64676", //الكلية
    "65786", //المعهد
    "64677", //القسم
    "64678", //التخصص الدقيق
  ];

  Arabic_English_Only(Fields_ID);

  //-----------------------------------------------------------------------------------
  //تاريخ التخرج
  document
    .getElementById("64634")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("birthdate")[0].setAttribute("min", "1990-01-01");
  document
    .getElementsByName("birthdate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ التخرج
  document
    .getElementById("64679")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("graduationdate")[0]
    .setAttribute("min", "2015-01-01");
  document
    .getElementsByName("graduationdate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ تسجيل الاستشارية
  document
    .getElementById("64680")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("date")[0].setAttribute("min", "2015-01-01");
  document
    .getElementsByName("date")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ الاعلان
  document
    .getElementById("64684")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("year")[0]
    .setAttribute("min", `${new Date().getFullYear()}-01-01`);
  document
    .getElementsByName("year")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //--------------------------------------------------------------------------------------
  function Numbers_Dot_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // السماح بالأرقام
        if (/^[0-9]$/.test(e.key)) return;

        // السماح بنقطة واحدة فقط
        if (e.key === "." && !input.value.includes(".")) return;

        e.preventDefault();
      });
    }
  }

  var Fields_ID = [
    //مجموعة التحصيل الدراسي
    "70123", //المعدل
  ];

  //Numbers_Dot_Only(Fields_ID);
}
