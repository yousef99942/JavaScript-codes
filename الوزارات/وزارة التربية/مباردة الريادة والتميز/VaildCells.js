{
  var First_Choice_Progs = [
      //الاستبيان مال اختيار ادارة المدارس
      "scholinfo",
      "hgfddty",
      "hguuhf",
      "spec",
      "mnbvvccdfghjk",
      "huihyufh",
      "vhmgfj",
      "njgruh",
      "osjvsfj",
      "hagchaihkc",
      "oiuytree",
    ],
    Second_Choice_Progs = [
      //معلومات اختيار المدرس
      "hsdiofosi",
      "teachnamee",
      "teachnameee",
      "hhsudfh",
      "kegjegjo",

      //استبيان اختيار المدرس
      "mnbvur",
      "hgfieifwfj",
      "hgfdyink",
      "mnbvcxc",
      "jhgfdsfgh",
      "nbvxcdjf",
      "kngodgj",
      "iuytrewwsdcvb",
      "hgidirg",
      "sugges",
    ],
    Third_Choice_Progs = [
      //معلومات اختيار الطالب
      "studname",
      "studnamee",
      "studnameee",
      "hgfddfgh",

      //استبيان اختيار الطالب
      "nbvife",
      "Evealation",
      "eeve",
      "hgdfia",
      "ukdy",
      "hsduf",
      "mnbvd",
      "nbvcfrde",
      "chjkcylchyil",
      "adkihasdcj",
    ];
  var First_Choice_Locations = [
      //استبيان اختيار ادارة المدرسة
      17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    ],
    Second_Choice_ID = [
      //اختيار المدرسين
      7, 8, 9, 10, 11, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    ],
    Third_Choice_Location = [
      //اختيار الطالب
      12, 13, 14, 15, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    ];

  if (this.inputFormField.hgfdswe == "ادارة المدرسة") {
    for (var i = 0; i < First_Choice_Progs.length; i++) {
      if (
        this.inputFormField[First_Choice_Progs[i]] == "" ||
        this.inputFormField[First_Choice_Progs[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[First_Choice_Locations[i]].label
          } مطلوب`
        );
      }
    }
  } else if (this.inputFormField.hgfdswe == "مدرس") {
    for (var i = 0; i < Second_Choice_Progs.length; i++) {
      if (
        this.inputFormField[Second_Choice_Progs[i]] == "" ||
        this.inputFormField[Second_Choice_Progs[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[Second_Choice_ID[i]].label
          } مطلوب`
        );
      }
    }
  } else if (this.inputFormField.hgfdswe == "طالب") {
    for (var i = 0; i < Third_Choice_Progs.length; i++) {
      if (
        this.inputFormField[Third_Choice_Progs[i]] == "" ||
        this.inputFormField[Third_Choice_Progs[i]] == null
      ) {
        this.evalErr.push(
          `الحقل ${
            this.group_of_form[0].fields[Third_Choice_Location[i]].label
          } مطلوب`
        );
      }
    }
  }
}
