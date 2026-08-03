{
  if (this.tab_click == "form") {
    if (this.form_data.EducationalLevel == null) {
      document.getElementById("50604").style.visibility = "collapse";
    }
    if (this.form_data.CollageSchoolName == null) {
      document.getElementById("50605").style.visibility = "collapse";
    }
    if (this.form_data.Questiontwelveone == null) {
      document.getElementById("50626").style.visibility = "collapse";
    }
    if (this.form_data.Questionthirteenone == null) {
      document.getElementById("50630").style.visibility = "collapse";
    }
    if (this.form_data.Questionfourteenone == null) {
      document.getElementById("50635").style.visibility = "collapse";
    }
  }
}
