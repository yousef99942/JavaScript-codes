{
  this.inputFormField.namef = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("namef")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.names = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("names")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nameth = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nameth")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.namefo = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("namefo")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.pho = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("pho")[0].disabled = true; //قفل حقل رقم الهاتف
}
