{
  if (this.inputFormField.select == "منح اجازة جديدة") {
    var First_Option_Progs = ["instype", "istablyear"];
    var Locations = [4, 5];

    for (var i = 0; i < First_Option_Progs.length; i++) {
      if (
        this.inputFormField[First_Option_Progs[i]] == null ||
        this.inputFormField[First_Option_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.select == "تجديد اجازة") {
    var Second_Option_Progs = [
        "type", //نرجو التفضل بالموافقة على تجديد اجازة
        "firstrenewal", //هل التجديد هو لاول مرة ؟
        "cernum", //رقم الاجازة الجدارية للتأسيس
        "ecerdate", //تاريخ اجازة الجدارية
        "estabnum", //رقم امر التأسيس
        "cerdateofestab", //تاريخ امر التأسيس
        "institcapa", //عدد الطلاب للعام الماضي
        "datfrom", //يبدأ التجديد الجديد اعتبارًا من عام.
        "renwedate", //ينتهي التجديد الجديد بحلول عام
        "FoundationClosing", //هل اغلاق المدرسة اجازة لو كلي؟
      ],
      Locations = [3, 7, 17, 18, 19, 20, 10, 11, 12, 21];

    for (var i = 0; i < Second_Option_Progs.length; i++) {
      if (
        this.inputFormField[Second_Option_Progs[i]] == null ||
        this.inputFormField[Second_Option_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.firstrenewal == "نعم") {
    var Progs = [
      "studyear", //يبدأ آخر تجديد اعتبارًا من عام.
      "lastrenw", //ينتهي آخر تجديد بحلول عام.
      "lastcernum", //علما ان اخر تجديد الرقم
      "lastcerdate", //تاريخ اخر تجديد
    ];
    var Locations = [8, 9, 15, 16];

    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.ReqTypee == "مستثمرين") {
    var Progs = [
        "fname",
        "sname",
        "thname",
        "foname",
        "owncer",
        "ownspec",
        "fownphone",
        "namesinv",
        "secondninv",
        "thirdnsinv",
        "fourthnsinv",
        "educationsinv",
        "majorsinv",
        "phonensin",
        "firstntinv",
        "secondnthirdinv",
        "thirdntinv",
        "fourthnfinv",
        "educationtinv",
        "majorthinv",
        "phonethirdinv",
        "OtherPeopleExist",
        "tahoed",
        "nottt",
      ],
      Locations = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 36, 37,
      ];

    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.OtherPeopleExist == "نعم") {
    if (
      this.inputFormField["OtherPersons"] == null ||
      this.inputFormField["OtherPersons"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[22].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.ReqTypee == "مؤسسة") {
    var Progs = ["typeofapply", "tahoed", "nottt"];
    var Field_Location = [23, 36, 37];

    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Field_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.typeofapply == "الشركة") {
    var First_Option_Progs = ["thecompanyname", "regnumber", "regdate"];
    var locations = [24, 25, 26];

    for (var i = 0; i < First_Option_Progs.length; i++) {
      if (
        this.inputFormField[First_Option_Progs[i]] == null ||
        this.inputFormField[First_Option_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[locations[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.typeofapply == "المدير المفوض") {
    var Second_Option_Progs = [
      "ceoname",
      "DMSecondName",
      "DMThirdName",
      "nationalid",
      "address",
      "phoneceo",
      "specialty",
      "studyyy",
    ];
    var locations = [27, 28, 29, 30, 31, 32, 33, 34];

    for (var i = 0; i < Second_Option_Progs.length; i++) {
      if (
        this.inputFormField[Second_Option_Progs[i]] == null ||
        this.inputFormField[Second_Option_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[locations[i]].label} مطلوب`,
        );
      }
    }
  }

  //مال رقم العقار بسط ومقام
  if (this.inputFormField.LandNumberType == "نعم") {
    if (
      this.inputFormField["UpperNumberValue"] == null ||
      this.inputFormField["UpperNumberValue"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[6].label} مطلوب`);
    }

    if (
      this.inputFormField["LowerLandNumber"] == null ||
      this.inputFormField["LowerLandNumber"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  //مال رقم العقار
  if (this.inputFormField.LandNumberType == "كلا") {
    if (
      this.inputFormField["estatenumber"] == null ||
      this.inputFormField["estatenumber"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[5].label} مطلوب`);
    }
  }

  //مال حق التصرف
  if (this.inputFormField.land == "مملوك للدولة") {
    if (
      this.inputFormField["OwnerName"] == null ||
      this.inputFormField["OwnerName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[2].label} مطلوب`);
    }
  }

  //رقم عقار اخر
  if (this.inputFormField.OtherProNumberQ == "نعم") {
    if (
      this.inputFormField["OtherProDetails"] == null ||
      this.inputFormField["OtherProDetails"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[9].label} مطلوب`);
    }
  }

  //ملكية العقار
  if (this.inputFormField.OwnerStat == "ايجار") {
    if (
      this.inputFormField["taxxnum"] == null ||
      this.inputFormField["taxxnum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[35].label} مطلوب`,
      );
    }
  }

  //البلدية لبغداد
  if (this.inputFormField.governorate == "بغداد") {
    if (
      this.inputFormField["Municipality"] == null ||
      this.inputFormField["Municipality"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[13].label} مطلوب`,
      );
    }
  }

  //اختيار اما قيمة من مديرية التسجيل او الملاحظية
  if (!this.inputFormField.Realestate && !this.inputFormField.Realestatesub) {
    this.evalErr.push(
      "يجب اختيار قيمة من مديرية التسجيل العقاري او ملاحظية التسجيل العقاري ",
    );
  }
  //------------------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  //المؤسس الاول
  if (this.inputFormField.fownphone) {
    const phoneNo1 = this.inputFormField.fownphone;
    let startNo1 = phoneNo1.substring(0, 2);
    if (startNo1 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الاول بالرقم 07.");
    }
  }

  //المؤسس الثاني
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  if (this.inputFormField.phonensin) {
    const phoneNo2 = this.inputFormField.phonensin;
    let startNo2 = phoneNo2.substring(0, 2);
    if (startNo2 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الثاني بالرقم 07.");
    }
  }

  //المؤسس الثالث
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  if (this.inputFormField.phonethirdinv) {
    const phoneNo3 = this.inputFormField.phonethirdinv;
    let startNo3 = phoneNo3.substring(0, 2);
    if (startNo3 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الثالث بالرقم 07.");
    }
  }

  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  //المدير المفوض
  if (this.inputFormField.phoneceo) {
    const phoneNo4 = this.inputFormField.phoneceo;
    let startNo4 = phoneNo4.substring(0, 2);
    if (startNo4 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المدير المفوض بالرقم 07.");
    }
  }
}
