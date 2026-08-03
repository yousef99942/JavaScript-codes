{
  if (this.tab_click == "form") {
    if (this.form_data.Member == null) {
      document.getElementById("64413").style.visibility = "collapse";
    }

    if (this.form_data.yecar == null) {
      document.getElementById("65428").style.visibility = "collapse";
    }

    if (this.form_data.cardtype == "هوية تعريفية") {
      document.getElementById("33791_group").style.visibility = "collapse";
    }

    if (this.form_data.typecard == null) {
      document.getElementById("25389").style.visibility = "collapse";
    }

    document.getElementById("64212").style.visibility = "collapse"; //محافظة.
    document.getElementById("25389").style.visibility = "collapse"; //القضاء او الناحية
  }
}
