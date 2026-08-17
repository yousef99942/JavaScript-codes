{
  let First_Fields_Prog = [
      //الحالة الاجتماعية
      "birthdaymarried", //تاريخ الزواج
      "namespouwife", //اسم الزوج ( الزوجة)
      "cardspouwife", //رقم البطاقة الموحدة  للزوج ( الزوجة)
    ],
    First_Fields_Location = [1, 2, 3];

  // let Second_Fields_Prog = [
  //     //استمارة بيان قيام الزوجية وعدد الاولاد
  //     "firname", //الاسم الاول
  //     "secname", //الاسم الثاني
  //     "thiname", //الاسم الثالث
  //     "founame", //الاسم الرابع
  //     "maritstut", //الحالة الزوجية
  //     "nation", //جنسية الزوج ( الزوجة )
  //     "datemari", //التاريخ اذا كنت متزوج او أرمل او مطلق
  //     //"boysname", //اسماء الابناء
  //   ],
  //   Second_Fields_Loction = [1, 2, 3, 4, 5, 6, 7];

  if (this.inputFormField.maritstatus == "متزوج") {
    First_Fields_Prog.forEach((Looping) => {
      let index = First_Fields_Prog.indexOf(Looping);
      if (
        this.inputFormField[Looping] == "" ||
        this.inputFormField[Looping] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[First_Fields_Location[index]].label} مطلوب`,
        );
      }
    });

    // Second_Fields_Prog.forEach((Looping) => {
    //   let index = Second_Fields_Prog.indexOf(Looping);
    //   if (
    //     this.inputFormField[Looping] == "" ||
    //     this.inputFormField[Looping] == null
    //   ) {
    //     this.evalErr.push(
    //       `الحقل ${this.group_of_form[3].fields[Second_Fields_Loction[index]].label} مطلوب`,
    //     );
    //   }
    // });
  }

  if (this.inputFormField.maritstatus == "أرمل") {
    if (
      this.inputFormField["birthdaydeath"] == "" ||
      this.inputFormField["birthdaydeath"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[5].label} مطلوب`);
    }
  }

  if (this.inputFormField.maritstatus == "مطلق") {
    if (
      this.inputFormField["birthdayabsoiute"] == "" ||
      this.inputFormField["birthdayabsoiute"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.Status == "كلا") {
    if (
      this.inputFormField["Typeeee"] == "" ||
      this.inputFormField["Typeeee"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
    }
  }

  //------------------------------------------------------------------------------------
  // هل الزوجة ربة بيت وليس لها دخل ؟
  if (
    this.inputFormField.maritstatus == "متزوج" &&
    this.inputFormField.gender === "ذكر"
  ) {
    if (
      this.inputFormField["salary"] === null ||
      this.inputFormField["salary"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[6].label} مطلوب`);
    }
  }

  //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
  if (this.inputFormField.salary === "كلا") {
    if (
      this.inputFormField["associate"] === null ||
      this.inputFormField["associate"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[7].label} مطلوب`);
    }
  }

  //هل ( الزوج / الزوجة) كاسب ؟
  if (this.inputFormField.associate == "كلا") {
    if (
      this.inputFormField["HusbandEarner"] === null ||
      this.inputFormField["HusbandEarner"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[8].label} مطلوب`);
    }
  }

  //هل (الزوج / الزوجة) متقاعد؟
  if (this.inputFormField.HusbandEarner == "كلا") {
    if (
      this.inputFormField["ReturmintType"] === null ||
      this.inputFormField["ReturmintType"] === ""
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[2].fields[9].label} مطلوب`);
    }
  }

  if (
    this.inputFormField.associate == "نعم" ||
    this.inputFormField.HusbandEarner == "نعم" ||
    this.inputFormField.ReturmintType == "نعم"
  ) {
  }
  //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
  if (
    this.inputFormField["combinesalary"] === null ||
    this.inputFormField["combinesalary"] === ""
  ) {
    this.evalErr.push(`الحقل ${this.group_of_form[2].fields[10].label} مطلوب`);
  }
}
