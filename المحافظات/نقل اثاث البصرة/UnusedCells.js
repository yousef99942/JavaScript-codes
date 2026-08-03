{
  if (this.tab_click == "form") {
    if (this.form_data.district == null) {
      document.getElementById("67373").style.visibility = "collapse";
    }

    if (this.form_data.districtto == null) {
      document.getElementById("67375").style.visibility = "collapse";
    }

    if (this.form_data.governorate == null) {
      document.getElementById("67372").style.visibility = "collapse";
    }

    if (this.form_data.governmentto == null) {
      document.getElementById("67374").style.visibility = "collapse";
    }

    //قيمة الليبل
    document.getElementById("70754").style.visibility = "collapse";
  }
}
