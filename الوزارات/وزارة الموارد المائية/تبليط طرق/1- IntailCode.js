{
  this.inputFormField.firstname = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("firstname")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.forthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("forthname")[0].disabled = true; //قفل حقل الاسم الرابع

  /*
  this.inputFormField.idno = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  document.getElementsByName("idno")[0].disabled = true; //قفل حقل رقم الموحدة
  */
}
