{
  var Fields_Progs = [
      "graduatdate", //تاريخ التخرج
      "addressEntity", //عنوان الجهة
      "transporttitel", //عنوان الجامعة المراد النقل اليها
      "reasonstransfer", //اسباب النقل
      "reasonspostpone", //اسباب التأجيل
      "reasonslow", //اسباب تخفيض القسط
      "previouslydiscount", //هل لديك تخفيض سابق
      "reasonsclose", //سبب ترقين القيد
      "returnQ", //هل تمت الاستفادة من قرار العودة سابقاً
      "withdrawal", //سبب ترقين القيد (الانسحاب بعد المباشرة)
      "withdrawall", //سبب الغاء القبول
      "reasonstransformfrom", //سبب النقل من كليتك
      "nameuniversity", //ذكر اسم الجامعة المنقول منها
    ],
    Locations = [
      7, //تاريخ التخرج
      9, //عنوان الجهة
      10, //عنوان الجامعة المراد النقل اليها
      11, //اسباب النقل
      12, //اسباب التأجيل
      13, //اسباب تخفيض القسط
      14, //هل لديك تخفيض سابق
      16, //سبب ترقين القيد
      17, //هل تمت الاستفادة من قرار العودة سابقاً
      18, //سبب ترقين القيد (الانسحاب بعد المباشرة)
      19, //سبب الغاء القبول
      20, //سبب النقل من كليتك
      21, //ذكر اسم الجامعة المنقول منها
    ];
  var First_Selected_Values = [
      "وثيقة تخرج بدون درجات باللغة العربية",
      "وثيقة تخرج بالدرجات باللغة العربية",
      "وثيقة تخرج بالدرجات باللغة الانكليزية",
      "جدارية تخرج",
    ],
    Second_Selected_Values = [
      "تأييد مناقشة",
      "تأييد استمرارية بالدوام",
      "تأييد مباشرة بالدوام",
    ];

  //تاريخ التخرج
  if (First_Selected_Values.includes(First_Selected_Values)) {
    if (
      this.inputFormField[Fields_Progs[0]] == null ||
      this.inputFormField[Fields_Progs[0]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[0]].label} مطلوب`,
      );
    }
  }

  //عنوان الجهة
  if (
    First_Selected_Values.includes(this.inputFormField.requsttype) ||
    Second_Selected_Values.includes(this.inputFormField.requsttype) ||
    this.inputFormField.requsttype == "نقل الى خارج كلية الامام الكاظم"
  ) {
    if (
      this.inputFormField[Fields_Progs[1]] == null ||
      this.inputFormField[Fields_Progs[1]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[1]].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.requsttype == "نقل الى خارج كلية الامام الكاظم") {
    //عنوان الجامعة المراد النقل اليها
    if (
      this.inputFormField[Fields_Progs[2]] == null ||
      this.inputFormField[Fields_Progs[2]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[2]].label} مطلوب`,
      );
    }

    //اسباب النقل
    if (
      this.inputFormField[Fields_Progs[3]] == null ||
      this.inputFormField[Fields_Progs[3]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[3]].label} مطلوب`,
      );
    }
  }

  //اسباب التأجيل
  if (this.inputFormField.requsttype == "تأجيل سنة دراسية") {
    if (
      this.inputFormField[Fields_Progs[4]] == null ||
      this.inputFormField[Fields_Progs[4]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[4]].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.requsttype == "تخفيض الاجور الدراسية") {
    //اسباب تخفيض القسط
    if (
      this.inputFormField[Fields_Progs[5]] == null ||
      this.inputFormField[Fields_Progs[5]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[5]].label} مطلوب`,
      );
    }

    //هل لديك تخفيض سابق
    if (
      this.inputFormField[Fields_Progs[6]] == null ||
      this.inputFormField[Fields_Progs[6]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[6]].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.requsttype == "اعادة المرقن قيده الى مقاعد الدراسة") {
    //اسباب تخفيض القسط
    if (
      this.inputFormField[Fields_Progs[7]] == null ||
      this.inputFormField[Fields_Progs[7]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[7]].label} مطلوب`,
      );
    }

    //هل لديك تخفيض سابق
    if (
      this.inputFormField[Fields_Progs[8]] == null ||
      this.inputFormField[Fields_Progs[8]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[8]].label} مطلوب`,
      );
    }
  }

  //سبب ترقين القيد (الانسحاب بعد المباشرة)
  if (this.inputFormField.requsttype == "ترقين قيد (انهاء علاقة)") {
    if (
      this.inputFormField[Fields_Progs[9]] == null ||
      this.inputFormField[Fields_Progs[9]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[9]].label} مطلوب`,
      );
    }
  }

  //سبب الغاء القبول
  if (this.inputFormField.requsttype == "الغاء قبول") {
    if (
      this.inputFormField[Fields_Progs[10]] == null ||
      this.inputFormField[Fields_Progs[10]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[10]].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.requsttype == "عدم ممانعة نقل الى داخل الكلية") {
    //سبب النقل من كليتك
    if (
      this.inputFormField[Fields_Progs[11]] == null ||
      this.inputFormField[Fields_Progs[11]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[11]].label} مطلوب`,
      );
    }

    //ذكر اسم الجامعة المنقول منها
    if (
      this.inputFormField[Fields_Progs[12]] == null ||
      this.inputFormField[Fields_Progs[12]] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[12]].label} مطلوب`,
      );
    }
  }

  //كم كانت نسبة التحفيض
  if (this.inputFormField.previouslydiscount == "نعم") {
    if (
      this.inputFormField["howmatchdiscount"] == null ||
      this.inputFormField["howmatchdiscount"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[Locations[15]].label} مطلوب`,
      );
    }
  }
}
