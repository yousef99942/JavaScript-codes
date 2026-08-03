{
  if (this.inputFormField.sotiolcase == "متزوج") {
    if (
      this.inputFormField["wifefname"] == null ||
      this.inputFormField["wifefname"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[13].label} مطلوب`
      );
    }
  }
}
