{
  var FirstGroup = [
      "text",
      "two",
      "three",
      "fff",
      "rti",
      "mlo",
      "qqw",
      "poa",
      "hjf",
      "bxz",
      "opy",
      "qwb",
      "sdsasa",
      "dsghwq",
    ],
    SecondGroup = [
      "qwn",
      "gls",
      "bsn",
      "yip",
      "ebm",
      "kom",
      "wqd",
      "pfds",
      "qwc",
      "wvn",
      "nwsz",
      "pdsa",
      "dmz",
      "pshndf",
      "ohnswq",
    ],
    ThirdGroup = [
      "lsap",
      "dfsa",
      "asdf",
      "asdb",
      "dsjl",
      "pdsf",
      "cba",
      "pofb",
      "vdx",
      "qef",
      "dcb",
      "bdcs",
      "pdls",
      "snbw",
      "qwefbh",
    ],
    FourthGroup = [
      "fods",
      "fvhsa",
      "uidk",
      "ospgh",
      "kdghs",
      "dggsd",
      "bzaf",
      "pdcn",
      "dgabg",
      "sdfgs",
      "qhkef",
      "ktemcx",
    ],
    FifthGroup = [
      "dsavb",
      "psxns",
      "dfsw",
      "styghd",
      "sdgfs",
      "rsegh",
      "pshnf",
      "mdss",
      "psdns",
      "egdx",
      "apad",
    ],
    sixthGroup = [
      "spfks",
      "fdgs",
      "sqedv",
      "sdgiw",
      "sdklwsp",
      "dbdh",
      "gsdtw",
      "wrftw",
      "wifrhnw",
      "lkskl",
      "wqweg",
      "wnshyh",
      "sopsj",
      "spsjs",
      "wsrqv",
    ],
    sevethGroup = [
      "sdpw",
      "hasag",
      "wfsnb",
      "dasms",
      "smksn",
      "sdfnjs",
      "jsbj",
      "sdosg",
      "nsmhew",
      "soisn",
      "dsjnpp",
      "gdkssb",
      "oejw",
      "pqmw",
    ],
    eighthGroup = [
      "dsisg",
      "njsghb",
      "dfgibq",
      "gdsbp",
      "dghks",
      "gsdhnw",
      "kajegv",
      "joidolw",
      "owpgtgv",
      "sngbn",
      "sdgnw",
      "ghowpr",
      "pwmw",
      "qvjwea",
    ],
    ninthGroup = [
      "bhspw",
      "opwner",
      "sbnasao",
      "ganhw",
      "iwspe",
      "gqwga",
      "psjnsio",
      "orwbn",
      "psdnsp",
      "slsfc",
      "wsdfqakl",
    ],
    tenthGroup = [
      "klsnw",
      "opej",
      "ewqu",
      "erjwq",
      "egdiohw",
      "dgedw",
      "pqwbnqw",
      "pwhwq",
      "lwbnws",
      "qwfjkws",
      "olwnhw",
    ],
    eleventhGroup = ["tabell"];

  //for FirstGroup, SecondGroup, ThirdGroup, sixthGroup, sevethGroup, eighthGroup, eleventhGroup
  var FirstLocationNum = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  //for FourthGroup, FifthGroup
  var SecondLocationNum = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  //for NinthGroup
  var ThirdLocationNum = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  //for TenthGroup
  var FourthLocationNum = [0, 1, 2, 4, 5, 7, 8, 10, 11, 12, 14];

  if (this.inputFormField.pop == "الطب النووي") {
    for (var i = 0; i < FirstGroup.length; i++) {
      if (
        this.inputFormField[FirstGroup[i]] == null ||
        this.inputFormField[FirstGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FirstLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    if (
      this.inputFormField[eleventhGroup[0]] == null ||
      this.inputFormField[eleventhGroup[0]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[FirstLocationNum[0]].label} مطلوب`
      );
    }
  } else if (
    this.inputFormField.pop ==
    "اجهزة الكامانايف والمصادر العلاجية ذات النشاط الاشعاعي العالي"
  ) {
    for (var i = 0; i < SecondGroup.length; i++) {
      if (
        this.inputFormField[SecondGroup[i]] == null ||
        this.inputFormField[SecondGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FirstLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    if (
      this.inputFormField[eleventhGroup[0]] == null ||
      this.inputFormField[eleventhGroup[0]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[FirstLocationNum[0]].label} مطلوب`
      );
    }
  } else if (this.inputFormField.pop == "اجهزة الـCyclotron") {
    for (var i = 0; i < ThirdGroup.length; i++) {
      if (
        this.inputFormField[ThirdGroup[i]] == null ||
        this.inputFormField[ThirdGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FirstLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    if (
      this.inputFormField[eleventhGroup[0]] == null ||
      this.inputFormField[eleventhGroup[0]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[FirstLocationNum[0]].label} مطلوب`
      );
    }
  } else if (
    this.inputFormField.pop == "المعجلات الخطيةازالة التلوث بالمواقع الخارجية"
  ) {
    for (var i = 0; i < FourthGroup.length; i++) {
      if (
        this.inputFormField[FourthGroup[i]] == null ||
        this.inputFormField[FourthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[SecondLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    if (
      this.inputFormField[eleventhGroup[0]] == null ||
      this.inputFormField[eleventhGroup[0]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[FirstLocationNum[0]].label} مطلوب`
      );
    }
  } else if (this.inputFormField.pop == "ازالة التلوث بالمواقع الخارجية") {
    for (var i = 0; i < FifthGroup.length; i++) {
      if (
        this.inputFormField[FifthGroup[i]] == null ||
        this.inputFormField[FifthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[SecondLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }
  } else if (this.inputFormField.pop == "اجهزة الـ PET-CT Scan") {
    for (var i = 0; i < sixthGroup.length; i++) {
      if (
        this.inputFormField[sixthGroup[i]] == null ||
        this.inputFormField[sixthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FirstLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    if (
      this.inputFormField[eleventhGroup[0]] == null ||
      this.inputFormField[eleventhGroup[0]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[FirstLocationNum[0]].label} مطلوب`
      );
    }
  } else if (this.inputFormField.pop == "معجلات الكشف الاشعاعي") {
    for (var i = 0; i < sevethGroup.length; i++) {
      if (
        this.inputFormField[sevethGroup[i]] == null ||
        this.inputFormField[sevethGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FirstLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    if (
      this.inputFormField[eleventhGroup[0]] == null ||
      this.inputFormField[eleventhGroup[0]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[FirstLocationNum[0]].label} مطلوب`
      );
    }
  } else if (this.inputFormField.pop == "جس الأبار واجهزة التصوير الصناعي") {
    for (var i = 0; i < eighthGroup.length; i++) {
      if (
        this.inputFormField[eighthGroup[i]] == null ||
        this.inputFormField[eighthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FirstLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }
  } else if (this.inputFormField.pop == "الممارسات البحثية والتعليمية") {
    for (var i = 0; i < ninthGroup.length; i++) {
      if (
        this.inputFormField[ninthGroup[i]] == null ||
        this.inputFormField[ninthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[ThirdLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    for (var i = 0; i < FourthLocationNum.length; i++) {
      if (
        this.inputFormField[tenthGroup[i]] == null ||
        this.inputFormField[tenthGroup[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FourthLocationNum[i]].label
          } مطلوب`
        );
      }
    }

    if (
      this.inputFormField[eleventhGroup[0]] == null ||
      this.inputFormField[eleventhGroup[0]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[FirstLocationNum[0]].label} مطلوب`
      );
    }
  }
}
