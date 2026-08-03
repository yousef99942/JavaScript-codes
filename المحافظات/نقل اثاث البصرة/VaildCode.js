{
  if (this.inputFormField.transport == "نقل داخل المحافظة") {
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`
      );
    }

    if (
      this.inputFormField["districtto"] == null ||
      this.inputFormField["districtto"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[20].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.transport == "نقل من محافظة البصرة الى محافظة اخرى") {
    if (
      this.inputFormField["governmentto"] == null ||
      this.inputFormField["governmentto"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[19].label} مطلوب`
      );
    }
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`
      );
    }

    if (
      this.inputFormField["districtto"] == null ||
      this.inputFormField["districtto"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[20].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.transport == "نقل من محافظة اخرى الى محافظة البصرة") {
    if (
      this.inputFormField["governorate"] == null ||
      this.inputFormField["governorate"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[17].label} مطلوب`
      );
    }

    if (
      this.inputFormField["districtto"] == null ||
      this.inputFormField["districtto"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[20].label} مطلوب`
      );
    }

    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`
      );
    }
  }
}
