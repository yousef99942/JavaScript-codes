{
  if (this.inputFormField.WorkPlace == "مقر الوزارة") {
    if (
      this.inputFormField["DeptName"] == null ||
      this.inputFormField["DeptName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[4].label} مطلوب`);
    }

    if (
      this.inputFormField["namei"] == null ||
      this.inputFormField["namei"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.WorkPlace == "دائرة الفروع" ||
    this.inputFormField.DeptName == "شؤون الفروع"
  ) {
    if (
      this.inputFormField["PartName"] == null ||
      this.inputFormField["PartName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[5].label} مطلوب`);
    }
  }

  if (this.inputFormField.SoicalLife == "متزوج") {
    if (
      this.inputFormField["namberbn"] == null ||
      this.inputFormField["namberbn"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.nameu == "نعم") {
    if (
      this.inputFormField["nameb"] == null ||
      this.inputFormField["nameb"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.namo == "نعم") {
    if (
      this.inputFormField["namdc"] == null ||
      this.inputFormField["namdc"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[15].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.namdf == "نعم") {
    if (
      this.inputFormField["nambn"] == null ||
      this.inputFormField["nambn"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[17].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.nameew == "نعم") {
    if (
      this.inputFormField["namweerw"] == null ||
      this.inputFormField["namweerw"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[19].label} مطلوب`
      );
    }
  }
}
