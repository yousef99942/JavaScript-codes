{
  if (this.inputFormField.CerKind == "دبلوم") {
    if (
      this.inputFormField["Depnm"] == null ||
      this.inputFormField["Depnm"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`); //القسم
    }
  }

  if (this.inputFormField.Depnm) {
    if (
      this.inputFormField["SupSpec"] == null ||
      this.inputFormField["SupSpec"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[2].label} مطلوب`); //الاختصاص الدقيق
    }
  }

  if (this.inputFormField.ReqType == "مخاطبات رسمية") {
    if (
      this.inputFormField["Stype"] == null ||
      this.inputFormField["Stype"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[8].label} مطلوب`); //نوع المخاطبة
    }
  }
}
