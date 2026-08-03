{
  //جلب المعلومات من بوابة اور
  this.inputFormField.nameone = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("nameone")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.nametow = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("nametow")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.nameth = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("nameth")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.namefor = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("namefor")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phonn = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phonn")[0].disabled = true; //قفل حقل رقم الهاتف

  //------------------------------------------------------------------------------------
  //تعديل ليبل
  document.getElementById("87878").style.cssText =
    "color: #7e0404; font-size: 19px; font-weight: bold; padding-top: 14px; padding-bottom: 14px;";
}
