{
  //معلومات الاسم من اور
  this.inputFormField["formOrganizerName"] =
    `${this.user.first_name} ${this.user.middle_name} ${this.user.last_name}`;
  document.getElementsByName("formOrganizerName")[0].disabled = true;
  this.inputFormField["employeePhoneNumber"] = this.inputFormField[
    "phoneNumber"
  ] = this.user.phone_num;
  document.getElementsByName("employeePhoneNumber")[0].disabled = true;

  var Groups_ID = [
    "34933_group", //مؤشرات الأداء لقياس التزام المؤسسات الحكومية العراقية بتنفيذ الدفع الإلكتروني
  ];

  for (var i = 0; i < Groups_ID.length; i++) {
    document.getElementById(Groups_ID[i]).style.display = "none";
  }
}
