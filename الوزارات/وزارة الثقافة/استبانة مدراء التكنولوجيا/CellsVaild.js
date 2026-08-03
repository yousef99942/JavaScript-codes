{
  if (this.inputFormField.FirstSelector == "نعم") {
    if (
      this.inputFormField["NetworkType"] == "" ||
      this.inputFormField["NetworkType"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.SecondSelector == "نعم") {
    if (
      this.inputFormField["SubDeptNum"] == "" ||
      this.inputFormField["SubDeptNum"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[4].label} مطلوب`);
    }

    if (
      this.inputFormField["ThirdSelector"] == "" ||
      this.inputFormField["ThirdSelector"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[5].label} مطلوب`);
    }
  }

  if (this.inputFormField.FourthSelector == "نعم") {
    if (
      this.inputFormField["FirstTable"] == "" ||
      this.inputFormField["FirstTable"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[11].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.FifthSelector == "نعم") {
    if (
      this.inputFormField["SecondTable"] == "" ||
      this.inputFormField["SecondTable"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[13].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.SixthSelector == "كلا") {
    if (
      this.inputFormField["NumberNeeded"] == "" ||
      this.inputFormField["NumberNeeded"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[19].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.sSecondSelector == "نعم") {
    if (
      this.inputFormField["MentionThem"] == "" ||
      this.inputFormField["MentionThem"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.sFourthSelector == "نعم") {
    if (
      this.inputFormField["TheirType"] == "" ||
      this.inputFormField["TheirType"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[5].label} مطلوب`);
    }
  }

  if (this.inputFormField.sSixthSelector == "نعم") {
    if (
      this.inputFormField["ArchiveType"] == "" ||
      this.inputFormField["ArchiveType"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[8].label} مطلوب`);
    }
  }

  if (this.inputFormField.sSeventhSelector == "نعم") {
    if (
      this.inputFormField["MailNum"] == "" ||
      this.inputFormField["MailNum"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[10].label} مطلوب`
      );
    }
  }
}
