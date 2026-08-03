{
  if (this.inputFormField.syst == "ضمن شركة عمرة") {
    //اسم شركة العمرة
    if (
      this.inputFormField["companyn"] == null ||
      this.inputFormField["companyn"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
    }

    //رمز شركة العمرة
    if (
      this.inputFormField["companyserial"] == null ||
      this.inputFormField["companyserial"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.syst == "رحلات عمرة مستقلة") {
    //اسم المكتب
    if (
      this.inputFormField["selecttow"] == null ||
      this.inputFormField["selecttow"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[3].label} مطلوب`);
    }
  }

  //رقم موبايل فعال للمتقدم
  if (this.inputFormField.phone) {
    const phoneNo = this.inputFormField.phone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المتقدم بالرقم 07.");
    }
  }
}
