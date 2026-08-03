{
  if (this.inputFormField.request == "تأييد استمرارية بالدوام") {
    if (
      this.inputFormField["title"] == null ||
      this.inputFormField["title"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  var Selected_Values = [
    "عدم ممانعة بالنقل الى الكلية",
    "استضافة طالب في الكلية",
    "استضافة من المسائي الى الصباحي",
    "استضافة من الصباحي الى المسائي",
    "نقل ضمن فروع الكلية وخارجها",
  ];

  if (Selected_Values.includes(this.inputFormField.request)) {
    if (
      this.inputFormField["from"] == null ||
      this.inputFormField["from"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[8].label} مطلوب`);
    }

    if (
      this.inputFormField["moveto"] == null ||
      this.inputFormField["moveto"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[9].label} مطلوب`);
    }
  }
}
