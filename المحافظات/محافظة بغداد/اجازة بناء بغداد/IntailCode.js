{
  this.inputFormField.name = this.user.first_name;
  document.getElementsByName("name")[0].disabled = true; //الاسم الاول

  this.inputFormField.fathername = this.user.middle_name;
  document.getElementsByName("fathername")[0].disabled = true; //الاسم الثاني

  this.inputFormField.grandfather = this.user.last_name;
  document.getElementsByName("grandfather")[0].disabled = true; //الاسم الثالث

  this.inputFormField.fatherofgrandfather = this.user.forth_name;
  document.getElementsByName("fatherofgrandfather")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phone = this.user.phone_num;
  document.getElementsByName("phone")[0].disabled = true; //رقم الهاتف
}
