{
  if (this.inputFormField.Internet == "نعم") {
    if (
      this.inputFormField["Modem"] == null ||
      this.inputFormField["Modem"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }
}
