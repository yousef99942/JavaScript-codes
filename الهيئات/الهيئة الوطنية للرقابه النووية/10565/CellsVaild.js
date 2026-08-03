{
  var First_Selected_Values = [
      "صناعي (جس آبار)",
      "صناعي (تصوير صناعي)",
      "صناعي (مقاييس صناعية)",
    ],
    Second_Selected_Values = ["تمديد", "تعديل", "انهاء ممارسة"];

  if (First_Selected_Values.includes(this.inputFormField.llhv)) {
    var Fields_Prog = [
        "ghglwh", //"جدول المصادر المشعة المغلقة"
        "hghim", //"جدول الاجهزة المرافقة (خاص بالممارسة الصناعية)"
        "hgvw", //"اجهزة الرصد المكاني"
      ],
      Fields_Location = [0, 2, 3];

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

  if (Second_Selected_Values.includes(this.inputFormField.type)) {
    if (
      this.inputFormField["datr"] == null ||
      this.inputFormField["datr"] == ""
    ) {
      this.evalErr.push(
        `الحقل ${this.group_of_form[0].fields[13].label} مطلوب`,
      );
    }
  }

  // طبي
  if (this.inputFormField.llhv == "طبي") {
    var Fields_Prog = [
        "ghglwh", //"جدول المصادر المشعة المغلقة"
        "ret", //"جدول المصادر المشعة المفتوحة (خاص بممارسة الطبي فقط)"
        "hgvw", //"اجهزة الرصد المكاني"
      ],
      Fields_Location = [0, 1, 3];

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
    Second_Values = ["اربيل", "السليمانية", "دهوك", "حلبجة"];

  if (Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["district"] == null ||
      this.inputFormField["district"] == ""
    ) {
      this.evalErr.push("حقل قضاء المؤسسة مطلوب");
    }

    if (
      this.inputFormField["SecondDistrict"] == null ||
      this.inputFormField["SecondDistrict"] == ""
    ) {
      this.evalErr.push("حقل قضاء المخزن مطلوب");
    }
  }

  if (Second_Values.includes(this.inputFormField.governorate)) {
    if (
      this.inputFormField["FirstDist"] == null ||
      this.inputFormField["FirstDist"] == ""
    ) {
      this.evalErr.push("حقل اسم قضاء المؤسسة مطلوب");
    }

    if (
      this.inputFormField["SecondDist"] == null ||
      this.inputFormField["SecondDist"] == ""
    ) {
      this.evalErr.push("حقل اسم قضاء المخزن مطلوب");
    }
  }

  //رقم هاتف المؤسسة
  //المجموعة 1
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  if (this.inputFormField.vccc) {
    const phoneNo1 = this.inputFormField.vccc;
    let startNo1 = phoneNo1.substring(0, 2);
    if (startNo1 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسسة بالرقم 07.");
    }
  }

  //رقم هاتف مسؤول الوقاية
  //المجموعة 2
  // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
  if (this.inputFormField.tell) {
    const phoneNo2 = this.inputFormField.tell;
    let startNo2 = phoneNo2.substring(0, 2);
    if (startNo2 != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف مسؤول الوقاية بالرقم 07.");
    }
  }
}
