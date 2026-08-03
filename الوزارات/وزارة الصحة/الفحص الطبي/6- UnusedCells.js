{
  if (this.tab_click == "form") {
    //القضاء
    if (this.form_data.GOVValues == null) {
      document.getElementById("72901").style.visibility = "collapse";
    }

    //رمز اللجنة
    if (this.form_data.pasText == null) {
      document.getElementById("52782").style.visibility = "collapse";
    }
  }
}
