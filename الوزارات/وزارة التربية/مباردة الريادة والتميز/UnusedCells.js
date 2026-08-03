{
  if (this.tab_click == "form") {
    /*
    if (this.form_data.kafelBasicSalary3 == null) {
      document.getElementById(49189).style.visibility = "collapse";
    }
      */

    var First_Choice_ID = [
        //استبيان اختيار ادارة المدرسة
        "68017",
        "67869",
        "67677",
        "67678",
        "67892",
        "67680",
        "67681",
        "67686",
        "67687",
        "67689",
        "67693",
        "67694",

        //معلومات اختيار المدرس
        "67696",
        "67870",
        "67871",
        "67697",
        "67827",

        //استبيان اختيار المدرس
        "67698",
        "67699",
        "67705",
        "67701",
        "67702",
        "67703",
        "67704",
        "67706",
        "67707",
        "67708",
        "67893",

        //معلومات اختيار الطالب
        "67872",
        "67873",
        "67874",
        "67743",

        //استبيان اختيار الطالب
        "67710",
        "67890",
        "67978",
        "67980",
        "67747",
        "67748",
        "67761",
        "67762",
        "67763",
        "67765",
        "67766",
      ],
      Progs = [
        //الاستبيان مال اختيار ادارة المدارس
        "FirstLabel",
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

        //معلومات اختيار المدرس
        "hsdiofosi",
        "teachnamee",
        "teachnameee",
        "hhsudfh",
        "kegjegjo",

        //استبيان اختيار المدرس
        "hgfdde",
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

        //معلومات اختيار الطالب
        "studname",
        "studnamee",
        "studnameee",
        "hgfddfgh",

        //استبيان اختيار الطالب
        "asiqgaucy",
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

    for (var i = 0; i < First_Choice_ID.length; i++) {
      if (this.form_data[Progs[i]] == null) {
        document.getElementById(First_Choice_ID[i]).style.visibility =
          "collapse";
      }
    }
  }
}
