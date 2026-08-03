{
  if (this.inputFormField.Status == "متزوج") {
    if (
      this.inputFormField["wname"] == "" ||
      this.inputFormField["wname"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }
  }
}
