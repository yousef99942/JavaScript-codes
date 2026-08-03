{
  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name;
  document.getElementsByName("thirdname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name;
  document.getElementsByName("fourthname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.fifthname = this.user.family_name;
  document.getElementsByName("fifthname")[0].disabled = true; //اللقب

  this.inputFormField.phoneNumber = this.user.phone_num;
  document.getElementsByName("phoneNumber")[0].disabled = true; //رقم الهاتف

  this.inputFormField.UnifiedCardId = this.user.profile.national_id.nationalID;
  document.getElementsByName("UnifiedCardId")[0].disabled = true; //رقم الموحدة

  this.inputFormField.Motherfirst = this.user.profile.mother_first_name;
  document.getElementsByName("Motherfirst")[0].disabled = true; //اسم الام الاول

  this.inputFormField.Mothers2Name = this.user.profile.mother_middle_name;
  document.getElementsByName("Mothers2Name")[0].disabled = true; //اسم الام الثاني
}
