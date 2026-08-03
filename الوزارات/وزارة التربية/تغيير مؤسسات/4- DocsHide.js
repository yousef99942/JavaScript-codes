{
  if (
    this.form_data.object == "رفع المستوى" ||
    this.form_data.StudeyType ||
    this.form_data.GenderOfInstit
  ) {
    document.getElementsByClassName("47684")[0].style.display = "block"; //كتاب الحاجة الفعلية للتغير
  }

  if (this.form_data.object == "رفع المستوى") {
    document.getElementsByClassName("47685")[0].style.display = "block"; //نسبة النجاح لاخر سنة 80% واكثر تحتوى على QR
  }

  if (this.form_data.StudeyType || this.form_data.GenderOfInstit) {
    document.getElementsByClassName("47692")[0].style.display = "block"; //كتاب موقع من الاهالي بموافقتهم على التغيير
  }

  if (this.form_data.NameChange) {
    document.getElementsByClassName("47694")[0].style.display = "block"; //في حال تغيير الاسم كتاب يحتوي QR بأن الاسم غير مستخدم
  }
}
