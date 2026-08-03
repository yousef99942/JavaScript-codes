{
  FirstSelector(event){
    var FirstD =["بغداد"],
        SecondD = ["البصرة"],
        thirdD = ["الانبار"],
        FourthD = ["بابل"],
        FifthD = ["النجف الاشرف"],
        sixth = ["ميسان"],
        seventh = ["واسط"],
        eigth = ["المثنى"],
        ninth = ["كركوك"],
        tenth = ["كربلاء المقدسة"],
        eleventh = ["ديالى"],
        tewelveth = ["الديوانية"],
        threeteenth = ["صلاح الدين"],
        fourteenth = ["نينوى"],
        fifteenth = ["ذي قار"],
        FirstD1 = ["الكرخ"],
        FirstD2 = ["الرصافة"];


    var names = [
      //0
      [
        "لجنة العيادة الطبية الشعبية الاسكان الصباحي",
        "لجنة العيادة الطبية الشعبية البياع الصباحي",
        "لجنة العيادة الشعبية اسماعيل ناجي صباحي",
        "لجنة العيادات الشعبية المركزية",
      ],//بغداد الكرخ الصباحي
      //1
      [
        "لجنة العيادة الطبية الشعبية البياع المسائي",
        "لجنة العيادة الشعبية اسماعيل ناجي مسائي",
        //"لجنة العيادة الطبية الشعبية الاسكان المسائي",
      ],//بغداد المسائي
      //2
      [
        //"اللجنة الطبية الصباحية  في النجف الاشرف"
        "لا يوجد"
      ], //النجف الصباحي
      //3
      ["اللجنة الطبية المسائية في النجف الاشرف"],//النجف المسائي
      //4
      [
        "اللجنة الطبية الصباحية في محافظة الانبار"
        //"لا يوجد"
      ],//الانبار الصباحي
      //5
      ["اللجنة الطبية المسائية في محافظة الانبار"],//الانبار المسائي
      //6
      [
        //"لجنة العيادات الشعبية المركزية",
        "اللجنة الطبية المسائية في بابل"
      ],//بابل المسائي
      //7
      [
        //"اللجنة الطبية المسائية الثالثة في البصرة",
        "اللجنة الطبية المسائية الثانية في البصرة",
        "اللجنة الطبية المسائية الاولى في البصرة"
      ],//البصرة المسائي
      //8
      ["اللجنة الطبية المسائية في ميسان"],//ميسان المسائي
      //9
      ["اللجنة الطبية الصباحية في واسط"],//واسط الصباحي
      //10
      ["اللجنة الطبية الصباحية في المثنى"], //المثنى الصباحي
      //11
      ["اللجنة الطبية المسائية الثانية في كركوك"], //كركوك المسائي
      //12
      ["اللجنة الطبية الصباحية في كركوك"], //كركوك الصباحي
      //13
      ["اللجنة الطبية المسائية في كربلاء المقدسة"],//كربلاء المسائي
      //14
      [
        //"اللجنة الطبية الصباحية في كربلاء المقدسة"
        "لا يوجد"
      ],//كربلاء الصباحي
      //15
      ["اللجنة الطبية الصباحية في ديالى"],//ديالى الصباحي
      //16
      ["اللجنة الطبية المسائية في المفرق"],//ديالى المسائي
      //17
      ["اللجنة الطبية المسائية في الديوانية"],//الديوانية المسائي
      //18
      [
        "اللجنة الطبية الصباحية في تكريت"
      ],//صلاح الدين الصباحي
      //19
      [
        //"اللجنة الطبية المسائية في تكريت",
        "لجنة العيادات الشعبية المسائية في الشرقاط",
      ], //صلاح الدين المسائي
      //20
      [
        "اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايمن",
        "اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايسر",
        "لجنة العيادات الشعبية المركزية في نينوى",
      ],//نينوى الصباحي
      //21
      [
        "اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايسر",
        //"اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايمن",
      ],//نينوى المسائي
      //22
      [
        "اللجنة الطبية المسائية لفحص السياقة الاولى",
        "اللجنة الطبية المسائية لفحص السياقة الثانية",
      ],//ذي قار المسائي
      //23
      ["اللجنة الطبية الصباحية في بابل",],//بابل الصباحي
      //24
      [
        "لجنة العيادة الشعبية صدر ثانية صباحي",
        "لجنة العيادة الشعبية فخر الدين ال جميل",
        "لجنة العيادة الشعبية صليخ صباحي",
      ],//بغداد الرصافة صباحي
      //25
      [
        "لجنة العيادة الشعبية صدر ثانية مسائي",
        "لجنة العيادة الشعبية صليخ مسائي",
        //"لجنة العيادة الشعبية  فخر الدين ال جميل المسائي",
      ],//بغداد الرصافة مسائي
      //26
      [
        "اللجنة الطبية الصباحية في البصرة", //البصرة الصباحي
      ],
      //27
      ["لا يوجد"],//اخرى
    ];
     var getdistn = [
      [
        //"٨ صباحا", 
        "٩ صباحا",
        "١٠ صباحا",
        "١١ صباحا",
        "١٢ ظهرا",
        //"١ مساءا"
      ],//0

       [
        //"٢ مساءا",
        //"٣ مساءا",
        "٤ مساءا",
        "٥ مساءا",
        "٦ مساءا",
        //"٧ مساءا",
        //"٣ ونصف مساءا",
        //"٤ ونصف مساءا",
        //"٥ ونصف مساءا",
        //"٦ ونصف مساءا",
      ],//1
       ["لا يوجد"]//2
    ];

    if (event == "صباحي"){
      this.inputFormField["MorningTime"] = null;//موعد المراجعه

      if(FirstD.includes(this.inputFormField.governorate) && FirstD1.includes(this.inputFormField.GOVValues)){
        this.group_of_form[0].fields[3].properties[0].values = names[0];//بغداد الكرخ

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];
    }else if(thirdD.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[4];//الانبار

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];
      }else if(FifthD.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[2];//النجف الاشرف

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];
      }else if(seventh.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[9];//واسط

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];//صباحي
      }else if(eigth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[10];//المثنى

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];//صباحي
      }else if(ninth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[12];//كركوك

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];//صباحي
      }else if (tenth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[14];//كربلاء

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];//صباحي
      }else if(eleventh.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[15];//ديالى

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];//صباحي
      }else if(threeteenth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[18];//صلاح الدين

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];//صباحي
      }else if(fourteenth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[20];//نينوى

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];//صباحي
      }else if(FourthD.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[23];//بابل

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];//صباحي
      }else if(FirstD.includes(this.inputFormField.governorate) && FirstD2.includes(this.inputFormField.GOVValues)){
        this.group_of_form[0].fields[3].properties[0].values = names[24];//بغداد الرصافة

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];
      }else if(SecondD.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[26];//البصرة

        this.group_of_form[0].fields[5].properties[0].values = getdistn[0];
      }else{
        this.group_of_form[0].fields[3].properties[0].values = names[27];//اخرى

        this.group_of_form[0].fields[5].properties[0].values = getdistn[2];//اخرى
      }
    }else if(event == "مسائي"){
      this.inputFormField["MorningTime"] = null;//موعد المراجعه

      if(FirstD.includes(this.inputFormField.governorate) && FirstD1.includes(this.inputFormField.GOVValues)){
        this.group_of_form[0].fields[3].properties[0].values = names[1];//بغداد الكرخ

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else if(SecondD.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[7];//البصرة

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else if(thirdD.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[5];//الانبار

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else if(FourthD.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[6];//بابل

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else if(FifthD.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[3];//النجف

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else if(ninth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[11];//كركوك

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else if(tenth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[13];//كربلاء

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else if(eleventh.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[16];//ديالى

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else if(sixth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[8];//ميسان

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];//مسائي
      }else if(tewelveth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[17];//الديوانية

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];//مسائي
      }else if(threeteenth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[19];//الديوانية

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];//مسائي
      }else if(fourteenth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[21];//نينوى

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];//مسائي
      }else if(fifteenth.includes(this.inputFormField.governorate)){
        this.group_of_form[0].fields[3].properties[0].values = names[22];//ذي قار

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];//مسائي
      }else if(FirstD.includes(this.inputFormField.governorate) && FirstD2.includes(this.inputFormField.GOVValues)){
        this.group_of_form[0].fields[3].properties[0].values = names[25];//بغداد الرصافة

        this.group_of_form[0].fields[5].properties[0].values = getdistn[1];
      }else{
       this.group_of_form[0].fields[3].properties[0].values = names[27];//اخرى

       this.group_of_form[0].fields[5].properties[0].values = getdistn[2];//اخرى
      }
    }else{
      this.group_of_form[0].fields[3].properties[0].values = names[27];//اخرى
      
      this.group_of_form[0].fields[5].properties[0].values = getdistn[2];//اخرى
    }
  },

  PassKeyHide(event){
    this.inputFormField["pasText"] = null; // الرمز التعريفي الخاص باللجنة 
    if(event === "لجنة العيادات الشعبية المركزية" || event == "لجنة العيادات الشعبية المركزية في نينوى"){
      document.getElementById("52782").style.display = "block"; // الرمز التعريفي الخاص باللجنة 
    }else{
      document.getElementById("52782").style.display = "none"; // الرمز التعريفي الخاص باللجنة 
    }

    var Locations = [
      ["الصليخ / داخل بناية المركز الصحي في الصليخ الأول / قرب جسر الشعب"], //لجنة الصليخ مسائي وصباحي
      ["شارع النضال / قرب القصر الأبيض"],//لجان فخر الدين ال جميل
      ["الإسكان / شارع 30 / قرب جامع الإسكان"],//لجان الاسكان
      ["العلاوي / الصالحية خلف السينما / شارع النجارين / قرب  مدرسة النبوغ الإبتدائية"], //لجان اسماعيل ناجي
      ["مدينة الصدر / قطاع 3 /  مجاور مركز شرطة المنتظر"], //لجان الصدر الثانية
      ["البياع / شارع 20 /  مقابل مصرف الرشيد"], //لجان البياع
      ["كربلاء / شارع قبلة الإمام الحسين / بناية شعبة اللجان الطبية / مقابل المكتبة المركزية"], //لجان كربلاء
      ["واسط / شارع المشروع / قرب المدينة الطبية",],//لجان واسط
      ["الموصل / الجانب الأيسر / حي القاهرة / قرب جامع صالح ضعينة",],//لجان الموصل الجانب الايسر
      ["الموصل / الجانب الأيمن / قرب معمل النسيج",],//لجان الموصل الجانب الايمن
      ["صلاح الدين / تكريت / حي العصري / مجاور مركز الشرطة"],//لجان تكريت
      ["صلاح الدين / الشرقاط / قرب مستشفى الشرقاط العام",],//لجان تكريت / شرقاط
      ["الأنبار / الرمادي / حي المعلمين / شارع مول الرمادي الجديد / قرب دائرة صحة الأنبار",],//لجان الانبار
      ["الديوانية / حي الجمهوري / بناية إعدادية التمريض سابقاً / مجاور الهلال الأحمر القديم",],//لجان الديوانية
      ["ميسان / حي الإسكان / مبنى مستشفى الطفل والولادة / قرب مصرف الدم المركزي",],//لجان ميسان
      ["الحلة / نهاية شارع 80 / مقابل مجمع القضاة",],//لجان الحلة
      ["المثنى / حي الإعلام / قرب مديرية الوقف الشيعي",],//لجان المثنى
      ["طريق بغداد / قرب إعدادية صناعة كركوك",],//لجان كركوك
      ["البصرة / منطقة التحسينية / مقابل متوسطة التقدم",],//لجنة البصرة المسائية الاولى
      ["البصرة / منطقة الجمهورية / قرب ملعب الجمهورية",],//لجنة البصرة المسائية الثانية
      ["البصرة / حي الكفاءات / قرب مركز الأمراض الصدرية ",],//لجنة البصرة المسائية الثالثة
      ["الناصرية / مركز حي المعلمين الصحي / تقاطع أريدو / قرب مبنى الأدلة الجنائية",],//لجنة ذي قار مسائية اولى
      ["ذي قار / شارع النيل / في بناية قسم الصحة العامة / قرب دائرة التقاعد",],//لجنة ذي قار مسائية ثانية
      ["النجف / حي الصحة / مقابل مركز شرطة الكرار",],//لجان النجف
      ["ديالى / موقع مديرية مرور ديالى",],//لجان ديالى الصباحية
      ["بعقوبة / شارع المستشفى / أستشارية مستشفى بعقوبة التعليمي",],//لجان ديالى مسائي مفرق
    ],
    Lijna_Name = [
      ["لجنة العيادة الشعبية صليخ صباحي", "لجنة العيادة الشعبية صليخ مسائي",],//لجان الصليخ
      ["لجنة العيادة الشعبية فخر الدين ال جميل",],//فخر الدين ال جميل
      ["لجنة العيادة الطبية الشعبية الاسكان الصباحي",],//الاسكان
      ["لجنة العيادة الشعبية اسماعيل ناجي صباحي", "لجنة العيادة الشعبية اسماعيل ناجي مسائي",],//لجان اسماعيل ناجي
      ["لجنة العيادة الشعبية صدر ثانية صباحي", "لجنة العيادة الشعبية صدر ثانية مسائي",],//لجان الصدر الثانية
      ["لجنة العيادة الطبية الشعبية البياع الصباحي", "لجنة العيادة الطبية الشعبية البياع المسائي",],//لجان البياعي
      ["اللجنة الطبية المسائية في كربلاء المقدسة", "اللجنة الطبية الصباحية في كربلاء المقدسة",],//لجان كربلاء
      ["اللجنة الطبية الصباحية في واسط",],//لجان واسط
      ["اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايسر", "اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايسر",],//الموصل الجانب الايسر
      ["اللجنة الطبية المسائية لفحص السياقة في مرور الجانب الايمن", "اللجنة الطبية الصباحية لفحص السياقة في موقع مرور الجانب الايمن",],//االموصل الجنب الايمن
      ["اللجنة الطبية المسائية في تكريت", "اللجنة الطبية الصباحية في تكريت"],//لجان تكريت
      ["لجنة العيادات الشعبية المسائية في الشرقاط",],//لجان تكريت / شرقاط
      ["اللجنة الطبية المسائية في محافظة الانبار", "اللجنة الطبية الصباحية في محافظة الانبار"],//لجان الانبار
      ["اللجنة الطبية المسائية في الديوانية"],//لجان الديوانية
      ["اللجنة الطبية المسائية في ميسان"],//لجان ميسان
      ["اللجنة الطبية الصباحية في بابل", "اللجنة الطبية المسائية في بابل"],//لجان بابل
      ["اللجنة الطبية الصباحية في المثنى"],//لجان المثنى
      ["اللجنة الطبية الصباحية في كركوك", "اللجنة الطبية المسائية الثانية في كركوك"],//لجان كركوك
      ["اللجنة الطبية المسائية الاولى في البصرة"],//لجنة البصرة المسائية الاولى
      ["اللجنة الطبية المسائية الثانية في البصرة", "اللجنة الطبية الصباحية في البصرة"],//لجنة البصرة المسائية الثانية
      ["اللجنة الطبية المسائية الثالثة في البصرة",],//لجنة البصرة المسائية الثالثة
      ["اللجنة الطبية المسائية لفحص السياقة الاولى",],//لجنة ذي قار مسائية اولى
      ["اللجنة الطبية المسائية لفحص السياقة الثانية",],//لجنة ذي قار مسائية ثانية
      ["اللجنة الطبية المسائية في النجف الاشرف", "اللجنة الطبية الصباحية  في النجف الاشرف"],//لجان النجف
      ["اللجنة الطبية الصباحية في ديالى"],//لجان ديالى الصباحية
      ["اللجنة الطبية المسائية في المفرق"],//لجان ديالى مسائي مفرق
    ];

    for(var i = 0; i < Lijna_Name.length; i++){
      if(Lijna_Name[i].includes(event)){
        this.inputFormField.LijnaPlace = Locations[i].join('');
        break;
      }else{
        this.inputFormField.LijnaPlace = [""].join('');
      }
    }
  },

  First_Hide(event){
    if(event == "بغداد"){
      document.getElementById("72901").style.display = "block";
      this.inputFormField["GOVValues"] = null;
    }else{
      document.getElementById("72901").style.display = "none";
      this.inputFormField["GOVValues"] = null;
    }
  },
}