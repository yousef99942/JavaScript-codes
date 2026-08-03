{
  this.inputFormField.EmpFirstName = this.user.first_name;
  document.getElementsByName("EmpFirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.EmpSecondName = this.user.middle_name;
  document.getElementsByName("EmpSecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.EmpPhoneNumber = this.user.phone_num;
  document.getElementsByName("EmpPhoneNumber")[0].disabled = true; //رقم الهاتف

  document.getElementById("33653_group").style.display = "none";
  document.getElementById("33655_group").style.display = "none";
  document.getElementById("33656_group").style.display = "none";
  document.getElementById("33657_group").style.display = "none";
  document.getElementById("33658_group").style.display = "none";
  document.getElementById("33659_group").style.display = "none";
}