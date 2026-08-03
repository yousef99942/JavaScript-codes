{
  let Groups_ID = [
    "35309_group", //البيانات الشخصية
    "35311_group", // الأستعداد للتحول الرقمي
    "35312_group", //الأستعداد النفسي والمهني للتحول الرقمي
    "35313_group", //المهارات الرقمية الأساسية
    "35314_group", //كفاءت البنية التقنية المتاحة
    "35315_group", //الانظمة والبرامج الالكترونية
    "35316_group", //الدورات التدريبية التي تحتاجها لتكون جاهز للتحول الرقمي
    "35317_group", //مقترحاتك لتحسين التحول الرقمي
    "35320_group", //البيانات الأساسية للتشكيل
    "35321_group", //أستعداد التشكيل للتحول الرقمي
    "35322_group", //مقترحاتك لتحسين التحول الرقمي.
  ];

  Groups_ID.forEach(
    (Hiding) => (document.getElementById(Hiding).style.display = "none"),
  );

  //--------------------------------------------------------------------------------------------
  //جلب المعلومات من بوابة اور
  //البيانات الشخصية
  this.inputFormField.FirstName = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("FirstName")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecondName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.PhoneNumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("PhoneNumber")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  document.getElementById("89545").style.cssText =
    "color: #6e0707; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  document.getElementById("89617").style.cssText =
    "color: #6e0707; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  //--------------------------------------------------------------------------------------------
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
    "89515", //الاسم الاول
    "89516", //الاسم الثاني
    "89517", //الاسم الثالث
    "89518", //العنوان الوظيفي
    "89519", //التشكيل
    "89521", //القسم
    //البيانات الاساسية للتشكيل
    "89573", //التشكيل
  ];

  Arabic_Only(Fields_ID);
}
