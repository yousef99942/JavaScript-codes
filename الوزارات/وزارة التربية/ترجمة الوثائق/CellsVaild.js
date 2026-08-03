{
  if (this.inputFormField.CountryNationality == "غير عراقي") {
    if (
      this.inputFormField["ContryStudent"] == null ||
      this.inputFormField["ContryStudent"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.studenstat == "ناجح" ||
    this.inputFormField.studenstat == "مكمل"
  ) {
    if (
      this.inputFormField["dor"] == null ||
      this.inputFormField["dor"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[16].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.studenstat == "راسب") {
    if (
      this.inputFormField["FieldYear"] == null ||
      this.inputFormField["FieldYear"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[17].label} مطلوب`
      );
    }
  }
}
