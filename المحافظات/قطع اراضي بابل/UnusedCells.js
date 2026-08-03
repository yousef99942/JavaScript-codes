{
  if (this.tab_click == "form") {
    var Groups_IDs = [
        "34410_group", //"موظفي ومننتسبين مديرية الاحوال المدنية"
        "34414_group", //"الاستمارة الخاصة بفئة الصحفيين"
        "34417_group", //"الاستمارة الخاصة بفئة ذوي الاحتياجات الخاصة"
      ],
      Other_IDs = [
        "70739",
        "70969",
        "70834",
        "70242",
        "70245",
        "70246",
        "70248",
        "70250",
        "70252",
        "70254",
      ],
      Other_Progs = [
        "MilitaryType",
        "wefs",
        "DisablilityN",
        "numberch",
        "numDay",
        "numMonth",
        "numYears",
        "numDc",
        "numMc",
        "numYc",
      ];

    if (
      this.form_data.SelectCategory == "موظفي ومننتسبين مديرية الاحوال المدنية"
    ) {
      for (var i = 0; i < Groups_IDs.length; i++) {
        if (i != 0) {
          document.getElementById(Groups_IDs[i]).style.visibility = "collapse";
        }
      }
    } else if (
      this.form_data.SelectCategory == "الاستمارة الخاصة بفئة الصحفيين"
    ) {
      for (var i = 0; i < Groups_IDs.length; i++) {
        if (i != 1) {
          document.getElementById(Groups_IDs[i]).style.visibility = "collapse";
        }
      }
    } else if (
      this.form_data.SelectCategory ==
      "الاستمارة الخاصة بفئة ذوي الاحتياجات الخاصة"
    ) {
      for (var i = 0; i < Groups_IDs.length; i++) {
        if (i != 2) {
          document.getElementById(Groups_IDs[i]).style.visibility = "collapse";
        }
      }
    } else {
      for (var i = 0; i < Groups_IDs.length; i++) {
        document.getElementById(Groups_IDs[i]).style.visibility = "collapse";
      }
    }

    for (var i = 0; i < Other_IDs.length; i++) {
      if (this.form_data[Other_Progs[i]] == null) {
        document.getElementById(Other_IDs[i]).style.visibility = "collapse";
      }
    }
  }

  //مال نقاط المفاضلة
  document.getElementById("71646").style.cssText =
    "color: red; background-color: #b2def6ff;";

  document.getElementById("34454_group").style.cssText =
    "font-size: 25px; font-weight: bold; padding-top: 10px;";
}
