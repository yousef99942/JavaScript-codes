{
  //معلومات الاسم من اور
  this.inputFormField["formOrganizerName"] =
    `${this.user.first_name} ${this.user.middle_name} ${this.user.last_name}`;
  document.getElementsByName("formOrganizerName")[0].disabled = true;
  this.inputFormField["employeePhoneNumber"] = this.inputFormField[
    "phoneNumber"
  ] = this.user.phone_num;
  document.getElementsByName("employeePhoneNumber")[0].disabled = true;

  //عناوين رئيسية
  document
    .getElementById("75643")
    .setAttribute(
      "style",
      "color: #1b6fb3ff !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #3540dc36;border-radius: 5px;",
    );

  document
    .getElementById("75648")
    .setAttribute(
      "style",
      "color: #1b6fb3ff !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #3540dc36;border-radius: 5px;",
    );

  document
    .getElementById("75649")
    .setAttribute(
      "style",
      "color: #1b6fb3ff !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #3540dc36;border-radius: 5px;",
    );

  document
    .getElementById("75657")
    .setAttribute(
      "style",
      "color: #1b6fb3ff !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #3540dc36;border-radius: 5px;",
    );

  //ملاحظات
  document
    .getElementById("75734")
    .setAttribute(
      "style",
      "color: rgb(179, 27, 27) !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #dc353536;border-radius: 5px;",
    );

  document
    .getElementById("75735")
    .setAttribute(
      "style",
      "color: rgb(179, 27, 27) !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #dc353536;border-radius: 5px;",
    );

  document
    .getElementById("75736")
    .setAttribute(
      "style",
      "color: rgb(179, 27, 27) !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #dc353536;border-radius: 5px;",
    );

  document
    .getElementById("75737")
    .setAttribute(
      "style",
      "color: rgb(179, 27, 27) !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #dc353536;border-radius: 5px;",
    );

  document
    .getElementById("75738")
    .setAttribute(
      "style",
      "color: rgb(179, 27, 27) !important;font-weight: bold;padding: 10px 10px 10px 10px;margin: 10px 10px 10px 10px;background-color: #dc353536;border-radius: 5px;",
    );

  //ملاحظات
  document.getElementById("75533").style.display = "none"; // اذكر نوع الخوادم ومقدار السعة الخزنية وعدد الخوادم؟
  document.getElementById("75734").style.display = "none"; // label 1
  document.getElementById("75735").style.display = "none"; // label 2
  document.getElementById("75736").style.display = "none"; // label 3
  document.getElementById("75737").style.display = "none"; // label 4
  document.getElementById("75738").style.display = "none"; // label 5

  var Groups_ID = [
    "34935_group", //مجموعة البنى التحتية
    "34934_group", //مجموعة البرمجيات والتطبيقات
    "34936_group", //مجموعة الخدمات
  ];

  for (var i = 0; i < Groups_ID.length; i++) {
    document.getElementById(Groups_ID[i]).style.display = "none";
  }
}
