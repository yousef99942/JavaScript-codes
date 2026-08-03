{
  this.inputFormField.Name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("Name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.forthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("forthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phoneNum = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phoneNum")[0].disabled = true; //قفل حقل رقم الهاتف
}
