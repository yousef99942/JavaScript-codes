{
  this.inputFormField.FName = this.user.first_name;
  document.getElementsByName("FName")[0].disabled = true; //الاسم الاول

  this.inputFormField.SecName = this.user.middle_name;
  document.getElementsByName("SecName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.ThName = this.user.last_name;
  document.getElementsByName("ThName")[0].disabled = true; //الاسم الثالث
}
