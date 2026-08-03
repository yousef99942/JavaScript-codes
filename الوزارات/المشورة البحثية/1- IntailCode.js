{
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.seconedname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("seconedname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thiredname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thiredname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف
}
