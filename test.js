{
  if (this.form_data.bcgVaccineAR) {
    console.log("it is working");
    document.getElementsByClassName("47260")[0].style.display = "none";
  }

  var docsAr = ["35069_group", "35070_group", "35072_group"];

  var docsEn = ["35188_group", "35189_group", "35199_group"];

  if (this.form_data.certificateLanguage == "العربية") {
    for (var i = 0; i < docsAr.length; i++) {
      var el = document.getElementById(docsAr[i]);
      if (el) el.style.display = "block";
    }

    for (var i = 0; i < docsEn.length; i++) {
      var el = document.getElementById(docsEn[i]);
      if (el) el.style.display = "none";
    }
  } else if (this.form_data.certificateLanguage == "الانكليزية") {
    for (var i = 0; i < docsAr.length; i++) {
      var el = document.getElementById(docsAr[i]);
      if (el) el.style.display = "none";
    }

    for (var i = 0; i < docsEn.length; i++) {
      var el = document.getElementById(docsEn[i]);
      if (el) el.style.display = "block";
    }
  }
}
