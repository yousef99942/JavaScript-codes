{
  if (this.tab_click == "form") {
    if (this.form_data.FirstText == null) {
      document.getElementById("90731").style.visibility = "collapse";
    }

    if (this.form_data.FirstSeletcor != "متزوج") {
      document.getElementById("35403_group").style.display = "none";
    }
  }
}
