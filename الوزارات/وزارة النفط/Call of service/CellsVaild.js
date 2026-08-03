{
  //Group 2 vaildation
  if (this.inputFormField.SGSG == "YES") {
    if (
      this.inputFormField["PleaseSpecify"] == null ||
      this.inputFormField["PleaseSpecify"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[10].label} مطلوب`
      );
    }
  }

  //Group 4 Vaildation
  if (this.inputFormField.OJHFF == "YES") {
    if (
      this.inputFormField["FirstTextArea"] == null ||
      this.inputFormField["FirstTextArea"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.poium == "Yes") {
    if (
      this.inputFormField["SecondTextArea"] == null ||
      this.inputFormField["SecondTextArea"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[9].label} مطلوب`);
    }
  }

  if (this.inputFormField.GFCCX == "YES") {
    if (
      this.inputFormField["ThirdTextArea"] == null ||
      this.inputFormField["ThirdTextArea"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[11].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.BHIY == "YES") {
    if (
      this.inputFormField["FourthTextArea"] == null ||
      this.inputFormField["FourthTextArea"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[13].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.AQQEW == "YES") {
    if (
      this.inputFormField["FifthTextArea"] == null ||
      this.inputFormField["FifthTextArea"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[15].label} مطلوب`
      );
    }
  }

  //Group 5 Vaildation
  if (this.inputFormField.POYUH == "Yes") {
    if (
      this.inputFormField["sixthTextArea"] == null ||
      this.inputFormField["sixthTextArea"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[4].fields[2].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.NBCFF == "YES") {
    if (
      this.inputFormField["SeventhTextArea"] == null ||
      this.inputFormField["SeventhTextArea"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[4].fields[4].label} مطلوب`);
    }
  }

  if (this.inputFormField.NBYT == "YES") {
    if (
      this.inputFormField["NinethAreaText"] == null ||
      this.inputFormField["NinethAreaText"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[4].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.EFREGE == "YES") {
    if (
      this.inputFormField["EighthTextArea"] == null ||
      this.inputFormField["EighthTextArea"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[4].fields[10].label} مطلوب`);
    }
  }

  //Group 8 Vaildation
  if (this.inputFormField.SADASC == "YES") {
    if (
      this.inputFormField["TenthTextArea"] == null ||
      this.inputFormField["TenthTextArea"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[7].fields[4].label} مطلوب`
      );
    }
  }
}
