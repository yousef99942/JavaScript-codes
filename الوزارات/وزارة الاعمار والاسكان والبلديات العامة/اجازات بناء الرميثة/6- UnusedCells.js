{
  if (this.tab_click == "form") {
    if (this.form_data.owners == null) {
      document.getElementById("75420").style.visibility = "collapse";
    }

    if (this.form_data.buildingtype == "صناعي") {
      document.getElementById("75459").style.visibility = "collapse"; //تفاصيل المبنى السكني
      document.getElementById("75504").style.visibility = "collapse"; //تفاصيل المبنى التجاري
    }

    if (this.form_data.buildingtype == "تجاري") {
      document.getElementById("75459").style.visibility = "collapse"; //تفاصيل المبنى السكني
    }

    if (this.form_data.buildingtype == "سكني") {
      document.getElementById("75504").style.visibility = "collapse"; //تفاصيل المبنى التجاري
    }
  }
}
