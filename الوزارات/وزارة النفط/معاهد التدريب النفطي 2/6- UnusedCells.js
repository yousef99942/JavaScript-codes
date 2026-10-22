{
  if (this.tab_click == "form") {
    var IDs = [
        "96282",
        "96283",
        "96284",
        "96285",
        "96286",
        "96287",
        "96288",
        "96272",
        "96277",
        "96279",
        "96260",
      ],
      Progs = [
        "category",
        "ShNam",
        "Conect",
        "ResNum",
        "DecDate",
        "Msh",
        "Sign",
        "Special",
        "degree",
        "chance",
        "ReligionName",
      ];

    for (var i = 0; i < IDs.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(IDs[i]).style.visibility = "collapse";
      }
    }

    document.getElementById("97260").style.visibility = "collapse"; //التقديم على الخدمة مغلق، ومتاح فقط لتصحيح الطلبات السابقة.
  }
}
