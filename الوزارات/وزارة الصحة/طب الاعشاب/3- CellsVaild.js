{
  if (
    this.inputFormField.ttype ==
    "الدورة التاهلية لمنح اجازة فتح محل بيع اعشاب طبية"
  ) {
    if (
      this.inputFormField["eypech"] == null ||
      this.inputFormField["eypech"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }
}
