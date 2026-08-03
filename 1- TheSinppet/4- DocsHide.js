{
  // if (this.form_data.FirstSeletcor == "متزوج") {
  //   document.getElementsByClassName("47678")[0].style.display = "block"; //البطاقة الوطنية للزوجة
  // }

  //   if (this.form_data.FirstSeletcor != "متزوج") {
  //     document.getElementById("35381_group").style.display = "none";
  //   }

  console.log(this.form_data.HITHere);
  if (this.form_data.HITHere.includes("اخرى")) {
    document.getElementsByClassName("47695")[0].style.display = "block";
  }
}
