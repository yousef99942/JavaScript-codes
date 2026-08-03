{
  //التاريخ الي المواطن راح يدخله بالاستمارة
  var FormDate = new Date(this.inputFormField.datebook);
  var FormYear = FormDate.getFullYear();
  //التاريخ الفعلي
  var RealDate = new Date();
  var RealYear = RealDate.getFullYear();

  if (FormYear < RealYear) {
    this.evalErr.push(
      "يجب أن يكون تاريخ صدور كتاب مؤسسة الشهداء ضمن سنة 2025 حصراً.",
    );
  }
}
