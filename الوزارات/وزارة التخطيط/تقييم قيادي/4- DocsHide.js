{
  var Docs_ID = [
    "47190",
    "47191",
    "47192",
    "47193",
    "47194",
    "47195",
    "47196",
    "47197",
    "47198",
    "47199",
  ];

  var Books_Number = parseInt(this.form_data.Thankyouletters);

  for (var i = 0; i < Docs_ID.length; i++) {
    if (i >= Books_Number) {
      var element = document.getElementsByClassName(Docs_ID[i])[0];
      if (element) {
        element.style.display = "none";
      }
    }
  }
}
