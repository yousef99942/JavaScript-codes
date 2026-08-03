{
  if (this.tab_click == "form") {
    if (this.form_data.TheirNum == null) {
      document.getElementById("64101").style.visibility = "collapse";
    }

    if (this.form_data.NameTheMissing == null) {
      document.getElementById("64217").style.visibility = "collapse";
    }

    if (this.form_data.ReasonOfNotGet == null) {
      document.getElementById("64220").style.visibility = "collapse";
    }

    if (this.form_data.SecondReasonOfNotGet == null) {
      document.getElementById("64222").style.visibility = "collapse";
    }

    if (this.form_data.HealthProblemExplain == null) {
      document.getElementById("64233").style.visibility = "collapse";
    }

    if (this.form_data.OtherDiffcults == null) {
      document.getElementById("64235").style.visibility = "collapse";
    }

    if (this.form_data.OtherNeeds == null) {
      document.getElementById("64237").style.visibility = "collapse";
    }

    if (this.form_data.IncomeLevel == null) {
      document.getElementById("64180").style.visibility = "collapse";
    }
  }
}
