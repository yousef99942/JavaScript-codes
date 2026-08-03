{
  document.getElementsByClassName("46650")[0].style.display = "none"; //الموافقة على منح الاجازة

  //مال المنح
  var First_Choice_ID = [
      "24674", //عدم محكومية
    ],
    //مال التجديد
    Second_Choice_ID = [
      "46094", //الضمان الاجتماعي
      //"24669", //النظام الداخلي للمؤسسة
      "24673", //عقد الدفع الالكتروني (POS)
      "47014", //مرفق اسباب التاخير (ان وجد)
      "47016", //مرفقات اغلاق المدرسة
    ],
    //تابع لحقل التجديد
    Repair_IDs = [
      "24009", //امر التأسيس
      "24010", //اخر امر تجديد
    ],
    Manager_Values = [
      "24521", //البطاقة الوطنية للمدير المفوض -الوجه الامامي
      "24522", //"البطاقة الوطنية للمدير المفوض-الوجه الخلفي"
      "24523", //بطاقة السكن للمدير المفوض-الوجه الامامي
      "24524", //بطاقة السكن للمدير المفوض-الوجه الخلفي
    ],
    Not_Manager_Values = [
      "24499", //مستمسكات جميع المستثمرين
      "24498", //تاييد سكن لجميع المستثمرين
      "24503", //الوثائق الدراسية لجميع المستثمرين
    ],
    //اذا جان منح ومؤسسة
    Other_First_ID = [
      "24519", //شهادة تأسيس المؤسسة
      "24669", //النظام الداخلي للمؤسسة
      "24520", //عقد تأسيس المؤسسة
      "24572", //محضر اجتماع الهيئة الادارية
    ];

  if (
    this.form_data.select == "تجديد اجازة" ||
    (this.form_data.ReqTypee == "مؤسسة" &&
      this.form_data.typeofapply == "الشركة")
  ) {
    document.getElementsByClassName(First_Choice_ID[0])[0].style.display =
      "none";
  }

  if (this.form_data.select == "تجديد اجازة") {
    //هل للمدرسة امر بعقوبة اغلاق او الغاء للاجازة
    if (this.form_data.FoundationClosing == "كلا") {
      document.getElementsByClassName(Second_Choice_ID[4])[0].style.display =
        "none";
    }

    if (this.form_data.firstrenewal != "نعم") {
      document.getElementsByClassName(Repair_IDs[1])[0].style.display = "none";
    }

    //المخططات الهندسية
    document.getElementsByClassName("24502")[0].style.display = "none";
  }

  if (this.form_data.select == "منح اجازة جديدة") {
    document.getElementsByClassName("46433")[0].style.display = "none"; //وصل سلامة الموقف
    document.getElementsByClassName("47476")[0].style.display = "none"; //كتاب الضريبة

    for (var i = 0; i < Second_Choice_ID.length; i++) {
      document.getElementsByClassName(Second_Choice_ID[i])[0].style.display =
        "none";
    }

    for (var i = 0; i < Repair_IDs.length; i++) {
      document.getElementsByClassName(Repair_IDs[i])[0].style.display = "none";
    }

    if (this.form_data.instype == "روضة" || this.form_data.instype == "معهد") {
      //المخططات الهندسية
      document.getElementsByClassName("24502")[0].style.display = "none";
    }
  }

  if (this.form_data.ReqTypee == "مستثمرين") {
    for (var i = 0; i < Other_First_ID.length; i++) {
      document.getElementsByClassName(Other_First_ID[i])[0].style.display =
        "none";
    }
  }

  if (this.form_data.OwnerStat == "ملك") {
    //عقد ايجار ساري المفعول
    document.getElementsByClassName("24500")[0].style.display = "none";
  }

  if (this.form_data.ReqTypee == "مؤسسة") {
    if (this.form_data.typeofapply == "المدير المفوض") {
      for (var i = 0; i < Not_Manager_Values.length; i++) {
        document.getElementsByClassName(
          Not_Manager_Values[i],
        )[0].style.display = "none";
      }
    }

    if (this.form_data.typeofapply == "الشركة") {
      for (var i = 0; i < Manager_Values.length; i++) {
        document.getElementsByClassName(Manager_Values[i])[0].style.display =
          "none";
      }

      for (var i = 0; i < Not_Manager_Values.length; i++) {
        document.getElementsByClassName(
          Not_Manager_Values[i],
        )[0].style.display = "none";
      }
    }
  }

  if (this.form_data.land != "مملوك للدولة") {
    //عقد الايجار من الدولة
    document.getElementsByClassName("46378")[0].style.display = "none";
  }

  if (this.form_data.land != "زراعي") {
    //موافقة الزراعي اذا زراعي
    document.getElementsByClassName("46092")[0].style.display = "none";
  }

  if (this.form_data.governorate != "بغداد") {
    //موافقة الامانة اذا بغداد
    document.getElementsByClassName("24670")[0].style.display = "none";
  }

  //هاي
  if (this.form_data.governorate == "بغداد") {
    if (
      this.form_data.instype == "روضة" ||
      this.form_data.instype == "معهد" ||
      this.form_data.type == "روضة" ||
      this.form_data.type == "معهد"
    ) {
      //موافقة الامانة اذا بغداد
      document.getElementsByClassName("24670")[0].style.display = "none";
    }
  }

  //هاي
  if (this.form_data.ReqTypee == "مستثمرين") {
    for (var i = 0; i < Manager_Values.length; i++) {
      document.getElementsByClassName(Manager_Values[i])[0].style.display =
        "none";
    }
  }
}
