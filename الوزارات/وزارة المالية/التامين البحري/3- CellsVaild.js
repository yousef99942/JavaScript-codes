{
  if (this.inputFormField.txxx == "منتج") {
    if (
      this.inputFormField["name"] == null ||
      this.inputFormField["name"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`,
      );
    }
  }
}
