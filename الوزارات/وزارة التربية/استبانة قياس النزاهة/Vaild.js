{
  if (this.inputFormField.qesution == "كلا") {
    if (
      this.inputFormField["two"] == null ||
      this.inputFormField["two"] == ""
    ) {
      this.evalErr.push(
        "حقل  2- اذا كانت بـ( كلا ) فان سبب عدم تأخير معاملتك هو : (يمكن اختيار اكثر من اجابة) مطلوب"
      );
    }
  }

  if (this.inputFormField.eleveen == "نعم") {
    if (
      this.inputFormField["towleve"] == null ||
      this.inputFormField["towleve"] == ""
    ) {
      this.evalErr.push(
        "حقل 7- اذا كانت اجابتك بـ (نعم ) فان مستوى تفشي الرشوة في الدائرة ؟ مطلوب"
      );
    }
  }

  if (this.inputFormField.thirteenn == "نعم") {
    if (
      this.inputFormField["fourteen"] == null ||
      this.inputFormField["fourteen"] == ""
    ) {
      this.evalErr.push(
        "حقل 9- اذا كانت اجابتك بـــ(نعم ) فقد دفعت الرشوة : مطلوب"
      );
    }

    if (
      this.inputFormField["fifteen"] == null ||
      this.inputFormField["fifteen"] == ""
    ) {
      this.evalErr.push("حقل 10- ماسبب دفعك للرشوة ؟ مطلوب");
    }
  }
}
