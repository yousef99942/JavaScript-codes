{
  //جلب معلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phonenumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonenumber")[0].disabled = true; //قفل حقل رقم الهاتف

  //--------------------------------------------------------------------------------------
  //التعهد
  document.getElementById("76076").style.cssText =
    "color: #640303; font-size: 22px; font-weight: bold; padding-top: 13px; padding-bottom: 13px;";
}
