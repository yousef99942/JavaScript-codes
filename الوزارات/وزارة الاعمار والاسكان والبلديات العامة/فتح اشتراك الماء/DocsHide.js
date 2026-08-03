{
  if (this.form_data.owning == "ملك صرف") {
    document.getElementsByClassName("45914")[0].style.display = "none"; //العقد الزراعي
    document.getElementsByClassName("46891")[0].style.display = "none"; //وثيقة اشغال او انتفاع بالعقار
  }

  if (this.form_data.owning == "عقد زراعي") {
    document.getElementsByClassName("45913")[0].style.display = "none"; //سند ملكية
    document.getElementsByClassName("46891")[0].style.display = "none"; //وثيقة اشغال او انتفاع بالعقار
  }

  if (this.form_data.owning == "اخرى") {
    document.getElementsByClassName("45914")[0].style.display = "none"; //العقد الزراعي
    document.getElementsByClassName("45913")[0].style.display = "none"; //سند ملكية
  }
}
