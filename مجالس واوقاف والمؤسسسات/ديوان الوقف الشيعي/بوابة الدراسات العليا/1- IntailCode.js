{
  var Fields_ID = [
    "75095", //اسباب النقل
    "75096", //اسباب التأجيل
    "75097", //اسباب تخفيض القسط
    "75100", //سبب ترقين القيد
    "75102", //سبب ترقين القيد (الانسحاب بعد المباشرة)
    "75103", //سبب الغاء القبول
    "75104", //سبب النقل من كليتك
  ];

  for (var i = 0; i < Fields_ID.length; i++) {
    document.getElementById(Fields_ID[i]).style.display = "none";
  }

  this.inputFormField.firstnam = this.user.first_name;
  document.getElementsByName("firstnam")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondnam = this.user.middle_name;
  document.getElementsByName("secondnam")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thridnam = this.user.last_name;
  document.getElementsByName("thridnam")[0].disabled = true; //الاسم الثالث

  this.inputFormField.fourthnam = this.user.forth_name;
  document.getElementsByName("fourthnam")[0].disabled = true; //الاسم الرابع

  this.inputFormField.mobilenum = this.user.phone_num;
  document.getElementsByName("mobilenum")[0].disabled = true; //رقم الهاتف
}
