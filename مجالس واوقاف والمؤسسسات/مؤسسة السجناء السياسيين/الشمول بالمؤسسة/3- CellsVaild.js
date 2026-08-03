{
  /*
  if (this.inputFormField.typeeee == "وريث") {
    var Fields_Prog = [
        "namewareeth", //اسم الوريث الاول
        "WareethSecondName", //اسم الوريث الثاني
        "WareethThirdName", //اسم الوريث الثالث
        "WareethFourthName", //اسم الوريث الرابع
      ],
      Fields_Location = [15, 16, 17, 18];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.typeeee == "وكيل") {
    var Fields_Prog = [
        "wakeelname", //اسم الوكيل الاول
        "WakeelSecondName", //اسم الوكيل الثاني
        "WakeelThirdName", //اسم الوكيل الثالث
        "WakeelFourthName", //اسم الوكيل الرابع
      ],
      Fields_Location = [19, 20, 21, 22];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[0].fields[Fields_Location[i]].label} مطلوب`,
        );
      }
    }
  }
    */

  //---------------------------------------------------------------------------------
  //اذكر الادلة الرسمية
  if (this.inputFormField.adelaa == "نعم") {
    if (
      this.inputFormField["adela"] == null ||
      this.inputFormField["adela"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[6].label} مطلوب`);
    }
  }

  //---------------------------------------------------------------------------------
  //اذكر الادلة الغير رسمية
  if (this.inputFormField.nadelaa == "نعم") {
    if (
      this.inputFormField["aleela"] == null ||
      this.inputFormField["aleela"] == ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[8].label} مطلوب`);
    }
  }

  //---------------------------------------------------------------------------------
  var Fields_Prog = [
      "primeryshcool", //اسم المدرسة الابتدائية
      "secandryshcool", //اسم المدرسة المتوسطة
      "secanaryyschool", //اسم المدرسة الاعدادية
      "maeed", //اسم المعهد
      "collage", //اسم الجامعة
      "any", //اخرى
    ],
    Fields_Location = [
      7, //اسم المدرسة الابتدائية
      8, //اسم المدرسة المتوسطة
      9, //اسم المدرسة الاعدادية
      10, //اسم المعهد
      11, //اسم الجامعة
      12, //اخرى
    ];

  if (this.inputFormField.EducationLevel == "ابتدائية") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (i == 0) {
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
  }

  if (this.inputFormField.EducationLevel == "متوسطة") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (i < 2) {
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
  }

  if (this.inputFormField.EducationLevel == "اعدادية") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (i < 3) {
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
  }

  if (
    this.inputFormField.EducationLevel == "بكلوريوس" ||
    this.inputFormField.EducationLevel == "ماجستير" ||
    this.inputFormField.EducationLevel == "دكتوراة"
  ) {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (i < 3 || i == 4) {
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
  }

  if (this.inputFormField.EducationLevel == "دبلوم") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (i < 4) {
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
  }

  if (this.inputFormField.EducationLevel == "اخرى") {
    for (var i = 0; i < Fields_Prog.length; i++) {
      if (i == 5) {
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
  }

  //---------------------------------------------------------------------------------
  //رقم الهاتف الفعال
  if (this.inputFormField.phone) {
    const phoneNo = this.inputFormField.phone;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الفعال بالرقم 07.");
    }
  }

  //رقم هاتف ثاني فعال
  if (this.inputFormField.phonee) {
    const phoneNo = this.inputFormField.phonee;
    let startNo = phoneNo.substring(0, 2);
    if (startNo != "07") {
      this.evalErr.push("يجب أن يبدأ رقم الهاتف الفعال الثاني بالرقم 07.");
    }
  }

  //---------------------------------------------------------------------------------
  //التاكد من تاريخ اطلاق السراح
  var Selected_Date = this.inputFormField.endd;
  var Date_Check = new Date(Selected_Date);
  var Date_Year = Date_Check.getFullYear(),
    Date_Month = Date_Check.getMonth(),
    Date_Day = Date_Check.getDay();

  if (Date_Year == 2003 && Date_Month > 4) {
    this.evalErr.push(
      "يجب ان يكون تاريخ اطلاق السراح لا يتعدى تاريخ 2003/04/08",
    );
  }

  if (Date_Year == 2003 && Date_Month == 4 && Date_Day > 8) {
    this.evalErr.push(
      "يجب ان يكون تاريخ اطلاق السراح لا يتعدى تاريخ 2003/04/08",
    );
  }
}
