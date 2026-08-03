{
  if (this.inputFormField.buildingtype == "تجاري") {
    if (
      this.inputFormField["buildingdetails"] == null ||
      this.inputFormField["buildingdetails"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[22].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.buildingtype == "سكني") {
    if (
      this.inputFormField["housedetails"] == null ||
      this.inputFormField["housedetails"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[21].label} مطلوب`,
      );
    }
  }
}
