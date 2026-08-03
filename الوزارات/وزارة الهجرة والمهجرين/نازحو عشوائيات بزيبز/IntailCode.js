{
  document.getElementById("33764_group").style.display = "none";

  this.inputFormField.FirstName = this.user.first_name;
  document.getElementsByName("FirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name;
  document.getElementsByName("SecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.PhoneNumber = this.user.phone_num;
  document.getElementsByName("PhoneNumber")[0].disabled = true; //رقم الهاتف

  document.getElementById("65286").style.color = "red";
  document.getElementById("65286").style.fontSize = "20px";
  document.getElementById("65286").style.fontWeight = "bold";
  document.getElementById("65286").style.paddingTop = "10px";
  document.getElementById("65286").style.paddingBottom = "10px";
}
