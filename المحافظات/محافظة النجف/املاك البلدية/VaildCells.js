{
  if (this.inputFormField.typ == "أخرى") {
    if (
      this.inputFormField["other"] == null ||
      this.inputFormField["other"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.styles == "أخرى") {
    if (
      this.inputFormField["otheract"] == null ||
      this.inputFormField["otheract"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`
      );
    }
  }
}
