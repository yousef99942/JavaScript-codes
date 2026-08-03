//---- form validation ------
{
  //------------------------------------------------------------------------------------------
  //-------------------------------------كود تسهيل-------------------------------------------
  //------------------------------------------------------------------------------------------
  var FieldsTasheelName = [
    "tasheelEmail", //البريد الالكتروني
    "customCity", //المحافظة
    //"customArea",
    "nearestLandmark", //اقرب نقطة دالة
  ];

  var FieldsTasheelObjID = [
    2, //البريد الالكتروني
    8, //المحافظة
    //44,
    7, //اقرب نقطة دالة
  ];

  // check validation
  if (this.inputFormField.certificateDilivery) {
    for (var i = 0; i < FieldsTasheelName.length; i++) {
      var fieldName = FieldsTasheelName[i];
      var fieldValue = this.inputFormField[fieldName];

      if (fieldValue == null || fieldValue === "") {
        var Label = this.group_of_form[2].fields[FieldsTasheelObjID[i]].label;

        this.evalErr.push(`الحقل ${Label} مطلوب`);
      }
    }
  }

  if (this.inputFormField.customCity) {
    if (
      this.inputFormField["customArea"] == null ||
      this.inputFormField["customArea"] == ""
    ) {
      var Label = this.group_of_form[2].fields[9].label;

      this.evalErr.push(`الحقل ${Label} مطلوب`);
    }
  }
  //-------------------------------------------------------------------------------------------------

  if (
    this.inputFormField.RecLocIndReqSubmit == "مكاتب المحافظات التابعة للمديرية"
  ) {
    if (
      this.inputFormField["RecLocIndReqOfficeName"] == null ||
      this.inputFormField["RecLocIndReqOfficeName"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[1].label} مطلوب`);
    }
  }
  var fieldsIDs = ["14", "15", "16"];
  var fieldsName = [
    "RecLocIndAuthReqNO",
    "RecLocIndReqAppName",
    "RecLocIndReqAppMob",
  ];
  //-- Auth validation ------
  if (this.inputFormField.RecLocIndReqAppType == "مخول") {
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
  //-----------تحديد المساحة من قبل
  if (this.inputFormField.RecLocIndeditSpaceDetermine == "صاحب المشروع") {
    if (
      this.inputFormField["RecLocIndeditOwnSpaceDet"] == null ||
      this.inputFormField["RecLocIndeditOwnSpaceDet"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[27].label} مطلوب`,
      );
    }
  }
  //--------------------- Recommedation validation ----------------------
  if (this.inputFormField.RecLocIndType == "توصية تخصيص قطعة أرض لأول مرة") {
    if (this.inputFormField.RecLocIndProjconstruction == "كامل التأسيس") {
      var FirstCompleteNames = [
        "recLocIndDetect",
        "RecLocIndFullProjconstruction",
        "RecLocIndeditSpaceDetermine",
      ];
      var FirstCompleteIndex = ["24", "25", "26"];
      for (var i = 0; i < FirstCompleteNames.length; i++) {
        if (
          this.inputFormField[FirstCompleteNames[i]] == null ||
          this.inputFormField[FirstCompleteNames[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${
              this.group_of_form[1].fields[FirstCompleteIndex[i]].label
            } مطلوب`,
          );
        }
      }
    } else if (this.inputFormField.RecLocIndProjconstruction == "تحت التأسيس") {
      var FirstUnderNames = [
        //  "RecLocIndProjconstructionLine",
        "RecLocIndeditSpaceDetermine",
      ];
      //var FirstUnderIndex = ["21", "26"];
      var FirstUnderIndex = ["26"];
      for (var i = 0; i < FirstUnderNames.length; i++) {
        if (
          this.inputFormField[FirstUnderNames[i]] == null ||
          this.inputFormField[FirstUnderNames[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${
              this.group_of_form[1].fields[FirstUnderIndex[i]].label
            } مطلوب`,
          );
        }
      }
      ////الخطوط الإنتاجية مشيدة (نعم)
      if (this.inputFormField.RecLocIndProjconstructionLine == "نعم") {
        var IDsLabel = ["22", "24"];
        var fieldsNames = [
          "RecLocIndProjconstructionLineper", //18
          "recLocIndDetect", //20
        ];
        for (var i = 0; i < fieldsNames.length; i++) {
          if (
            this.inputFormField[fieldsNames[i]] == null ||
            this.inputFormField[fieldsNames[i]] == ""
          ) {
            this.evalErr.push(
              `الحقل ${this.group_of_form[1].fields[IDsLabel[i]].label} مطلوب`,
            );
          }
        }
      }
    } /////End تحت التأسيس تخصيص لأول مرة

    //---- checkbox validation ------
    var firstTimeIDs = ["34", "35"];
    var firstTimeNames = ["RecLocIndReqPromOne", "RecLocIndReqPromTwo"];
    for (var i = 0; i < firstTimeNames.length; i++) {
      if (
        this.inputFormField[firstTimeNames[i]] == null ||
        this.inputFormField[firstTimeNames[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[firstTimeIDs[i]].label} مطلوب`,
        );
      }
    }
    //---------------------تعديل مساحة--------------------
  } else if (this.inputFormField.RecLocIndType == "تعديل مساحة") {
    if (this.inputFormField.RecLocIndProjconstruction == "كامل التأسيس") {
      var editCompleteNames = [
        "recLocIndDetect",
        "RecLocIndFullProjconstruction",
      ];
      var editCompleteIndex = ["24", "25"];
      for (var i = 0; i < editCompleteNames.length; i++) {
        if (
          this.inputFormField[editCompleteNames[i]] == null ||
          this.inputFormField[editCompleteNames[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${
              this.group_of_form[1].fields[editCompleteIndex[i]].label
            } مطلوب`,
          );
        }
      }
    } else if (this.inputFormField.RecLocIndProjconstruction == "تحت التأسيس") {
      ////---------Rana---------------
      if (
        this.inputFormField["RecLocIndProjconstructionLine"] == null ||
        this.inputFormField["RecLocIndProjconstructionLine"] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[21].label} مطلوب`,
        );
      } else {
        ////main cond      ------الخطوط الإنتاجية مشيدة (نعم)  Rana
        if (this.inputFormField.RecLocIndProjconstructionLine == "نعم") {
          var IDsLabel = ["22", "24"];
          var fieldsNames = [
            "RecLocIndProjconstructionLineper", //18
            "recLocIndDetect", //20
          ];
          for (var i = 0; i < fieldsNames.length; i++) {
            if (
              this.inputFormField[fieldsNames[i]] == null ||
              this.inputFormField[fieldsNames[i]] == ""
            ) {
              this.evalErr.push(
                `الحقل ${
                  this.group_of_form[1].fields[IDsLabel[i]].label
                } مطلوب`,
              );
            } ///push
          } //if null
        } //if main cond
      } ///else الخطوط الانتاجية غير فارغة
    } ///end تحت التأسيس

    //--- validation without project status condition ----
    var editSquearIDs = ["27", "28"]; ///سبب تعديل المساحة،المساحة المقررة
    var editSquearNames = [
      "RecLocIndeditOwnSpaceDet",
      "RecLocIndeditSpaceType",
    ];
    for (var i = 0; i < editSquearNames.length; i++) {
      if (
        this.inputFormField[editSquearNames[i]] == null ||
        this.inputFormField[editSquearNames[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[editSquearIDs[i]].label} مطلوب`,
        );
      }
    }
  }
  ///-------------------تدوير قطعة أرض-------------
  else if (this.inputFormField.RecLocIndType == "تدوير قطعة أرض") {
    var rotateLandIDs = ["22", "24", "34", "35"];
    var rotateLandName = [
      "RecLocIndProjconstructionLineper",
      "recLocIndDetect",
      "RecLocIndReqPromOne",
      "RecLocIndReqPromTwo",
    ];
    for (var i = 0; i < rotateLandName.length; i++) {
      if (
        this.inputFormField[rotateLandName[i]] == null ||
        this.inputFormField[rotateLandName[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[rotateLandIDs[i]].label} مطلوب`,
        );
      }
    }
  }
  //----
  else if (this.inputFormField.RecLocIndType == "تغيير جهة تخصيص") {
    //-------------من جهة، إلى جهة
    var DirToDirNames = [
      "RecLocIndChangLocType",
      "recLocIndFromFromGovernorate",
      "recLocIndFromToGovernorate",
    ];
    var DitToDirIndex = ["30", "31", "32"];
    for (var i = 0; i < DirToDirNames.length; i++) {
      if (
        this.inputFormField[DirToDirNames[i]] == null ||
        this.inputFormField[DirToDirNames[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[DitToDirIndex[i]].label} مطلوب`,
        );
      }
    } //-------------End من جهة إلى جهة
    if (this.inputFormField.RecLocIndProjconstruction == "كامل التأسيس") {
      var CompEstNames = ["recLocIndDetect", "RecLocIndFullProjconstruction"];
      var CompEstIndex = ["24", "25"];
      for (var i = 0; i < CompEstNames.length; i++) {
        if (
          this.inputFormField[CompEstNames[i]] == null ||
          this.inputFormField[CompEstNames[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${
              this.group_of_form[1].fields[CompEstIndex[i]].label
            } مطلوب`,
          );
        }
      }
    } else if (this.inputFormField.RecLocIndProjconstruction == "تحت التأسيس") {
      var UnderEstNames = ["RecLocIndProjconstructionLine"];
      //var FirstUnderIndex = ["21", "26"];
      var UnderEstIndex = ["21"];
      for (var i = 0; i < UnderEstNames.length; i++) {
        if (
          this.inputFormField[UnderEstNames[i]] == null ||
          this.inputFormField[UnderEstNames[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${
              this.group_of_form[1].fields[UnderEstIndex[i]].label
            } مطلوب`,
          );
        }
      }
      ////الخطوط الإنتاجية مشيدة (نعم)
      if (this.inputFormField.RecLocIndProjconstructionLine == "نعم") {
        var IDsLabel = ["22", "24"];
        var fieldsNames = [
          "RecLocIndProjconstructionLineper", //18
          "recLocIndDetect", //20
        ];
        for (var i = 0; i < fieldsNames.length; i++) {
          if (
            this.inputFormField[fieldsNames[i]] == null ||
            this.inputFormField[fieldsNames[i]] == ""
          ) {
            this.evalErr.push(
              `الحقل ${this.group_of_form[1].fields[IDsLabel[i]].label} مطلوب`,
            );
          }
        }
      }
    }
  } ////End تغيير جهة تخصيص

  //---
  if (this.inputFormField.RecLocIndeditSpaceType == "أخرى") {
    if (
      this.inputFormField["RecLocIndeditSpaceModifiyingReasons"] == null ||
      this.inputFormField["RecLocIndeditSpaceModifiyingReasons"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[1].fields[29].label} مطلوب`,
      );
    }
  }
}
