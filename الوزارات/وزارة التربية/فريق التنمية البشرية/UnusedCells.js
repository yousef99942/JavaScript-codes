{
  if (this.tab_click == "form") {
    var Fields_ID = [
        "67796", //10
        "67802", //11
        "67805", //12
        "67807", //13
        "67808", //14
        "67987", //15
        "67988", //16
        "67989", //17
        "69273", //36
        "69318", //39
        "69356", //40
        "68159", //41
        "68160", //42
        "68183", //45
        "69357", //49
        "68593", //63
        "68602", //64
        "68864", //67
        "68871", //70
      ],
      Fields_Prog = [
        "PEMOneOne", //10
        "PEMOneTwo", //11
        "PEMOneThree", //12
        "PEMOneFour", //13
        "PEMOneFive", //14
        "PEMOneSix", //15
        "PEMOneSeven", //16
        "PEMOneEight", //17
        "bdfjjfjdf", //36
        "TRATwo", //39
        "TRATreeA", //40
        "TRATreeB", //41
        "TRAFour", //42
        "INNOVATEOneB", //45
        "DATATwo", //49
        "FUTURESeven", //63
        "FUTUREEight", //64
        "TRUSTTwo", //67
        "TRUSTFive", //70
      ];

    for (var i = 0; i < Fields_ID.length; i++) {
      if (this.form_data[Fields_Prog[i]] == null) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }
  }
}
