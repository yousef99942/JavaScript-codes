{
  if (
    this.inputFormField.departments ==
    "مكتب الوزير ( شؤون المواطنين/ الاصلاح العراقية/ الاحداث)"
  ) {
    if (
      this.inputFormField["bxx"] == null ||
      this.inputFormField["bxx"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
    }
  }
}
