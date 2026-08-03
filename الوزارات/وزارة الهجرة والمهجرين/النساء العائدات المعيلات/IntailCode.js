{
  //جلب المعلومات من بوابة اور
  this.inputFormField.FirstName = this.user.first_name;
  document.getElementsByName("FirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name;
  document.getElementsByName("SecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name;
  document.getElementsByName("ThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.FourthName = this.user.forth_name;
  document.getElementsByName("FourthName")[0].disabled = true; //الاسم الرابع

  //-----------------------------------------------------------------------------
  //اخفاء قيمة الدعم المادي من مجموعة الاحتياجات والدعم المطلوب
  var Showed_Values = [
    "تدريب مهني أو تأهيل للعمل",
    "دعم نفسي واجتماعي",
    "مشروع مدر للدخل",
    "دعم تعليمي للاطفال",
    "مساعدات غذائية او صحية",
    "اخرى",
  ];

  this.group_of_form[4].fields[0].properties[0].values = Showed_Values;
}
