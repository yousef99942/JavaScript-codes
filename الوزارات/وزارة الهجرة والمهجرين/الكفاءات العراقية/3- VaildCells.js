{
  //تحصيل دراسي اخر
  if (this.inputFormField.namestade == "اخرى") {
    if (
      this.inputFormField["nameestade"] == null ||
      this.inputFormField["nameestade"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }

  //اسباب المعوقات الاخرى
  var Wanted_Value = this.inputFormField.nameerrrrr;
  if (Wanted_Value.length != 0) {
    for (var i = 0; i < Wanted_Value.length; i++) {
      if (Wanted_Value[i] == "اخرى(تذكر)") {
        if (
          this.inputFormField["nameasb"] == null ||
          this.inputFormField["nameasb"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[2].fields[1].label} مطلوب`,
          );
        }
      }
    }
  }

  //ماهو باعتقادك المجال الممكن ان تستثمر طاقتك من خلاله؟
  var Wanted_Value = this.inputFormField.nameoiuy;
  if (Wanted_Value.length != 0) {
    for (var i = 0; i < Wanted_Value.length; i++) {
      if (Wanted_Value[i] == "اخرى (تذكر)") {
        if (
          this.inputFormField["namez"] == null ||
          this.inputFormField["namez"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[2].fields[3].label} مطلوب`,
          );
        }
      }
    }
  }

  //الخدمات الاخرى
  var Wanted_Value = this.inputFormField.nameyuh;
  if (Wanted_Value.length != 0) {
    for (var i = 0; i < Wanted_Value.length; i++) {
      if (Wanted_Value[i] == "اخرى (تذكر)") {
        if (
          this.inputFormField["namelkj"] == null ||
          this.inputFormField["namelkj"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[2].fields[5].label} مطلوب`,
          );
        }
      }
    }
  }

  //طبيعة العمل الاخرى
  var Wanted_Value = this.inputFormField.nnamee;
  if (Wanted_Value.length != 0) {
    for (var i = 0; i < Wanted_Value.length; i++) {
      if (Wanted_Value[i] == "اخرى(تذكر)") {
        if (
          this.inputFormField["namewam"] == null ||
          this.inputFormField["namewam"] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[2].fields[8].label} مطلوب`,
          );
        }
      }
    }
  }
}
