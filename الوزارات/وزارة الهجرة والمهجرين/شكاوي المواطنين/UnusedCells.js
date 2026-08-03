{
  if (this.tab_click == "form") {
    var Fields_ID = [
        "69555",
        "69556",
        "69580",
        "69581",
        "69582",
        "69557",
        "69558",
      ],
      Fields_Prog = [
        "maeu",
        "namep",
        "complaintNum",
        "complaintDate",
        "complaintNotes",
        "nameaq",
        "namet",
      ];

    for (var i = 0; i < Fields_ID.length; i++) {
      if (this.form_data[Fields_Prog[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }
  }
}
