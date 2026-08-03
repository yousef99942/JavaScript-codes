{
  if (this.tab_click == "form") {
    var GroupsID = [
      //group Num 3
      "33783_group", //"فئة المشمولين بالرعاية الاجتماعية"
      //group Num 4
      "33883_group", //"عوائل الشهداء"
      //group Num 5
      "33884_group", //"اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق"
      //group Num 6
      "33885_group", //"شريحة الأطباء الاختصاص"
      //group Num 7
      "33886_group", //"الموظفين الذين توفوا خلال العمل او من جرائه"
      //group Num 8
      "33898_group", //"المهجرين والمهاجرين بسبب اضطهاد النظام السابق"
      //group Num 9
      "33899_group", //"السجناء والمعتقلين السياسيين"
      //group Num 10
      "33902_group", //"اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019"
      //group Num 11
      "33903_group", //"حملة الشهادات العليا ( العاملين في دوائر الدولة )"
      //group Num 12
      "33904_group", //"الصحفيين"
      //group Num 13
      "33906_group", //"المتقاعدين"
      //group Num 14
      "33907_group", //"مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية"
      //group Num 15
      "33908_group", //"عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"
      //group Num 16
      "33909_group", //"المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد رقم كتاب لجنة التعويض"
      //group Num 17
      "33910_group", //"المشمولين بالمادة 140 من الدستور"
      //group Num 18
      "33912_group", //"المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة"
      //group Num 19
      "33913_group", //"الرياضيين المتمزين واصحاب الانجازات الرياضية"
      //group Num 20
      "33916_group", //"عوائل الشهداء السياسيين"
    ];

    if (this.form_data.catgeory == "فئة المشمولين بالرعاية الاجتماعية") {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 0) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (this.form_data.catgeory == "عوائل الشهداء") {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 1) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory ==
      "اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 2) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (this.form_data.catgeory == "شريحة الأطباء الاختصاص") {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 3) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory == "الموظفين الذين توفوا خلال العمل او من جرائه"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 4) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory == "المهجرين والمهاجرين بسبب اضطهاد النظام السابق"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 5) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (this.form_data.catgeory == "السجناء والمعتقلين السياسيين") {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 6) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory ==
      "اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 7) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory ==
      "حملة الشهادات العليا ( العاملين في دوائر الدولة )"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 8) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (this.form_data.catgeory == "الصحفيين") {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 9) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (this.form_data.catgeory == "المتقاعدين") {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 10) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory ==
      "مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 11) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory ==
      "عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 12) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory ==
      "المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد رقم كتاب لجنة التعويض"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 13) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (this.form_data.catgeory == "المشمولين بالمادة 140 من الدستور") {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 14) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory ==
      "المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 15) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (
      this.form_data.catgeory == "الرياضيين المتمزين واصحاب الانجازات الرياضية"
    ) {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 16) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (this.form_data.catgeory == "عوائل الشهداء السياسيين") {
      for (var i = 0; i < GroupsID.length; i++) {
        if (i != 17) {
          document.getElementById(GroupsID[i]).style.visibility = "collapse";
        }
      }
    }

    if (this.form_data.selecthree == null) {
      document.getElementById("65372").style.visibility = "collapse";
    }

    if (this.form_data.selecff == null) {
      document.getElementById("65373").style.visibility = "collapse";
    }

    if (this.form_data.numthree == null) {
      document.getElementById("65374").style.visibility = "collapse";
    }

    if (this.form_data.numfour == null) {
      document.getElementById("65375").style.visibility = "collapse";
    }
  }
}
