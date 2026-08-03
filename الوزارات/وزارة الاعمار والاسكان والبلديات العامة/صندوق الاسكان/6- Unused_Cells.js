{
  if (this.tab_click == "form") {
    var Fields_Progs = [
        "FirstSponsorName",
        "sponsermothername",
        "FirstDOB",
        "FirstSponsorOfficeId",
        "FirstDateSponsorLetter",
        "FirstNoSponsorLetter",
        "FirstHalfMonthlyWage",
        "kafelBasicSalary1",
        "SecondSponsorName",
        "SecondMotherName",
        "SecondDOB",
        "SecondSponsorOfficeId",
        "SecondDateSponsorLetter",
        "SecondNoSponsorLetter",
        "SecondHalfMonthlyWage",
        "kafelBasicSalary2",
        "ThirdSponsorName",
        "ThirdMotherName",
        "ThirdDOB",
        "ThirdSponsorOfficeId",
        "ThirdDateSponsorLetter",
        "ThirdNoSponsorLetter",
        "ThirdHalfMonthlyWage",
        "kafelBasicSalary3",
      ],
      Fields_ID = [
        "49166",
        "49167",
        "49168",
        "49169",
        "49170",
        "49171",
        "49172",
        "49173",
        "49174",
        "49175",
        "49176",
        "49177",
        "49178",
        "49179",
        "49180",
        "49181",
        "49182",
        "49183",
        "49184",
        "49185",
        "49186",
        "49187",
        "49188",
        "49189",
      ];

    for (var i = 0; i < Fields_Progs.length; i++) {
      if (this.form_data[Fields_Progs[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }
  }
}
