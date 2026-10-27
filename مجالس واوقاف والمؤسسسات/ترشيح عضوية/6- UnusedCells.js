{
    if (this.tab_click == "form") {
    var Fields_ID = [
      "27596", //نوع الهوية
      "27597", //رقم هوية الاحوال
      "27598", //رقم السجل
      "27599", //رقم الصحيفة
    ];

    Fields_ID.forEach(Hiding => document.getElementById(Hiding).style.visibility = "collapse");
  }
}