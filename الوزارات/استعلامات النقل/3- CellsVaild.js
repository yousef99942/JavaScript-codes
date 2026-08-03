{
  if (this.inputFormField.citizen == "نعم") {
    if (
      this.inputFormField["workplace"] == "" ||
      this.inputFormField["workplace"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }
}
