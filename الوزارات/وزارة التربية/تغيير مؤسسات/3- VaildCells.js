{
  let Values = [
    this.inputFormField.StudeyType, //طابع الدوام
    this.inputFormField.GenderOfInstit, //جنس المؤسسة
    this.inputFormField.intitDivi, //شطر
    this.inputFormField.NameChange, //الاسم
    this.inputFormField.object, //رفع او خفض مستوى
  ];

  if (!Values.some(Boolean)) {
    this.evalErr.push("يجب اختيار نوع تغيير واحد على الاقل");
  }

  //---------------------------------------------------------------------------------------------------
  //الاسم
  if (this.inputFormField.NameChange) {
    if (
      this.inputFormField["high"] == null ||
      this.inputFormField["high"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[6].label} مطلوب`);
    }
  }

  //---------------------------------------------------------------------------------------------------
  //جنس المؤسسة
  if (this.inputFormField.GenderOfInstit) {
    if (
      this.inputFormField["IntitGend"] == null ||
      this.inputFormField["IntitGend"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[1].fields[7].label} مطلوب`);
    }
  }

  //---------------------------------------------------------------------------------------------------
  //شطر
  let First_Values = [
    { Field_Prog: "Divistion", Field_Location: 8 }, //قبل الشطر
    { Field_Prog: "AfterDivision", Field_Location: 9 }, //بعد الشطر
  ];

  if (this.inputFormField.intitDivi) {
    First_Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Checking.Field_Location].label} مطلوب`,
        );
      }
    });
  }

  //---------------------------------------------------------------------------------------------------
  //طابع الدوام
  let Second_Values = [
    { Field_Prog: "StydyTypeOne", Field_Location: 10 }, //طابع الدوام قبل
    { Field_Prog: "StudyTypeTow", Field_Location: 11 }, //طابع الدوام بعد
  ];

  if (this.inputFormField.StudeyType) {
    Second_Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Checking.Field_Location].label} مطلوب`,
        );
      }
    });
  }

  //---------------------------------------------------------------------------------------------------
  //تخفيض / رفع من والى
  let Third_Values = [
    { Field_Prog: "Changefrom", Field_Location: 12 }, //( التخفيض /  الرفع ) من
    { Field_Prog: "ChangeTo", Field_Location: 13 }, //( التخفيض / الرفع ) الى
  ];

  if (this.inputFormField.object) {
    Third_Values.forEach((Checking) => {
      if (
        this.inputFormField[Checking.Field_Prog] == null ||
        this.inputFormField[Checking.Field_Prog] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Checking.Field_Location].label} مطلوب`,
        );
      }
    });
  }

  //---------------------------------------------------------------------------------------------------
  //التاكد من رقم الهاتفد
  //رقم هاتف المؤسس الاول
  if (this.inputFormField.PHONE) {
    const phoneNo = this.inputFormField.PHONE;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الاول بالرقم 07.");
    }
  }

  //رقم هاتف المؤسس الثاني
  if (this.inputFormField.PHONEYYYY) {
    const phoneNo = this.inputFormField.PHONEYYYY;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الثاني بالرقم 07.");
    }
  }

  //رقم هاتف المؤسس الثالث
  if (this.inputFormField.phphpjp) {
    const phoneNo = this.inputFormField.phphpjp;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم هاتف المؤسس الثالث بالرقم 07.");
    }
  }
}
