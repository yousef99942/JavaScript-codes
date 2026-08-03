{
  //الجهات المتقدمة للحصول على الاجازة الاستثمارية
  // معلومات عن المستثمر (الشخص الطبيعي)
  var First_Fields_Prog = [
      "FirstName", //الاسم الاول
      "SecondName", //الاسم الثاني
      "ThirdName", //الاسم الثالث
      "FourthName", //الاسم الرابع
      "BrithDate", //تأريخ الولادة
      "NationalityOfResidence", //جنسية المستثمر
      "Phone", //رقم الهاتف (المكتب)
      "Email", //البريد الإلكتروني
      "Mobile", //رقم الهاتف النقال (الشخصي)
      "Website", //الموقع الإلكتروني
      "governorate", //المحافظة
      "RegionVillage", //المنطقة/ القرية
      "districtStreetHouse", //محلة، زقاق، دار
      "CountryResidence", //عنوان السكن والإقامة للمستثمر
      "FullAdress", //العنوان الكامل
      "AdditionalNotes", //ملاحظات إضافية
      "SEN", //هل صدر بحقك حكماً بإشهار الإفلاس أو الحجز؟
    ],
    First_Fields_Location = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 19, 20, 21,
    ],
    // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
    Second_Fields_Prog = [
      "Fullna", //الاسم الكامل
      "natio", //الجنسية
      "jobtitle", //العنوان الوظيفي / الصفة
      "typeauth", //نوع التخويل
      "PhoNo", //رقم الهاتف (المكتب)
      "MbPho", //رقم الهاتف النقال (الشخصي)
      "Emaill", //البريد الإلكتروني
      "Countryofreside", //عنوان السكن والإقامة للمخول:
      "adition", //ملاحظات اضافية:
      "investment", //هل سبق وان تقدم المستثمر بطلب على اجازة استثمار؟
      "marketselecter", //الاسواق الرئيسية للمستثمر؟
      "Countryy", //الدولة و المدينة او الاقليم
      "note", //ملاحظات اضافية
    ],
    Second_Fields_Location = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23],
    // معلومات عن المستثمر (الشخص المعنوي)
    Third_Fields_Prog = [
      "TypeOfInvestmentEntity", //نوع الجهة المستثمرة
      "ToWhich", //القطاع الذي تنتمي إليه الشركة أو الجهة المستثمرة
      "Nationality", //الجنسية
      "PlaceOfEstablishment", //محل التأسيس
      "DateOfEstablishment", //تأريخ التأسيس
      "Adress", //العنوان
      "AddressDetails", //العنوان بالتفصيل
      "Ema", //البريد الإلكتروني
      "Websit", //الموقع الالكتروني
      "field", //ماهو النشاط الأساسي للشركة او الجهة المستثمرة؟
      "Activity", //هل نشاط الشركة يتطابق مع طبيعة المشروع الاستثماري؟
      "branches", //هل هناك فرع للشركة في العالم؟
      "obtained", //هل حصلت الشركة على شهادة عالمية (شهادات الجودة والكفاءة)
      "working", //كم عدد العاملين في الشركة او الجهة المستثمرة ؟
      "bankruptey", //هل تم الإعلان عن إفلاس الشركة او الجهة المستثمرة؟
    ],
    Third_Fields_Location = [
      0, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 19,
    ],
    // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
    Fourth_Fields_Prog = [
      "fullNam", //الاسم الكامل
      "JobTitleBusiness", //العنوان الوظيفي / الصفة
      "TypeOfAuthorization", //نوع التخويل
      "PhoneNo", //رقم الهاتف (المكتب)
      "MobilePhoneNo", //رقم الهاتف (النقال)
      "Emai", //البريد الإلكتروني
      "National", //الجنسية
      "CountryOfResidence", //عنوان السكن والإقامة للمخول
      "Details", //تفاصيل السكن
      "HaveYouEverAppliedForInvestment", //هل سبق وان تقدم المستثمر بطلب على اجازة استثمار؟
      "MajorFinancialMarkets", //الاسواق الرئيسية لهذه الشركة أو الجهة المستثمرة
      "CountryCityRegion", //الدولة و المدينة او الاقليم
      "ManagementBeenChanged", //هل تغيرت الإدارة الغليا للشركة او الجهة المستثمرة خلال الثمانية عشر شهراً الماضية؟ وهل تتوقع أن تتغير في الثمانية عشر شهراً المقبلة؟
      "Explan", //توضيح الحقل السابق
      "AdditionalNote", //ملاحظات اضافية
    ],
    Fourth_Fields_Location = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24, 25];

  if (this.inputFormField.set == "شخص طبيعي (Natural Person)") {
    // معلومات عن المستثمر (الشخص الطبيعي)
    for (var i = 0; i < First_Fields_Prog.length; i++) {
      if (
        this.inputFormField[First_Fields_Prog[i]] == null ||
        this.inputFormField[First_Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[First_Fields_Location[i]].label} مطلوب`,
        );
      }
    }

    // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
    for (var i = 0; i < Second_Fields_Prog.length; i++) {
      if (
        this.inputFormField[Second_Fields_Prog[i]] == null ||
        this.inputFormField[Second_Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Second_Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.set == "شخص معنوي (Legal Entity)") {
    // معلومات عن المستثمر (الشخص المعنوي)
    for (var i = 0; i < Third_Fields_Prog.length; i++) {
      if (
        this.inputFormField[Third_Fields_Prog[i]] == null ||
        this.inputFormField[Third_Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[Third_Fields_Location[i]].label} مطلوب`,
        );
      }
    }

    // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
    for (var i = 0; i < Fourth_Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fourth_Fields_Prog[i]] == null ||
        this.inputFormField[Fourth_Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[4].fields[Fourth_Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
  //هل سبق وان تقدم المستثمر بطلب على اجازة استثمار؟
  var Fields_Prog = [
      "dateapl", //تاريخ الطلب السابق"
      "Datepre", //رقم الطلب السابق
      "nameofentiy", //اسم الجهة التي قدم اليها الطلب؟
      "Rido", // الطلب الذي قدمتة
    ],
    Fields_Location = [
      10, //تاريخ الطلب السابق"
      11, //رقم الطلب السابق
      12, //اسم الجهة التي قدم اليها الطلب؟
      13, // الطلب الذي قدمتة
    ];

  if (this.inputFormField.investment == "نعم-Yes") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  //الطلب  الذي قدمتة
  if (this.inputFormField.Rido == "تم رفضه - Rejected") {
    if (
      this.inputFormField["resone"] == null ||
      this.inputFormField["resone"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[14].label} مطلوب`,
      );
    }
  }

  //هل سبق وان حصل المستثمر على اجازة استثمار
  if (this.inputFormField.selc == "نعم-Yes") {
    if (
      this.inputFormField["form"] == null ||
      this.inputFormField["form"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[17].label} مطلوب`,
      );
    }
  }

  // معلومات عن المستثمر (الشخص الطبيعي)
  var Fields_Prog = [
      "Country", //الدولة
      "Governor", //المحافظة:
      "City", //المدينة
    ],
    Fields_Location = [
      16, //تاريخ الطلب السابق"
      17, //رقم الطلب السابق
      18, //اسم الجهة التي قدم اليها الطلب؟
    ];

  if (this.inputFormField.CountryResidence == "خارج العراق - Outside Iraq") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  // معلومات عن المستثمر (الشخص المعنوي)
  // نوع الجهة المستثمرة
  if (this.inputFormField.TypeOfInvestmentEntity == "صفة أخرى - Other") {
    if (
      this.inputFormField["characteristic"] == null ||
      this.inputFormField["characteristic"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[1].label} مطلوب`);
    }
  }

  //الجنسية
  if (this.inputFormField.Nationality == "أخرى - Other") {
    if (
      this.inputFormField["OtherNationality"] == null ||
      this.inputFormField["OtherNationality"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[3].fields[4].label} مطلوب`);
    }
  }

  // هل نشاط الشركة يتطابق مع طبيعة المشروع الاستثماري؟
  if (this.inputFormField.Activity == "كلا - No") {
    if (
      this.inputFormField["reasons"] == null ||
      this.inputFormField["reasons"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[12].label} مطلوب`,
      );
    }
  }

  // هل هناك فرع للشركة في العالم؟
  if (this.inputFormField.branches == "نعم - Yes") {
    if (
      this.inputFormField["NamrOfBranche"] == null ||
      this.inputFormField["NamrOfBranche"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[15].label} مطلوب`,
      );
    }
  }

  // هل حصلت الشركة على شهادة عالمية (شهادات الجودة والكفاءة)
  if (this.inputFormField.obtained == "نعم -Yes") {
    if (
      this.inputFormField["obtainedyes"] == null ||
      this.inputFormField["obtainedyes"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[17].label} مطلوب`,
      );
    }
  }

  //هل تم الإعلان عن إفلاس الشركة او الجهة المستثمرة؟
  if (this.inputFormField.bankruptey == "نعم - Yes") {
    if (
      this.inputFormField["explain"] == null ||
      this.inputFormField["explain"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[3].fields[20].label} مطلوب`,
      );
    }
  }

  // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
  // هل سبق وان تقدم المستثمر بطلب على اجازة استثمار؟
  var Fields_Prog = [
      "DateOfThePreviousApplication", //تاريخ الطلب السابق"
      "PreviousApplicationNumber", //رقم الطلب السابق
      "NameOfEntity", //اسم الجهة التي قدم اليها الطلب؟
      "ApplicationWas", //الطلب الذي قدمتة
      "relation", //هل هناك علاقة بين المشروع في الطلب الحالي والطلب السابق؟
    ],
    Fields_Location = [
      10, //تاريخ الطلب السابق"
      11, //رقم الطلب السابق
      12, //اسم الجهة التي قدم اليها الطلب؟
      13, //الطلب الذي قدمتة
      15, //هل هناك علاقة بين المشروع في الطلب الحالي والطلب السابق؟
    ];

  if (this.inputFormField.HaveYouEverAppliedForInvestment == "نعم - Yes") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[4].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  // الطلب الذي قدمتة
  if (this.inputFormField.ApplicationWas == "تم رفضه - Rejected") {
    if (
      this.inputFormField["ReasonOfRejected"] == null ||
      this.inputFormField["ReasonOfRejected"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[4].fields[14].label} مطلوب`,
      );
    }
  }

  // هل سبق وان حصل المستثمر على اجازة استثمار؟
  if (this.inputFormField.LnvestmentLicense == "نعم - Yes") {
    if (
      this.inputFormField["GrantedTheLicense"] == null ||
      this.inputFormField["GrantedTheLicense"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[4].fields[17].label} مطلوب`,
      );
    }
  }

  // هل الاجازة ؟
  if (this.inputFormField.IsThelicense == "تم سحبها - withdrawn") {
    if (
      this.inputFormField["ReasonForWithdrawal"] == null ||
      this.inputFormField["ReasonForWithdrawal"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[4].fields[19].label} مطلوب`,
      );
    }
  }

  //معلومات عن المشروع
  var Fields_Prog = [
      "AmountOfLoan", //مبلغ القرض (دولار أمريكي)
      "SourceOfLoan", //مصدر القرض
    ],
    Fields_Location = [
      29, //مبلغ القرض (دولار أمريكي)
      30, //مصدر القرض
    ];

  if (this.inputFormField.Loin == "نعم - Yes") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[5].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  var Fields_Prog = [
      "ABriefDescription", //شرح موجز عن التكنولوجيا التي سيتم نقلها
      "BenefitsOfTheNewAdoptedTechnology", //فوائد التكنولوجيا الجديدة
    ],
    Fields_Location = [
      34, //شرح موجز عن التكنولوجيا التي سيتم نقلها
      35, //فوائد التكنولوجيا الجديدة
    ];

  if (this.inputFormField.ShallTheImplementation == "نعم - Yes") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[5].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  //مقدم الطلب
  if (this.inputFormField.autho == "نعم") {
    if (
      this.inputFormField["authoriz"] == null ||
      this.inputFormField["authoriz"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[6].fields[6].label} مطلوب`);
    }
  }

  // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
  if (this.inputFormField.radio == "تم سحبها - withdrawn") {
    if (
      this.inputFormField["formreason"] == "" ||
      this.inputFormField["formreason"] == null
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[2].fields[20].label} مطلوب`,
      );
    }
  }

  //------------------------------------------------------------------------------------------------------
  //التاكد من رقم الهاتف
  //معلومات عن المستثمر (الشخص الطبيعي)
  //رقم الهاتف (المكتب)
  if (this.inputFormField.Phone) {
    const phoneNo = this.inputFormField.Phone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف (المكتب) بالرقم 07.");
    }
  }

  //رقم الهاتف النقال (الشخصي)
  if (this.inputFormField.Mobile) {
    const phoneNo = this.inputFormField.Mobile;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف النقال (الشخصي) بالرقم 07.");
    }
  }

  //معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
  //رقم الهاتف (المكتب)
  if (this.inputFormField.PhoNo) {
    const phoneNo = this.inputFormField.PhoNo;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف النقال  بالرقم 07.");
    }
  }

  //رقم الهاتف النقال (الشخصي)
  if (this.inputFormField.MbPho) {
    const phoneNo = this.inputFormField.MbPho;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف النقال (الشخصي)  بالرقم 07.");
    }
  }

  //معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
  //رقم الهاتف (المكتب)
  if (this.inputFormField.PhoneNo) {
    const phoneNo = this.inputFormField.PhoneNo;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف (المكتب) بالرقم 07.");
    }
  }

  //رقم الهاتف (النقال)
  if (this.inputFormField.MobilePhoneNo) {
    const phoneNo = this.inputFormField.MobilePhoneNo;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف (النقال) بالرقم 07.");
    }
  }
}
