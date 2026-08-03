{
  if (this.tab_click == "form") {
    let Groups_ID = [
      "35228_group", //الملائمة
      "35229_group", //الكفاءة
      "35230_group", //الفعالية
      "35231_group", //الأثر
      "35232_group", //الأستدامة
    ];

    if (this.form_data.sagashen == "كلا") {
      Groups_ID.forEach(
        (Hiding) =>
          (document.getElementById(Hiding).style.visibility = "collapse"),
      );
    }

    if (this.form_data.sagashen == "نعم") {
      document.getElementById("88995").style.visibility = "collapse";
    }
  }
}
