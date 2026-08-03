{
  if (this.form_data.Visitor == "محامي") {
    document.getElementsByClassName("46520")[0].style.display = "none"; //هوية المدير المفوض
  }

  if (
    this.form_data.Visitor == "مواطن بموجب وكالة, مساهم, مدير مفوض" &&
    this.form_data.condition == "نعم"
  ) {
    document.getElementsByClassName("46519")[0].style.display = "none"; //هوية نقابة المحامين
  }

  if (
    this.form_data.Visitor == "مواطن بموجب وكالة, مساهم, مدير مفوض" &&
    this.form_data.condition == "كلا"
  ) {
    document.getElementById("34569_group").style.display = "none";
  }
}
