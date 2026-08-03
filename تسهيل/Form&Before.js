{
  // ----------------------
  // حقول التسهيل Tasheel
  // ----------------------

  var FieldsTasheelName = [
    "tasheelEmail",
    "customCity",
    "customArea",
    "nearestLandmark",
  ];

  var FieldsTasheelObjID = [36, 43, 44, 41];

  // check validation
  if (this.inputFormField.certificateDilivery) {
    for (var i = 0; i < FieldsTasheelName.length; i++) {
      var fieldName = FieldsTasheelName[i];
      var fieldValue = this.inputFormField[fieldName];

      if (fieldValue == null || fieldValue === "") {
        var label = this.group_of_form[0].fields[FieldsTasheelObjID[i]].label;

        this.evalErr.push(`الحقل ${label} مطلوب`);
      }
    }
  }
}
