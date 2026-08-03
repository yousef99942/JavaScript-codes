{
  if (this.inputFormField.Com == "شركة توزيع المنتجات النفطية") {
    if (
      this.inputFormField["SubOilComapny"] == "" ||
      this.inputFormField["SubOilComapny"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[6].label} مطلوب`);
    }
  }
}
