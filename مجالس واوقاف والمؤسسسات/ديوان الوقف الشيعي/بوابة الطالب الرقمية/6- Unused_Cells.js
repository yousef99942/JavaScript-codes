{
  if (this.tab_click == "form") {
    var Fields_ID = [
        "51094", //حقل عنوان التاييد
        "51458", //حقل النقل او الاستضافة من
        "51459", //حقل النقل او الاستضافة الى
      ],
      Fields_Prog = [
        "title", //حقل عنوان التاييد
        "from", //حقل النقل او الاستضافة من
        "moveto", //حقل النقل او الاستضافة الى
      ];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (this.form_data[Fields_Prog[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }
  }
}
