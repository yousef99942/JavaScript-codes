{
  if (this.form_data.adelaa != "نعم") {
    document.getElementsByClassName("47024")[0].style.display = "none"; //مرفق الادلة الرسمية
  }

  if (this.form_data.nadelaa != "نعم") {
    document.getElementsByClassName("47025")[0].style.display = "none"; //مرفق الادلة الغير رسمية
  }

  if (this.form_data.typeeee == "وريث") {
    document.getElementsByClassName("47029")[0].style.display = "none"; //الوكالة (للوكيل)
  }

  if (this.form_data.typeeee == "وكيل") {
    document.getElementsByClassName("47110")[0].style.display = "none"; //القسام الشرعي (للوريث)
  }

  if (this.form_data.typeeee != "وريث" && this.form_data.typeeee != "وكيل") {
    document.getElementsByClassName("47029")[0].style.display = "none"; //الوكالة (للوكيل)
    document.getElementsByClassName("47110")[0].style.display = "none"; //القسام الشرعي (للوريث)
  }
}
