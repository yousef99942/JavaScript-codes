{
  if (this.inputFormField.frt == "علاج اشعاعي") {
    if (
      this.inputFormField["vvv"] == null ||
      this.inputFormField["vvv"] == ""
    ) {
      this.evalErr.push("مطلوب تفاصيل النفايات المشعة (خاص بالطب النووي فقط)");
    }
  }

  //اسم مدير المؤسسة
  if (
    this.inputFormField.rel == "قطاع حكومي" ||
    this.inputFormField.rel == "قطاع مختلط"
  ) {
    if (
      this.inputFormField["yui"] == null ||
      this.inputFormField["yui"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[21].label} مطلوب`,
      );
    }
  }

  //اسم لمالك المؤسسة
  if (this.inputFormField.rel == "قطاع خاص") {
    if (
      this.inputFormField["cvf"] == null ||
      this.inputFormField["cvf"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[20].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.IDType == "البطاقة الوطنية") {
    if (
      this.inputFormField["IDNum"] == null ||
      this.inputFormField["IDNum"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[18].label} مطلوب`,
      );
    }
  }

  if (this.inputFormField.IDType == "جواز السفر") {
    if (
      this.inputFormField["vbg"] == null ||
      this.inputFormField["vbg"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[19].label} مطلوب`,
      );
    }
  }

  var Values = [
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
    ];

  if (Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[9].label} مطلوب`);
    }
  }

  if (Second_Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["FirstDist"] == null ||
      this.inputFormField["FirstDist"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[10].label} مطلوب`,
      );
    }
  }

  //رقم هاتف المؤسسة
  //المجموعة 1
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  const phoneNo1 = this.inputFormField.mpfghpo;
  let startNo1 = phoneNo1.substring(0, 2);
  if (startNo1 != "07") {
    this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسسة بالرقم 07.");
  }

  const phoneNo2 = this.inputFormField.mobi;
  let startNo2 = phoneNo2.substring(0, 2);
  if (startNo2 != "07") {
    this.evalErr.push(
      "يجب أن يبدأ رقم هاتف مدير المؤسسة او مالك المؤسسة بالرقم 07.",
    );
  }

  const phoneNo3 = this.inputFormField.mob;
  let startNo3 = phoneNo3.substring(0, 2);
  if (startNo3 != "07") {
    this.evalErr.push(
      "يجب أن يبدأ رقم هاتف مسؤول الوقاية من الاشعاع بالرقم 07.",
    );
  }
}
