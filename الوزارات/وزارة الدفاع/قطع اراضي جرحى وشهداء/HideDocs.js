{
  var Docs_ID = [
    //مال جريح
    "45918",
    "45919",
    //مال الشهيد والمتوفي
    "45782",
    "45783",
    "45784",
    "45786",
    //مال الشهيد
    "45785",
  ];

  if (this.form_data.type == "جريح") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i > 1) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  } else if (this.form_data.type == "متوفي منجز") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i < 2 || i == 6) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  } else if (this.form_data.type == "شهيد منجز") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i < 2) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  } else {
    for (var i = 0; i < Docs_ID.length; i++) {
      document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
    }
  }
}
