//Write your code here
{
  if (this.form_data.hajezmmmo == "حجز بيت الشباب") {
    document.getElementsByClassName("34701")[0].style.display = "block";
  } else {
    document.getElementsByClassName("34701")[0].style.display = "none";
  }

  if (this.form_datatypehajezpp != "موافقة خاصة مجانية") {
    document.getElementsByClassName("34702")[0].style.display = "none";
  }
}
