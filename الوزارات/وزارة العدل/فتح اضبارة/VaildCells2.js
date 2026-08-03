{
  //حقل رقم الاضبارة
  if (this.inputFormField.kamel == "نعم") {
    if (
      this.inputFormField["housech"] == "" ||
      this.inputFormField["housech"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[2].label} مطلوب`);
    }
  }

  if (this.inputFormField.orqen == "مواطن") {
    var Fields_Progs = [
        //الدائن
        "bhaider", //الاسم الاول.
        "chaider", //اسم الاب.
        "dhaider", //اسم الجد.
        "ehaider", //الاسم الرابع
        "fhaider", //تاريخ التولد
        "ASdasdasd", //رقم هوية الاحوال او البطاقة الموحدة
        "dsfsdf", //تاريخ الاصدار.
        "adsasf", //رقم بطاقة السكن.
        "htgdas", //تاريخ الاصدار .
        //المدين
        "eshaider", //الاسم الاول
        "ashaider", //اسم الاب
        "nhaider", //اسم الجد
        "governorate", //المحافظة
        "district", //القضاء
        "wqeqwe", //رقم بطاقة السكن
        "DSfgsdfsd", //تاريخ الاصدار
        "haidetv", //رقم الهاتف
      ],
      Fields_Locations = [
        //الدائن
        16, //الاسم الاول.
        17, //اسم الاب.
        18, //اسم الجد.
        19, //الاسم الرابع
        20, //تاريخ التولد
        21, //رقم هوية الاحوال او البطاقة الموحدة
        22, //تاريخ الاصدار.
        26, //رقم بطاقة السكن.
        27, //تاريخ الاصدار .
        //المدين
        32, //الاسم الاول
        33, //اسم الاب
        34, //اسم الجد
        35, //المحافظة
        36, //القضاء
        41, //رقم بطاقة السكن
        42, //تاريخ الاصدار
        43, //رقم الهاتف
      ];

    for (var i = 0; i < Fields_Progs.length; i++) {
      if (
        this.inputFormField[Fields_Progs[i]] == "" ||
        this.inputFormField[Fields_Progs[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[Fields_Locations[i]].label
          } مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.orqen == "ممثل قانوني") {
    if (
      this.inputFormField["mokual"] == "" ||
      this.inputFormField["mokual"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[4].label} مطلوب`);
    }

    var Fields_Progs = [
        //الدائن
        "SecondCompanyName", //اسم  الشركة
        "FirstCompanyLocation", //عنوان شركة الدائن
        //المدين
        "eshaider", //الاسم الاول
        "ashaider", //اسم الاب
        "nhaider", //اسم الجد
        "SecondCompanyLocation", //عنوان المدين
      ],
      Fields_Locations = [
        //الدائن
        15, //اسم  الشركة
        28, //عنوان شركة الدائن
        //المدين
        32, //الاسم الاول
        33, //اسم الاب
        34, //اسم الجد
        37, //عنوان المدين
      ];

    for (var i = 0; i < Fields_Progs.length; i++) {
      if (
        this.inputFormField[Fields_Progs[i]] == "" ||
        this.inputFormField[Fields_Progs[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[Fields_Locations[i]].label
          } مطلوب`
        );
      }
    }
  }

  if (this.inputFormField.orqen == "محامي") {
    if (
      this.inputFormField["namea"] == "" ||
      this.inputFormField["namea"] == null
    ) {
      this.evalErr.push(`الحقل ${this.group_of_form[0].fields[3].label} مطلوب`);
    }

    var Fields_Progs = [
        //الدائن
        "bhaider", //الاسم الاول.
        "chaider", //اسم الاب.
        "dhaider", //اسم الجد.
        "ehaider", //الاسم الرابع
        //المدين
        "eshaider", //الاسم الاول
        "ashaider", //اسم الاب
        "nhaider", //اسم الجد
        "governorate", //المحافظة
        "district", //القضاء
        "wqeqwe", //رقم بطاقة السكن
        "DSfgsdfsd", //تاريخ الاصدار
        "haidetv", //رقم الهاتف
      ],
      Fields_Locations = [
        //الدائن
        16, //الاسم الاول.
        17, //اسم الاب.
        18, //اسم الجد.
        19, //الاسم الرابع
        //المدين
        32, //الاسم الاول
        33, //اسم الاب
        34, //اسم الجد
        35, //المحافظة
        36, //القضاء
        41, //رقم بطاقة السكن
        42, //تاريخ الاصدار
        43, //رقم الهاتف
      ];

    for (var i = 0; i < Fields_Progs.length; i++) {
      if (
        this.inputFormField[Fields_Progs[i]] == "" ||
        this.inputFormField[Fields_Progs[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[Fields_Locations[i]].label
          } مطلوب`
        );
      }
    }
  }
}
