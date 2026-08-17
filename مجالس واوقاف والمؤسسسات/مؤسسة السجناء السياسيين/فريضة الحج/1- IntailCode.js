{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.fathername = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("fathername")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thiredname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thiredname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.furthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("furthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.Title = this.user.family_name; //جلب اللقب
  //document.getElementsByName("Title")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.birthday = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("birthday")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //-------------------------------------------------------------------------------------------
  //اخفاء مجاميع
  document.getElementById("35475_group").style.display = "none"; //بيانات ورثة المتوفي
  document.getElementById("35476_group").style.display = "none"; //بيانات تنازل الاصيل الحي للورثة

  //-------------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  var Labels_ID = [
    "93043", //تملئ بيانات المتنازل اليه
    "93246", //تملئ بيانات المتنازل اليه
    "93068", //اتعهد بصحة كافة البيانات و اتحمل كافة التابعات القانونية
  ];

  for (var i = 0; i < Labels_ID.length; i++) {
    document.getElementById(Labels_ID[i]).style.cssText =
      "color: #6e0000; font-size: 22px; font-weight: bold; padding-top: 13px; padding-bottom: 13px; text-align: center;";
  }

  //-------------------------------------------------------------------------------------------
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
    //بيانات المشمول بقانون المؤسسة
    "92939", //اللقب
    "92940", //اسم ام المشمول
    "92941", //اسم اب الام للمشمول
    "92942", //اسم جد الام للمشمول
    //بيانات ورثة المتوفي
    "92956", //اسم الوريث الاول
    "92958", //اسم اب الوريث
    "92959", //اسم جد الوريث
    "92960", //اسم الجد الرابع للوريث
    "92961", //اللقب
    "92962", //اسم ام الوريث
    "92963", //اسم اب الام للوريث
    "92964", //اسم جد الام للوريث
    //بيانات تنازل الاصيل الحي للورثة
    "93045", //الاسم الاول
    "93047", //اسم الاب
    "93049", //اسم الجد
    "93051", //اسم اب الجد
    "93052", //اللقب
    "93053", //اسم الام
    "93062", //اسم اب الام
    "93063", //اسم جد الام
  ];

  Arabic_Only(Fields_ID);

  //-------------------------------------------------------------------------------------------
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
    //بيانات ورثة المتوفي
    {
      Field_ID: "92968",
      Field_Prog: "birthdayy",
      Min_Date: "1940-01-01",
      Max_Date: `${new Date().getFullYear() - 18}-12-31`,
    }, //تاريخ الميلاد
    //بيانات تنازل الاصيل الحي للورثة
    {
      Field_ID: "93064",
      Field_Prog: "birthdaayy",
      Min_Date: "1940-01-01",
      Max_Date: `${new Date().getFullYear() - 18}-12-31`,
    }, //تاريخ الميلاد
  ];

  Date_Limit(Fields_Value);
}
