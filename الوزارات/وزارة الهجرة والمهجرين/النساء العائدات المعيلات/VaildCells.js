{
  //عدد ذوي الاحتياجات
  if (this.inputFormField.namxcv == "نعم") {
    if (
      this.inputFormField["fnamber"] == null ||
      this.inputFormField["fnamber"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[14].label} مطلوب`
      );
    }
  }

  //الخدمات الاساسية للسكن
  if (this.inputFormField.nameyu == "كلا") {
    if (
      this.inputFormField["nametvb"] == null ||
      this.inputFormField["nametvb"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[4].label} مطلوب`);
    }
  }

  //المشتقات النفطية
  if (this.inputFormField.namerf == "كلا") {
    if (
      this.inputFormField["nameq"] == null ||
      this.inputFormField["nameq"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[6].label} مطلوب`);
    }
  }

  //البطاقة التموينية
  if (this.inputFormField.namecvg == "كلا") {
    if (
      this.inputFormField["namxcf"] == null ||
      this.inputFormField["namxcf"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[8].label} مطلوب`);
    }
  }

  //امراض مزمنة
  var Progs = [
      "taype", //اذكري نوع المرض
      "namepashent", //اسم المريض ( اذا كان احد من افراد الاسرة)
      "agey", //عمر المريض
    ],
    Locations = [1, 2, 3];

  if (this.inputFormField.namecvg == "كلا") {
    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[Locations[i]].label} مطلوب`
        );
      }
    }
  }

  var Wanted_Value = this.inputFormField.ServiceType;
  if (Wanted_Value.length != 0) {
    for (var i = 0; i < Wanted_Value.length; i++) {
      if (Wanted_Value[i] == "اخرى") {
        if (
          this.inputFormField["namcvx"] == null ||
          this.inputFormField["namcvx"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[4].fields[1].label} مطلوب`
          );
        }
      }
    }
  }
}
