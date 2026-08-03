{
  var First_Docs_IDs = ["45884", "22077"],
    First_Docs_Progs = ["fanmilycard", "filname"];

  var Second_Docs_IDs = ["45476", "45477", "45478"],
    Second_Docs_Progs = ["request", "doc", "Grantt"];

  //common IDs between First and Second IDs
  var Common_IDs = ["22099"],
    Common_Progs = ["hhhhhhhhhhh"];

  var Third_Docs_IDs = ["45571", "45572", "45573", "45575"],
    Third_Docs_Progs = ["cancelattion", "note", "grant", "clearance"];

  //Common IDs between First and Third IDs
  var Second_Common_IDs = ["22095", "22097", "22096", "22098"],
    Second_Common_Progs = [
      "hhhhhhhhhhhhhh",
      "ggggggggggggggggg",
      "ghhhhhhghh",
      "gggggggggg",
    ];
  if (this.form_data.Grant == "منح فرن حجري او مخبز") {
    for (var i = 0; i < Second_Docs_IDs.length; i++) {
      document.getElementsByClassName(Second_Docs_IDs[i])[0].style.display =
        "none";
    }

    for (var i = 0; i < Third_Docs_IDs.length; i++) {
      document.getElementsByClassName(Third_Docs_IDs[i])[0].style.display =
        "none";
    }
  } else if (this.form_data.Grant == "تدوير فرن حجري او مخبز تجاري") {
    for (var i = 0; i < First_Docs_IDs.length; i++) {
      document.getElementsByClassName(First_Docs_IDs[i])[0].style.display =
        "none";
    }

    for (var i = 0; i < Third_Docs_IDs.length; i++) {
      document.getElementsByClassName(Third_Docs_IDs[i])[0].style.display =
        "none";
    }

    for (var i = 0; i < Second_Common_IDs.length; i++) {
      document.getElementsByClassName(Second_Common_IDs[i])[0].style.display =
        "none";
    }
  } else if (this.form_data.Grant == "الغاء اجازة ( فرن او مخبز)") {
    for (var i = 0; i < First_Docs_IDs.length; i++) {
      document.getElementsByClassName(First_Docs_IDs[i])[0].style.display =
        "none";
    }

    for (var i = 0; i < Second_Docs_IDs.length; i++) {
      document.getElementsByClassName(Second_Docs_IDs[i])[0].style.display =
        "none";
    }

    for (var i = 0; i < Common_IDs.length; i++) {
      document.getElementsByClassName(Common_IDs[i])[0].style.display = "none";
    }
  }
}
