{
  this.inputFormField.FirstName = this.user.first_name;
  document.getElementsByName("FirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name;
  document.getElementsByName("SecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name;
  document.getElementsByName("ThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.FourthName = this.user.forth_name;
  document.getElementsByName("FourthName")[0].disabled = true; //الاسم الرابع

  this.inputFormField.PhoneNumber = this.user.phone_num;
  document.getElementsByName("PhoneNumber")[0].disabled = true; //رقم الهاتف
}
