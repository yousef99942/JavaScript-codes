{
  if (this.inputFormField.taakoffice == "هيئة توزيع منتجات بغداد") {
    if (
      this.inputFormField["OilGas"] == null ||
      this.inputFormField["OilGas"] == ""
    ) {
      this.evalErr.push("مطلوب الحقل (يرجى اختيار نوع حمولة المنتوج)");
    }
  }

  //للتاكد من بداية رقم الهاتف ب07
  const phoneNo = this.inputFormField.anothephone;
  let startNo = phoneNo.substring(0, 2);
  if (startNo != "07") {
    this.evalErr.push("يجب أن يبدأ رقم الهاتف  بديل بالرقم 07.");
  }
}
