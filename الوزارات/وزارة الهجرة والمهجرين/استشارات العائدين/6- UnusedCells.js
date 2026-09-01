{
  if (this.tab_click == "form") {
    var IDs = ["70905", "70908", "70910", "70914"],
      Progs = ["nameasa", "nameseek", "nameeea", "namewww"];

    for (var i = 0; i < IDs.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(IDs[i]).style.visibility = "collapse";
      }
    }
  }
}
