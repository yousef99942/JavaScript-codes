{
  var Labels_IDs = ["66330", "66340", "66349", "66356"];

  for (var i = 0; i < Labels_IDs.length; i++) {
    document.getElementById(Labels_IDs[i]).style.display = "none";
    document.getElementById(Labels_IDs[i]).style.cssText =
      "color: black; font-size: 20px; font-weight: bold; padding-top: 20px; padding-bottom: 20px;";
  }
}
