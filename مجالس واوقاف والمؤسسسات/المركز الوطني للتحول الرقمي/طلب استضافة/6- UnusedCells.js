{
  if (this.tab_click == "form") {
    var IDs = [
        "68941",
        "68943",
        "68946",
        "70468",
        "68951",
        "68950",
        "71648",
        "68954",
        "68956",
        "68958",
        "68947",
        "68949",
        "68957",
        "68952",
        "70452",
        "68955",
        "68945",
      ],
      Progs = [
        "emailOfOrq",
        "emailOfoar",
        "NameOfDomain",
        "nameOfSubDomain",
        "typeOfProgrammingWithVersion",
        "typeOfDataba",
        "timeOfUpload",
        "sizreOFfile",
        "numberOfaccountNeed",
        "wayToApi",
        "sunDomain",
        "IfHaveDataBa",
        "APIContain",
        "distict",
        "EmailSize",
        "IFneedEmail",
        "IfHave",
      ];

    for (var i = 0; i < IDs.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(IDs[i]).style.visibility = "collapse";
      }
    }
  }
}
