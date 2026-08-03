{
  this.inputFormField.Name = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("Name")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.SecondName = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("SecondName")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.ThirdName = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("ThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف
}
