{
  var IDs = ["34410_group", "34414_group", "34417_group"];

  for (var i = 0; i < IDs.length; i++) {
    document.getElementById(IDs[i]).style.display = "none";
  }

  //يقفل عدد النقاط
  document.getElementsByName("ThePoints")[0].disabled = true;

  //مجموعة نقاط المفاضلة
  document.getElementById("34454_group").style.display = "none";
}
