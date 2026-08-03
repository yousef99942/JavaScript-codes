{
  if (
    this.inputFormField.governorate != "اربيل" ||
    this.inputFormField.governorate != "السليمانية" ||
    this.inputFormField.governorate != "دهوك"
  ) {
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`
      );
    }
  }

  if (
    this.inputFormField.governorate == "اربيل" ||
    this.inputFormField.governorate == "السليمانية" ||
    this.inputFormField.governorate == "دهوك"
  ) {
    if (
      this.inputFormField["FirstField"] == null ||
      this.inputFormField["FirstField"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[14].label} مطلوب`
      );
    }
  }

  if (
    this.inputFormField.type == "متوفي منجز" ||
    this.inputFormField.type == "شهيد منجز"
  ) {
    if (
      this.inputFormField["retirementnumb"] == null ||
      this.inputFormField["retirementnumb"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`
      );
    }
  }
}
