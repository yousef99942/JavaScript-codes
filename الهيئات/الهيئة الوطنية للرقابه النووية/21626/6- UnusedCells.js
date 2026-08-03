{
  if (this.tab_click == "form") {
    //رقم الاجازة
    if (this.form_data.vrl == null) {
      document.getElementById("74217").style.visibility = "collapse";
    }

    //تاريخها
    if (this.form_data.jhv == null) {
      document.getElementById("74218").style.visibility = "collapse";
    }

    //اخرى
    if (this.form_data.rrtr == null) {
      document.getElementById("74246").style.visibility = "collapse";
    }
  }
}
