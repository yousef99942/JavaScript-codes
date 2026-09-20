{
  if (this.inputFormField.type === "وريث") {
    if (
      this.inputFormField["wareethname"] == null ||
      this.inputFormField["wareethname"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.submit === "نعم") {
    if (
      this.inputFormField["idnumber"] == null ||
      this.inputFormField["idnumber"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[11].label} مطلوب`,
      );
    }
  }
}
