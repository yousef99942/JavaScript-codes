//--------------- Document Depedency ------------------
{
  var docLawIDs = "21495";
  if (this.form_data.infoOwnerType == "صاحب المشروع") {
    document.getElementsByClassName(docLawIDs)[0].style.display = "none";
  }
  //--- payment Bill --------
  document.getElementsByClassName("21809")[0].style.display = "none";
}
