{
  if (this.inputFormField.xcdferg == "اخرى") {
    if (
      this.inputFormField["vbgnjk"] == null ||
      this.inputFormField["vbgnjk"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.bnmjhgtfre == "اخرى") {
    if (
      this.inputFormField["xcdfrt"] == null ||
      this.inputFormField["xcdfrt"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[5].label} مطلوب`);
    }
  }

  if (this.inputFormField.ertyul == "نعم") {
    if (
      this.inputFormField["mbnhyte"] == null ||
      this.inputFormField["mbnhyte"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.sdfghhyy == "نعم") {
    if (
      this.inputFormField["xvcbnhgfrty"] == null ||
      this.inputFormField["xvcbnhgfrty"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[3].label} مطلوب`);
    }
  }

  if (this.inputFormField.wsedrft == "اخرى") {
    if (
      this.inputFormField["wsederft"] == null ||
      this.inputFormField["wsederft"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[1].label} مطلوب`);
    }
  }
}
