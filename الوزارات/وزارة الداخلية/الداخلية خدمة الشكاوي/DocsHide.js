{
  if (
    this.form_data.Categories == "مواطن" ||
    this.form_data.Categories == "ضباط الداخلية" ||
    this.form_data.Categories == "منتسبي الداخلية"
  ) {
    //The 0 is the number of the group that this document is in
    document.getElementsByClassName("45247")[0].style.display = "none";
    document.getElementsByClassName("45248")[0].style.display = "none";
    //document.getElementsByClassName("45249")[0].style.display = "none";
  } else {
    document.getElementsByClassName("45247")[0].style.display = "block";
    document.getElementsByClassName("45248")[0].style.display = "block";
    //document.getElementsByClassName("45249")[0].style.display = "block";
  }

  if (
    (this.form_data.Categories == "شهداء الداخلية" ||
      this.form_data.Categories == "ذوي متوفين الداخلية") &&
    this.form_data.mireed == "متزوج/ة"
  ) {
    document.getElementsByClassName("45249")[0].style.display = "block";
  } else {
    document.getElementsByClassName("45249")[0].style.display = "none";
  }
}
//This is the end of the code
