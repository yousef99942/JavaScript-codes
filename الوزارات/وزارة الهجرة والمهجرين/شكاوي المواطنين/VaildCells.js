{
  if (this.inputFormField.namecc == "مواطن") {
    if (
      this.inputFormField["maeu"] == null ||
      this.inputFormField["maeu"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }

  if (this.inputFormField.namecc == "موظف") {
    if (
      this.inputFormField["namep"] == null ||
      this.inputFormField["namep"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.namertyu == "نعم") {
    var Fields_Locations = [4, 5, 6],
      Fields_Prog = ["complaintNum", "complaintDate", "complaintNotes"];

    for (var i = 0; i < Fields_Locations.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[Fields_Locations[i]].label
          } مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.IDType == "البطاقة الموحدة") {
    if (
      this.inputFormField["nameaq"] == null ||
      this.inputFormField["nameaq"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[12].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.IDType == "جواز السفر") {
    if (
      this.inputFormField["namet"] == null ||
      this.inputFormField["namet"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`,
      );
    }
  }
}
