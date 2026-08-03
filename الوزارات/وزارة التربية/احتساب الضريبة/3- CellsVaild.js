{
  let First_Fields_Prog = [
      //الحالة الاجتماعية
      "birthdaymarried", //تاريخ الزواج
      "namespouwife", //اسم الزوج ( الزوجة)
      "cardspouwife", //رقم البطاقة الموحدة  للزوج ( الزوجة)
      "salary", //هل الزوجة ربة بيت وليس لها دخل ؟
      "associate", //هل الزوجة ( الزوج ) منتسبا :
      //"combinesalary", //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ؟
    ],
    Second_Fields_Prog = [
      //استمارة بيان قيام الزوجية وعدد الاولاد
      "firname", //الاسم الاول
      "secname", //الاسم الثاني
      "thiname", //الاسم الثالث
      "founame", //الاسم الرابع
      "maritstut", //الحالة الزوجية
      "nation", //جنسية الزوج ( الزوجة )
      "datemari", //التاريخ اذا كنت متزوج او أرمل او مطلق
      //"boysname", //اسماء الابناء
    ],
    First_Fields_Location = [
      1, 2, 4, 6, 7, 8,
      //9
    ],
    Second_Fields_Loction = [1, 2, 3, 4, 5, 6, 7];

  if (this.inputFormField.maritstatus == "متزوج") {
    for (var i = 0; i < First_Fields_Prog.length; i++) {
      if (
        this.inputFormField[First_Fields_Prog[i]] == "" ||
        this.inputFormField[First_Fields_Prog[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[First_Fields_Location[i]].label} مطلوب`,
        );
      }
    }

    for (var i = 0; i < Second_Fields_Prog.length; i++) {
      if (
        this.inputFormField[Second_Fields_Prog[i]] == "" ||
        this.inputFormField[Second_Fields_Prog[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[3].fields[Second_Fields_Loction[i]].label} مطلوب`,
        );
      }
    }
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
}
