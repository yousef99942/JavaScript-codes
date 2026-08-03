{
  if (this.form_data.include == "لا") {
    document.getElementsByClassName("45328")[0].style.display = "none";
  }

  if (this.form_data.disability == "لا") {
    document.getElementsByClassName("45327")[0].style.display = "none";
  }

  if (this.form_data.classification == "لا") {
    document.getElementsByClassName("45329")[0].style.display = "none";
  }

  if (this.form_data.graduationstatus == "يقرأ ويكتب") {
    document.getElementsByClassName("45315")[0].style.display = "none";
  }
}
