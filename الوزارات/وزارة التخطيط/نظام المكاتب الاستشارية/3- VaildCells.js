{
  if (this.inputFormField.hasSecondOwner == "نعم") {
    var First_Group_Progs = [
        "firstNameArSec",
        "secondNameSec",
        "thirdNameSec",
        "fourthNameSec",
        "firstNameEnSec",
        "secondNameEnSec",
        "thirdNameEnSec",
        "fourthNameEnSec",
        "nationalIdSec",
        "certificateSec",
        "certificateYearSec",
      ],
      First_Group_Locations = [21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32],
      Second_Group_Progs = [
        "OwnerSecGov", //المحافظة (مؤسس ثاني)
        "ThirdDistrict", //القضاء (المؤسس الثاني)
        "ownerSecPhone", //رقم الهاتف (المؤسس الثاني)
        "districtOwnerSec", //المحلة (المؤسس الثاني)
        "alleyOwnerSec", //الزقاق (مؤسس ثاني)
        "houseNumberOwnerSec", //الدار (مؤسس ثاني)
      ],
      Second_Group_Locations = [15, 16, 17, 18, 19, 20];

    for (var i = 0; i < First_Group_Progs.length; i++) {
      if (
        this.inputFormField[First_Group_Progs[i]] == null ||
        this.inputFormField[First_Group_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[First_Group_Locations[i]].label
          } مطلوب`,
        );
      }
    }

    for (var i = 0; i < Second_Group_Progs.length; i++) {
      if (
        this.inputFormField[Second_Group_Progs[i]] == null ||
        this.inputFormField[Second_Group_Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[Second_Group_Locations[i]].label
          } مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.number != null || this.inputFormField.number != "") {
    var Fields_Progs = [
        "entitynamefirst",
        "servicedurationfirst",
        "entitynamesecond",
        "servicedurationsecond",
        "entitynamethird",
        "servicedurationthird",
        "entitynamefourth",
        "servicedurationfourth",
        "entitynamefifth",
        "servicedurationfifth",
      ],
      Locations = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    for (var i = 0; i < Fields_Progs.length; i++) {
      if (i < this.inputFormField.number * 2) {
        if (
          this.inputFormField[Fields_Progs[i]] == null ||
          this.inputFormField[Fields_Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[2].fields[Locations[i]].label} مطلوب`,
          );
        }
      }
    }
  }

  if (
    this.inputFormField.numberOf != null ||
    this.inputFormField.numberOf != ""
  ) {
    var Fields_Progs = [
        "firstnameA",
        "secondnameA",
        "thirdnameA",
        "fourthnameA",
        "educationA",
        "universityA",
        "yearA",
        "firstnameB",
        "secondnameB",
        "thirdnameB",
        "fourthnameB",
        "educationB",
        "universityB",
        "yearB",
        "firstnameC",
        "secondnameC",
        "thirdnameC",
        "fourthnameC",
        "educationC",
        "universityC",
        "yearC",
        "firstnameD",
        "secondnameD",
        "thirdnameD",
        "fourthnameD",
        "educationD",
        "universityD",
        "yearD",
        "firstnameE",
        "secondnameE",
        "thirdnameE",
        "fourthnameE",
        "educationE",
        "universityE",
        "yearE",
        "firstnameF",
        "secondnameF",
        "thirdnameF",
        "fourthnameF",
        "educationF",
        "universityF",
        "yearF",
        "firstnameG",
        "secondnameG",
        "thirdnameG",
        "fourthnameG",
        "educationG",
        "universityG",
        "yearG",
        "firstnameH",
        "secondnameH",
        "thirdnameH",
        "fourthnameH",
        "educationH",
        "universityH",
        "yearH",
        "firstnameI",
        "secondnameI",
        "thirdnameI",
        "fourthnameI",
        "educationI",
        "universityI",
        "yearI",
        "firstnameJ",
        "secondnameJ",
        "thirdnameJ",
        "fourthnameJ",
        "educationJ",
        "universityJ",
        "yearJ",
      ],
      Locations = [
        2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23,
        24, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44,
        45, 46, 47, 48, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64,
        66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80,
      ];

    for (var i = 0; i < Fields_Progs.length; i++) {
      if (i < this.inputFormField.numberOf * 7) {
        if (
          this.inputFormField[Fields_Progs[i]] == null ||
          this.inputFormField[Fields_Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[3].fields[Locations[i]].label} مطلوب`,
          );
        }
      }
    }
  }

  if (
    this.inputFormField.officeWorkDone != null ||
    this.inputFormField.officeWorkDone != ""
  ) {
    var Fields_Progs = [
        "ConsultationA",
        "BeneficiaryA",
        "CompletionDateA",
        "CompletionRateA",
        "ConsultationB",
        "BeneficiaryB",
        "CompletionDateB",
        "CompletionRateB",
        "ConsultationC",
        "BeneficiaryC",
        "CompletionDateC",
        "CompletionRateC",
        "ConsultationD",
        "BeneficiaryD",
        "CompletionDateD",
        "CompletionRateD",
        "ConsultationE",
        "BeneficiaryE",
        "CompletionDateE",
        "CompletionRateE",
        "ConsultationF",
        "BeneficiaryF",
        "CompletionDateF",
        "CompletionRateF",
        "ConsultationG",
        "BeneficiaryG",
        "CompletionDateG",
        "CompletionRateG",
        "ConsultationH",
        "BeneficiaryH",
        "CompletionDateH",
        "CompletionRateH",
        "ConsultationI",
        "BeneficiaryI",
        "CompletionDateI",
        "CompletionRateI",
        "ConsultationJ",
        "BeneficiaryJ",
        "CompletionDateJ",
        "CompletionRateJ",
        "ConsultationK",
        "BeneficiaryK",
        "CompletionDateK",
        "CompletionRateK",
        "ConsultationL",
        "BeneficiaryL",
        "CompletionDateL",
        "CompletionRateL",
        "ConsultationM",
        "BeneficiaryM",
        "CompletionDateM",
        "CompletionRateM",
        "ConsultationN",
        "BeneficiaryN",
        "CompletionDateN",
        "CompletionRateN",
        "ConsultationO",
        "BeneficiaryO",
        "CompletionDateO",
        "CompletionRateO",
      ],
      Locations = [
        1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22,
        23, 24, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 42, 43,
        44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60,
      ];

    for (var i = 0; i < Fields_Progs.length; i++) {
      if (i < this.inputFormField.officeWorkDone * 4) {
        if (
          this.inputFormField[Fields_Progs[i]] == null ||
          this.inputFormField[Fields_Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[4].fields[Locations[i]].label} مطلوب`,
          );
        }
      }
    }
  }

  //نوع الاجراء
  var Selected_Values = ["تأسيس مكتب", "تجديد اجازة المكتب", "بدل تالف"];
  if (Selected_Values.includes(this.inputFormField.Procedure)) {
    var Progs = [
        //المجموعة الاولى
        "requset", //اختر نوع الطلب
        "hasSecondOwner", //هل يوجد مؤسس ثاني ؟
        //المجموعة الثانية
        "governorate", //المحافظة
        "FirstDistrict", //القضاء
        "officePhone", //رقم الهاتف
        "ownerGov", //المحافظة (المؤسس)
        "SecondDistrict", //القضاء (المؤسس)
        "ownerPhone", //رقم الهاتف (المؤسس)
        //المجموعة الثالثة
        "number", //اذكر عدد الجهات التي يتم التعامل معها
        //المجموعة الرابعة
        "numberOf", //اذكر عدد العاملين في المكتب
        //المجموعة الخامسة
        "officeWorkDone", //عدد الاعمال المنجزة من قبل المكتب
        //المجموعة السادسة
        "Pledge", //التعهد.
      ],
      Locations = [
        //المجموعة الاولى
        1, 19,
        //المجموعة الثانية
        1, 2, 3, 8, 9, 10,
        //المجموعة الثالثة
        1,
        //المجموعة الرابعة
        0,
        //المجموعة الخامسة
        0,
        //المجموعة السادسة
        0,
      ];

    //المجموعة الاولى
    for (var i = 0; i < 2; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Locations[i]].label} مطلوب`,
        );
      }
    }

    //المجموعة الثانية
    for (var i = 2; i < 8; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
        );
      }
    }

    //المجموعة الثالثة
    for (var i = 8; i < 9; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Locations[i]].label} مطلوب`,
        );
      }
    }

    //المجموعة الرابعة
    for (var i = 9; i < 10; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[Locations[i]].label} مطلوب`,
        );
      }
    }

    if (
      this.inputFormField.Procedure == "تجديد اجازة المكتب" ||
      this.inputFormField.Procedure == "بدل تالف"
    ) {
      //المجموعة الخامسة
      for (var i = 10; i < 11; i++) {
        if (
          this.inputFormField[Progs[i]] == null ||
          this.inputFormField[Progs[i]] == ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[4].fields[Locations[i]].label} مطلوب`,
          );
        }
      }
    }

    //المجموعة السادسة
    for (var i = 11; i < 12; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[5].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  //-------------------------------------------------------------------------------------------------------
  if (this.inputFormField.Procedure == "تجميد مكتب") {
    //المجموعة الثانية
    var Progs = [
        "governorate", //المحافظة
        "FirstDistrict", //القضاء
        "officePhone", //رقم الهاتف
        "ownerGov", //المحافظة (المؤسس)
        "SecondDistrict", //القضاء (المؤسس)
        "ownerPhone", //رقم الهاتف (المؤسس)
      ],
      Locations = [1, 2, 3, 8, 9, 10];

    //المجموعة الاولى
    //هل يوجد مؤسس ثاني؟
    if (
      this.inputFormField["hasSecondOwner"] == null ||
      this.inputFormField["hasSecondOwner"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[19].label} مطلوب`,
      );
    }

    //المجموعة السادسة
    //التعهد
    if (
      this.inputFormField["Pledge"] == null ||
      this.inputFormField["Pledge"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[5].fields[0].label} مطلوب`);
    }

    //المجموعة الثانية
    for (var i = 0; i < Progs.length; i++) {
      if (
        this.inputFormField[Progs[i]] == null ||
        this.inputFormField[Progs[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  //-------------------------------------------------------------------------------------------------------
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  //رقم هاتف المكتب
  if (
    this.inputFormField.officePhone != null &&
    this.inputFormField.officePhone != ""
  ) {
    const phoneNo1 = this.inputFormField.officePhone;
    let startNo1 = phoneNo1.substring(0, 2);
    if (startNo1 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المكتب بالرقم 07.");
    }
  }

  //رقم هاتف المؤسس
  if (
    this.inputFormField.ownerPhone != null &&
    this.inputFormField.ownerPhone != ""
  ) {
    const phoneNo2 = this.inputFormField.ownerPhone;
    let startNo2 = phoneNo2.substring(0, 2);
    if (startNo2 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس بالرقم 07.");
    }
  }

  //رقم هاتف المؤسس الثاني
  if (
    this.inputFormField.ownerSecPhone != null &&
    this.inputFormField.ownerSecPhone != ""
  ) {
    const phoneNo3 = this.inputFormField.ownerSecPhone;
    let startNo3 = phoneNo3.substring(0, 2);
    if (startNo3 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الثاني بالرقم 07.");
    }
  }
}
