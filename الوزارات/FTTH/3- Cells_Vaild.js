{
  if (this.inputFormField.residenceGov != "") {
    if (
      this.inputFormField.district == null ||
      this.inputFormField.district == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[4].fields[1].label} مطلوب`);
    }
  }
}
