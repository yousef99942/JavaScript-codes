{
  /*
  if (this.inputFormField.TypeOfForm == "تأييد معنون") {
    if (
      this.inputFormField["MinistryType"] == null ||
      this.inputFormField["MinistryType"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[14].label} مطلوب`
      );
    }
  }
    */

  if (this.inputFormField.EmpDept == "شؤون الفروع") {
    if (
      this.inputFormField["PartName"] == "" ||
      this.inputFormField["PartName"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }

  //اقسام مكتب الوزير
  var Selected_Values = [
    "مكتب الوزير",
    "مكتب السيد الوكيل الفني",
    "مكتب السيد الوكيل الاداري",
    "مكتب السيد المستشار",
    "الادارية والمالية",
    "شؤون الهجرة",
    "التخطيط",
    "القانونية",
    "المعلومات والبحوث",
  ];

  if (Selected_Values.includes(this.inputFormField.EmpDept)) {
    if (
      this.inputFormField["section"] == "" ||
      this.inputFormField["section"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`,
      );
    }
  }
}
