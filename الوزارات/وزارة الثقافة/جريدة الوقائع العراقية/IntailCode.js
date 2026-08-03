{
  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thiredname = this.user.last_name;
  document.getElementsByName("thiredname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.phonIntroduce = this.user.phone_num;
  document.getElementsByName("phonIntroduce")[0].disabled = true; //رقم الهاتف
}
