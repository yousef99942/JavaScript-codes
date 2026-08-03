{
  if (this.inputFormField.JobState == "طالب") {
    if (
      this.inputFormField["EducationalLevel"] == null ||
      this.inputFormField["EducationalLevel"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }

    if (
      this.inputFormField["CollageSchoolName"] == null ||
      this.inputFormField["CollageSchoolName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[8].label} مطلوب`);
    }
  }

  if (this.inputFormField.Questiontwelve == "اخرى") {
    if (
      this.inputFormField["Questiontwelveone"] == null ||
      this.inputFormField["Questiontwelveone"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[11].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.Questionthirteen == "أخرى (يرجى التحديد)") {
    if (
      this.inputFormField["Questionthirteenone"] == null ||
      this.inputFormField["Questionthirteenone"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[13].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.Questionfourteen == "اخرى (يرجى التحديد)") {
    if (
      this.inputFormField["Questionfourteenone"] == null ||
      this.inputFormField["Questionfourteenone"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[15].label} مطلوب`
      );
    }
  }
}
