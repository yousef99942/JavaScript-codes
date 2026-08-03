{
  if (this.tab_click == "form") {
    var Fields_ID = [
        "29269",
        "27455", //البطاقة الوطنية
        "73113", //جواز السفر
        "73581", //سلكتر  الاقضية
        "74568", //اسم القضاء
        "73585", //سلكتر  الاقضية
        "74569", //اسم القضاء
        "73608", //سلكتر  الاقضية
        "74543", //اسم القضاء
      ],
      Fields_Prog = [
        "vcc",
        "nom", //البطاقة الوطنية
        "PassportNum", //جواز السفر
        "district", //سلكتر  الاقضية
        "SecDiscName", //اسم القضاء
        "SecondDistrict", //سلكتر  الاقضية
        "ThiDiscName", //اسم القضاء
        "ThirdDistrict", //سلكتر  الاقضية
        "DiscName", //اسم القضاء
      ];

    for (var i = 0; i < Fields_ID.length; i++) {
      document.getElementById(Fields_ID[i]).style.visibility = "collapse";
    }
  }
}
