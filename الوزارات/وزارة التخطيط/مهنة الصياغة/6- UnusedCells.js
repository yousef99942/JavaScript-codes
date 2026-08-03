{
  //منح رخصة
  var New_Request_ID = [
      "86857", //استمارة منح اجازة الممارسة
    ],
    //تجديد رخصة
    Renew_Request_ID = [
      "86858", //استمارة تجديد اجازة الممارسة
      "86831", //رقم الاجازة
      "86832", //تاريخ منح الاجازة
    ];

  if (this.inputFormField.RequestType == "تجديد") {
    document.getElementById(New_Request_ID[0]).style.visibility = "collapse";
  }

  if (this.inputFormField.RequestType == "منح") {
    for (var i = 0; i < Renew_Request_ID.length; i++) {
      document.getElementById(Renew_Request_ID[i]).style.visibility =
        "collapse";
    }
  }
}
