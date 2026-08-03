{
  if (
    this.inputFormField.SocialState == "متزوج / متزوجة" ||
    this.inputFormField.SocialState == "ارمل / ارملة" ||
    this.inputFormField.SocialState == "مطلق / مطلقة"
  ) {
    if (
      this.inputFormField["BoysNum"] == null ||
      this.inputFormField["BoysNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["3"].label} مطلوب`
      );
    }

    if (
      this.inputFormField["GirlNum"] == null ||
      this.inputFormField["GirlNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["4"].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.areyouinformation == "نعم") {
    if (
      this.inputFormField["persontypeinfo"] == null ||
      this.inputFormField["persontypeinfo"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["8"].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.persontypeinfo == "هل انت من النازحين؟") {
    if (
      this.inputFormField["hejrareson"] == null ||
      this.inputFormField["hejrareson"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["9"].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.areyouinformationfive == "نعم") {
    if (
      this.inputFormField["areyouinformationsix"] == null ||
      this.inputFormField["areyouinformationsix"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["14"].label} مطلوب`
      );
    }
  }

  if (this.inputFormField.areyouinformationsix == "اخرى") {
    if (
      this.inputFormField["customertypinginfo"] == null ||
      this.inputFormField["customertypinginfo"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields["15"].label} مطلوب`
      );
    }
  }

  var secondGroup = [
      "helpinfoone",
      "helpinfotwo",
      "helpinfothree",
      "helpinfofour",
      "helpinfofive",
    ],
    ThirdGroup = [
      "helpinfosix",
      "helpinfoseven",
      "helpinfoeight",
      "helpinfonine",
    ],
    FourthGroup = [
      "helpinfoten",
      "helpinfoeleven",
      "helpinfotw",
      "helpinfotrd",
    ];

  var CellsIndex = ["0", "1", "2", "3", "4"],
    SecondCellsIndex = ["0", "1", "2", "3"];

  for (var i = 0; i < CellsIndex.length; i++) {
    if (
      this.inputFormField[secondGroup[i]] == null ||
      this.inputFormField[secondGroup[i]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[CellsIndex[i]].label} مطلوب`
      );
    }
  }

  for (var i = 0; i < SecondCellsIndex.length; i++) {
    if (
      this.inputFormField[ThirdGroup[i]] == null ||
      this.inputFormField[ThirdGroup[i]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[SecondCellsIndex[i]].label} مطلوب`
      );
    }
  }

  for (var i = 0; i < SecondCellsIndex.length; i++) {
    if (
      this.inputFormField[FourthGroup[i]] == null ||
      this.inputFormField[FourthGroup[i]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[SecondCellsIndex[i]].label} مطلوب`
      );
    }
  }
}
