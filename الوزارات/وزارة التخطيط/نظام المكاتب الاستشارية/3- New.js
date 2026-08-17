{
  if (this.inputFormField.hasSecondOwner == "نعم") {
    let Values = [
      {
        Fields_Prog: [
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
        Fields_Location: [21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32],
        Group_Number: 0,
      },
      {
        Fields_Prog: [
          "OwnerSecGov", //المحافظة (مؤسس ثاني)
          "ThirdDistrict", //القضاء (المؤسس الثاني)
          "ownerSecPhone", //رقم الهاتف (المؤسس الثاني)
          "districtOwnerSec", //المحلة (المؤسس الثاني)
          "alleyOwnerSec", //الزقاق (مؤسس ثاني)
          "houseNumberOwnerSec", //الدار (مؤسس ثاني)
        ],
        Fields_Location: [15, 16, 17, 18, 19, 20],
        Group_Number: 1,
      },
    ];

    Values.forEach((Looping) => {
      Looping.Fields_Prog.forEach((Checking) => {
        let index = Looping.Fields_Prog.indexOf(Checking);
        if (
          this.inputFormField[Checking] === "" ||
          this.inputFormField[Checking] === null
        ) {
          let Group_Number = Looping.Group_Number,
            Field_Location = Looping.Fields_Prog[index];
          this.evalErr.push(
            `الحقل ${
              this.group_of_form[Group_Number].fields[Field_Location].label
            } مطلوب`,
          );
        }
      });
    });
  }

  if (this.inputFormField.number) {
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

  if (this.inputFormField.numberOf) {
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

  if (this.inputFormField.officeWorkDone) {
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
  const Values = [
    {
      Selected_Value: ["تأسيس مكتب", "تجديد اجازة المكتب", "بدل تالف"],
      Fields_Progs: [
        //المجموعة الاولى
        [
          "requset", //اختر نوع الطلب
          "hasSecondOwner", //هل يوجد مؤسس ثاني ؟
        ],
        //المجموعة الثانية
        [
          "governorate", //المحافظة
          "FirstDistrict", //القضاء
          "officePhone", //رقم الهاتف
          "ownerGov", //المحافظة (المؤسس)
          "SecondDistrict", //القضاء (المؤسس)
          "ownerPhone", //رقم الهاتف (المؤسس)
        ],
        //المجموعة الثالثة
        ["number"], //اذكر عدد الجهات التي يتم التعامل معها
        //المجموعة الرابعة
        ["numberOf"], //اذكر عدد العاملين في المكتب
        //المجموعة الخامسة
        ["officeWorkDone"], //عدد الاعمال المنجزة من قبل المكتب
        //المجموعة السادسة
        ["Pledge"], //التعهد.
      ],
      Fields_Location: [
        //المجموعة الاولى
        [1, 19],
        //المجموعة الثانية
        [1, 2, 3, 8, 9, 10],
        //المجموعة الثالثة
        [1],
        //المجموعة الرابعة
        [0],
        //المجموعة الخامسة
        [0],
        //المجموعة السادسة
        [0],
      ],
      Group_Location: [0, 1, 2, 3, 4, 5],
    },
    {
      Selected_Value: ["تجميد مكتب"],
      Fields_Progs: [
        //المجموعة الاولى
        ["hasSecondOwner"], //هل يوجد مؤسس ثاني؟
        //المجموعة الثانية
        [
          "governorate", //المحافظة
          "FirstDistrict", //القضاء
          "officePhone", //رقم الهاتف
          "ownerGov", //المحافظة (المؤسس)
          "SecondDistrict", //القضاء (المؤسس)
          "ownerPhone", //رقم الهاتف (المؤسس)
        ],
        //المجموعة السادسة
        ["Pledge"], //التعهد
      ],
      Fields_Location: [
        //المجموعة الاولى
        [0],
        //المجموعة الثانية
        [1, 2, 3, 8, 9, 10],
        //المجموعة السادسة
        [0],
      ],
      Group_Location: [0, 1, 5],
    },
  ];

  const Result = Values.find((Finding) =>
    Finding.Selected_Value.includes(this.inputFormField.Procedure),
  );

  if (Result) {
    Result.Group_Location.forEach((Looping) => {
      let index = Result.Group_Location.indexOf(Looping);
      Result.Fields_Progs[index].forEach((Checking) => {
        let Field_Index = Result.Fields_Progs[index].indexOf(Checking);
        if (
          this.inputFormField[Checking] === null ||
          this.inputFormField[Checking] === ""
        ) {
          this.evalErr.push(
            `الحقل ${this.group_of_form[Looping].fields[Result.Fields_Location[index][Field_Index]].label} مطلوب`,
          );
        }
      });
    });
  }

  //-------------------------------------------------------------------------------------------------------
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const Second_Values = [
    {
      Field_Prog: "officePhone",
      Error_Message: "يجب أن يبدأ رقم هاتف المكتب بالرقم 07.",
    }, //رقم هاتف المكتب
    {
      Field_Prog: "ownerPhone",
      Error_Message: "يجب أن يبدأ رقم هاتف المؤسس بالرقم 07.",
    }, //رقم هاتف المؤسس
    {
      Field_Prog: "ownerSecPhone",
      Error_Message: "يجب أن يبدأ رقم هاتف المؤسس الثاني بالرقم 07.",
    }, //رقم هاتف المؤسس الثاني
  ];

  Second_Values.forEach((Checking) => {
    if (this.inputFormField[Checking.Field_Prog]) {
      const phoneNo3 = this.inputFormField[Checking.Field_Prog];
      let startNo3 = phoneNo3.substring(0, 2);
      if (startNo3 != "07") {
        this.evalErr.push(Checking.Error_Message);
      }
    }
  });
}
