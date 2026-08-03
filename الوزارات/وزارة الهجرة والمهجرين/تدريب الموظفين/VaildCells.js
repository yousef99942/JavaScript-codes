{
  var First_Choice = ["مكتب الوزير"],
    Second_Choice = [
      "مكتب السيد الوكيل الفني",
      "مكتب السيد الوكيل الإداري",
      "مكتب السيد المستشار",
      "الدائرة الإدارية والمالية",
      "دائرة شؤون الهجرة",
      "دائرة شؤون الفروع",
      "دائرة التخطيط والمتابعة",
      "دائرة المعلومات والبحوث",
      "الدائرة القانونية",
    ];

  //مكتب الوزير
  if (First_Choice.includes(this.inputFormField.EmpPlace)) {
    if (
      this.inputFormField["MinsterDeptName"] == null ||
      this.inputFormField["MinsterDeptName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`);
    }
  }

  //باقي الدوائر
  if (Second_Choice.includes(this.inputFormField.EmpPlace)) {
    if (
      this.inputFormField["SectionName"] == null ||
      this.inputFormField["SectionName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }
}
