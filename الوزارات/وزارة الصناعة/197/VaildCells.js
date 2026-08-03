{
  //----- validation Err --------
  if (
    this.inputFormField.underReqOfficeSelect ==
    "مكاتب المحافظات التابعة للمديرية"
  ) {
    if (
      this.inputFormField["underReqOfficeName"] == null ||
      this.inputFormField["underReqOfficeName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }
  //----- validation Err --------
  if (
    this.inputFormField.infoOwnerType == "وكيل / محامي" ||
    this.inputFormField.infoOwnerType == "مدير مفوض (شركة)"
  ) {
    var fieldsIDs = ["9", "10", "11", "12"];
    var fieldsName = [
      "infoFirstName",
      "infoPhone",
      "infoNoAuthReq",
      "infoDateAuthReq",
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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //كروب تسهيل
  var FieldsTasheelName = [
    "tasheelEmail", //البريد الالكتروني
    "customCity", //المحافظة
    //"customArea", //المنطقة
    "nearestLandmark", //اقرب نقطة دالة
  ];
  var FieldsTasheelObjID = [
    "2",
    "8",
    //"8",
    "7",
  ];
  //---- check validation ----
  if (this.inputFormField.certificateDilivery) {
    for (var i = 0; i < FieldsTasheelName.length; i++) {
      if (
        this.inputFormField[FieldsTasheelName[i]] == null ||
        this.inputFormField[FieldsTasheelName[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[8].fields[FieldsTasheelObjID[i]].label
          } مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.customCity) {
    if (
      this.inputFormField["customArea"] == null ||
      this.inputFormField["customArea"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[8].fields[9].label} مطلوب`);
    }
  }
}
