{
  if (this.inputFormField.qutime == "غير ملائمة") {
    if (
      this.inputFormField["unsuitable"] == null ||
      this.inputFormField["unsuitable"] == ""
    ) {
      this.evalErr.push("حقل ماالذي يجعل التوقيتات الحالية غير ملائمة ؟ مطلوب");
    }
  }
}
