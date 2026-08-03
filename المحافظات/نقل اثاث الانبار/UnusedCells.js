{
  if (this.tab_click == "form") {
    //المحافظة الحالية
    if (this.form_data.governorate == null) {
      document.getElementById("69612").style.visibility = "collapse";
    }

    //القضاء الحالي
    if (this.form_data.district == null) {
      document.getElementById("69614").style.visibility = "collapse";
    }

    //القضاء الحالي الثاني
    if (this.form_data.FirstDisct == null) {
      document.getElementById("90783").style.visibility = "collapse";
    }

    //المحافظة الذي  ينقل الاثاث اليها
    if (this.form_data.Governoratet == null) {
      document.getElementById("69637").style.visibility = "collapse";
    }

    //القضاء الذي  ينقل الاثاث اليه
    if (this.form_data.Judiciary == null) {
      document.getElementById("69639").style.visibility = "collapse";
    }

    //القضاء الذي  ينقل الاثاث اليه الثاني
    if (this.form_data.SecondDisct == null) {
      document.getElementById("90784").style.visibility = "collapse";
    }
  }
}
