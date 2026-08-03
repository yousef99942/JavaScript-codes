{
  if (
    this.inputFormField.graduationstatus == "دكتوراه" ||
    this.inputFormField.graduationstatus == "ماجستير" ||
    this.inputFormField.graduationstatus == "بكالوريوس" ||
    this.inputFormField.graduationstatus == "دبلوم عالي"
  ) {
    if (
      this.inputFormField["UniversityType"] == null ||
      this.inputFormField["UniversityType"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }

    if (
      this.inputFormField["university"] == null ||
      this.inputFormField["university"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[2].label} مطلوب`);
    }

    if (
      this.inputFormField["collage"] == null ||
      this.inputFormField["collage"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[3].label} مطلوب`);
    }

    if (
      this.inputFormField["department"] == null ||
      this.inputFormField["department"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[5].label} مطلوب`);
    }

    if (
      this.inputFormField["major"] == null ||
      this.inputFormField["major"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[6].label} مطلوب`);
    }

    if (
      this.inputFormField["graduationdate"] == null ||
      this.inputFormField["graduationdate"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.graduationstatus == "دبلوم") {
    if (
      this.inputFormField["diploma"] == null ||
      this.inputFormField["diploma"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[4].label} مطلوب`);
    }

    if (
      this.inputFormField["department"] == null ||
      this.inputFormField["department"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[5].label} مطلوب`);
    }

    if (
      this.inputFormField["graduationdate"] == null ||
      this.inputFormField["graduationdate"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.graduationstatus == "اعدادية" ||
    this.inputFormField.graduationstatus == "ابتدائية" ||
    this.inputFormField.graduationstatus == "متوسطة"
  ) {
    if (
      this.inputFormField["graduationdate"] == null ||
      this.inputFormField["graduationdate"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.graduationstatus != "يقرأ ويكتب") {
    if (
      this.inputFormField["average"] == null ||
      this.inputFormField["average"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[9].label} مطلوب`);
    }
  }
}
