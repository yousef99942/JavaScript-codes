{
  if (this.tab_click == "form") {
    var IDs = [
        "70327",
        "70966",
        "70967",
        "70968",
        "70970",
        "70334",
        "70291",
        "70319",
      ],
      Progs = [
        "category",
        "ShNam",
        "Conect",
        "ResNum",
        "DecDate",
        "Msh",
        "Special",
        "degree",
      ];

    for (var i = 0; i < IDs.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(IDs[i]).style.visibility = "collapse";
      }
    }
  }
}
