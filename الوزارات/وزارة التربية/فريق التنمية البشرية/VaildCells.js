{
  //الاسئلة المرتبطة بالسؤال 9
  if (this.inputFormField.evelaution == "نعم") {
    var Fields_Prog = [
        "PEMOneOne", //10
        "PEMOneTwo", //11
        "PEMOneThree", //12
        "PEMOneFour", //13
        "PEMOneFive", //14
        "PEMOneSix", //15
        "PEMOneSeven", //16
        "PEMOneEight", //17
      ],
      Fields_Locations = [9, 10, 11, 12, 13, 14, 15, 16];
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == "" ||
        this.inputFormField[Fields_Prog[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[Fields_Locations[i]].label
          } مطلوب`
        );
      }
    }
  }

  //السؤال 36
  if (this.inputFormField.MOTFour == "اكثر تحفيزا") {
    if (
      this.inputFormField["bdfjjfjdf"] == "" ||
      this.inputFormField["bdfjjfjdf"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[35].label} مطلوب`
      );
    }
  }

  //السؤال 39
  if (this.inputFormField.training == "نعم") {
    if (
      this.inputFormField["TRATwo"] == "" ||
      this.inputFormField["TRATwo"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[38].label} مطلوب`
      );
    }
  }

  //السؤال 40
  if (
    this.inputFormField.TRATwo ==
    "المهارات الفنية ( المعرفة والخبرة في مجال العمل )"
  ) {
    if (
      this.inputFormField["TRATreeA"] == "" ||
      this.inputFormField["TRATreeA"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[39].label} مطلوب`
      );
    }
  }

  //السؤال 41
  if (
    this.inputFormField.TRATreeA != null &&
    this.inputFormField.TRATreeA != ""
  ) {
    var Field_Values1 = this.inputFormField.TRATreeA;
    for (var i = 0; i < Field_Values1.length; i++) {
      if (
        Field_Values1[i] ==
          "المهارات الفنية ( المعرفة والخبرة في مجال العمل )" &&
        (this.inputFormField["TRATreeB"] == null ||
          this.inputFormField["TRATreeB"] == "")
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[40].label} مطلوب`
        );
      }
    }
  }

  //السؤال 42
  if (
    this.inputFormField.TRATreeB != null &&
    this.inputFormField.TRATreeB != ""
  ) {
    var Field_Values2 = this.inputFormField.TRATreeB;
    var Value_Check = 0;
    for (var i = 0; i < Field_Values2.length; i++) {
      if (
        Field_Values2[i] == "المهارات التقنية ( المعرفة واعرف كيف) في عملك" &&
        (this.inputFormField["TRAFour"] == null ||
          this.inputFormField["TRAFour"] == "")
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[41].label} مطلوب`
        );
      }
    }
  }

  //السؤال 45
  if (
    this.inputFormField.INNOVATEOneTwo == "اوافق" ||
    this.inputFormField.INNOVATEOneTwo == "اوافق بشدة"
  ) {
    if (
      this.inputFormField["INNOVATEOneB"] == "" ||
      this.inputFormField["INNOVATEOneB"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[44].label} مطلوب`
      );
    }
  }

  //السؤال 49
  if (
    this.inputFormField.DATAOne ==
    "لا تستخدم مؤسستي البيانات عند اتخاذ القرارات الرئيسية."
  ) {
    if (
      this.inputFormField["DATATwo"] == "" ||
      this.inputFormField["DATATwo"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[48].label} مطلوب`
      );
    }
  }

  //السؤال 63
  if (
    this.inputFormField.FUTURESix == "نعم ، قيود داخلية" ||
    this.inputFormField.FUTURESix == "كلاهما ، قيود داخلية وخارجية"
  ) {
    if (
      this.inputFormField["FUTURESeven"] == "" ||
      this.inputFormField["FUTURESeven"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[62].label} مطلوب`
      );
    }
  }

  //السؤال 64
  if (
    this.inputFormField.FUTURESeven != null &&
    this.inputFormField.FUTURESeven != ""
  ) {
    var Field_Values3 = this.inputFormField.FUTURESeven;
    for (var i = 0; i < Field_Values3.length; i++) {
      if (
        Field_Values3[i] == "الادارة لا تتقبل التغيير او تقاومه" &&
        (this.inputFormField["FUTUREEight"] == null ||
          this.inputFormField["FUTUREEight"] == "")
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[63].label} مطلوب`
        );
      }
    }
  }

  //السؤال 67
  if (this.inputFormField.social == "لا") {
    if (
      this.inputFormField["TRUSTTwo"] == "" ||
      this.inputFormField["TRUSTTwo"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[66].label} مطلوب`
      );
    }
  }

  //السؤال 70
  if (
    this.inputFormField.TRUSTFour ==
      "مؤسسات اخرى تابعة للقطاع العام / الحكومي" ||
    this.inputFormField.TRUSTFour == "مؤسسات القطاع الخاص" ||
    this.inputFormField.TRUSTFour == "المجتمع المدني" ||
    this.inputFormField.TRUSTFour == "مؤسسات غير ربحية" ||
    this.inputFormField.TRUSTFour == "المواطنون"
  ) {
    if (
      this.inputFormField["TRUSTFive"] == "" ||
      this.inputFormField["TRUSTFive"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[69].label} مطلوب`
      );
    }
  }
}
