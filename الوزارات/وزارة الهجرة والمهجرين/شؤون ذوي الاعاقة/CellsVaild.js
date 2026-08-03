{
  //المجموعة الاولى
  if (
    this.inputFormField.namberbook == "متابعة كتاب ( اذكر رقم وتاريخ الكتاب )"
  ) {
    if (
      this.inputFormField["dateboofg"] == null ||
      this.inputFormField["dateboofg"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[16].label} مطلوب`
      );
    }

    if (
      this.inputFormField["data"] == null ||
      this.inputFormField["data"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[17].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.HaveDisability == "نعم") {
    if (
      this.inputFormField["DisabilityType"] == null ||
      this.inputFormField["DisabilityType"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[22].label} مطلوب`
      );
    }

    if (
      this.inputFormField["DisabiltyReason"] == null ||
      this.inputFormField["DisabiltyReason"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[23].label} مطلوب`
      );
    }

    if(this.inputFormField["namerrrrrrrr"] == "" ||
      this.inputFormField["namerrrrrrrr"] == null
    ){
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[24].label} مطلوب`
      );
    }
  }

  if (this.inputFormField["HavingDisabilityChild"] == "نعم") {
    if (
      this.inputFormField["DisibiltyChildrenNum"] == null ||
      this.inputFormField["DisibiltyChildrenNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[25].label} مطلوب`
      );
    }
  }

  //مال باقي المجاميع
  var FirstProgs = [
    //معلومات الفرد الاول
    "FirstNameA",
    "SecondNameA",
    "ThirdNameA",
    "FourthNameA",
    "FamilyRelationA",
    "GenderA",
    "BirthPlaceA",
    "BirthYearA",
    "SchoolA",
    "WorkA",
    "DiseaseA",
    "DisabilityTypeA",

    //معلومات الفرد الثاني
    "FirstNameB",
    "SecondNameB",
    "ThirdNameB",
    "FourthNameB",
    "FamilyRelationB",
    "GenderB",
    "BirthPlaceB",
    "BirthYearB",
    "SchoolB",
    "WorkB",
    "DiseaseB",
    "DisabilityTypeB",

    //معلومات الفرد الثالث
    "FirstNameC",
    "SecondNameC",
    "ThirdNameC",
    "FourthNameC",
    "FamilyRelationC",
    "GenderC",
    "BirthPlaceC",
    "BirthYearC",
    "SchoolC",
    "WorkC",
    "DiseaseC",
    "DisabilityTypeC",

    //معلومات الفرد الرابع
    "FirstNameD",
    "SecondNameD",
    "ThirdNameD",
    "FourthNameD",
    "FamilyRelationD",
    "GenderD",
    "BirthPlaceD",
    "BirthYearD",
    "SchoolD",
    "WorkD",
    "DiseaseD",
    "DisabilityTypeD",

    //معلومات الفرد الخامس
    "FirstNameE",
    "SecondNameE",
    "ThirdNameE",
    "FourthNameE",
    "FamilyRelationE",
    "GenderE",
    "BirthPlaceE",
    "BirthYearE",
    "SchoolE",
    "WorkE",
    "DiseaseE",
    "DisabilityTypeE",

    //معلومات الفرد السادس
    "FirstNameF",
    "SecondNameF",
    "ThirdNameF",
    "FourthNameF",
    "FamilyRelationF",
    "GenderF",
    "BirthPlaceF",
    "BirthYearF",
    "SchoolF",
    "WorkF",
    "DiseaseF",
    "DisabilityTypeF",

    //معلومات الفرد السابع
    "FirstNameG",
    "SecondNameG",
    "ThirdNameG",
    "FourthNameG",
    "FamilyRelationG",
    "GenderG",
    "BirthPlaceG",
    "BirthYearG",
    "SchoolG",
    "WorkG",
    "DiseaseG",
    "DisabilityTypeG",

    //معلومات الفرد الثامن
    "FirstNameH",
    "SecondNameH",
    "ThirdNameH",
    "FourthNameH",
    "FamilyRelationH",
    "GenderH",
    "BirthPlaceH",
    "BirthYearH",
    "SchoolH",
    "WorkH",
    "DiseaseH",
    "DisabilityTypeH",

    //معلومات الفرد التاسع
    "FirstNameI",
    "SecondNameI",
    "ThirdNameI",
    "FourthNameI",
    "FamilyRelationI",
    "GenderI",
    "BirthPlaceI",
    "BirthYearI",
    "SchoolI",
    "WorkI",
    "DiseaseI",
    "DisabilityTypeI",

    //معلومات الفرد العاشر
    "FirstNameJ",
    "SecondNameJ",
    "ThirdNameJ",
    "FourthNameJ",
    "FamilyRelationJ",
    "GenderJ",
    "BirthPlaceJ",
    "BirthYearJ",
    "SchoolJ",
    "WorkJ",
    "DiseaseJ",
    "DisabilityTypeJ",

    //معلومات الفرد الحادي عشر
    "FirstNameK",
    "SecondNameK",
    "ThirdNameK",
    "FourthNameK",
    "FamilyRelationK",
    "GenderK",
    "BirthPlaceK",
    "BirthYearK",
    "SchoolK",
    "WorkK",
    "DiseaseK",
    "DisabilityTypeK",

    //معلومات الفرد الثاني عشر
    "FirstNameL",
    "SecondNameL",
    "ThirdNameL",
    "FourthNameL",
    "FamilyRelationL",
    "GenderL",
    "BirthPlaceL",
    "BirthYearL",
    "SchoolL",
    "WorkL",
    "DiseaseL",
    "DisabilityTypeL",

    //معلومات الفرد الثالث عشر
    "FirstNameM",
    "SecondNameM",
    "ThirdNameM",
    "FourthNameM",
    "FamilyRelationM",
    "GenderM",
    "BirthPlaceM",
    "BirthYearM",
    "SchoolM",
    "WorkM",
    "DiseaseM",
    "DisabilityTypeM",

    //معلومات الفرد الرابع عشر
    "FirstNameN",
    "SecondNameN",
    "ThirdNameN",
    "FourthNameN",
    "FamilyRelationN",
    "GenderN",
    "BirthPlaceN",
    "BirthYearN",
    "SchoolN",
    "WorkN",
    "DiseaseN",
    "DisabilityTypeN",

    //معلومات الفرد الخامس عشر
    "FirstNameO",
    "SecondNameO",
    "ThirdNameO",
    "FourthNameO",
    "FamilyRelationO",
    "GenderO",
    "BirthPlaceO",
    "BirthYearO",
    "SchoolO",
    "WorkO",
    "DiseaseO",
    "DisabilityTypeO",
  ];

  var FieldsLocation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13];
  var DisNum = parseInt(this.inputFormField.DisibiltyChildrenNum || 0);

  if (DisNum > 0 && DisNum <= 15) {
    for (var i = 0; i < DisNum * 12; i++) {
      var GroupNumber = Math.floor(i / 12) + 1;
      var fieldIndex = i % 12;

      if (
        this.inputFormField[FirstProgs[i]] == null ||
        this.inputFormField[FirstProgs[i]] === ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[GroupNumber]?.fields[FieldsLocation[fieldIndex]]
              ?.label || "(غير معروف)"
          } مطلوب`
        );
      }
    }
  }
}
