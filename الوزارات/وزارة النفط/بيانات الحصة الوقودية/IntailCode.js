{
  this.inputFormField.FirstName = this.user.first_name;
  document.getElementsByName("FirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name;
  document.getElementsByName("SecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name;
  document.getElementsByName("ThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.PhoneNo = this.user.phone_num;
  document.getElementsByName("PhoneNo")[0].disabled = true; //رقم الهاتف
}
