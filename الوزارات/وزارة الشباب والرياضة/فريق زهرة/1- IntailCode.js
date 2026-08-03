{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  //اذكري الاعمال التطوعية او الخدمات الاجتماعية ان وجدت
  document.getElementById("76030").style.display = "none";

  //------------------------------------------------------------------------------------
  //فلترة حقل التاريخ
  document
    .getElementById("76020")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("birthdaypersonal")[0]
    .setAttribute("min", "1960-01-01");
  document
    .getElementsByName("birthdaypersonal")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
