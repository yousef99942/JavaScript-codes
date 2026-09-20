{
  if (this.inputFormField.religion == "اخرى") {
    if (
      this.inputFormField["ReligionName"] == null ||
      this.inputFormField["ReligionName"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[10].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.shtxt == "نعم") {
    var Progs = ["category", "ShNam", "Conect", "ResNum", "DecDate", "Msh"],
      Locatins = [1, 2, 3, 4, 5, 6];

    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[5].fields[Locatins[i]].label} مطلوب`,
        );
      }
    }

    if (
      this.inputFormField["Sign"] == null ||
      this.inputFormField["Sign"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[6].fields[0].label} مطلوب`);
    }
  }

  if (this.inputFormField.spisname == "صناعي") {
    if (
      this.inputFormField["Special"] == null ||
      this.inputFormField["Special"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[4].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.spisname == "علمي") {
    if (
      this.inputFormField["chance"] == null ||
      this.inputFormField["chance"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[4].fields[9].label} مطلوب`);
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
      if (this.inputFormField.sum < 525 || this.inputFormField.sum > 700) {
        this.evalErr.push("يجب ان يكون المجموع بدون اضافات بين 525-700");
      }
    }

    if (this.inputFormField.religion == "مسلم") {
      if (this.inputFormField.sum < 600 || this.inputFormField.sum > 800) {
        this.evalErr.push("يجب ان يكون المجموع بدون اضافات بين 600-800");
      }
    }
  }

  // var Year_Date = new Date(this.inputFormField["birthDate"]);

  // if (Year_Date.getFullYear() > 2010 || Year_Date.getFullYear() < 2001) {
  //   this.evalErr.push("يجب ان تكون سنة الميلاد بين 2001 و2010");
  // }

  //----------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  if (this.inputFormField.Phone) {
    const phoneNo = this.inputFormField.Phone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف بالرقم 07.");
    }
  }

  //التاكد من رقم الهاتف البديل
  if (this.inputFormField.Phon) {
    const phoneNo = this.inputFormField.Phon;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف البديل بالرقم 07.");
    }
  }

  //----------------------------------------------------------------------------
  //التاكد من عدم تطابق رقم الهاتف مع رقم الهاتف البديل
  //let First_Number = "0" + this.inputFormField.Phone.slice(3);
  if (this.inputFormField.Phone === this.inputFormField.Phon) {
    this.evalErr.push("لا يجب ان يتطابق رقم الهاتف مع رقم الهاتف البديل");
  }
}
