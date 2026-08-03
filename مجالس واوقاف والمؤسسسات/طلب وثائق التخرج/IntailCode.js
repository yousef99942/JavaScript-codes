{
  this.inputFormField.namestudent = this.user.first_name;
  document.getElementsByName("namestudent")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thardname = this.user.last_name;
  document.getElementsByName("thardname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.forthname = this.user.forth_name;
  document.getElementsByName("forthname")[0].disabled = true; //الاسم الرابع
}
