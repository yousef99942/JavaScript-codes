if (this.inputFormField.select == "تغيير اسم") {
  if (
    this.inputFormField.numbold == "" ||
    this.inputFormField.numbold == null
  ) {
    this.evalErr.push(`الحقل ${this.group_of_form[0].fields[4].label} مطلوب`);
  }

  if (
    this.inputFormField.numboldtwo == "" ||
    this.inputFormField.numboldtwo == null
  ) {
    this.evalErr.push(`الحقل ${this.group_of_form[0].fields[5].label} مطلوب`);
  }

  if (
    this.inputFormField.numberoldthree == "" ||
    this.inputFormField.numberoldthree == null
  ) {
    this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
  }
}

if (this.inputFormField.select == "بدل ضائع") {
  if (this.inputFormField.name == "" || this.inputFormField.name == null) {
    this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
  }

  if (
    this.inputFormField.secondname == "" ||
    this.inputFormField.secondname == null
  ) {
    this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
  }

  if (
    this.inputFormField.thirdname == "" ||
    this.inputFormField.thirdname == null
  ) {
    this.evalErr.push(`الحقل ${this.group_of_form[0].fields[3].label} مطلوب`);
  }
}
