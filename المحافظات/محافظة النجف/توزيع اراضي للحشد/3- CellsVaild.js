{
  if (this.inputFormField.naame == "شهيد") {
    //اسم الشهيد
    if (
      this.inputFormField["nam"] == null ||
      this.inputFormField["nam"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[5].label} مطلوب`);
    }

    //صلة القرابة
    if (
      this.inputFormField["forrm"] == null ||
      this.inputFormField["forrm"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.naame == "جريح") {
    //اسم الجريح
    if (
      this.inputFormField["namee"] == null ||
      this.inputFormField["namee"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }

    //مكان الاصابة
    if (
      this.inputFormField["injury"] == null ||
      this.inputFormField["injury"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }

    //نسبة العجز
    if (
      this.inputFormField["per"] == null ||
      this.inputFormField["per"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`,
      );
    }
  }
}
