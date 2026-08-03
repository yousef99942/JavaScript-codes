{
  //جلب المعلومات من بوابة اور
  this.inputFormField.firstname = this.user.first_name;
  //document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  //document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name;
  //document.getElementsByName("thirdname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name;
  //document.getElementsByName("fourthname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phonenumber = this.user.phone_num;
  //document.getElementsByName("phonenumber")[0].disabled = true; //رقم الهاتف

  //-----------------------------------------------------------------------------------
  //اخفاء المحافظات عدا بغداد
  this.group_of_form[1].fields[0].properties[0].values = [
    "اقسام الكلية في محافظة بغداد",
    /*
    "اقسام الكلية في محافظة ديالى",
    "اقسام الكلية في محافظة النجف الاشرف",
    "اقسام الكلية في محافظة بابل",
    "اقسام الكلية في محافظة الديوانية",
    "اقسام الكلية في محافظة واسط",
    "اقسام الكلية في محافظة ميسان",
    "اقسام الكلية في محافظة ذي قار",
    "اقسام الكلية في محافظة البصرة",
    */
  ];
}
