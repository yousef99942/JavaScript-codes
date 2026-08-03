{
  if (this.inputFormField.disise == "نعم") {
    if (
      this.inputFormField["test"] == "" ||
      this.inputFormField["test"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.MIDECAL == "نعم") {
    if (
      this.inputFormField["DATE"] == "" ||
      this.inputFormField["DATE"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[5].label} مطلوب`);
    }

    if (
      this.inputFormField["details"] == "" ||
      this.inputFormField["details"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[6].label} مطلوب`);
    }
  }
}
