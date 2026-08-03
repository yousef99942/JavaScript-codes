{
  if (this.tab_click == "form") {
    if (this.form_data.provNum == null) {
      document.getElementById("27238").style.visibility = "collapse";
    }

    if (this.form_data.IDNum == null) {
      document.getElementById("73116").style.visibility = "collapse";
    }

    if (this.form_data.FirstDist == null) {
      document.getElementById("74867").style.visibility = "collapse";
    }
  }
}
