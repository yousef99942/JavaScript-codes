{
  if (this.tab_click == "form") {
    if (this.form_data.ContryStudent == null) {
      document.getElementById("65512").style.visibility = "collapse";
    }

    if (this.form_data.dor == null) {
      document.getElementById("53963").style.visibility = "collapse";
    }

    if (this.form_data.FieldYear == null) {
      document.getElementById("53965").style.visibility = "collapse";
    }
  }
}
