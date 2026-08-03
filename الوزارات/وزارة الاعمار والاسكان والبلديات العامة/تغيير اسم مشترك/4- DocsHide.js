{
  if (this.form_data.proprtytype == "ملك صرف") {
    document.getElementsByClassName("45933")[0].style.display = "none"; //العقد الزراعي
    document.getElementsByClassName("46892")[0].style.display = "none"; //وثيقة اشغال او انتفاع بالعقار
  }

  if (this.form_data.proprtytype == "عقد زراعي") {
    document.getElementsByClassName("45932")[0].style.display = "none"; //سند ملكية
    document.getElementsByClassName("46892")[0].style.display = "none"; //وثيقة اشغال او انتفاع بالعقار
  }

  if (this.form_data.proprtytype == "اخرى") {
    document.getElementsByClassName("45933")[0].style.display = "none"; //العقد الزراعي
    document.getElementsByClassName("45932")[0].style.display = "none"; //سند ملكية
  }
}
