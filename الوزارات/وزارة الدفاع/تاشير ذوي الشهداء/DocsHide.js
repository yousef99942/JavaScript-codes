{
  if (
    this.form_data.family == "زوج / زوجة" ||
    this.form_data.family == "اب" ||
    this.form_data.family == "ام" ||
    this.form_data.family == "اخ / اخت" ||
    this.form_data.family == "ابن / ابنة"
  ) {
    document.getElementsByClassName("46456")[0].style.display = "none"; //المستمسكات مال اخ او اخت من جهة الام
    document.getElementsByClassName("46390")[0].style.display = "none"; //المستمسكات مال حفيد شهيد
  }

  if (
    this.form_data.family == "اخ / اخت - من جهة الام" ||
    this.form_data.family == "اب" ||
    this.form_data.family == "ام" ||
    this.form_data.family == "اخ / اخت" ||
    this.form_data.family == "ابن / ابنة"
  ) {
    document.getElementsByClassName("46486")[0].style.display = "none"; //المستمسكات مال الزوج او الزوجة
    document.getElementsByClassName("46390")[0].style.display = "none"; //المستمسكات مال حفيد شهيد
  }

  if (
    this.form_data.family == "حفيد من جهة الاب" ||
    this.form_data.family == "حفيد من جهة الام" ||
    this.form_data.family == "اب" ||
    this.form_data.family == "ام" ||
    this.form_data.family == "اخ / اخت" ||
    this.form_data.family == "ابن / ابنة"
  ) {
    document.getElementsByClassName("46486")[0].style.display = "none"; //المستمسكات مال الزوج او الزوجة
    document.getElementsByClassName("46456")[0].style.display = "none"; //المستمسكات مال اخ او اخت من جهة الام
  }
}
