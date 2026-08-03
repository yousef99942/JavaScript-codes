{
  if (
    this.inputFormField.nameljna == "لجنة العيادات الشعبية المركزية" ||
    this.inputFormField.nameljna == "لجنة العيادات الشعبية المركزية في نينوى"
  ) {
    if (this.inputFormField.pasText != "mpc") {
      this.evalErr.push("يرجى كتابة الرمز التعريفي");
    }
  }

  if (this.inputFormField.governorate == "بغداد") {
    if (
      this.inputFormField["GOVValues"] == null ||
      this.inputFormField["GOVValues"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`); //حقل القضاء
    }
  }

  let Values = [
    "الكرخ",
    "الرصافة",
    "البصرة",
    "الانبار",
    "بابل",
    "النجف الاشرف",
    "ميسان",
    "واسط",
    "المثنى",
    "كركوك",
    "كربلاء المقدسة",
    "ديالى",
    "الديوانية",
    "صلاح الدين",
    "نينوى",
    "ذي قار",
  ];

  if (
    Values.includes(this.inputFormField.governorate) ||
    Values.includes(this.inputFormField.GOVValues)
  ) {
    if (
      this.inputFormField["typeReserve"] == null ||
      this.inputFormField["typeReserve"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`); //موعد الفحص
    }
  }

  //التاكد من العمر
  var Person_Age = new Date(this.inputFormField.agee);
  var Vaild_Year = new Date();

  if (Person_Age.getFullYear() > Vaild_Year.getFullYear() - 18) {
    this.evalErr.push("يجب ان يكون عمر المتقدم اكبر من 18 عاماً");
  }
}
