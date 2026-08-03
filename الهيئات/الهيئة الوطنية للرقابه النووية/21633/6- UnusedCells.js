{
  if (this.tab_click == "form") {
    //جواز السفر
    if (this.form_data.xff == null) {
      document.getElementById("74437").style.visibility = "collapse";
    }

    //البطاقة الوطنية
    if (this.form_data.NationalID == null) {
      document.getElementById("75177").style.visibility = "collapse";
    }

    //جواز السفر
    if (this.form_data.err == null) {
      document.getElementById("74633").style.visibility = "collapse";
    }

    //البطاقة الوطنية
    if (this.form_data.SecondIDNum == null) {
      document.getElementById("75187").style.visibility = "collapse";
    }
  }
}
