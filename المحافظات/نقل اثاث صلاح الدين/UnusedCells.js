{
  if (this.tab_click == "form") {
    var First_Option_IDs = [
        "47870", //المحافظة الحالية
        "47871", //القضاء الحالي
        "68059", //المحافظة التي ينقل اليها
        "67815", //القضاء الذي ينقل اليه
      ],
      First_Option_Progs = [
        "governorate", //المحافظة الحالية
        "district", //القضاء الحالي
        "gover", //المحافظة التي ينقل اليها
        "governmentto", //القضاء الذي ينقل اليه
      ];

    for (var i = 0; i < First_Option_IDs.length; i++) {
      if (this.form_data[First_Option_Progs[i]] == null) {
        document.getElementById(First_Option_IDs[i]).style.visibility =
          "collapse";
      }
    }
  }
}
