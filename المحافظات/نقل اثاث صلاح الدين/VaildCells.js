{
  var First_Option_Progs = [
      "governorate", //المحافظة الحالية
      "district", //القضاء الحالي
      "gover", //المحافظة التي ينقل اليها
      "governmentto", //القضاء الذي ينقل اليه
    ],
    Locations = [
      13, //المحافظة الحالية
      14, //القضاء الحالي
      15, //المحافظة التي ينقل اليها
      16, //القضاء الذي ينقل اليه
    ];

  if (
    this.inputFormField.Requesttype ==
    "نقل من محافظة صلاح الدين الى محافظات اخرى"
  ) {
    for (var i = 0; i < First_Option_Progs.length; i++) {
      if (i > 1) {
        if (
          this.inputFormField[First_Option_Progs[i]] == null ||
          this.inputFormField[First_Option_Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`
          );
        }
      }
    }
  }

  if (
    this.inputFormField.Requesttype ==
    "نقل من محافظات اخرى الى محافظة صلاح الدين"
  ) {
    for (var i = 0; i < First_Option_Progs.length; i++) {
      if (i < 2) {
        if (
          this.inputFormField[First_Option_Progs[i]] == null ||
          this.inputFormField[First_Option_Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`
          );
        }
      }
    }
  }
}
