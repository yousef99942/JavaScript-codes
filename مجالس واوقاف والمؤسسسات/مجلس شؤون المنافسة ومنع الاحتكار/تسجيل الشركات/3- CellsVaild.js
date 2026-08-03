{
  //نوع الشركة
  if (this.inputFormField.companytype == "اخرى") {
    if (
      this.inputFormField["SecondOtherText"] == null ||
      this.inputFormField["SecondOtherText"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
    }
  }

  //جنسية الشركة
  if (this.inputFormField.compnationality == "اخرى") {
    if (
      this.inputFormField["ThirdOtherText"] == null ||
      this.inputFormField["ThirdOtherText"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[5].label} مطلوب`);
    }
  }

  //قطاع الشركة
  if (this.inputFormField.compdep == "اخرى") {
    if (
      this.inputFormField["OtherText"] == null ||
      this.inputFormField["OtherText"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }
}
