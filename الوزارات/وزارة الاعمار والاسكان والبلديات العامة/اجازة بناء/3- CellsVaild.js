{
  if (this.inputFormField.ownertype == "شريك في العقار") {
    if (
      this.inputFormField["owners"] == null ||
      this.inputFormField["owners"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.buildingtype == "سكني") {
    if (
      this.inputFormField["housedetails"] == null ||
      this.inputFormField["housedetails"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[25].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.buildingtype == "تجاري") {
    if (
      this.inputFormField["commercialdetails"] == null ||
      this.inputFormField["commercialdetails"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[26].label} مطلوب`,
      );
    }
  }
}
