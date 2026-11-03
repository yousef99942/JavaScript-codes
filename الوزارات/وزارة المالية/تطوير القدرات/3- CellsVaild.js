{
    if (this.inputFormField.WorkshopsNames === "اخرى") {
    if (
      this.inputFormField["pName"] == null ||
      this.inputFormField["pName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
    }
  }
}