{
  //المجموعه الثانية مال البيانات العامة
  // البريد الالكتروني الرسمي للدائرة :
  if (this.inputFormField.haveOrnotHave == "نعم") {
    if (
      this.inputFormField["emailOfOrq"] == null ||
      this.inputFormField["emailOfOrq"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }
  // البريد الالكتروني الرسمي للمخول:
  if (this.inputFormField.YesNo == "نعم") {
    if (
      this.inputFormField["emailOfoar"] == null ||
      this.inputFormField["emailOfoar"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[9].label} مطلوب`);
    }
  }

  //المجموعة الثالثة مال معلومات الاستضافة
  //المجموعه معتمده على اختيار السلكتر مال المجموعه الاولى

  var All_Progs = [
      //الحقول المشتركة
      "IfHave", //هل يتوفر نطاق رسمي (iq) ؟

      //حقول اختيار استضافة موقع فقط
      "sunDomain", //هل تتطلب الاستضافة نطاقات فرعية ؟
      "IfHaveDataBa", //هل تتضمن الاستضافة قاعدة بيانات؟
      "distict", //هل الموقع جاهز للرفع؟
      "APIContain", //هل( الموقع / النظام / التطبيق) يتضمن تكامل مع خدمات أو واجهات خارجية ( API )؟

      //حقول اختيار استضافة بريد الكتروني فقط
      "EmailSize", //الحجم المتوقع الكلي للبريد
      "SecondFileType", //نوع حجم البريد
    ],
    Locations = [
      //اللوكيشن المشترك
      0,
      //لوكيشن اختيار استضافة موقع فقط
      2, 4, 9, 15,
      //لوكيشن اختيار استضافة بريد الكتروني فقط
      7, 8,
    ];

  if (this.inputFormField.servictype == "استضافة موقع فقط") {
    for (var i = 0; i < All_Progs.length; i++) {
      if (i < 5) {
        if (
          this.inputFormField[All_Progs[i]] == null ||
          this.inputFormField[All_Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[2].fields[Locations[i]].label} مطلوب`
          );
        }
      }
    }
  }

  if (this.inputFormField.servictype == "استضافة بريد الكتروني فقط") {
    for (var i = 0; i < All_Progs.length; i++) {
      if (i == 0 || i == 5) {
        if (
          this.inputFormField[All_Progs[i]] == null ||
          this.inputFormField[All_Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[2].fields[Locations[i]].label} مطلوب`
          );
        }
      }
    }
  }

  if (this.inputFormField.servictype == "استضافة موقع مع بريد الكتروني") {
    for (var i = 0; i < All_Progs.length; i++) {
      if (
        this.inputFormField[All_Progs[i]] == null ||
        this.inputFormField[All_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Locations[i]].label} مطلوب`
        );
      }
    }
  }

  //مال المجموعة الثالثة
  // اسم النطاق (Domain Name) :
  if (this.inputFormField.IfHave == "نعم") {
    if (
      this.inputFormField["NameOfDomain"] == null ||
      this.inputFormField["NameOfDomain"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[1].label} مطلوب`);
    }
  }

  //مال المجموعة الثالثة
  // اسم النطاق الفرعي
  if (this.inputFormField.sunDomain == "نعم") {
    if (
      this.inputFormField["nameOfSubDomain"] == null ||
      this.inputFormField["nameOfSubDomain"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[3].label} مطلوب`);
    }
  }

  //مال المجموعة الثالثة
  if (this.inputFormField.IfHaveDataBa == "نعم") {
    //اللغة البرمجية المستخدمة مع رقم الاصدار:
    if (
      this.inputFormField["typeOfProgrammingWithVersion"] == null ||
      this.inputFormField["typeOfProgrammingWithVersion"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[5].label} مطلوب`);
    }

    //نوع قاعدة البيانات المستخدمة:
    if (
      this.inputFormField["typeOfDataba"] == null ||
      this.inputFormField["typeOfDataba"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[6].label} مطلوب`);
    }
  }

  //المجموعة الثالثة
  if (this.inputFormField.distict == "نعم") {
    //الوقت المتوقع لاكمال عملية الرفع:
    if (
      this.inputFormField["timeOfUpload"] == null ||
      this.inputFormField["timeOfUpload"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[10].label} مطلوب`
      );
    }

    //ما هو حجم الملفات التقريبي المراد رفعها: (GB / MB)
    if (
      this.inputFormField["sizreOFfile"] == null ||
      this.inputFormField["sizreOFfile"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[11].label} مطلوب`
      );
    }

    //نوع الملفات المرفوعة
    if (
      this.inputFormField["FirstFileType"] == null ||
      this.inputFormField["FirstFileType"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[12].label} مطلوب`
      );
    }
  }
}
