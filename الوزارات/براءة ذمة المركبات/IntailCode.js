{
  this.inputFormField.firstName = this.user.first_name;
  document.getElementsByName("firstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondName = this.user.middle_name;
  document.getElementsByName("secondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thirdName = this.user.last_name;
  document.getElementsByName("thirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.phoneNumber = this.user.phone_num;
  document.getElementsByName("phoneNumber")[0].disabled = true; //رقم الهاتف
}
