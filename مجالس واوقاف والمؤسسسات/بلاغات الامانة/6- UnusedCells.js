{
  if (this.tab_click == "form") {
    var IDs = ["73695"],
      Progs = ["DeptName"];

    for (var i = 0; i < IDs.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(IDs[i]).style.visibility = "collapse";
      }
    }
  }
}
