//---- form validation --------
{
  //---- National and card ID ----
  var FieldsCardNationalName = [
    "cardnumber",
    "Carddate",
    "IdLocation",
    "Nationality",
    "Datecertificate",
    "Record",
    "newspaper",
  ];
  var FieldsCardObjID = ["12", "13", "14", "15", "16", "17", "18"];
  if (this.inputFormField.typee == "هوية احوال مدنية") {
    for (var i = 2; i < FieldsCardNationalName.length; i++) {
      if (
        this.inputFormField[FieldsCardNationalName[i]] == null ||
        this.inputFormField[FieldsCardNationalName[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FieldsCardObjID[i]].label
          } مطلوب`,
        );
      }
    }
  } else if (this.inputFormField.typee == "بطاقة وطنية") {
    for (var j = 0; j < FieldsCardNationalName.length; j++) {
      if (
        this.inputFormField[FieldsCardNationalName[j]] == null ||
        this.inputFormField[FieldsCardNationalName[j]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FieldsCardObjID[j]].label
          } مطلوب`,
        );
      }
      if (j == 1) {
        break;
      }
    }
  }
  //------- show reson field require ---------
  if (this.inputFormField.request == "اخرى") {
    if (
      this.inputFormField["otherReason"] == null ||
      this.inputFormField["otherReason"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
    }
  }

  //-- country English Name
  if (
    this.inputFormField.request != "داخل العراق" &&
    this.inputFormField.Birth == "اخرى"
  ) {
    if (
      this.inputFormField["countryName"] == null ||
      this.inputFormField["countryName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[1].label} مطلوب`);
    }
  }
  /*
    if (this.inputFormField.request == "اخرى") {
      if (
        this.inputFormField["otherReason"] == null ||
        this.inputFormField["otherReason"] == ""
      ) {
        this.evalErr.push(`الحقل ${this.group_of_form[0].fields[1].label} مطلوب`);
      }
    }
  */
  if (this.inputFormField.request == "خارج العراق") {
    if (
      this.inputFormField["FullName"] == null ||
      this.inputFormField["FullName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[0].label} مطلوب`);
    }
  }
  if (
    this.inputFormField.request == "داخل العراق" ||
    this.inputFormField.request == "خارج العراق" ||
    this.inputFormField.request == "من محافظات الاقليم"
  ) {
    if (
      this.inputFormField["typee"] == null ||
      this.inputFormField["typee"] == ""
    ) {
      this.evalErr.push("مطلوب نوع الهوية");
    }
    if (
      this.inputFormField["Thirdname"] == null ||
      this.inputFormField["Thirdname"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الثالث");
    }
    if (
      this.inputFormField["Fourthname"] == null ||
      this.inputFormField["Fourthname"] == ""
    ) {
      this.evalErr.push("مطلوب الاسم الرابع");
    }
  }
  if (
    this.inputFormField.request == "داخل العراق" ||
    this.inputFormField.request == "من محافظات الاقليم"
  ) {
    const requiredFields = [
      { field: "addres", message: "مطلوب عنوان السكن" },
      { field: "Birth", message: "مطلوب محل الولادة" },
      { field: "Mahalla", message: "مطلوب المحلة" },
      { field: "alley", message: "مطلوب الزقاق" },
      { field: "house", message: "مطلوب الدار" },
    ];

    requiredFields.forEach(({ field, message }) => {
      if (!this.inputFormField[field]) {
        this.evalErr.push(message);
      }
    });
  }

  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo = this.inputFormField.phon;
  let startNo = phoneNo.substring(0, 2);
  if (startNo != "07") {
    this.evalErr.push("يجب أن يبدأ رقم الهاتف بالرقم 07.");
  }
}
