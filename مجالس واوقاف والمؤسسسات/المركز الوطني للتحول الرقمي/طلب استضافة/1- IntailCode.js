{
  // توضيح الية العمل الخاصة بالتكامل ان وجدت
  document.getElementById("68958").style.display = "none";

  //كروب معلومات الاستضافة
  document.getElementById("34207_group").style.display = "none";

  document.getElementById("71680").style.paddingTop = "20px";

  //الاسم الثلاثي للمخول
  this.inputFormField.FirstName = this.user.first_name;
  document.getElementsByName("FirstName")[0].disabled = true; //الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name;
  document.getElementsByName("SecondName")[0].disabled = true; //الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name;
  document.getElementsByName("ThirdName")[0].disabled = true; //الاسم الثالث

  this.inputFormField.PhoneOfau = this.user.phone_num;
  document.getElementsByName("PhoneOfau")[0].disabled = true; //رقم الهاتف
}
