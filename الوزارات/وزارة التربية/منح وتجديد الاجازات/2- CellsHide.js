{
  Second_Function(Field_ID, Field_Prog, Field_State){
    document.getElementById(Field_ID).style.display = Field_State;
    this.inputFormField[Field_Prog] = null;
  },
  
  //Hide Functions
  //السلكتر مال منح اجازة لو تجديد اجازة
  FirstHide(event){
    let Fields_Prog = [
      "instype", //نرجو التفضل بالموافقة على منح الاجازة
      "type", //نرجو التفضل بالموافقة على تجديد اجازة
      "firstrenewal", //هل التجديد هو لاول مرة ؟
      "cernum", //رقم الاجازة الجدارية للتأسيس
      "ecerdate", //تاريخ اجازة الجدارية
      "estabnum", //رقم امر التأسيس
      "cerdateofestab", //تاريخ امر التأسيس
      "institcapa", //عدد الطلاب للعام الماضي
      "datfrom", //يبدأ التجديد الجديد اعتبارًا من عام.
      "renwedate", //ينتهي التجديد الجديد بحلول عام
      "FoundationClosing", //هل اغلاق المدرسة اجازة لو كلي؟
      "LateReasons", //اسباب التاخير
      "year",
    ];

    let IDs = ["47888", "50668", "47962", "47963", "47964", "47965", "47957", "68060", "68771", "75349", "75337", "47954", "47901"];
    let Values = [
      {
        Selected_Value: "منح اجازة جديدة", 
        Showed_Fields: [
          "47954", //نرجو التفضل بالموافقة على منح الاجازة
          "47901"
        ],
        Hide_Fields: [
          "47888", //نرجو التفضل بالموافقة على تجديد اجازة
          "50668", //هل التجديد هو لاول مرة ؟
          "47962", //رقم الاجازة الجدارية للتأسيس
          "47963", //تاريخ اجازة الجدارية
          "47964", //رقم امر التأسيس
          "47965", //تاريخ امر التأسيس
          "47957", //عدد الطلاب للعام الماضي
          "68060", //يبدأ التجديد الجديد اعتبارًا من عام.
          "68771", //ينتهي التجديد الجديد بحلول عام
          "75349", //هل اغلاق المدرسة اجازة لو كلي؟
          "75337", //اسباب التاخير
        ]
      },
      {
        Selected_Value: "تجديد اجازة", 
        Showed_Fields: [
          "47888", //نرجو التفضل بالموافقة على تجديد اجازة
          "50668", //هل التجديد هو لاول مرة ؟
          "47962", //رقم الاجازة الجدارية للتأسيس
          "47963", //تاريخ اجازة الجدارية
          "47964", //رقم امر التأسيس
          "47965", //تاريخ امر التأسيس
          "47957", //عدد الطلاب للعام الماضي
          "68060", //يبدأ التجديد الجديد اعتبارًا من عام.
          "68771", //ينتهي التجديد الجديد بحلول عام
          "75349", //هل اغلاق المدرسة اجازة لو كلي؟
          "75337", //اسباب التاخير
          "47901"
        ],
        Hide_Fields: [
          "47954", //نرجو التفضل بالموافقة على منح الاجازة
        ]
      },
    ];

    Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);
    let Result = Values.find((Finding) => event === Finding.Selected_Value);

    if(Result){
      Result.Showed_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
      Result.Hide_Fields.forEach((element) => document.getElementById(element).style.display = "none");

      if(Result.Selected_Value === "منح اجازة جديدة"){
        this.group_of_form[0].fields[4].properties[0].values = ["روضة", "معهد"];
      }
    }else{
      IDs.forEach((element) => document.getElementById(element).style.display = "none");
    }
  },

  //مال هل التجديد لاول مرة لو لا
  SecondHide(event){
    var IDs = [
      "67215", //يبدأ آخر تجديد اعتبارًا من عام.
      "68770", //ينتهي آخر تجديد بحلول عام.
      "47960", //علما ان اخر تجديد الرقم
      "47961" //تاريخ اخر تجديد
    ],
    Progs = [
      "studyear", //يبدأ آخر تجديد اعتبارًا من عام.
      "lastrenw", //ينتهي آخر تجديد بحلول عام.
      "lastcernum", //علما ان اخر تجديد الرقم
      "lastcerdate" //تاريخ اخر تجديد
    ];

    Progs.forEach((element) => this.inputFormField[element] = null);
    if(event == "نعم"){
      IDs.forEach((element) => document.getElementById(element).style.display = "block");
    }else{
      IDs.forEach((element) => document.getElementById(element).style.display = "none");
    }
  },

  //مال نوع مقدم الطلب هل مؤسسة لو مستثمرين
  ThirdHide(event){
    //مال مستثمرين
    var Progs = [
    //مال مستثمرين
    "fname", "sname", "thname", "foname", "owncer", "ownspec", "fownphone", //مؤسس اول
    "namesinv", "secondninv", "thirdnsinv", "fourthnsinv", "educationsinv", "majorsinv", "phonensin", //مؤسس ثاني
    "firstntinv", "secondnthirdinv", "thirdntinv", "fourthnfinv", "educationtinv", "majorthinv", "phonethirdinv", //مؤسس ثالث
    "OtherPeopleExist", //هل يوجد مؤسسين اخرين؟
    "typeofapply", //مال مؤسسة
    ];
    Progs.forEach((element) => this.inputFormField[element] = null);

    let Values = [
      {
        Selected_Value: "مستثمرين", 
        Showed_Fields: [
          "47970", "47971", "47972", "47975", "47977", "47978", "47980", //مؤسس اول
          "50719", "50721", "50722", "50723", "50724", "50725", "50726", //مؤسس ثاني
          "50727", "50728", "50729", "50730", "50731", "50732", "50733", //مؤسس ثالث
          "75777", //هل يوجد مؤسسين اخرين؟
        ],
        Hide_Fields: ["67636",]
      },
      {
        Selected_Value: "مؤسسة",
        Showed_Fields: ["67636",],
        Hide_Fields: [
          "47970", "47971", "47972", "47975", "47977", "47978", "47980", //مؤسس اول
          "50719", "50721", "50722", "50723", "50724", "50725", "50726", //مؤسس ثاني
          "50727", "50728", "50729", "50730", "50731", "50732", "50733", //مؤسس ثالث
          "75777", //هل يوجد مؤسسين اخرين؟
        ],
      },
    ];

    let Result = Values.find((Finding) => event === Finding.Selected_Value);
    if(Result){
      document.getElementById("22950_group").style.display = "block";
      Result.Showed_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
      Result.Hide_Fields.forEach((element) => document.getElementById(element).style.display = "none");
    }else{
      document.getElementById("22950_group").style.display = "none";
    }
  },

  FourthHide(event){
    let Progs = [
      //مال الشركة
      "thecompanyname", "regnumber", "regdate",
      //مال المدير المفوض
      "ceoname", "DMSecondName", "DMThirdName", "nationalid", "address", "phoneceo", "specialty", "studyyy",
    ];
    Progs.forEach((element) => this.inputFormField[element] = null);

    let Values = [
      {
        Selected_Value: "الشركة",
        Showed_Fields: ["50808", "50735", "75783",],
        Hide_Fields: ["50737", "75781", "75782", "50738", "50739", "50740", "67633", "67634"],
      },
      {
        Selected_Value: "المدير المفوض",
        Showed_Fields: ["50737", "75781", "75782", "50738", "50739", "50740", "67633", "67634"],
        Hide_Fields: ["50808", "50735", "75783",],
      },
    ];

    let Result = Values.find((Finding) => event === Finding.Selected_Value);
    if(Result){
        Result.Showed_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
        Result.Hide_Fields.forEach((element) => document.getElementById(element).style.display = "none");
    }else{
        [
          "50808", "50735", "75783", //"الشركة"
          "50737", "75781", "75782", "50738", "50739", "50740", "67633", "67634" //"المدير المفوض"
        ].forEach((element) => document.getElementById(element).style.display = "none");
    }
  },

  Fifth_Hide(event){
    //رقم العقار (البسط) ورقم العقار (المقام)
    ["UpperNumberValue", "LowerLandNumber", "estatenumber"].forEach(element => this.inputFormField[element] = null);

    let Values = [
      {Selected_Value: "نعم", Showed_Fields: ["72105", "72106"], Hide_Fields: ["50716"]},
      {Selected_Value: "كلا", Showed_Fields: ["50716"], Hide_Fields: ["72105", "72106"]},
    ];

    let Result = Values.find((Finding) => event === Finding.Selected_Value);
    if(Result){
      Result.Showed_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
      Result.Hide_Fields.forEach((element) => document.getElementById(element).style.display = "none");
    }else{
      ["72105", "72106", "50716"].forEach((element) => document.getElementById(element).style.display = "none");
    }
  },

  //اذا ايجار يطلعله الرقم الضريبي مال المؤجر
  Sixth_Hide(event){
    if(event == "ايجار"){
      this.Second_Function("71968", "taxxnum", "block");
    }else{
      this.Second_Function("71968", "taxxnum", "none");
    }
  },

  //اذا اختار قيمة من المديرية فالملاحظية تختفي
  Seventh_Hide(event){
    if(event){
      this.Second_Function("71973", "Realestatesub", "none");
    }else{
      this.Second_Function("71973", "Realestatesub", "block");
    }
  },

  //اذا اختار قيمة من الملاحظية فالمديرية تختفي
  Eight_Hide(event){
    if(event){
      this.Second_Function("71972", "Realestate", "none");
    }else{
      this.Second_Function("71972", "Realestate", "block");
    }
  },

  Ninth_Hide(event){
    if(event == "مملوك للدولة"){
      this.Second_Function("72421", "OwnerName", "block");
    }else{
      this.Second_Function("72421", "OwnerName", "none");
    }
  },

  //Filter Functions
  //فلترة الاقضية ومديريات التسجيل العقاري وملاحظيات التسجيل العقاري وفروع الضريبة
  getsubCities(event) {
    var Progs_Names = [
      "district", //الاقضية
      "Realestate", //مديريات التسجيل العقاري
      "Realestatesub", //ملاحظيات التسجيل العقاري
      "texes", //فروع الضريبة
      "Municipality", //البلدية
    ];
    
    Progs_Names.forEach((Clearing) => this.inputFormField[Clearing] = null);

    /*
    Selected_Value المحافظات
    FShowed_Value الاقضية
    SShowed_Value دوائر التسجيل العقاري
    TShowed_Value ملاحظية التسجيل العقاري
    FoShowed_Value فرع الضريبة
    Emp_Name الموظف المعالج
    Second_Emp_Name الموظف المعالج لاختيار المعهد
    Show_Field حتى يظهر حقل البلدية
    */
    let Values = [
      {
        Selected_Value: "بغداد",
        FShowed_Value: ["الكرخ", "الرصافة",],
        SShowed_Value: [
          "مديرية التسجيل العقاري الرصافة الاولى", "مديرية التسجيل العقاري الرصافة الثانية", "مديرية التسجيل العقاري الكرخ الاولى", "مديرية التسجيل العقاري الكرخ الثانية",
          "مديرية التسجيل العقاري الاعظمية", "مديرية التسجيل العقاري الزهور - بغداد", "مديرية التسجيل العقاري الكاظمية الاولى", "مديرية التسجيل العقاري الكاظمية الثانية",
          "مديرية التسجيل العقاري ابي غريب", "مديرية التسجيل العقاري البياع", "مديرية التسجيل العقاري المدائن", "مديرية التسجيل العقاري المحمودية",
          "مديرية التسجيل العقاري الدورة", "مديرية التسجيل العقاري مدينة الصدر الاولى", "مديرية التسجيل العقاري مدينة الصدر الثانية", "مديرية التسجيل العقاري الشعب",
        ],
        TShowed_Value: [
          "ملاحظيه التسجيل العقاري في الطارمية", "ملاحظية التسجيل العقاري في البدور", "ملاحظيه التسجيل العقاري في الوحدة", "ملاحظية التسجيل العقاري في مجمع بسماية السكني",
          "ملاحظية التسجيل العقاري - التاجي",
        ],
        FoShowed_Value: [
          "الرصافة", "كرخ الاطراف", "كرخ المركز", "بغداد الجديدة", "المشتل", "الكاظمية", "الاعظمية", "الكرادة", "الحرية", "مدينة الصدر", "البياع", "الدورة", "الشعب", "ابو غريب",
          "الطارمية", "المحمودية", "الحسينية",
        ],
        Emp_Name: "",
        Show_Field: true,
      }, //بغداد
      {
        Selected_Value: "الانبار",
        FShowed_Value: [
          "بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية", "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات", "الفلوجة", "القائم",
          "كبيسة", "الكرمة", "النخيب", "هيت", "الوفاء", "الوليد"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري الفلوجة", "مديرية التسجيل العقاري الانبار",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري في عامرية الصمود", "ملاحظية التسجيل العقاري هيت", "ملاحظية التسجيل العقاري الرطبة", "ملاحظية التسجيل العقاري القائم",
          "ملاحظية التسجيل العقاري حديثة", "ملاحظية التسجيل العقاري عانه", "ملاحظية التسجيل العقاري راوه", "ملاحظية التسجيل العقاري في الخالدية",
        ],
        FoShowed_Value: ["الانبار", "الفلوجة", "الجزيرة", "الكرمة", "عامرية الصمود", "هيت", "حديثة"],
        Emp_Name: "الموظف الاول",
        Show_Field: false,
      }, //الانبار
      {
        Selected_Value: "ديالى",
        FShowed_Value: [
          "أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية", "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز", "هبهب", "جبارة", "جلولاء",
          "كنعان", "خانقين", "مندلي", "قرة تبة", "سيف سعد"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري ديالى",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري خانقين", "ملاحظية التسجيل العقاري المقدادية", "ملاحظية التسجيل العقاري ابي صيدا", "ملاحظية التسجيل العقاري الخالص",
          "ملاحظية التسجيل العقاري بلدروز", "ملاحظية التسجيل العقاري قرة تبه", "ملاحظية التسجيل العقاري في مندلي", "ملاحظية التسجيل العقاري في جلولاء",
        ],
        FoShowed_Value: ["ديالى", "الخالص",],
        Emp_Name: "الموظف الاول",
        Show_Field: false,
      }, //ديالى
      {
        Selected_Value: "صلاح الدين",
        FShowed_Value: [
          "الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية", "بيجي", "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت", "طوز خورماتو",
          "يثرب", "العوجة"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري صلاح الدين", "مديرية التسجيل العقاري بلد", "مديرية التسجيل العقاري الطوز",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري الشرقاط", "ملاحظية التسجيل العقاري سامراء", "ملاحظية التسجيل العقاري الدور", "ملاحظية التسجيل العقاري بيجي", "ملاحظية التسجيل العقاري الدجيل",
        ],
        FoShowed_Value: ["صلاح الدين", "سامراء", "بلد"],
        Emp_Name: "الموظف الاول",
        Show_Field: false,
      }, //"صلاح الدين"
      {
        Selected_Value: "كركوك",
        FShowed_Value: [
          "دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق", "كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان", "تازة", "يايجي"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري كركوك الاولى", "مديرية التسجيل العقاري كركوك الثانية",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري الحويجة", "ملاحظية التسجيل العقاري داقوق", "ملاحظية التسجيل العقاري في تازة", "ملاحظية التسجيل العقاري التون كوبري",
          "ملاحظية التسجيل العقاري الدبس",
        ],
        FoShowed_Value: ["كركوك1", "كركوك2",],
        Emp_Name: "الموظف الاول",
        Show_Field: false,
      }, //"كركوك"
      {
        Selected_Value: "نينوى",
        FShowed_Value: [
          "العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان", "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة", "الحمدانية (بغديدا)",
          "برطلة", "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة", "سنجار", "تلعفر", "تلكيف", "وانة", "زيلكان", "زمار", "الفاروق"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري نينوى - الزهور", "مديرية التسجيل العقاري نينوى", "مديرية التسجيل العقاري تلعفر",],
        TShowed_Value: ["ملاحظية التسجيل العقاري تلكيف", "ملاحظية التسجيل العقاري الحمدانية", "ملاحظية التسجيل العقاري في بعشيقة", "ملاحظية التسجيل العقاري سنجار",],
        FoShowed_Value: ["نينوى الايمن", "نينوى الايسر", "الجزيرة"],
        Emp_Name: "الموظف الاول",
        Show_Field: false,
      },//"نينوى"
      {
        Selected_Value: "بابل",
        FShowed_Value: [
          "أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", "المشروع", "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة", "سدة الهندية",
          "جرف النصر (جرف الصخر)",
        ],
        SShowed_Value: ["مديرية التسجيل العقاري بابل", "مديرية التسجيل العقاري المسيب",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري الهاشمية", "ملاحظية التسجيل العقاري المحاويل", "ملاحظية التسجيل العقاري الشوملي", "ملاحظية التسجيل العقاري القاسم",
          "ملاحظية التسجيل العقاري في أبي غرق", "ملاحظية التسجيل العقاري- الكفل"
        ],
        FoShowed_Value: ["المحاويل", "المسيب", "بابل", "الهاشمية"],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      }, //بابل
      {
        Selected_Value: "البصرة",
        FShowed_Value: [
          "أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة", "الثغر", "الشهيد عز الدين سليم", "الزبير", "سفوان", "شط العرب", "طلحة",
          "أم قصر", "الامام الصادق"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري البصرة/1", "مديرية التسجيل العقاري البصرة/2", "مديرية التسجيل العقاري في البصرة/3",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري القرنة", "ملاحظية التسجيل العقاري في المدينة", "ملاحظية التسجيل العقاري في قضاء شط العرب", "ملاحظية التسجيل العقاري ابي الخصيب",
          "ملاحظية التسجيل العقاري الفاو",
        ],
        FoShowed_Value: ["البصرة", "الزبير",],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      }, //البصرة
      {
        Selected_Value: "ذي قار",
        FShowed_Value: [
          "الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح", "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار", "أور",
          "كرمة بني سعد", "قلعة سكر", "سيد دخيل", "سوق الشيوخ", "عكيكة"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري ذي قار الاولى", "مديرية التسجيل العقاري ذي قار الثانية", "مديرية التسجيل العقاري سوق الشيوخ", "مديرية التسجيل العقاري الشطرة",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري في البطحاء", "ملاحظية التسجيل العقاري في الفهود", "ملاحظية التسجيل العقاري في الإصلاح", "ملاحظية التسجيل العقاري في كرمة بني سعيد",
          "ملاحظية التسجيل العقاري الجبايش", "ملاحظية التسجيل العقاري الدواية", "ملاحظية التسجيل العقاري الرفاعي", "ملاحظية التسجيل العقاري قلعة سكر", "ملاحظية التسجيل العقاري النصر",
          "ملاحظية التسجيل العقاري الفجر", "ملاحظية التسجيل العقاري في الغراف", "ملاحظية التسجيل العقاري في كرمة بني سعد", "ملاحظية التسجيل العقاري في الغراف"
        ],
        FoShowed_Value: ["ذي قار", "الشطرة", "قلعة سكر"],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      }, //ذي قار
      {
        Selected_Value: "القادسية",
        FShowed_Value: ["الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية", "الشنافية", "الصلاحية", "السنية", "السدير", "غماس", "نفر", "سومر"],
        SShowed_Value: ["مديرية التسجيل العقاري الديوانية",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري المهناوية", "ملاحظية التسجيل العقاري الشامية", "ملاحظية التسجيل العقاري عفك", "ملاحظية التسجيل العقاري غماس", "ملاحظية التسجيل العقاري الحمزة",
          "ملاحظية التسجيل العقاري الدغارة", "ملاحظية التسجيل العقاري في آل بدير", "ملاحظية التسجيل العقاري في الشنافية",
        ],
        FoShowed_Value: ["القادسية"],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      },
      {
        Selected_Value: "كربلاء المقدسة",
        FShowed_Value: ["عين تمر", "الهندية", "الحر", "الحسينية", "الجدول الغربي", "ناحية الخيرات", "كربلاء"],
        SShowed_Value: [
          "مديرية التسجيل العقاري كربلاء الاولى", "مديرية التسجيل العقاري الحر", "مديرية التسجيل العقاري الهندية", "مديرية التسجيل العقاري كربلاء الثانية",
          "مديرية التسجيل العقاري الهندية"
        ],
        TShowed_Value: ["ملاحظية التسجيل العقاري عين التمر", "ملاحظية التسجيل العقاري الحسينية","ملاحظية التسجيل العقاري الخيرات",],
        FoShowed_Value: ["كربلاء",],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      },
      {
        Selected_Value: "المثنى",
        FShowed_Value: ["الدراجي", "البصية", "الهلال", "الكرامة", "الخضر", "المجد", "الوركاء", "النجمي", "الرميثة", "السلمان", "السماوة", "السوير"],
        SShowed_Value: ["مديرية التسجيل العقاري المثنى",],
        TShowed_Value: ["ملاحظية التسجيل العقاري الرميثة", "ملاحظية التسجيل العقاري الخضر",],
        FoShowed_Value: ["المثنى"],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      },
      {
        Selected_Value: "ميسان",
        FShowed_Value: [
          "العدل", "العمارة", "علي الغربي", "علي الشرقي", "الكحلاء", "الخير", "الميمونة", "المجر الكبير", "المشرح", "العزيز", "سيد أحمد الرفاعي", "السلام", "بني هاشم", "كميت",
          "قلعة صالح"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري ميسان",],
        TShowed_Value: ["ملاحظية التسجيل العقاري الميمونة", "ملاحظية التسجيل العقاري علي الغربي", "ملاحظية التسجيل العقاري قلعة صالح", "ملاحظية التسجيل العقاري المجر الكبير",],
        FoShowed_Value: ["ميسان"],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      },
      {
        Selected_Value: "النجف الاشرف",
        FShowed_Value: ["العباسية", "الحيدرية", "الحيرة", "الحرية", "الكوفة", "المناذرة", "المشخاب", "القادسية", "النجف", "الشبكة"],
        SShowed_Value: ["مديرية التسجيل العقاري النجف الاشرف الاولى", "مديرية التسجيل العقاري النجف الاشرف الثانية", "مديرية التسجيل العقاري الكوفة",],
        TShowed_Value: ["ملاحظية التسجيل العقاري في الحيدرية", "ملاحظية التسجيل العقاري المناذرة",],
        FoShowed_Value: ["النجف", "الكوفة",],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      },
      {
        Selected_Value: "واسط",
        FShowed_Value: [
          "الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت", "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة", "جصان",
          "شيخ سعد", "الحفرية (تاج الدين)", "ناحية واسط"
        ],
        SShowed_Value: ["مديرية التسجيل العقاري واسط الأولى", "مديرية التسجيل العقاري صويرة", "مديرية التسجيل العقاري واسط الثانية",],
        TShowed_Value: [
          "ملاحظية التسجيل العقاري في الأحرار", "ملاحظية التسجيل العقاري بدرة", "ملاحظية التسجيل العقاري نعمانية", "ملاحظية التسجيل العقاري الحي", "ملاحظية التسجيل العقاري العزيزية",
          "ملاحظية التسجيل العقاري تاج الدين (الحفرية)", "ملاحظية التسجيل العقاري الزبيدية",
        ],
        FoShowed_Value: ["الصويرة", "واسط"],
        Emp_Name: "الموظف الثاني",
        Show_Field: false,
      },
    ];
    
    let Result = Values.find((Finding) => event === Finding.Selected_Value);

    if(Result){
      this.group_of_form[1].fields[12].properties[0].values = Result.FShowed_Value; //الاقضية
      this.group_of_form[1].fields[14].properties[0].values = Result.SShowed_Value; //دوائر التسجيل العقاري
      this.group_of_form[1].fields[15].properties[0].values = Result.TShowed_Value; //ملاحظيات التسجيل العقاري
      this.group_of_form[1].fields[16].properties[0].values = Result.FoShowed_Value; //فرع الضريبة
      this.inputFormField.ProcessingPerson = Result.Emp_Name; //الموظف المعالج
      this.inputFormField.SecondProcessingPerson = Result.Second_Emp_Name; //موظف المعهد

      if(Result.Show_Field){
        document.getElementById("74257").style.display = "block";
      }else{
        document.getElementById("74257").style.display = "none"; //البلدية
      }
    }else{
      this.group_of_form[1].fields[12].properties[0].values = []; //الاقضية
      this.group_of_form[1].fields[14].properties[0].values = []; //دوائر التسجيل العقاري
      this.group_of_form[1].fields[15].properties[0].values = []; //ملاحظيات التسجيل العقاري
      this.group_of_form[1].fields[16].properties[0].values = []; //فرع الضريبة
      this.inputFormField.ProcessingPerson = ""; //الموظف المعالج
      document.getElementById("74257").style.display = "none"; //البلدية
    }
  },

  First_Filter(event){
    var Selected_Values = ["روضة", "معهد", "مدرسة ثنائية اللغة", "مدرسة اعدادية", "مدرسة متوسطة", "مدرسة ثانوية", "مدرسة ابتدائية", "مدرسة اساسية"];
    if(Selected_Values.includes(event)){
      this.Second_Function("71697", "istablyear", "block"); //التاسيس للعام الدراسي
    }else{
      this.Second_Function("71697", "istablyear", "none"); //التاسيس للعام الدراسي
    }
  },

  Tenth_Hide(event){
    if(event == "نعم"){
      this.Second_Function("73922", "OtherProDetails", "block"); //رقم عقار اخر
    }else{
      this.Second_Function("73922", "OtherProDetails", "none"); //رقم عقار اخر
    }
  },

  Eleventh_Hide(event){
    if(event == "نعم"){
      this.Second_Function("75605", "OtherPersons", "block"); //جدول المؤسسين الاخرين
    }else{
      this.Second_Function("75605", "OtherPersons", "none"); //جدول المؤسسين الاخرين
    }
  },

  Second_Filter(event){
    /*
    Selected_Value المحافظات
    Second_Emp_Name الموظف المعالج لاختيار المعهد
    */
    let Values = [
      {
        Selected_Value: "الكرخ",
        Second_Emp_Name: "معهد الكرخ",
      },
      {
        Selected_Value: "الرصافة",
        Second_Emp_Name: "معهد الرصافة",
      },
      {
        Selected_Value: "الانبار",
        Second_Emp_Name: "معهد الانبار",
      }, //الانبار
      {
        Selected_Value: "ديالى",
        Second_Emp_Name: "معهد ديالى",
      }, //ديالى
      {
        Selected_Value: "صلاح الدين",
        Second_Emp_Name: "معهد صلاح الدين",
      }, //"صلاح الدين"
      {
        Selected_Value: "كركوك",
        Second_Emp_Name: "معهد كركوك",
      }, //"كركوك"
      {
        Selected_Value: "نينوى",
        Second_Emp_Name: "معهد نينوى",
      },//"نينوى"
      {
        Selected_Value: "بابل",
        Second_Emp_Name: "معهد بابل",
      }, //بابل
      {
        Selected_Value: "البصرة",
        Second_Emp_Name: "معهد البصرة",
      }, //البصرة
      {
        Selected_Value: "ذي قار",
        Second_Emp_Name: "معهد ذي قار",
      }, //ذي قار
      {
        Selected_Value: "القادسية",
        Second_Emp_Name: "معهد القادسية",
      },
      {
        Selected_Value: "كربلاء المقدسة",
        Second_Emp_Name: "معهد كربلاء",
      },
      {
        Selected_Value: "المثنى",
        Second_Emp_Name: "معهد المثنى",
      },
      {
        Selected_Value: "ميسان",
        Second_Emp_Name: "معهد ميسان",
      },
      {
        Selected_Value: "النجف الاشرف",
        Second_Emp_Name: "معهد النجف",
      },
      {
        Selected_Value: "واسط",
        Second_Emp_Name: "معهد واسط",
      },
    ];

    let Result = Values.find((Finding) => Finding.Selected_Value === event || Finding.Selected_Value === this.inputFormField.governorate);
    let Checking = this.inputFormField.type === "معهد" || this.inputFormField.instype === "معهد"
    if(Result && Checking){
      this.inputFormField.SecondProcessingPerson = Result.Second_Emp_Name; //موظف المعهد
    }else{
      this.inputFormField.SecondProcessingPerson = ""; //موظف المعهد
    }
  },
}