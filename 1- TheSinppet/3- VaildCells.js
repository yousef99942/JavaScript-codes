{
  if (this.inputFormField.FirstSeletcor == "متزوج") {
    if (
      this.inputFormField["FirstText"] == "" ||
      this.inputFormField["FirstText"] == null
    ) {
      this.group_of_form[0].fields[1].border = "red";
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
    }
  }
}
