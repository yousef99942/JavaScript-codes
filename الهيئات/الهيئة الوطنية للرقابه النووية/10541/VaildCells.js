{
  if (this.inputFormField.cvb == "استيراد") {
    if (
      this.inputFormField["vcc"] == null ||
      this.inputFormField["vcc"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.IDType == "البطاقة الوطنية") {
    if (
      this.inputFormField["nom"] == null ||
      this.inputFormField["nom"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.IDType == "جواز السفر") {
    if (
      this.inputFormField["PassportNum"] == null ||
      this.inputFormField["PassportNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[14].label} مطلوب`,
      );
    }
  }

  var Values = [
      //الي بيهن اقضية
      "الانبار",
      "بابل",
      "بغداد",
      "البصرة",
      "ديالى",
      "ذي قار",
      "صلاح الدين",
      "القادسية",
      "كركوك",
      "كربلاء المقدسة",
      "المثنى",
      "ميسان",
      "النجف الاشرف",
      "نينوى",
      "واسط",
    ],
    Second_Values = [
      //الي مابيهن اقضيه
      "اربيل",
      "السليمانية",
      "دهوك",
      "حلبجة",
    ],
    Fields_Location = [
      4, //سلكتر الاقضية
      5, //اسم القضاء
    ];

  //مجموعة معلومات الشركة المستوردة او المُعيدة
  //سلكتر الاقضية
  if (Values.includes(this.inputFormField.place)) {
    if (
      this.inputFormField["ThirdDistrict"] == null ||
      this.inputFormField["ThirdDistrict"] == ""
    ) {
      this.evalErr.push("القضاء للشركة المستوردة او المُعيدة مطلوب");
    }
  }

  //اسم القضاء
  if (Second_Values.includes(this.inputFormField.place)) {
    if (
      this.inputFormField["DiscName"] == null ||
      this.inputFormField["DiscName"] == ""
    ) {
      this.evalErr.push("اسم القضاء للشركة المستوردة او المُعيدة مطلوب");
    }
  }

  //مجموعة معلومات الشركة الناقلة
  //سلكتر الاقضية
  if (Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push("القضاء للشركة الناقلة مطلوب");
    }
  }

  //اسم القضاء
  if (Second_Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["SecDiscName"] == null ||
      this.inputFormField["SecDiscName"] == ""
    ) {
      this.evalErr.push("اسم القضاء للشركة الناقلة مطلوب");
    }
  }

  //مجموعة المؤسسة المستخدمة
  //سلكتر الاقضية
  if (Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["SecondDistrict"] == null ||
      this.inputFormField["SecondDistrict"] == ""
    ) {
      this.evalErr.push("القضاء للمؤسسة المستخدمة مطلوب");
    }
  }

  //اسم القضاء
  if (Second_Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["ThiDiscName"] == null ||
      this.inputFormField["ThiDiscName"] == ""
    ) {
      this.evalErr.push("اسم القضاء للمؤسسة المستخدمة مطلوب");
    }
  }

  //رقم هاتف الشركة
  //المجموعة 1
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo1 = this.inputFormField.mobile;
  let startNo1 = phoneNo1.substring(0, 2);
  if (startNo1 != "07") {
    this.evalErr.push("يجب أن يبدأ رقم هاتف الشركة بالرقم 07.");
  }

  //رقم هاتف الشركة الناقلة
  //المجموعة 2
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo2 = this.inputFormField.mob;
  let startNo2 = phoneNo2.substring(0, 2);
  if (startNo2 != "07") {
    this.evalErr.push("يجب أن يبدأ رقم هاتف الشركة الناقلة بالرقم 07.");
  }

  //رقم هاتف مسؤول الوقاية
  //المجموعة 2
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo3 = this.inputFormField.pho;
  let startNo3 = phoneNo3.substring(0, 2);
  if (startNo3 != "07") {
    this.evalErr.push("يجب أن يبدأ رقم هاتف مسؤول الوقاية  بالرقم 07.");
  }

  //رقم هاتف الشركة
  //المجموعة 3
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo4 = this.inputFormField.cvx;
  let startNo4 = phoneNo4.substring(0, 2);
  if (startNo4 != "07") {
    this.evalErr.push("يجب أن يبدأ رقم هاتف الشركة بالرقم 07.");
  }

  //رقم هاتف الشركة
  //المجموعة 3
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo5 = this.inputFormField.mobi;
  let startNo5 = phoneNo5.substring(0, 2);
  if (startNo5 != "07") {
    this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسسة بالرقم 07.");
  }
}
