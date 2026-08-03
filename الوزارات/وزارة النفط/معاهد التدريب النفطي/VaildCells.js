{
  if (this.inputFormField.shtxt == "نعم") {
    var Progs = ["category", "ShNam", "Conect", "ResNum", "DecDate", "Msh"],
      Locatins = [1, 2, 3, 4, 5, 6];

    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[4].fields[Locatins[i]].label} مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.spisname == "صناعي") {
    if (
      this.inputFormField["Special"] == null ||
      this.inputFormField["Special"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.spisname == "علمي") {
    if (
      this.inputFormField["chance"] == null ||
      this.inputFormField["chance"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[9].label} مطلوب`);
    }
  }

  if (this.inputFormField.spisname == "علمي") {
    if (
      this.inputFormField.religion == "مسيحي" ||
      this.inputFormField.religion == "اخرى"
    ) {
      if (this.inputFormField.sum < 450 || this.inputFormField.sum > 600) {
        this.evalErr.push("يجب ان يكون المجموع بدون اضافات بين 450-600");
      }
    }

    if (this.inputFormField.religion == "مسلم") {
      if (this.inputFormField.sum < 525 || this.inputFormField.sum > 700) {
        this.evalErr.push("يجب ان يكون المجموع بدون اضافات بين 525-700");
      }
    }
  }

  if (this.inputFormField.spisname == "صناعي") {
    if (
      this.inputFormField.religion == "مسيحي" ||
      this.inputFormField.religion == "اخرى"
    ) {
      if (this.inputFormField.sum < 420 || this.inputFormField.sum > 700) {
        this.evalErr.push("يجب ان يكون المجموع بدون اضافات بين 420-700");
      }
    }

    if (this.inputFormField.religion == "مسلم") {
      if (this.inputFormField.sum < 480 || this.inputFormField.sum > 800) {
        this.evalErr.push("يجب ان يكون المجموع بدون اضافات بين 480-800");
      }
    }
  }

  var Year_Date = new Date(this.inputFormField["birthDate"]);

  if (Year_Date.getFullYear() > 2010 || Year_Date.getFullYear() < 2001) {
    this.evalErr.push("يجب ان تكون سنة الميلاد بين 2001 و2010");
  }
}
