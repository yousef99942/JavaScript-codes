{
  if (this.tab_click == "form") {
    if (
      this.form_data.firstslector == "موظف داخل الهيئة" ||
      this.form_data.firstslector == "موظف خارج الهيئة"
    ) {
      if (this.form_data.secondslector == "دورة تدريبية") {
        document.getElementById("33514_group").style.visibility = "collapse";
        document.getElementById("33516_group").style.visibility = "collapse";
      } else {
        document.getElementById("33513_group").style.visibility = "collapse";
        document.getElementById("33516_group").style.visibility = "collapse";
      }
    }

    if (
      this.form_data.firstslector == "الطلبة" &&
      this.form_data.secondslector == "تدريب صيفي"
    ) {
      document.getElementById("33513_group").style.visibility = "collapse";
      document.getElementById("33514_group").style.visibility = "collapse";
    }
    
    if (this.form_data.workshop == null) {
      document.getElementById("53634").style.visibility = "collapse";
    }

    if (this.form_data.lecture == null) {
      document.getElementById("53633").style.visibility = "collapse";
    }

    if (this.form_data.Nadwa == null) {
      document.getElementById("53636").style.visibility = "collapse";
    }

    if (this.form_data.conference == null) {
      document.getElementById("53637").style.visibility = "collapse";
    }

    if (this.form_data.Posttype == null) {
      document.getElementById("53638").style.visibility = "collapse";
    }

    if (this.form_data.Searchtitle == null) {
      document.getElementById("53640").style.visibility = "collapse";
    }

    if (this.form_data.university == null) {
      document.getElementById("52539").style.visibility = "collapse";
    }

    if (this.form_data.college == null) {
      document.getElementById("52543").style.visibility = "collapse";
    }

    if (this.form_data.Institute == null) {
      document.getElementById("53631").style.visibility = "collapse";
    }

    if (this.form_data.section == null) {
      document.getElementById("53744").style.visibility = "collapse";
    }

    if (this.form_data.stage == null) {
      document.getElementById("52598").style.visibility = "collapse";
    }
  }
}
