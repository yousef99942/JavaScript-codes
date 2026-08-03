{
  if (this.form_data.cardtype == "هوية تعريفية") {
    document.getElementsByClassName("21570")[0].style.display = "none";
    document.getElementsByClassName("47164")[0].style.display = "none";
  }

  if (
    this.form_data.cardtype == "باج للسيارات الخصوصي" ||
    this.form_data.cardtype == "باج للسيارات الاجرة (الصفراء حصرا)"
  ) {
    document.getElementsByClassName("45832")[0].style.display = "none"; //البطاقة الوطنية +بطاقة السكن ( الوجه الامامي والخلفي بصفحة واحدة)
    document.getElementsByClassName("47165")[0].style.display = "none";
  }

  if (this.form_data.cardtype == "هوية تعريفية") {
    document.getElementsByClassName("45454")[0].style.display = "none"; //صورة كتاب تسجيل هيئة النقل
    document.getElementsByClassName("45858")[0].style.display = "none"; //وكالة ان وجدت
  }

  if (this.form_data.cardtype == "باج للسيارات الخصوصي") {
    document.getElementsByClassName("45454")[0].style.display = "none"; //صورة كتاب تسجيل هيئة النقل
  }
}
