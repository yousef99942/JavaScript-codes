{
  if (this.tab_click == "form") {
    if (this.form_data.one == "كلا") {
      if (this.form_data.two == null || this.form_data.two == "") {
        document.getElementById("50758").style.visibility = "none";
      }
    }

    if (this.form_data.eleveen == "نعم") {
      if (this.form_data.towleve == null) {
        document.getElementById("50586").style.visibility = "collapse";
      }
    }

    if (this.form_data.thirteenn == "نعم") {
      if (this.form_data.fourteen == null) {
        document.getElementById("50588").style.visibility = "collapse";
      }
    }
  }
}
