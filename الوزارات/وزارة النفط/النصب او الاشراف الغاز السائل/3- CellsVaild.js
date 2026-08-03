//Write your code here
{
  if (this.inputFormField.Service == "اعداد تصاميم شبكات الغاز السائل") {
    if (
      this.inputFormField["gas"] == "" ||
      this.inputFormField["gas"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[0].label} مطلوب`);
    }

    if (
      this.inputFormField["MGB"] == "" ||
      this.inputFormField["MGB"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.MGB == "نعم") {
    if (
      this.inputFormField["Microsoft"] == "" ||
      this.inputFormField["Microsoft"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[2].label} مطلوب`);
    }
  }

  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo = this.inputFormField.Phon;
  let startNo = phoneNo.substring(0, 2);
  if (startNo != "07") {
    this.evalErr.push("يجب أن يبدأ رقم الهاتف بالرقم 07.");
  }

  //قكشن للتحقق من محتوى الحقول
  // function useRegex(input, regex) {
  //   return regex.test(input);
  // }
  // let arabNameRegex =
  //   /\s.*\s|[a-zA-Z]|[~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]|[0-9]/;

  // const arabNames = ["name", "SecName", "ThName", "LandType"];
  // for (let i = 0; i < arabNames.length; i++) {
  //   const content = this.inputFormField[arabNames[i]];
  //   if (useRegex.call(this, content, arabNameRegex)) {
  //     this.evalErr.push(
  //       `في حقل (${this.group_of_form[0].fields[i + 1].label}) يرجى ادخال الحروف العربية فقط`,
  //     );
  //   }
  // }
}
