{
  if (this.inputFormField.circle) {
    //نوع التشكيل
    if (
      this.inputFormField["DeptType"] == "" ||
      this.inputFormField["DeptType"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[4].label} مطلوب`);
    }
  }

  if (this.inputFormField.DeptType) {
    //اسم التشكيل
    if (
      this.inputFormField["amannadep"] == "" ||
      this.inputFormField["amannadep"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[5].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.amannadep == "فروع الهيئة في المحافظات" ||
    this.inputFormField.amannadep == "المكاتب الانتخابية في المحافظات"
  ) {
    //اختر المحافظة
    if (
      this.inputFormField["governorate"] == "" ||
      this.inputFormField["governorate"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.circle === "وزارة الداخلية" &&
    this.inputFormField.amannadep
  ) {
    //التشكيل الفرعي
    if (
      this.inputFormField["SubDeptName"] == "" ||
      this.inputFormField["SubDeptName"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
    }
  }

  if (this.inputFormField.SubDeptName) {
    //نوع التشكيل الفرعي
    if (
      this.inputFormField["SubDeptType"] == "" ||
      this.inputFormField["SubDeptType"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.SubDeptType) {
    //التشكيل
    if (
      this.inputFormField["FinalDeptName"] == "" ||
      this.inputFormField["FinalDeptName"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }
}
