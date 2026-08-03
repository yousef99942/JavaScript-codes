{
  if (this.tab_click == "form") {
    if (this.form_data.Requesttypeone == "طلب استعلام") {
      document.getElementById("23341_group").style.visibility = "collapse";
    } else {
      document.getElementById("33585_group").style.visibility = "collapse";
    }

    if (this.form_data.compproce == null) {
      document.getElementById("51344").style.visibility = "collapse";
    }
  }
}
