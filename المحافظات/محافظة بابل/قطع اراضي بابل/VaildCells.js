{
  if (
    this.inputFormField.SelectCategory == "موظفي محافظة بابل" ||
    this.inputFormField.SelectCategory == "موظفي مديرية عقارات الدولة" ||
    this.inputFormField.SelectCategory == "موظفي مديرية البلديات" ||
    this.inputFormField.SelectCategory == "موظفي الدوائر الاصلاحية" ||
    this.inputFormField.SelectCategory == "موظفي جهاز المخابرات" ||
    this.inputFormField.SelectCategory ==
      "موظفي ومنتسبين مديرية الاحوال المدنية"
  ) {
    if (
      this.inputFormField["DaysNum"] == null ||
      this.inputFormField["DaysNum"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
    }

    if (
      this.inputFormField["MonthNum"] == null ||
      this.inputFormField["MonthNum"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
    }

    if (
      this.inputFormField["years"] == null ||
      this.inputFormField["years"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[3].label} مطلوب`);
    }

    if (
      (this.inputFormField["AcadimcValue"] == null ||
        this.inputFormField["AcadimcValue"] == "") &&
      this.inputFormField.SelectCategory == "موظفي جهاز المخابرات"
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[12].label} مطلوب`
      );
    }
  }

  if (
    this.inputFormField.SelectCategory ==
    "موظفي ومننتسبين مديرية الاحوال المدنية"
  ) {
    if (
      this.inputFormField["Type"] == null ||
      this.inputFormField["Type"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[0].label} مطلوب`);
    }
  }

  if (this.inputFormField.Type == "عسكري") {
    if (
      this.inputFormField["MilitaryType"] == null ||
      this.inputFormField["MilitaryType"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[1].label} مطلوب`);
    }
  }

  if (this.inputFormField.SelectCategory == "الاستمارة الخاصة بفئة الصحفيين") {
    var First_Progs = ["QuestionYN", "IDSyndicate", "ExpDate", "Bnum", "BookD"],
      Locations = [0, 2, 3, 4, 5];

    for (var i = 0; i < First_Progs.length; i++) {
      if (
        this.inputFormField[First_Progs[i]] == null ||
        this.inputFormField[First_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[Locations[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.QuestionYN == "نعم") {
    if (
      this.inputFormField["wefs"] == null ||
      this.inputFormField["wefs"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[1].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.SelectCategory ==
    "الاستمارة الخاصة بفئة ذوي الاحتياجات الخاصة"
  ) {
    var First_Progs = ["Ask", "card"],
      Locations = [0, 2];

    for (var i = 0; i < First_Progs.length; i++) {
      if (
        this.inputFormField[First_Progs[i]] == null ||
        this.inputFormField[First_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[4].fields[Locations[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.Ask == "نعم") {
    if (
      this.inputFormField["DisablilityN"] == null ||
      this.inputFormField["DisablilityN"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[4].fields[1].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.maratialStatus == "متزوج/ة" ||
    this.inputFormField.maratialStatus == "ارمل/ة" ||
    this.inputFormField.maratialStatus == "مطلق/ة"
  ) {
    if (
      this.inputFormField["HavingChild"] == null ||
      this.inputFormField["HavingChild"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[14].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.maratialStatus == "متزوج/ة") {
    if (
      this.inputFormField["wiff"] == null ||
      this.inputFormField["wiff"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[17].label} مطلوب`
      );
    }
  }

  if (
    this.inputFormField.maratialStatus == "اعزب/ باكر" ||
    ((this.inputFormField.maratialStatus == "ارمل/ة" ||
      this.inputFormField.maratialStatus == "مطلق/ة") &&
      this.inputFormField.HavingChild == "كلا")
  ) {
    if (
      this.inputFormField["nambook"] == null ||
      this.inputFormField["nambook"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[15].label} مطلوب`
      );
    }

    if (
      this.inputFormField["daaatbook"] == null ||
      this.inputFormField["daaatbook"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[16].label} مطلوب`
      );
    }
  }

  //هل لديك اطفال؟
  if (this.inputFormField.HavingChild == "نعم") {
    if (
      this.inputFormField["numberch"] == null ||
      this.inputFormField["numberch"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[18].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.any == "نعم") {
    var Field_Progs = ["numDay", "numMonth", "numYears"],
      Locations = [23, 24, 25];

    for (var i = 0; i < Field_Progs.length; i++) {
      if (
        this.inputFormField[Field_Progs[i]] == null ||
        this.inputFormField[Field_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.Anycont == "نعم") {
    var Field_Progs = ["numDc", "numMc", "numYc"],
      Locations = [27, 28, 29];

    for (var i = 0; i < Field_Progs.length; i++) {
      if (
        this.inputFormField[Field_Progs[i]] == null ||
        this.inputFormField[Field_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`
        );
      }
    }
  }
}
