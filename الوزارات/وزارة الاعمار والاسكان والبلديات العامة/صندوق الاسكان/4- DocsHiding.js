{
  var docIDs = ["24258", "24259"];
  if (this.form_data.status == "اعزب") {
    docIDs.forEach((el) => {
      document.getElementsByClassName(el)[0].style.display = "none";
    });
  }

  if (this.form_data.DisAbility == "لا يوجد") {
    document.getElementsByClassName("24260")[0].style.display = "none";
  }
}
