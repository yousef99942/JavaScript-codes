{
  if (this.tab_click == "form") {
    //اخرى
    if (this.form_data.other == null) {
      document.getElementById("73810").style.visibility = "collapse";
    }

    //فعالية أخرى
    if (this.form_data.otheract == null) {
      document.getElementById("73811").style.visibility = "collapse";
    }

    //هل لديك عقد سابق ؟
    if (this.form_data.Requ == null) {
      document.getElementById("53573").style.visibility = "collapse";
    }
  }
}
