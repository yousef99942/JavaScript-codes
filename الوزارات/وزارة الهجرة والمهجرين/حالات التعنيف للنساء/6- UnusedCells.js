{
  if (this.tab_click == "form") {
    var Fields_IDs = ["70762", "70766", "71053", "90814", "90815", "70800"],
      Fields_progs = [
        "nameqq",
        "namerrrr",
        "texttayp",
        "namerytyu",
        "nameqwias",
        "info",
      ];

    for (var i = 0; i < Fields_IDs.length; i++) {
      if (this.form_data[Fields_progs[i]] == null) {
        document.getElementById(Fields_IDs[i]).style.visibility = "collapse";
      }
    }
  }
}
