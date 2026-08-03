{
  if (this.inputFormField.participation) {
    if (
      this.inputFormField["notparticipation"] == "" ||
      this.inputFormField["notparticipation"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }
}
