{
  //Group Number 1
  var ProgNames = ["selecthree", "selecff", "numthree", "numfour"],
    CellsIndex = [15, 16, 17, 18];

  if (
    this.inputFormField.seleone == "متزوج" ||
    this.inputFormField.seleone == "ارمل" ||
    this.inputFormField.seleone == "مفقود"
  ) {
    // from 0 to 2 becuase the vaildation is only on عمل الزوج/ة and هل لديك اطفال
    for (var i = 0; i < 2; i++) {
      if (
        this.inputFormField[ProgNames[i]] == null ||
        this.inputFormField[ProgNames[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[CellsIndex[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.seleone == "مطلق") {
    if (
      this.inputFormField[ProgNames[1]] == null ||
      this.inputFormField[ProgNames[1]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[CellsIndex[1]].label} مطلوب`
      );
    }
  }

  //from 2 to 4 for the cells of عدد الاطفال وعدد الاطفال غير المتزوجين
  if (this.inputFormField.selecff == "نعم") {
    for (var i = 2; i < 4; i++) {
      if (
        this.inputFormField[ProgNames[i]] == null ||
        this.inputFormField[ProgNames[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[CellsIndex[i]].label} مطلوب`
        );
      }
    }
  }

  var FirstIndex = [0, 1, 2, 3, 4, 5, 9],
    SecondIndex = [0, 4],
    ThirdIndex = [0, 4, 5, 6],
    FourthIndex = [0, 1, 2, 3, 4, 5, 6],
    FifthIndex = [0, 1, 2, 3, 4, 8];

  //Group Number 3
  //"فئة المشمولين بالرعاية الاجتماعية"
  var GroupOne = ["booknumber", "bookdate"];

  if (this.inputFormField.catgeory == "فئة المشمولين بالرعاية الاجتماعية") {
    for (var i = 0; i < GroupOne.length; i++) {
      if (
        this.inputFormField[GroupOne[i]] == null ||
        this.inputFormField[GroupOne[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 4
  //"عوائل الشهداء"
  var GroupTwo = [
    "selectorone",
    "numberofcertificate",
    "dateone",
    "datefour",
    "relventsel",
    "conditionf",
    "commitment",
  ];

  if (this.inputFormField.catgeory == "عوائل الشهداء") {
    for (var i = 0; i < GroupTwo.length; i++) {
      if (
        this.inputFormField[GroupTwo[i]] == null ||
        this.inputFormField[GroupTwo[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.conditionf == "كتاب") {
    if (
      this.inputFormField["numberorid"] == null ||
      this.inputFormField["numberorid"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[6].label} مطلوب`);
    }

    if (
      this.inputFormField["datetwo"] == null ||
      this.inputFormField["datetwo"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[7].label} مطلوب`);
    }
  }

  if (this.inputFormField.conditionf == "هوية مؤسسة الشهداء") {
    if (
      this.inputFormField["idcardMartyrs"] == null ||
      this.inputFormField["idcardMartyrs"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[8].label} مطلوب`);
    }
  }

  //Group Number 5
  //"اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق"
  var GroupThree = ["gfive", "gfivedate", "merraied"];

  if (
    this.inputFormField.catgeory ==
    "اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق"
  ) {
    for (var i = 0; i < GroupThree.length; i++) {
      if (
        this.inputFormField[GroupThree[i]] == null ||
        this.inputFormField[GroupThree[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[4].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 6
  //"شريحة الأطباء الاختصاص"
  var GroupFour = ["gsixnumber", "gsixdate"];

  if (this.inputFormField.catgeory == "شريحة الأطباء الاختصاص") {
    for (var i = 0; i < GroupFour.length; i++) {
      if (
        this.inputFormField[GroupFour[i]] == null ||
        this.inputFormField[GroupFour[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[5].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 7
  //"الموظفين الذين توفوا خلال العمل او من جرائه"
  var GroupFive = [
    "seventhnumber",
    "sventhdate",
    "sventhnumbertwo",
    "datetwoseventhg",
    "sventhgselector",
  ];

  if (
    this.inputFormField.catgeory ==
    "الموظفين الذين توفوا خلال العمل او من جرائه"
  ) {
    for (var i = 0; i < GroupFive.length; i++) {
      if (
        this.inputFormField[GroupFive[i]] == null ||
        this.inputFormField[GroupFive[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[6].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 8
  //"المهجرين والمهاجرين بسبب اضطهاد النظام السابق"
  var GroupSix = ["depend", "marieed"];

  if (
    this.inputFormField.catgeory ==
    "المهجرين والمهاجرين بسبب اضطهاد النظام السابق"
  ) {
    for (var i = 0; i < GroupSix.length; i++) {
      if (
        this.inputFormField[GroupSix[i]] == null ||
        this.inputFormField[GroupSix[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[7].fields[SecondIndex[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.depend == "كتاب") {
    if (
      this.inputFormField["eightnumber"] == null ||
      this.inputFormField["eightnumber"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[7].fields[2].label} مطلوب`);
    }

    if (
      this.inputFormField["eigthdate"] == null ||
      this.inputFormField["eigthdate"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[7].fields[3].label} مطلوب`);
    }
  }

  if (this.inputFormField.depend == "هوية وزارة الهجرة والمهجرين") {
    if (
      this.inputFormField["eightgnumber"] == null ||
      this.inputFormField["eightgnumber"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[7].fields[1].label} مطلوب`);
    }
  }

  //Group Number 9
  //"السجناء والمعتقلين السياسيين"
  var GroupSeven = ["dependtwo", "timefrom", "dateto", "prisoner"];

  if (this.inputFormField.catgeory == "السجناء والمعتقلين السياسيين") {
    for (var i = 0; i < GroupSeven.length; i++) {
      if (
        this.inputFormField[GroupSeven[i]] == null ||
        this.inputFormField[GroupSeven[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[8].fields[ThirdIndex[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.dependtwo == "كتاب") {
    if (
      this.inputFormField["ninenumber"] == null ||
      this.inputFormField["ninenumber"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[8].fields[1].label} مطلوب`);
    }

    if (
      this.inputFormField["date"] == null ||
      this.inputFormField["date"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[8].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.dependtwo == "هوية مؤسسة السجناء السياسيين") {
    if (
      this.inputFormField["idcarddepend"] == null ||
      this.inputFormField["idcarddepend"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[8].fields[3].label} مطلوب`);
    }
  }

  //Group Number 10
  //"اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019"
  var GroupEight = [
    "tenthnumber",
    "tenthdate",
    "Disabilityrate",
    "ageofrequester",
  ];

  if (
    this.inputFormField.catgeory ==
    "اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019"
  ) {
    for (var i = 0; i < GroupEight.length; i++) {
      if (
        this.inputFormField[GroupEight[i]] == null ||
        this.inputFormField[GroupEight[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[9].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 11
  //"حملة الشهادات العليا ( العاملين في دوائر الدولة )"
  var GroupNine = [
    "eleventhnumber",
    "eleventhdate",
    "Authentication",
    "eleventhdatetwo",
    "eleventhdatethree",
    "gradation",
    "marriage",
  ];

  if (
    this.inputFormField.catgeory ==
    "حملة الشهادات العليا ( العاملين في دوائر الدولة )"
  ) {
    for (var i = 0; i < GroupNine.length; i++) {
      if (
        this.inputFormField[GroupNine[i]] == null ||
        this.inputFormField[GroupNine[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[10].fields[FourthIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 12
  //"الصحفيين"
  var GroupTen = [
    "twelvenumber",
    "twelvedate",
    "advowson",
    "advowsondate",
    "location",
    "ordernumber",
    "orderdate",
  ];

  if (this.inputFormField.catgeory == "الصحفيين") {
    for (var i = 0; i < GroupTen.length; i++) {
      if (
        this.inputFormField[GroupTen[i]] == null ||
        this.inputFormField[GroupTen[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[11].fields[FourthIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 13
  //"المتقاعدين"
  var GroupEleven = [
    "commencement",
    "commencementdate",
    "Retirement",
    "Retirementdate",
    "deepend",
  ];

  if (this.inputFormField.catgeory == "المتقاعدين") {
    for (var i = 0; i < GroupEleven.length; i++) {
      if (
        this.inputFormField[GroupEleven[i]] == null ||
        this.inputFormField[GroupEleven[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[12].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 14
  //"مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية"
  var GroupTwelve = [
    "Woundedcategory",
    "Disability",
    "booknumberr",
    "boikdate",
    "contract",
  ];

  if (
    this.inputFormField.catgeory ==
    "مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية"
  ) {
    for (var i = 0; i < GroupTwelve.length; i++) {
      if (
        this.inputFormField[GroupTwelve[i]] == null ||
        this.inputFormField[GroupTwelve[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[13].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 15
  //"عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"
  var GroupThriteen = [
    "certificatenumber",
    "certificatedate",
    "Dateofmartyrdom",
    "relevant",
    "selectorcondition",
    "condition",
  ];

  if (
    this.inputFormField.catgeory ==
    "عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"
  ) {
    for (var i = 0; i < GroupThriteen.length; i++) {
      if (
        this.inputFormField[GroupThriteen[i]] == null ||
        this.inputFormField[GroupThriteen[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[14].fields[FifthIndex[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.selectorcondition == "كتاب") {
    if (
      this.inputFormField["booknm"] == null ||
      this.inputFormField["booknm"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[14].fields[5].label} مطلوب`
      );
    }

    if (
      this.inputFormField["bookkdate"] == null ||
      this.inputFormField["bookkdate"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[14].fields[6].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.selectorcondition == "هوية مؤسسة الشهداء") {
    if (
      this.inputFormField["idnumber"] == null ||
      this.inputFormField["idnumber"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[14].fields[7].label} مطلوب`
      );
    }
  }

  //Group Number 16
  //"المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد رقم كتاب لجنة التعويض"
  var GroupFourteen = ["Committeenumber", "Committeedate", "locationcondition"];

  if (
    this.inputFormField.catgeory ==
    "المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد رقم كتاب لجنة التعويض"
  ) {
    for (var i = 0; i < GroupFourteen.length; i++) {
      if (
        this.inputFormField[GroupFourteen[i]] == null ||
        this.inputFormField[GroupFourteen[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[15].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 17
  //"المشمولين بالمادة 140 من الدستور"
  var GroupFifthteen = ["seventenbooknumber", "seventeenbookdate"];

  if (this.inputFormField.catgeory == "المشمولين بالمادة 140 من الدستور") {
    for (var i = 0; i < GroupFifthteen.length; i++) {
      if (
        this.inputFormField[GroupFifthteen[i]] == null ||
        this.inputFormField[GroupFifthteen[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[16].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 18
  //"المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة"
  var GroupSixTeen = [
    "job",
    "eighteenbooknumber",
    "eighteenbookdate",
    "conditioneighteen",
  ];

  if (
    this.inputFormField.catgeory ==
    "المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة"
  ) {
    for (var i = 0; i < GroupSixTeen.length; i++) {
      if (
        this.inputFormField[GroupSixTeen[i]] == null ||
        this.inputFormField[GroupSixTeen[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[17].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 19
  //"الرياضيين المتمزين واصحاب الانجازات الرياضية"
  var GroupSeventeen = [
    "nineteenbooknumber",
    "nineteendate",
    "marrriage",
    "medals",
    "type",
    "medal",
  ];

  if (
    this.inputFormField.catgeory ==
    "الرياضيين المتمزين واصحاب الانجازات الرياضية"
  ) {
    for (var i = 0; i < GroupSeventeen.length; i++) {
      if (
        this.inputFormField[GroupSeventeen[i]] == null ||
        this.inputFormField[GroupSeventeen[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[18].fields[FirstIndex[i]].label} مطلوب`
        );
      }
    }
  }

  //Group Number 20
  //"عوائل الشهداء السياسيين"
  var GroupEighteen = ["conndition", "lastcondition"];

  if (this.inputFormField.catgeory == "عوائل الشهداء السياسيين") {
    for (var i = 0; i < GroupEighteen.length; i++) {
      if (
        this.inputFormField[GroupEighteen[i]] == null ||
        this.inputFormField[GroupEighteen[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[19].fields[SecondIndex[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.conndition == "كتاب") {
    if (
      this.inputFormField["twentybooknumber"] == null ||
      this.inputFormField["twentybooknumber"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[19].fields[1].label} مطلوب`
      );
    }

    if (
      this.inputFormField["twentybookdate"] == null ||
      this.inputFormField["twentybookdate"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[19].fields[2].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.conndition == "هوية مؤسسة الشهداء") {
    if (
      this.inputFormField["cardidd"] == null ||
      this.inputFormField["cardidd"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[19].fields[3].label} مطلوب`
      );
    }
  }
}
