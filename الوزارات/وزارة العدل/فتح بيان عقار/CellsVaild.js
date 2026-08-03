{
  var xAA = [
    "Ministry",
    "nameone",
    "nametow",
    "namethree",
    "haiderksaa",
    "haiderkssaa",
  ];
  var FieldCad = ["2", "4", "5", "6", "14", "15"];
  var SD = [
    //"bankName",
    "Ministry",
    "nameone",
    "nametow",
    "namethree",
    "haiderksaa",
    "haiderkssaa",
  ];
  var FieldCd = ["2", "4", "5", "6", "14", "15"];
  var x = [
    "haiderdida",
    "haiderna",
    "haiderd",
    "haiderbv",
    "citTy",
    "haiderhv",
    "haiderms",
    "haiderksa",
    "haiderkssa",
    "haidernam",
    "haidername",
    "haiderjtn",
    "haiderld",
    "governorate",
    //"haiderma",
    "haiderasd",
    "dataas",
  ];
  var FieldsCardObjIDxc = [
    "1",
    "2",
    "3",
    "4",
    "9",
    "10",
    "11",
    "13",
    "14",
    "16",
    "17",
    "18",
    "19",
    "24",
    "25",
    "28",
    "29",
  ];
  if (
    this.inputFormField.select == "الرهن" ||
    this.inputFormField.select == "فسخ الرهن"
  ) {
    for (var i = 0; i < SD.length; i++) {
      if (
        this.inputFormField[SD[i]] == null ||
        this.inputFormField[SD[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[FieldCd[i]].label} مطلوب`,
        );
      }
    }
  } else if (
    this.inputFormField.select == "البيع" ||
    this.inputFormField.select == "الهبة" ||
    this.inputFormField.select == "ازالة شيوع" ||
    this.inputFormField.select == "افراز بشرط التوحيد" ||
    this.inputFormField.select == "افراغ" ||
    this.inputFormField.select == "تخارج" ||
    this.inputFormField.select == "بيع شركة /مصرف"
  ) {
    for (var i = 0; i < x.length; i++) {
      if (
        this.inputFormField[x[i]] == null ||
        this.inputFormField[x[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[1].fields[FieldsCardObjIDxc[i]].label
          } مطلوب`,
        );
      }
    }
  } else if (
    this.inputFormField.select == "تمليك" ||
    this.inputFormField.select == "تنازل عن تمليك"
  ) {
    for (var i = 0; i < xAA.length; i++) {
      if (
        this.inputFormField[xAA[i]] == null ||
        this.inputFormField[xAA[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[FieldCad[i]].label} مطلوب`,
        );
      }
    }
  }

  var xZ = ["haidersaa", "edata", "wwrttin", "OwnerFullName"];
  var FieldsCard = ["8", "9", "10", "16"];
  if (this.inputFormField.haideeeer == "كلا وكيله") {
    for (var i = 0; i < xZ.length; i++) {
      if (
        this.inputFormField[xZ[i]] == null ||
        this.inputFormField[xZ[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[2].fields[FieldsCard[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.kmel == "كلا ، بمقدار اسهم") {
    if (
      this.inputFormField["husech"] == null ||
      this.inputFormField["husech"] == ""
    ) {
      this.evalErr.push(
        `الحقل مقدار السهام
            مطلوب`,
      );
    }
  }

  if (this.inputFormField.kmel == "كلا ، بمقدار حصة") {
    if (
      this.inputFormField["haasa"] == null ||
      this.inputFormField["haasa"] == ""
    ) {
      this.evalErr.push(
        `الحقل حصتك في العقار
            مطلوب`,
      );
    }
  }

  var xA = ["haidersa", "data", "wrttin", "SecondOwnerFullName"];
  var FieldsCad = ["6", "7", "8", "9"];
  if (this.inputFormField.haiderdida == "وكيله") {
    for (var i = 0; i < xA.length; i++) {
      if (
        this.inputFormField[xA[i]] == null ||
        this.inputFormField[xA[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[FieldsCad[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.select == "بيع حكمي") {
    var fieldz = [
        "haidernam",
        "haidername",
        "haiderjtn",
        "haiderld",
        //"haiderlxs", //الاسم الرابع
        "governorate",
        //"haiderma", //محلة
        //"haiderkjt", //الزقاق
        //"darnum", //تعهد الدفع
        "haiderasd",
        "dataas",
        //"mushtary", //الجدول
      ],
      //مصفوفة خاصة بتسلسلات الحقول داخل المجموعه بعد طرح 1 من تسلسل كل حقل
      Locations = [
        17, 18, 19, 20,
        //21,
        25,
        //26, 27, 28,
        29, 30,
        //31,
      ];

    for (var i = 0; i < fieldz.length; i++) {
      if (
        this.inputFormField[fieldz[i]] == null ||
        this.inputFormField[fieldz[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }

  if (this.inputFormField.haidernam == "وكيله") {
    var Fields_Prog = [
        "number", //رقم الوكالة لوكيل المشتري
        "histry", //تاريخ  الوكالة
        "Issuer", //جهة اصدار الوكالة
      ],
      Fields_Location = [22, 23, 24];

    for (var i = 0; i < Fields_Prog.length; i++) {
      if (
        this.inputFormField[Fields_Prog[i]] == null ||
        this.inputFormField[Fields_Prog[i]] == ""
      ) {
        this.evalErr.push(
          `الحقل ${this.group_of_form[1].fields[Locations[i]].label} مطلوب`,
        );
      }
    }
  }
}
