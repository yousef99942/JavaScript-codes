{
  if (this.inputFormField.names == "نعم") {
    if (
      this.inputFormField["named"] == null ||
      this.inputFormField["named"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }
}
