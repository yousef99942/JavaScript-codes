{
  let Selected_Value = [
    "الدبلوم العالي",
    "البكالوريوس",
    "الماجستير",
    "الدكتوراه",
    "الدبلوم",
  ];

  if (Selected_Value.includes(this.inputFormField.Certi)) {
    if (
      this.inputFormField["Special"] == null ||
      this.inputFormField["Special"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[3].label} مطلوب`);
    }

    if (
      this.inputFormField["YearOfGradua"] == null ||
      this.inputFormField["YearOfGradua"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[4].label} مطلوب`);
    }
  }

  if (this.inputFormField.Tittel === "اخرى") {
    if (
      this.inputFormField["Others"] == null ||
      this.inputFormField["Others"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[5].label} مطلوب`);
    }
  }
}
