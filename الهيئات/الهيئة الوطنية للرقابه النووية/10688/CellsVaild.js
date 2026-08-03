{
  if (this.inputFormField.edc == "آخرى تذكر") {
    if (
      this.inputFormField["oth"] == "" ||
      this.inputFormField["oth"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`); //آخرى تذكر
    }
  }

  if (this.inputFormField.eeer == "نعم") {
    if (
      this.inputFormField["fdhkh"] == "" ||
      this.inputFormField["fdhkh"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[14].label} مطلوب`,
      ); //تملء بيانات الترخيص السابقة (اذا كانت الاجابة نعم)
    }
  }

  if (this.inputFormField.vhh == "نعم") {
    if (
      this.inputFormField["TVB"] == "" ||
      this.inputFormField["TVB"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[21].label} مطلوب`,
      ); //اذا كانت الاجابة نعم قم بملئ الدورات التدريبية في مجال الوقاية من الاشعاع (ترفق نسخة من شهادات التدريب)
    }
  }
}
