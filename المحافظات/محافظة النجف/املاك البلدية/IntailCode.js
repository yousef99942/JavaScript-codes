{
  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.sacondname = this.user.middle_name;
  document.getElementsByName("sacondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.namethird = this.user.last_name;
  document.getElementsByName("namethird")[0].disabled = true; //الاسم الثالث

  this.inputFormField.forname = this.user.forth_name;
  document.getElementsByName("forname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.Phone = this.user.phone_num;
  document.getElementsByName("Phone")[0].disabled = true; //رقم الهاتف
}
