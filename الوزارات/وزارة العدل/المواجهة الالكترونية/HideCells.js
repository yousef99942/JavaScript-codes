{
  //لتحديد اذا التقديم مفتوح فقط للاناث او الذكور
  Fourth_Hide(event){
    if(
      //event == "ذكر"
      event == "انثى"
    ){
      //التقديم هذا الاسبوع للرجال فقط
      document.getElementById("74367").style.display = "block";

      document.getElementById("74367").style.cssText =
        "color: red; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 10px";

      //التقديم هذا الاسبوع للنساء فقط
      //document.getElementById("73992").style.display = "none";

      //document.getElementById("73992").style.cssText =
        //"color: red; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 10px";

      // المعلومات الشخص الزائر 
      document.getElementById("33975_group").style.display = "none";
    }else{
      //التقديم هذا الاسبوع للرجال فقط
      document.getElementById("74367").style.display = "none";

      //التقديم هذا الاسبوع للنساء فقط
      document.getElementById("73992").style.display = "none";

      // المعلومات الشخص الزائر 
      document.getElementById("33975_group").style.display = "block";
    }
  },

  First_Filter(event){
    if(event == "سجن بغداد المركزي"){
      document.getElementById("73812").style.display = "block";
      this.group_of_form[0].fields[6].properties[0].values = [
        "السبت",
        "الاحد",
        "الاثنين",
        //"الثلاثاء",
        //"الاربعاء",
        //"الخميس",
        //"الجمعة",
      ];
    }else if(event == "سجن العدالة ١"){
      document.getElementById("73812").style.display = "block";
      this.group_of_form[0].fields[6].properties[0].values = [
        //"السبت",
        "الاحد",
        "الاثنين",
        "الثلاثاء",
        //"الاربعاء",
        //"الخميس",
        //"الجمعة",
      ];
    }else if(event == "سجن عدالة ٢"){
      document.getElementById("73812").style.display = "block";
      this.group_of_form[0].fields[6].properties[0].values = [
        //"السبت",
        //"الاحد",
        "الاثنين",
        "الثلاثاء",
        "الاربعاء",
        //"الخميس",
        //"الجمعة",
      ];
    }else{
      document.getElementById("73812").style.display = "none";
      this.group_of_form[0].fields[6].properties[0].values = [""];
    }
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //مال صلة القرابة
  FirstHide (event) {
    this.inputFormField["teninfo"] = null;
    if (event == "اخرى") {
      document.getElementById("67017").style.display = "block";
    } else {
      document.getElementById("67017").style.display = "none";
    }
  },

  //اذا بحال اكو زوار اضافيين او لا
  Second_Hide(event){
    this.inputFormField["VisitorNumber"] = null;
    if(event == "نعم"){
      document.getElementById("73990").style.display = "block";
    }else{
      document.getElementById("73990").style.display = "none";
    }
  },

  //الحقول الزوار الاضافيين
  Third_Hide(event){
    var Fields_ID = [
      //الشخص الاول
      "74043", //معلومات الزائر الاضافي الاول
      "73993", //الاسم الثلاثي للزائر الاضافي الاول
      "73994", //رقم البطاقة الموحدة للزائر الاضافي الاول
      //الشخص الثاني
      "74044", //معلومات الزائر الاضافي الثاني
      "73995", //الاسم الثلاثي للزائر الاضافي الثاني
      "73996", //رقم البطاقة الوطنية للزائر الاضافي الثاني
      //الشخص الثالث
      "74045", //معلومات الزائر الاضافي الثالث
      "73997", //الاسم الثلاثي للزائر الاضافي الثالث
      "73998", //رقم البطاقة الوطنية للزائر الاضافي الثالث
      //الشخص الرابع
      "74046", //معلومات الزائر الاضافي الرابع
      "73999", //الاسم الثلاثي للزائر الاضافي الرابع
      "74000", //رقم البطاقة الوطنية للزائر الاضافي الرابع
      //الشخص الخامس
      "74047", //معلومات الزائر الاضافي الخامس
      "74048", //الاسم الثلاثي للزائر الاضافي الخامس
      "74049",//رقم البطاقة الوطنية للزائر الاضافي الخامس
    ],
    Fields_Progs = [
      //الشخص الاول
      "FirstVisitorName", //الاسم الثلاثي للزائر الاضافي الاول
      "FirstVisitorID", //رقم البطاقة الموحدة للزائر الاضافي الاول
      //الشخص الثاني
      "SecondVisitorName", //الاسم الثلاثي للزائر الاضافي الثاني
      "SecondVisitorID", //رقم البطاقة الوطنية للزائر الاضافي الثاني
      //الشخص الثالث
      "ThirdVisitorName", //الاسم الثلاثي للزائر الاضافي الثالث
      "ThirdVisitorID", //رقم البطاقة الوطنية للزائر الاضافي الثالث
      //الشخص الرابع
      "FourthVisitorName", //الاسم الثلاثي للزائر الاضافي الرابع
      "FourthVisitorID", //رقم البطاقة الوطنية للزائر الاضافي الرابع
      //الشخص الخامس
      "fifthname", //الاسم الثلاثي للزائر الاضافي الخامس
      "numberfiveid", //رقم البطاقة الوطنية للزائر الاضافي الخامس
    ];
    var Values = ["1", "2", "3", "4", "5"];

    if(Values.includes(event)){
      for(var i = 0; i < Fields_ID.length; i++){
        if(i < (event*3)){
          document.getElementById(Fields_ID[i]).style.display = "block";
          if(i == 0 || i == 3 || i == 6 || i == 9 || i == 12){
            document.getElementById(Fields_ID[i]).style.cssText =
              "color: #060d70ff; font-size: 15px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";
          }
        }else{
          document.getElementById(Fields_ID[i]).style.display = "none";
        }
      }
    }else{
      for(var i = 0; i < Fields_ID.length; i++){
        document.getElementById(Fields_ID[i]).style.display = "none";
      }
    }

    for(var i = 0; i < Fields_Progs.length; i++){
      this.inputFormField[Fields_Progs[i]] = null;
    }
  },
}