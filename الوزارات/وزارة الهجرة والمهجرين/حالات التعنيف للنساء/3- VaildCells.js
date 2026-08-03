{
  //معلومات الشخص المتسبب بالتعنيف
  if (this.inputFormField.namell == "غيره") {
    if (
      this.inputFormField["nameqq"] == null ||
      this.inputFormField["nameqq"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }

  //هل ترغبين بتقديم بلاغ رسمي للجهات المعنية
  if (this.inputFormField.NAMEww == "نعم") {
    if (
      this.inputFormField["namerrrr"] == null ||
      this.inputFormField["namerrrr"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[17].label} مطلوب`,
      );
    }
  }

  //نوع التعنيف
  if (this.inputFormField.nameee == "اخرى") {
    if (
      this.inputFormField["texttayp"] == null ||
      this.inputFormField["texttayp"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[7].label} مطلوب`);
    }
  }

  //نوع الطلب
  if (
    this.inputFormField.namewqpaos ==
    "أستشارة نفسية بخصوص حالة التعنيف المتعرضة لها (أكتب تفاصيل الأستشارة المطلوبة)"
  ) {
    if (
      this.inputFormField["namerytyu"] == "" ||
      this.inputFormField["namerytyu"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[11].label} مطلوب`,
      );
    }
  }

  if (
    this.inputFormField.namewqpaos ==
    "أستشارة قانونية بخصوص حالة التعنيف المتعرضة لها (أكتب تفاصيل الاستشارة المطلوبة)"
  ) {
    if (
      this.inputFormField["nameqwias"] == "" ||
      this.inputFormField["nameqwias"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[12].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.namewqpaos == "تقديم بلاغ") {
    if (
      this.inputFormField["info"] == "" ||
      this.inputFormField["info"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`,
      );
    }
  }
}
