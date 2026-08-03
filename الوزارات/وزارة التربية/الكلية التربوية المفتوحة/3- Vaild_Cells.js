{
  var Selected_Value = [
    "وثقية تخرج بدون درجات",
    "وثيقة تخرج بالدرجات باللغة العربية",
    "تاييد تخرج",
  ];
  if (Selected_Value.includes(this.inputFormField["typetwo"])) {
    if (
      this.inputFormField["addres"] == "" ||
      this.inputFormField["addres"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[12].label} مطلوب`,
      );
    }
  }

  var English_Progs = [
    "TowhomEnglish", //ذكر العنوان باللغة الانكليزية
    "EngName", //(كتابة الاسم باللغة الانكليزية )Full Name
  ];
  var Locations = [14, 15];

  if (
    this.inputFormField["typetwo"] == "وثيقة تخرج بالدرجات باللغة الانكليزية"
  ) {
    for (var i = 0; i < English_Progs.length; i++) {
      if (
        this.inputFormField[English_Progs[i]] == "" ||
        this.inputFormField[English_Progs[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  //-----------------------------------------------------------------------------------------------------------
  //--------------------------------------------كود تسهيل-----------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------

  var FieldsTasheelName = [
    "tasheelEmail", //البريد الالكتروني
    "customCity", //المحافظة
    //"customArea", //المنطقة
    "nearestLandmark", //اقرب نقطة دالة
  ];

  var FieldsTasheelObjID = [
    19, //البريد الالكتروني
    25, //المحافظة
    //26, //المنطقة
    24, //اقرب نقطة دالة
  ];

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

  //المنطقة
  if (this.inputFormField.customCity) {
    //var fieldName = FieldsTasheelName["customArea"];
    var fieldValue = this.inputFormField["customArea"];

    if (fieldValue == null || fieldValue == "") {
      var label = this.group_of_form[0].fields[26].label;

      this.evalErr.push(`الحقل ${label} مطلوب`);
    }
  }
}
