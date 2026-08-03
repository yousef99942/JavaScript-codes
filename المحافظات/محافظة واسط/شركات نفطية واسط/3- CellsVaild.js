{
  var Fields_Prog = [
      "sdname", //الكلية/المعهد
      "ssdname", //القسم
      "sasname", //التخصص الدقيق
      "aduname", //جهة التخرج
      "avname", //المعدل
      "dname", //تاريخ التخرج
    ],
    Locations = [1, 2, 3, 4, 5, 6];

  var First_Selected_Values = ["دكتوراه", "ماجستير", "بكالوريوس"],
    Second_Selected_Values = ["اعدادية", "متوسطة", "ابتدائية"];

  if (First_Selected_Values.includes(this.inputFormField.setllc)) {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.setllc == "دبلوم") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (i != 2) {
        if (
          this.inputFormField[Fields_Prog[i]] == null ||
          this.inputFormField[Fields_Prog[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
          );
        }
      }
    }
  }

  if (Second_Selected_Values.includes(this.inputFormField.setllc)) {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (i >= 3) {
        if (
          this.inputFormField[Fields_Prog[i]] == null ||
          this.inputFormField[Fields_Prog[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
          );
        }
      }
    }
  }
}
