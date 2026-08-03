{
  if (
    this.inputFormField.ordekind == "نقل داخل المحافظة" ||
    this.inputFormField.ordekind == "نقل من محافظة ديالى الى محافظة اخرى" ||
    this.inputFormField.ordekind == "نقل من محافظة اخرى الى محافظة ديالى"
  ) {
    if (
      this.inputFormField["city"] == null ||
      this.inputFormField["city"] == ""
    ) {
      this.evalErr.push("مطلوب القضاء الحالي");
    }
    if (
      this.inputFormField["citye"] == null ||
      this.inputFormField["citye"] == ""
    ) {
      this.evalErr.push("مطلوب القضاء الذي ينقل الاثاث اليه");
    }
  }

  if (this.inputFormField.ordekind == "نقل من محافظة ديالى الى محافظة اخرى") {
    if (
      this.inputFormField["governorate"] == null ||
      this.inputFormField["governorate"] == ""
    ) {
      this.evalErr.push("مطلوب المحافظة التي  ينقل الاثاث اليها");
    }
  }

  if (this.inputFormField.ordekind == "نقل من محافظة اخرى الى محافظة ديالى") {
    if (
      this.inputFormField["egovernorate"] == null ||
      this.inputFormField["egovernorate"] == ""
    ) {
      this.evalErr.push("مطلوب المحافظة الحالية");
    }
  }
}
