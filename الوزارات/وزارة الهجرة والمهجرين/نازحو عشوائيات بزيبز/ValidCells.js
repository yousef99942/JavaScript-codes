{
  if (this.inputFormField.AgeCategory == "أقل من 18 سنة") {
    if (
      this.inputFormField.FirstTextArea == null ||
      this.inputFormField.FirstTextArea == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.FirstWorkType == "كاسب (أعمال حرة)") {
    if (
      this.inputFormField.FreeWorkType == null ||
      this.inputFormField.FreeWorkType == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[4].label} مطلوب`);
    }
  }

  if (this.inputFormField.FirstWorkType == "أخرى") {
    if (
      this.inputFormField.FirstOther == null ||
      this.inputFormField.FirstOther == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[5].label} مطلوب`);
    }
  }

  if (this.inputFormField.SecondJobType == "كاسب (أعمال حرة)") {
    if (
      this.inputFormField.FreeWorkType == null ||
      this.inputFormField.FreeWorkType == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.SecondJobType == "أخرى") {
    if (
      this.inputFormField.SecondOther == null ||
      this.inputFormField.SecondOther == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[8].label} مطلوب`);
    }
  }

  if (this.inputFormField.BeforeHouseType == "ملك") {
    if (
      this.inputFormField.MolokType == null ||
      this.inputFormField.MolokType == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[15].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.BeforeHouseType == "أخرى") {
    if (
      this.inputFormField.OtherHouseType == null ||
      this.inputFormField.OtherHouseType == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[16].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.HouseMatarial == "أخرى") {
    if (
      this.inputFormField.OtherHouseMatarial == null ||
      this.inputFormField.OtherHouseMatarial == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[22].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.HomeState == "أخرى") {
    if (
      this.inputFormField.OtherHomeState == null ||
      this.inputFormField.OtherHomeState == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[20].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.OriginalHome == "أخرى") {
    if (
      this.inputFormField.OtherOriginalHome == null ||
      this.inputFormField.OtherOriginalHome == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[18].label} مطلوب`
      );
    }
  }
}
