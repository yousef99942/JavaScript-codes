{
  if (
    this.inputFormField.Categories == "موظف" ||
    this.inputFormField.Categories == "ضباط الداخلية" ||
    this.inputFormField.Categories == "منتسبي الداخلية"
  ) {
    if (
      this.inputFormField["job"] == null ||
      this.inputFormField["job"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }

    if (
      this.inputFormField["work"] == null ||
      this.inputFormField["work"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`
      );
    }
  }
}
