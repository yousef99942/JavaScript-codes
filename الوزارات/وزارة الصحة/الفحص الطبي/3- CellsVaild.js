{
  if (
    this.inputFormField.nameljna == "لجنة العيادات الشعبية المركزية" ||
    this.inputFormField.nameljna == "لجنة العيادات الشعبية المركزية في نينوى"
  ) {
    if (this.inputFormField.pasText != "mpc") {
      this.evalErr.push("يرجى كتابة الرمز التعريفي");
    }
  }

  var names = [
    //0
    [
      "لجنة العيادة الطبية الشعبية الاسكان الصباحي",
      "لجنة العيادة الطبية الشعبية البياع الصباحي",
      "لجنة العيادة الشعبية اسماعيل ناجي صباحي",
      "لجنة العيادات الشعبية المركزية",
    ], //بغداد الكرخ الصباحي
    //1
    [
      "لجنة العيادة الطبية الشعبية البياع المسائي",
      "لجنة العيادة الشعبية اسماعيل ناجي مسائي",
      //"لجنة العيادة الطبية الشعبية الاسكان المسائي",
    ], //بغداد الكرخ المسائي
    //2
    ["اللجنة الطبية الصباحية  في النجف الاشرف"], //النجف الصباحي
    //3
    ["اللجنة الطبية المسائية في النجف الاشرف"], //النجف المسائي
    //4
    ["اللجنة الطبية الصباحية في محافظة الانبار"], //الانبار الصباحي
    //5
    ["اللجنة الطبية المسائية في محافظة الانبار"], //الانبار المسائي
    //6
    ["اللجنة الطبية المسائية في بابل"], //بابل المسائي
    //7
    [
      "اللجنة الطبية المسائية الثالثة في البصرة",
      "اللجنة الطبية المسائية الثانية في البصرة",
      "اللجنة الطبية المسائية الاولى في البصرة",
    ], //البصرة المسائي
    //8
    ["اللجنة الطبية المسائية في ميسان"], //ميسان المسائي
    //9
    ["اللجنة الطبية الصباحية في واسط"], //واسط الصباحي
    //10
    ["اللجنة الطبية الصباحية في المثنى"], //المثنى الصباحي
    //11
    [
      "اللجنة الطبية المسائية الاولى في كركوك",
      "اللجنة الطبية المسائية الثانية في كركوك",
    ], //كركوك المسائي
    //12
    ["اللجنة الطبية الصباحية في كركوك"], //كركوك الصباحي
    //13
    ["اللجنة الطبية المسائية في كربلاء المقدسة"], //كربلاء المسائي
    //14
    ["اللجنة الطبية الصباحية في كربلاء المقدسة"], //كربلاء الصباحي
    //15
    ["اللجنة الطبية الصباحية في ديالى"], //ديالى الصباحي
    //16
    ["اللجنة الطبية المسائية في المفرق"], //ديالى المسائي
    //17
    ["اللجنة الطبية المسائية في الديوانية"], //الديوانية المسائي
    //18
    ["اللجنة الطبية الصباحية في تكريت"], //صلاح الدين الصباحي
    //19
    [
      "اللجنة الطبية المسائية في تكريت",
      "لجنة العيادات الشعبية المسائية في الشرقاط",
    ], //صلاح الدين المسائي
    //20
    [
      "اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايمن",
      "اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايسر",
      "لجنة العيادات الشعبية المركزية في نينوى",
    ], //نينوى الصباحي
    //21
    [
      "اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايسر",
      "اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايمن",
    ], //نينوى المسائي
    //22
    [
      "اللجنة الطبية المسائية لفحص السياقة الاولى",
      "اللجنة الطبية المسائية لفحص السياقة الثانية",
    ], //ذي قار المسائي
    //23
    ["اللجنة الطبية الصباحية في بابل"], //بابل الصباحي
    //24
    [
      "لجنة العيادة الشعبية صدر ثانية صباحي",
      "لجنة العيادة الشعبية فخر الدين ال جميل",
      "لجنة العيادة الشعبية صليخ صباحي",
    ], //بغداد الرصافة صباحي
    //25
    [
      "لجنة العيادة الشعبية صدر ثانية مسائي",
      "لجنة العيادة الشعبية صليخ مسائي",
      //"لجنة العيادة الشعبية  فخر الدين ال جميل المسائي",
    ], //بغداد الرصافة مسائي
    //26
    [
      "اللجنة الطبية الصباحية في البصرة", //البصرة الصباحي
    ],
    //27
    ["لا يوجد"], //اخرى
  ];

  if (
    this.inputFormField.governorate == "بغداد" &&
    this.inputFormField.GOVValues == "الكرخ" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[0].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "بغداد" &&
    this.inputFormField.GOVValues == "الكرخ" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[1].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "بغداد" &&
    this.inputFormField.GOVValues == "الرصافة" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[24].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "بغداد" &&
    this.inputFormField.GOVValues == "الرصافة" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[25].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "البصرة" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[7].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  // if (
  //   this.inputFormField.governorate == "البصرة" &&
  //   this.inputFormField.typeReserve == "صباحي" &&
  //   !names[17].includes(this.inputFormField.nameljna)
  // ) {
  //   this.evalErr.push("اختر اسم صحيح للجنة الطبية");

  //   this.inputFormField["typeReserve"] = null; //موعد الفحص
  //   this.inputFormField["nameljna"] = null; //اسم اللجنه
  //   this.inputFormField["MorningTime"] = null; //موعد المراجعه
  // }

  if (
    this.inputFormField.governorate == "الانبار" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[4].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "الانبار" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[5].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "بابل" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[23].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "بابل" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[6].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "النجف الاشرف" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[2].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "النجف الاشرف" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[3].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "ميسان" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[17].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "ميسان" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[8].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "واسط" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[9].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "واسط" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[17].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "المثنى" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[10].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "المثنى" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[17].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "كركوك" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[12].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "كركوك" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[11].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "كربلاء المقدسة" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[14].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "كربلاء المقدسة" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[13].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "ديالى" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[15].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "ديالى" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[16].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "الديوانية" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[17].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "صلاح الدين" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[18].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "صلاح الدين" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[19].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "نينوى" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[20].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "نينوى" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[21].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "ذي قار" &&
    this.inputFormField.typeReserve == "مسائي" &&
    !names[22].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    (this.inputFormField.governorate == "ميسان" ||
      this.inputFormField.governorate == "الديوانية" ||
      this.inputFormField.governorate == "ذي قار") &&
    this.inputFormField.typeReserve == "صباحي"
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    (this.inputFormField.governorate == "واسط" ||
      this.inputFormField.governorate == "المثنى") &&
    this.inputFormField.typeReserve == "مسائي"
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  if (
    this.inputFormField.governorate == "البصرة" &&
    this.inputFormField.typeReserve == "صباحي" &&
    !names[26].includes(this.inputFormField.nameljna)
  ) {
    this.evalErr.push("اختر اسم صحيح للجنة الطبية");

    this.inputFormField["typeReserve"] = null; //موعد الفحص
    this.inputFormField["nameljna"] = null; //اسم اللجنه
    this.inputFormField["MorningTime"] = null; //موعد المراجعه
  }

  //التاكد من العمر
  var Person_Age = new Date(this.inputFormField.agee);
  var Vaild_Year = new Date();

  if (Person_Age.getFullYear() > Vaild_Year.getFullYear() - 17) {
    this.evalErr.push("يجب ان يكون عمر المتقدم اكبر من 17 عاماً");
  }
}
