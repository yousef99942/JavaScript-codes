{
  var Selected_Values = ["نعم"];

  if (Selected_Values.includes(this.form_data.last)) {
    document.getElementsByClassName("47411")[0].style.display = "block"; //يتم ارفاق صورة العقد السابق في حال كان لديك عقد سابق
  }
}
