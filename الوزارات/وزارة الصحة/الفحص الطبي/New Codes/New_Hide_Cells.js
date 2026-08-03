{
  //فلترة الصباحي والمسائي
  First_Filter(event){
    this.inputFormField["GOVValues"] = null; //القضاء
    this.inputFormField["typeReserve"] = null; //موعد الفحص
    let Work_Times = [["صباحي", "مسائي"], ["مسائي"], ["صباحي"]];
    let Values = [
      {Selected_Value: "بغداد", Showed_Value: ["الكرخ", "الرصافة"]}, //راح يظهر حقل القضاء بدل حقل الصباحي مسائي
      {Selected_Value: "البصرة", Showed_Value: Work_Times[1]},
      {Selected_Value: "الانبار", Showed_Value: Work_Times[0]},
      {Selected_Value: "بابل", Showed_Value: Work_Times[0]},
      {Selected_Value: "النجف الاشرف", Showed_Value: Work_Times[1]},
      {Selected_Value: "ميسان", Showed_Value: Work_Times[2]},
      {Selected_Value: "واسط", Showed_Value: Work_Times[2]},
      {Selected_Value: "المثنى", Showed_Value: Work_Times[2]},
      {Selected_Value: "كركوك", Showed_Value: Work_Times[0]},
      {Selected_Value: "كربلاء المقدسة", Showed_Value: Work_Times[1]},
      {Selected_Value: "ديالى", Showed_Value: Work_Times[0]},
      {Selected_Value: "الديوانية", Showed_Value: Work_Times[1]},
      {Selected_Value: "صلاح الدين", Showed_Value: Work_Times[0]},
      {Selected_Value: "نينوى", Showed_Value: Work_Times[0]},
      {Selected_Value: "ذي قار", Showed_Value: Work_Times[1]},
    ];

    let Result = Values.find((Finding) => event === Finding.Selected_Value);

    if(Result){
      if(Result.Selected_Value == "بغداد"){
        document.getElementById("72901").style.display = "block"; //القضاء
        this.group_of_form[0].fields[1].properties[0].values = Result.Showed_Value; //القضاء
        document.getElementById("49912").style.display = "none"; //صباحي لو مسائي
        //this.group_of_form[0].fields[2].properties[0].values = []; //صباحي لو مسائي
      }else{
        document.getElementById("49912").style.display = "block"; //صباحي لو مسائي
        this.group_of_form[0].fields[2].properties[0].values = Result.Showed_Value; //صباحي لو مسائي
        document.getElementById("72901").style.display = "none"; //القضاء
        //this.group_of_form[0].fields[1].properties[0].values = []; //القضاء
      }
    }else{
      document.getElementById("72901").style.display = "none"; //القضاء
      //this.group_of_form[0].fields[1].properties[0].values = []; //القضاء
      document.getElementById("49912").style.display = "none"; //صباحي لو مسائي
      //this.group_of_form[0].fields[2].properties[0].values = []; //صباحي لو مسائي
    }
  },

  First_Hide(event){
    this.inputFormField["GOVValues"] = null;
    if(event == "بغداد"){
      document.getElementById("72901").style.display = "block";
    }else{
      document.getElementById("72901").style.display = "none";
    }
  },

  //اظهار حقل موعد الفحص عند اختيار القضاء
  Second_Hide(event){
    this.inputFormField["typeReserve"] = null; //موعد الفحص
    if(event){
      document.getElementById("49912").style.display = "block"; //صباحي لو مسائي
      this.group_of_form[0].fields[2].properties[0].values = ["صباحي",  "مسائي"]; //صباحي لو مسائي
    }else{
      document.getElementById("49912").style.display = "none"; //صباحي لو مسائي
      //this.group_of_form[0].fields[2].properties[0].values = []; //صباحي لو مسائي
    }
  },
  
  //فلترة اسماء اللجان واوقات المراجعة
  Second_Filter(event){
    this.inputFormField["nameljna"] = null; //اسم اللجنة
    this.inputFormField["MorningTime"] = null; //موعد المراجعة (ساعة المراجعة)

    let Work_Hours = [
      //الصباحي
      [
        //"٨ صباحا", 
        "٩ صباحا", "١٠ صباحا", "١١ صباحا", "١٢ ظهرا",
        //"١ مساءا"
      ],
      //المسائي
      [
        //"٢ مساءا", "٣ مساءا",
        "٤ مساءا", "٥ مساءا", "٦ مساءا",
        //"٧ مساءا",
      ],
    ];

    let Values = [
      {
        FSelected_Value: "الكرخ",
        SSelected_Value: "صباحي",
        FShowed_Value: [
          "لجنة العيادة الطبية الشعبية الاسكان الصباحي", "لجنة العيادة الطبية الشعبية البياع الصباحي", "لجنة العيادة الشعبية اسماعيل ناجي صباحي",
          "لجنة العيادات الشعبية المركزية",
        ],
        SShowed_Value: Work_Hours[0]
      },
      {
        FSelected_Value: "الكرخ",
        SSelected_Value: "مسائي",
        FShowed_Value:[
          "لجنة العيادة الطبية الشعبية البياع المسائي", "لجنة العيادة الشعبية اسماعيل ناجي مسائي",
          //"لجنة العيادة الطبية الشعبية الاسكان المسائي",
        ],
        SShowed_Value: Work_Hours[1]
      },
      {
        FSelected_Value: "الرصافة",
        SSelected_Value: "صباحي",
        FShowed_Value:["لجنة العيادة الشعبية صدر ثانية صباحي", "لجنة العيادة الشعبية فخر الدين ال جميل", "لجنة العيادة الشعبية صليخ صباحي",],
        SShowed_Value: Work_Hours[0]
      },
      {
        FSelected_Value: "الرصافة",
        SSelected_Value: "مسائي",
        FShowed_Value:[
          "لجنة العيادة الشعبية صدر ثانية مسائي", "لجنة العيادة الشعبية صليخ مسائي",
          //"لجنة العيادة الشعبية  فخر الدين ال جميل المسائي",
        ],
        SShowed_Value: Work_Hours[1]
      },
      {
        FSelected_Value: "البصرة",
        SSelected_Value: "مسائي",
        FShowed_Value: [
          "اللجنة الطبية المسائية الثانية في البصرة", "اللجنة الطبية المسائية الاولى في البصرة"
          //"اللجنة الطبية المسائية الثالثة في البصرة",
        ],
        SShowed_Value: Work_Hours[1]
      },
      {FSelected_Value: "البصرة", SSelected_Value: "صباحي", FShowed_Value: ["اللجنة الطبية الصباحية في البصرة",], SShowed_Value: Work_Hours[1]},
      {FSelected_Value: "الانبار", SSelected_Value: "صباحي", FShowed_Value: ["اللجنة الطبية الصباحية في محافظة الانبار"], SShowed_Value: Work_Hours[0]},
      {FSelected_Value: "الانبار", SSelected_Value: "مسائي", FShowed_Value: ["اللجنة الطبية المسائية في محافظة الانبار"], SShowed_Value: Work_Hours[1]},
      {FSelected_Value: "بابل", SSelected_Value: "صباحي", FShowed_Value: ["اللجنة الطبية الصباحية في بابل",], SShowed_Value: Work_Hours[0]},
      {
        FSelected_Value: "بابل",
        SSelected_Value: "مسائي",
        FShowed_Value: [
          "اللجنة الطبية المسائية في بابل"
          //"لجنة العيادات الشعبية المركزية",
        ],
        SShowed_Value: Work_Hours[1]
      },
      {FSelected_Value: "النجف الاشرف", SSelected_Value: "مسائي", FShowed_Value: ["اللجنة الطبية المسائية في النجف الاشرف"], SShowed_Value: Work_Hours[1]},
      {FSelected_Value: "ميسان", SSelected_Value: "مسائي", FShowed_Value: ["اللجنة الطبية المسائية في ميسان"], SShowed_Value: Work_Hours[1]},
      {FSelected_Value: "واسط", SSelected_Value: "صباحي", FShowed_Value: ["اللجنة الطبية الصباحية في واسط"], SShowed_Value: Work_Hours[0]},
      {FSelected_Value: "المثنى", SSelected_Value: "صباحي", FShowed_Value: ["اللجنة الطبية الصباحية في المثنى"], SShowed_Value: Work_Hours[0]},
      {FSelected_Value: "كركوك", SSelected_Value: "صباحي", FShowed_Value: ["اللجنة الطبية الصباحية في كركوك"], SShowed_Value: Work_Hours[0]},
      {FSelected_Value: "كركوك", SSelected_Value: "مسائي", FShowed_Value: ["اللجنة الطبية المسائية الثانية في كركوك"], SShowed_Value: Work_Hours[1]},
      {FSelected_Value: "كربلاء المقدسة", SSelected_Value: "مسائي", FShowed_Value: ["اللجنة الطبية المسائية في كربلاء المقدسة"], SShowed_Value: Work_Hours[1]},
      {FSelected_Value: "ديالى", SSelected_Value: "صباحي", FShowed_Value: ["اللجنة الطبية الصباحية في ديالى"], SShowed_Value: Work_Hours[0]},
      {FSelected_Value: "ديالى", SSelected_Value: "مسائي", FShowed_Value: ["اللجنة الطبية المسائية في المفرق"], SShowed_Value: Work_Hours[1]},
      {FSelected_Value: "الديوانية", SSelected_Value: "مسائي", FShowed_Value: ["اللجنة الطبية المسائية في الديوانية"], SShowed_Value: Work_Hours[1]},
      {FSelected_Value: "صلاح الدين", SSelected_Value: "صباحي", FShowed_Value: ["اللجنة الطبية الصباحية في تكريت"], SShowed_Value: Work_Hours[0]},
      {FSelected_Value: "صلاح الدين", SSelected_Value: "مسائي", FShowed_Value: ["لجنة العيادات الشعبية المسائية في الشرقاط",], SShowed_Value: Work_Hours[1]},
      {
        FSelected_Value: "نينوى",
        SSelected_Value: "صباحي",
        FShowed_Value: [
          "اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايمن", "اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايسر",
          "لجنة العيادات الشعبية المركزية في نينوى",
        ],
        SShowed_Value: Work_Hours[0]
      },
      {
        FSelected_Value: "نينوى",
        SSelected_Value: "مسائي",
        FShowed_Value: [
          "اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايسر", "اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايمن",
        ],
        SShowed_Value: Work_Hours[1]
      },
      {FSelected_Value: "ذي قار", SSelected_Value: "مسائي", FShowed_Value: ["اللجنة الطبية المسائية لفحص السياقة الاولى", "اللجنة الطبية المسائية لفحص السياقة الثانية",], SShowed_Value: Work_Hours[1]},
    ];

    var Gover_Values =  [
      "الانبار", "بابل", "البصرة", "ديالى", "ذي قار", "صلاح الدين", "القادسية", "كركوك", "كربلاء المقدسة", "المثنى", "ميسان", "النجف الاشرف", "نينوى",  "واسط",
    ];

    var Result;
    if(this.inputFormField.governorate == "بغداد"){
      Result = Values.find((Finding) => (event === Finding.FSelected_Value && this.inputFormField.typeReserve === Finding.SSelected_Value));
    }
    
    if(Gover_Values.includes(this.inputFormField.governorate)){
      Result = Values.find((Finding) => (event === Finding.SSelected_Value && this.inputFormField.governorate === Finding.FSelected_Value));
    }

    if(Result){
      this.group_of_form[0].fields[3].properties[0].values = Result.FShowed_Value; //اسم اللجنة
      this.group_of_form[0].fields[5].properties[0].values = Result.SShowed_Value; //موعد المراجعة (ساعة المراجعة)
    }else{
      this.group_of_form[0].fields[3].properties[0].values = []; //اسم اللجنة
      this.group_of_form[0].fields[5].properties[0].values = []; //موعد المراجعة (ساعة المراجعة)
    }
  },

  //اظهار حقل الرمز التعريفي وفلترة عناوين اللجان
  Third_Filter(event){
    this.inputFormField["LijnaPlace"] = null; //عنوان اللجنة
    this.inputFormField["pasText"] = null; // الرمز التعريفي الخاص باللجنة
    
    if(event === "لجنة العيادات الشعبية المركزية" || event == "لجنة العيادات الشعبية المركزية في نينوى"){
      document.getElementById("52782").style.display = "block"; // الرمز التعريفي الخاص باللجنة 
    }else{
      document.getElementById("52782").style.display = "none"; // الرمز التعريفي الخاص باللجنة 
    }

    var Values = [
      //بغداد الكرخ
      {Selected_Value: ["لجنة العيادة الطبية الشعبية الاسكان الصباحي",], Showed_Value: "الإسكان / شارع 30 / قرب جامع الإسكان"}, //لجان الاسكان
      {Selected_Value: ["لجنة العيادة الطبية الشعبية البياع الصباحي", "لجنة العيادة الطبية الشعبية البياع المسائي",], Showed_Value: "البياع / شارع 20 /  مقابل مصرف الرشيد"}, //لجان البياع
      {Selected_Value: ["لجنة العيادة الشعبية اسماعيل ناجي صباحي", "لجنة العيادة الشعبية اسماعيل ناجي مسائي",], Showed_Value: "العلاوي / الصالحية خلف السينما / شارع النجارين / قرب  مدرسة النبوغ الإبتدائية"}, //لجان اسماعيل ناجي
      //بغداد الرصافة
      {Selected_Value: ["لجنة العيادة الشعبية صدر ثانية صباحي", "لجنة العيادة الشعبية صدر ثانية مسائي",], Showed_Value: "مدينة الصدر / قطاع 3 /  مجاور مركز شرطة المنتظر"}, //لجان الصدر الثانية
      {Selected_Value: ["لجنة العيادة الشعبية فخر الدين ال جميل",], Showed_Value: "شارع النضال / قرب القصر الأبيض"}, //لجان فخر الدين ال جميل
      {Selected_Value: ["لجنة العيادة الشعبية صليخ صباحي", "لجنة العيادة الشعبية صليخ مسائي",], Showed_Value: "الصليخ / داخل بناية المركز الصحي في الصليخ الأول / قرب جسر الشعب"}, //لجنة الصليخ مسائي وصباحي
      //البصرة
      {Selected_Value: ["اللجنة الطبية المسائية الثانية في البصرة", "اللجنة الطبية الصباحية في البصرة"], Showed_Value: "البصرة / منطقة الجمهورية / قرب ملعب الجمهورية"}, //لجنة البصرة المسائية الثانية
      {Selected_Value: ["اللجنة الطبية المسائية الاولى في البصرة"], Showed_Value: "البصرة / منطقة التحسينية / مقابل متوسطة التقدم"}, //لجنة البصرة المسائية الاولى
      //{Selected_Value: ["اللجنة الطبية المسائية الثالثة في البصرة",], Showed_Value: ["البصرة / حي الكفاءات / قرب مركز الأمراض الصدرية ",],}, //لجنة البصرة المسائية الثالثة
      //الانبار
      {Selected_Value: ["اللجنة الطبية المسائية في محافظة الانبار", "اللجنة الطبية الصباحية في محافظة الانبار"], Showed_Value: "الأنبار / الرمادي / حي المعلمين / شارع مول الرمادي الجديد / قرب دائرة صحة الأنبار"}, //لجان الانبار
      //بابل
      {Selected_Value: ["اللجنة الطبية الصباحية في بابل", "اللجنة الطبية المسائية في بابل"], Showed_Value: "الحلة / نهاية شارع 80 / مقابل مجمع القضاة"}, //لجان بابل
      //النجف الاشرف
      {Selected_Value: ["اللجنة الطبية المسائية في النجف الاشرف", "اللجنة الطبية الصباحية  في النجف الاشرف"], Showed_Value: "النجف / حي الصحة / مقابل مركز شرطة الكرار"}, //لجان النجف
      //ميسان
      {Selected_Value: ["اللجنة الطبية المسائية في ميسان"], Showed_Value: "ميسان / حي الإسكان / مبنى مستشفى الطفل والولادة / قرب مصرف الدم المركزي"}, //لجان ميسان
      //واسط
      {Selected_Value: ["اللجنة الطبية الصباحية في واسط",], Showed_Value: "واسط / شارع المشروع / قرب المدينة الطبية"}, //لجان واسط
      //المثنى
      {Selected_Value: ["اللجنة الطبية الصباحية في المثنى"], Showed_Value: "المثنى / حي الإعلام / قرب مديرية الوقف الشيعي"}, //لجان المثنى
      //كركوك
      {Selected_Value: ["اللجنة الطبية الصباحية في كركوك", "اللجنة الطبية المسائية الثانية في كركوك"], Showed_Value: "طريق بغداد / قرب إعدادية صناعة كركوك"}, //لجان كركوك
      //كربلاء المقدسة
      {Selected_Value: ["اللجنة الطبية المسائية في كربلاء المقدسة", "اللجنة الطبية الصباحية في كربلاء المقدسة",], Showed_Value: "كربلاء / شارع قبلة الإمام الحسين / بناية شعبة اللجان الطبية / مقابل المكتبة المركزية"}, //لجان كربلاء
      //ديالى
      {Selected_Value: ["اللجنة الطبية الصباحية في ديالى"], Showed_Value: "ديالى / موقع مديرية مرور ديالى"}, //لجان ديالى الصباحية
      {Selected_Value: ["اللجنة الطبية المسائية في المفرق"], Showed_Value: "بعقوبة / شارع المستشفى / أستشارية مستشفى بعقوبة التعليمي"}, //لجان ديالى مسائي مفرق
      //الديوانية
      {Selected_Value: ["اللجنة الطبية المسائية في الديوانية"], Showed_Value: "الديوانية / حي الجمهوري / بناية إعدادية التمريض سابقاً / مجاور الهلال الأحمر القديم"}, //لجان الديوانية
      //صلاح الدين
      {Selected_Value: ["اللجنة الطبية الصباحية في تكريت"], Showed_Value: "صلاح الدين / تكريت / حي العصري / مجاور مركز الشرطة"}, //لجان تكريت
      {Selected_Value: ["لجنة العيادات الشعبية المسائية في الشرقاط",], Showed_Value: "صلاح الدين / الشرقاط / قرب مستشفى الشرقاط العام"}, //لجان تكريت / شرقاط
      //نينوى
      {Selected_Value: ["اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايسر", "اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايسر",], Showed_Value: "الموصل / الجانب الأيسر / حي القاهرة / قرب جامع صالح ضعينة"}, //لجان الموصل الجانب الايسر
      {Selected_Value: ["اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايمن", "اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايمن",], Showed_Value: "الموصل / الجانب الأيمن / قرب معمل النسيج"}, //لجان الموصل الجانب الايمن
      //ذي قار
      {Selected_Value: ["اللجنة الطبية المسائية لفحص السياقة الاولى",], Showed_Value: "الناصرية / مركز حي المعلمين الصحي / تقاطع أريدو / قرب مبنى الأدلة الجنائية"}, //لجنة ذي قار مسائية اولى
      {Selected_Value: ["اللجنة الطبية المسائية لفحص السياقة الثانية",], Showed_Value: "ذي قار / شارع النيل / في بناية قسم الصحة العامة / قرب دائرة التقاعد"}, //لجنة ذي قار مسائية ثانية
    ];

    let Result = Values.find((Finding) => Finding.Selected_Value.includes(event));
    
    if(Result){
      document.getElementById("73927").style.display = "block";
      this.inputFormField.LijnaPlace = Finding.Showed_Value;
      document.getElementsByName("LijnaPlace")[0].disabled = true; //عنوان اللجنة
    }else{
      document.getElementById("73927").style.display = "none";
    }
  },
}