{
  if (
    this.inputFormField.shiftbooking == "صباحاً" ||
    this.inputFormField.shiftbooking == "مساءً"
  ) {
    if (
      this.inputFormField["numhours"] == null ||
      this.inputFormField["numhours"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }
}
