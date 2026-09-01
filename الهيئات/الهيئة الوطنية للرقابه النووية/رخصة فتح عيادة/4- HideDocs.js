{
  if (this.form_data.hhm === "تجديد الاجازة") {
    document.getElementsByClassName("48038")[0].style.display = "block"; //تعهد تجديد اجازة عيادة
    document.getElementsByClassName("48037")[0].style.display = "none"; //تعهد الغاء العيادة
  } else if (this.form_data.hhm === "الغاء اجازة") {
    document.getElementsByClassName("48037")[0].style.display = "block"; //تعهد الغاء العيادة
    document.getElementsByClassName("48038")[0].style.display = "none"; //تعهد تجديد اجازة عيادة
  } else {
    document.getElementsByClassName("48037")[0].style.display = "none"; //تعهد الغاء العيادة
    document.getElementsByClassName("48038")[0].style.display = "none"; //تعهد تجديد اجازة عيادة
  }
}
