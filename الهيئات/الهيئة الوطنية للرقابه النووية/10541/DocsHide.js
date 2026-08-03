{
  if (this.form_data.IDType == "البطاقة الوطنية") {
    document.getElementsByClassName("22014")[0].style.display = "none"; //جواز السفر
  }

  if (this.form_data.IDType == "جواز السفر") {
    document.getElementsByClassName("46691")[0].style.display = "none"; //البطاقة الموحدة
  }
}
