{
  if (this.inputFormField.requester == "موظف") {
    //اسم الوزارة
    if (
      this.inputFormField["MinisteryName"] == "" ||
      this.inputFormField["MinisteryName"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
    }
    //اسم الدائرة
    if (
      this.inputFormField["DeptName"] == "" ||
      this.inputFormField["DeptName"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }
  }
}
