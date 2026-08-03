{
  //جلب المعلومات من بوابة اور
  this.inputFormField.name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.onename = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("onename")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nametwo = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nametwo")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.namethree = this.user.family_name; //جلب اللقب
  document.getElementsByName("namethree")[0].disabled = true; //قفل حقل اللقب

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.bearth = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("bearth")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //-----------------------------------------------------------------------------------------
  //تغيير خصائص ليبل
  document.getElementById("90817").style.cssText =
    "color: #630000; font-size: 20px; font-weight: bold; padding-top: 12px; padding-bottom: 12px; text-align: center;";

  //-----------------------------------------------------------------------------------------
  //اخفاء حقول من الاستمارة
  var Fields_ID = [
    "90835", //الخبرة المهنية والتدريبية
    "90848", //الجاهزية والالتزام
    "90859", //عنوان المدرسة
    "90874", //عدد الطلبة الكلي في المدرسة
    "90888", //معلومات ادارة المدرسة (استمارة المدارس )
    "90894", //جاهزية المدرسة لتنفيذ المبادرة
    "90902", //نوع المشاركات السابقة
  ];

  Fields_ID.forEach(
    (Hiding) => (document.getElementById(Hiding).style.display = "none"),
  );

  //-----------------------------------------------------------------------------------------
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
    "90827", //اسم المدرسة
    "90828", //المنطقة التي تقع فيها المدرسة
    "90832", //اختصاص مدير المدرسة
    "90840", //اذا كانت الاجابة نعم اذكر اهم الدورات التي شاركت بها
    "90843", //اذا كانت الاجابة نعم اذكر عنوان الورشة او التدريب والجهة المنفذة
    "90845", //وضح نوع الانشطة او المبادرات التي شاركت بها
    "90862", //الناحية
    "90864", //المنطقة
    "90889", //اسم مدير/ة المدرسة
    "90892", //اسم معاون /ة المدرسة
    "90893", //ماسبب رغبة المدرسة بالمشاركة في المبادرة
    "90901", //نوع المشاركة (اخرى )
    "92929", //الاختصاص او المادة الدراسية
  ];

  Arabic_Only(Fields_ID);
}
