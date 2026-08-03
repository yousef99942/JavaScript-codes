{
  if (
    this.inputFormField.academicAchievement === "إعدادية مهنية" ||
    this.inputFormField.academicAchievement === "دبلوم" ||
    this.inputFormField.academicAchievement === "بكالوريوس" ||
    this.inputFormField.academicAchievement === "ماجستير" ||
    this.inputFormField.academicAchievement === "دكتوراة"
  ) {
    if (
      this.inputFormField["department"] == null ||
      this.inputFormField["department"] == ""
    ) {
      this.evalErr.push("الاختصاص مطلوب");
    }

    if (
      this.inputFormField["dep"] == null ||
      this.inputFormField["dep"] == ""
    ) {
      this.evalErr.push("الاختصاص الدقيق مطلوب");
    }
  }

  if (this.inputFormField.experience === "نعم") {
    if (
      this.inputFormField["details"] == null ||
      this.inputFormField["details"] == ""
    ) {
      this.evalErr.push("تفاصيل العمل والخبرة السابقة مطلوب");
    }
  }

  // if (this.inputFormField.skills === "أخرى") {
  //   if (
  //     this.inputFormField["other"] == null ||
  //     this.inputFormField["other"] == ""
  //   ) {
  //     this.evalErr.push("أخرى مطلوب");
  //   }
  // }

  if (this.inputFormField.income === "نعم") {
    if (
      this.inputFormField["ifYes"] == null ||
      this.inputFormField["ifYes"] == ""
    ) {
      this.evalErr.push("مصدر الدخل الآخر مطلوب");
    }
  }

  let The_Value = this.inputFormField.skills;
  if (The_Value.includes("أخرى")) {
    if (
      this.inputFormField["other"] == null ||
      this.inputFormField["other"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[3].label} مطلوب`);
    }
  }
}
