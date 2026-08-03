{
  var Labels_ID = ["68017", "67698", "67710"];
  var label1_Id = document.getElementById(Labels_ID[0]),
    label2_Id = document.getElementById(Labels_ID[1]),
    label3_Id = document.getElementById(Labels_ID[2]);

  label1_Id.style.fontSize = "20px";
  label1_Id.style.fontWeight = "bold";
  label1_Id.style.paddingTop = "5px";
  label1_Id.style.paddingBottom = "5px";

  label2_Id.style.fontSize = "20px";
  label2_Id.style.fontWeight = "bold";
  label2_Id.style.paddingTop = "5px";
  label2_Id.style.paddingBottom = "5px";

  label3_Id.style.fontSize = "20px";
  label3_Id.style.fontWeight = "bold";
  label3_Id.style.paddingTop = "5px";
  label3_Id.style.paddingBottom = "5px";

  var IDs = ["67694", "67698", "67893", "67710", "67765", "67766"];

  for (var i = 0; i < IDs.length; i++) {
    document.getElementById(IDs[i]).style.display = "none";
  }
}
