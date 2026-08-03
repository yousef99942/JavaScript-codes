{
  if (
    this.inputFormField.evaluatevalue == "ليس بمستوى الطموح" ||
    this.inputFormField.curriculumevaluatee == "ليس بمستوى الطموح"
  ) {
    if (
      this.inputFormField["valuenote"] == "" ||
      this.inputFormField["valuenote"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[8].fields[2].label} مطلوب`);
    }
  }
}
