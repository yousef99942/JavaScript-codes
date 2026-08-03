{
  if (this.tab_click == "form") {
    document.getElementById("67692").style.visibility = "collapse"; //عنوان  التأييد

    if (this.form_data.PartName == null) {
      document.getElementById("70003").style.visibility = "collapse";
    }

    if (this.form_data.section == null) {
      document.getElementById("67498").style.visibility = "collapse";
    }
  }
}
