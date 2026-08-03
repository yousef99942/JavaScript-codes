{
  if (this.tab_click == "form") {
    var IDs = [
        //مجموعة البنى التحتية
        "67308",
        "67310",
        "67311",
        "67312",
        "67313",
        "67314",
        "67501",
        "67322",
        "67825",
        "67823",
        //مال التطبيقات والبرمجيات
        "67330",
        "67502",
        "67511",
        "67570",
        "67337",
        "67340",
        "67341",
        "67342",
        "67603",
        "67346",
        "67347",
      ],
      Progs = [
        //مجموعة البنى التحتية
        "internaltype",
        "subsidairycount",
        "networknumber",
        "networkconn",
        "cnumber",
        "uncovered",
        "serverstype",
        "requirednum",
        "fiberopticnode",
        "firwallnumber",
        //مال التطبيقات والبرمجيات
        "types",
        "licensedoffice",
        "antivirustype",
        "erpusers",
        "application",
        "percentage",
        "userarchive",
        "scanners",
        "paperlesstype",
        "emailstype",
        "noemail",
      ];

    for (var i = 0; i < IDs.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(IDs[i]).style.visibility = "collapse";
      }
    }
  }
}
