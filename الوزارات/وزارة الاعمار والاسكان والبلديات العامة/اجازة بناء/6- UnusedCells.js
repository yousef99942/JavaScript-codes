{
  if (this.tab_click == "form") {
    if (this.form_data.owners == null) {
      document.getElementById("71696").style.visibility = "collapse";
    }

    if (this.form_data.housedetails == null) {
      document.getElementById("86204").style.visibility = "collapse";
    }

    if (this.form_data.commercialdetails == null) {
      document.getElementById("86206").style.visibility = "collapse";
    }
  }
}
