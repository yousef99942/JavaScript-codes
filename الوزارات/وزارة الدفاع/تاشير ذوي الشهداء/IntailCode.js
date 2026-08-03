{
  this.inputFormField.nameF = this.user.first_name;
  document.getElementsByName("nameF")[0].disabled = true; //الاسم الاول

  this.inputFormField.nameT = this.user.middle_name;
  document.getElementsByName("nameT")[0].disabled = true; //الاسم الثاني

  this.inputFormField.nameFu = this.user.last_name;
  document.getElementsByName("nameFu")[0].disabled = true; //الاسم الثالث

  this.inputFormField.namefi = this.user.forth_name;
  document.getElementsByName("namefi")[0].disabled = true; //الاسم الرابع

  document.getElementById("74801").style.cssText =
    "color: #b61313; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 15px";

  //تاريخ الكتاب الصادر من مؤسسة الشهداء
  document
    .getElementById("71835")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("datebook")[0].setAttribute("min", "2026-01-01");
  document.getElementsByName("datebook")[0].setAttribute("max", "2026-12-31");
}
