{
  this.inputFormField.firstname = this.user.first_name; //الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true;
  this.inputFormField.secondname = this.user.middle_name; //الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true;
  this.inputFormField.Thirdname = this.user.last_name; //الاسم الثالث
  document.getElementsByName("Thirdname")[0].disabled = true;
  this.inputFormField.fourthname = this.user.forth_name; //الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true;
  this.inputFormField.phonenumber = this.user.phone_num; //رقم الهاتف
  document.getElementsByName("phonenumber")[0].disabled = true;

  //-------------------------------------------------------------------------
  //حصر حقل التاريخ
  //تاربخ التعاقد
  document
    .getElementById("73863")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("Contractdate")[0]
    .setAttribute("min", "1990-01-01");
  document
    .getElementsByName("Contractdate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
