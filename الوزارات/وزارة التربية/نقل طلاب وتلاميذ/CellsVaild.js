{
  if (
    this.inputFormField.hgujriughg == "متميزين" ||
    this.inputFormField.hgujriughg == "متفوقين"
  ) {
    if (
      this.inputFormField["ujerhgerg"] == null ||
      this.inputFormField["ujerhgerg"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }

    if (
      this.inputFormField["wkefghwiuh"] == null ||
      this.inputFormField["wkefghwiuh"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }
}
