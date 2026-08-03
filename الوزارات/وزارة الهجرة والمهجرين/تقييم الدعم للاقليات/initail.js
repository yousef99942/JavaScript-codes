{
  this.inputFormField.FirstName = this.user.first_name;
  document.getElementsByName("FirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name;
  document.getElementsByName("SecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.PhoneNumber = this.user.phone_num;
  document.getElementsByName("PhoneNumber")[0].disabled = true; //رقم الهاتف

  document.getElementById("23260_group").style.display = "none";
  document.getElementById("23261_group").style.display = "none";
  document.getElementById("23262_group").style.display = "none";
  document.getElementById("23263_group").style.display = "none";
  document.getElementById("23264_group").style.display = "none";
}
