//--------- show request ----------
{
  if (this.tab_click == "form") {
    var rowFieldsIDs = ["1451", "1265", "2123", "2124"];
    // ---- Citizen --------
    if (this.form_data.infoOwnerType == "صاحب المشروع") {
      rowFieldsIDs.forEach((el) => {
        document.getElementById(el).style.visibility = "collapse";
      });
    }
    // ---- payment --------
    if (
      this.form_data.underReqOfficeSelect != "مكاتب المحافظات التابعة للمديرية"
    ) {
      document.getElementById("26408").style.visibility = "collapse";
    }
  } else if (this.tab_click == "document") {
    var rowDocIDs = "21495";
    if (this.form_data.infoOwnerType == "صاحب المشروع") {
      document.getElementById(rowDocIDs).style.display = "none";
    }
    if (
      this.form_data.underReqOfficeSelect != "مكاتب المحافظات التابعة للمديرية"
    ) {
      document.getElementById("21809").style.display = "none";
    }
  }
}
