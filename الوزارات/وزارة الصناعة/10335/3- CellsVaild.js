//	form fields validation اكمال تأسيس
//BANEEN
{
  if (
    this.inputFormField.compIncorOfficeSelect ==
    "مكاتب المحافظات التابعة للمديرية"
  ) {
    if (
      this.inputFormField["compIncorOfficeName"] == null ||
      this.inputFormField["compIncorOfficeName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }

  //---------------------------------------------------------------------------------
  if (this.inputFormField.compIncorTypeRequest == "مخول") {
    var fieldsIDs = ["10", "11", "12"];
    var fieldsName = [
      "compIncorApplicName",
      "compIncorApplicnNO",
      "compIncorApplicNum",
    ];
    for (var i = 0; i < fieldsName.length; i++) {
      if (
        this.inputFormField[fieldsName[i]] == null ||
        this.inputFormField[fieldsName[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[fieldsIDs[i]].label} مطلوب`,
        );
      }
    }
  }

  //---------------------------------------------------------------------------------
  if (this.inputFormField.district == "اقضية أخرى") {
    if (
      this.inputFormField["compIncordistrict"] == null ||
      this.inputFormField["compIncordistrict"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[16].label} مطلوب`,
      );
    }
  }

  //---------------------------------------------------------------------------------
  if (this.inputFormField.compIncorDetectType == "سريع") {
    if (
      this.inputFormField["compIncoDetectLoc"] == null ||
      this.inputFormField["compIncoDetectLoc"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[6].fields[2].label} مطلوب`);
    }
  }

  //---------------------------------------------------------------------------------//
  //----------------------------------كود تسهيل-------------------------------------//
  //---------------------------------------------------------------------------------//
  var FieldsTasheelName = [
    "tasheelEmail", //البريد الالكتروني
    "customCity", //المحافظة
    //"customArea", //المنطقة
    "nearestLandmark", //اقرب نقطة دالة
  ];

  var FieldsTasheelObjID = [
    2, //البريد الالكتروني
    8, //المحافظة
    //9, //المنطقة
    7, //اقرب نقطة دالة
  ];

  if (this.inputFormField.certificateDilivery) {
    for (var i = 0; i < FieldsTasheelName.length; i++) {
      var fieldName = FieldsTasheelName[i];
      var fieldValue = this.inputFormField[fieldName];

      if (fieldValue == null || fieldValue === "") {
        var label = this.group_of_form[9].fields[FieldsTasheelObjID[i]].label;

        this.evalErr.push(`الحقل ${label} مطلوب`);
      }
    }
  }

  if (this.inputFormField.customCity) {
    if (
      this.inputFormField["customArea"] == null ||
      this.inputFormField["customArea"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[9].fields[9].label} مطلوب`);
    }
  }
}
