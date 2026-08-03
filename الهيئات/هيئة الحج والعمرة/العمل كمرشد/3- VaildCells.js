{
  if (this.inputFormField.jobstatus == "موظف") {
    if (
      this.inputFormField["jobdescription"] == null ||
      this.inputFormField["jobdescription"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[4].label} مطلوب`);
    }
  }
}
