{
  if (this.inputFormField.Visitor == "مواطن بموجب وكالة, مساهم, مدير مفوض") {
    if (
      this.inputFormField["condition"] == null ||
      this.inputFormField["condition"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[11].label} مطلوب`
      );
    }
  }
}
