{
  if (this.inputFormField.IDType == "البطاقة الموحدة") {
    if (
      this.inputFormField["idcard"] == "" ||
      this.inputFormField["idcard"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[14].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.IDType == "جواز السفر") {
    if (
      this.inputFormField["ress"] == "" ||
      this.inputFormField["ress"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`,
      );
    }
  }

  var Values = [
      "الانبار",
      "بابل",
      "بغداد",
      "البصرة",
      "ديالى",
      "ذي قار",
      "صلاح الدين",
      "القادسية",
      "كركوك",
      "كربلاء المقدسة",
      "المثنى",
      "ميسان",
      "النجف الاشرف",
      "نينوى",
      "واسط",
    ],
    Second_Values = ["اربيل", "السليمانية", "دهوك", "حلبجة"];

  if (Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[3].label} مطلوب`);
    }
  }

  if (Second_Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["FirdtDist"] == null ||
      this.inputFormField["FirdtDist"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[4].label} مطلوب`);
    }
  }

  //رقم هاتف المؤسسة
  const phoneNo2 = this.inputFormField.mob;
  let startNo2 = phoneNo2.substring(0, 2);
  if (startNo2 != "07") {
    this.evalErr.push("يجب أن يبدأ رقم هاتف مسؤول الوقاية بالرقم 07.");
  }
}
