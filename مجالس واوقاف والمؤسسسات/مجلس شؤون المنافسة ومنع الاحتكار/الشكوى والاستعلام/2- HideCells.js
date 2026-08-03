{
  getsubCities(event){
      this.inputFormField["district"] = null;

        let Values = [
            {
                Seletced_Value: "الانبار",
                Showed_Values: ["بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية", "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات",
                    "الفلوجة", "القائم", "كبيسة", "الكرمة", "النخيب", "هيت", "الوفاء", "الوليد"],
            },
            {
                Seletced_Value: "بابل",
                Showed_Values: ["أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", "المشروع", "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة",
                    "جرف النصر (جرف الصخر)", "سدة الهندية"],
            },
            {
                Seletced_Value: "بغداد",
                Showed_Values: ["ابي غريب", "العبايجي", "الفحامة", "الفرات", "الكرخ", "الكاظمية", "اللطيفية", "المحمودية", "المأمون", "المنصور", "المشاهدة", "اليوسفية",
                    "النصر والسلام", "الرشيد", "الطارمية", //الكرخ
                    "ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة", "الراشدية", "الرصافة", "الصديق الاكبر", "الصدر الاولى", "الصدر الثانية",
                    "التاجي", "الزهور", "بغداد الجديدة", "ذات السلاسل", "شارع فلسطين" //الرصافة
                ],
            },
            {
                Seletced_Value: "البصرة",
                Showed_Values: ["أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة", "الثغر", "الشهيد عز الدين سليم", "الزبير", "سفوان",
                    "شط العرب", "طلحة", "أم قصر", "الامام الصادق"],
            },
            {
                Seletced_Value: "ديالى",
                Showed_Values: ["أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية", "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز",
                    "هبهب", "جبارة", "جلولاء", "كنعان", "خانقين", "مندلي", "قرة تبة", "سيف سعد"],
            },
            {
                Seletced_Value: "ذي قار",
                Showed_Values: ["الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح", "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة",
                    "الطار", "أور", "كرمة بني سعد", "قلعة سكر", "سيد دخيل", "سوق الشيوخ", "عكيكة"],
            },
            {
                Seletced_Value: "صلاح الدين",
                Showed_Values: ["الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية", "بيجي", "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت",
                    "طوز خورماتو", "يثرب", "العوجة"],
            },
            {
                Seletced_Value: "القادسية",
                Showed_Values: ["الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية", "الشنافية", "الصلاحية", "السنية", "السدير", "غماس", "نفر",
                    "سومر"],
            },
            {
                Seletced_Value: "كركوك",
                Showed_Values: ["دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق", "كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان",
                    "تازة", "يايجي"],
            },
            {
                Seletced_Value: "كربلاء المقدسة",
                Showed_Values: ["عين تمر", "الهندية", "الحر", "الحسينية", "الجدول الغربي", "ناحية الخيرات", "كربلاء"],
            },
            {
                Seletced_Value: "المثنى",
                Showed_Values: ["الدراجي", "البصية", "الهلال", "الكرامة", "الخضر", "المجد", "الوركاء", "النجمي", "الرميثة", "السلمان", "السماوة", "السوير"],
            },
            {
                Seletced_Value: "ميسان",
                Showed_Values: ["العدل", "العمارة", "علي الغربي", "علي الشرقي", "الكحلاء", "الخير", "الميمونة", "المجر الكبير", "المشرح", "العزيز", "سيد أحمد الرفاعي", "السلام",
                    "بني هاشم", "كميت", "قلعة صالح"],
            },
            {
                Seletced_Value: "النجف الاشرف",
                Showed_Values: ["العباسية", "الحيدرية", "الحيرة", "الحرية", "الكوفة", "المناذرة", "المشخاب", "القادسية", "النجف", "الشبكة"],
            },
            {
                Seletced_Value: "نينوى",
                Showed_Values: ["العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان", "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة",
                    "الحمدانية (بغديدا)", "برطلة", "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة", "سنجار", "تلعفر", "تلكيف", "وانة",
                    "زيلكان", "زمار", "الفاروق"],
            },
            {
                Seletced_Value: "واسط",
                Showed_Values: ["الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت", "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية",
                    "بدرة", "جصان", "شيخ سعد", "الحفرية (تاج الدين)", "ناحية واسط"],
            },
        ];

        let Result = Values.find((Finding) => Finding.Seletced_Value === event);

        if(Result){
            this.group_of_form[2].fields[8].properties[0].values = Result.Showed_Values;
            document.getElementById("51327").style.display = "block"; 
        }else{
            this.group_of_form[2].fields[8].properties[0].values = [];
            document.getElementById("51327").style.display = "none";
        }
    },

  request_func(event){
      var Fields_Progs = [
        //"طلب استعلام"
        "farstname", "seconednamet", "thardnamet", "fourthnamee", "arwatwoo",
        //"طلب شكوى"
        "name", "nametwo", "nameth", "nameone", "nametwoo", "nabaathrd", "governorate", "district", "compsubj", "compcomp",
        "compimpact", "compapply", "compproce"
      ];

      Fields_Progs.forEach((Clearing) => this.inputFormField[Clearing] = null);

      let Values = [
        {
            Selected_Value: "طلب استعلام",
            Showed_Group: "33585_group",
            Hidden_Group: "23341_group",
            Info_Feilds: ["farstname", "seconednamet", "thardnamet", "fourthnamee"],
            Get_Info: [this.user.first_name, this.user.middle_name, this.user.last_name, this.user.forth_name],
        },
        {
            Selected_Value: "طلب شكوى",
            Showed_Group: "23341_group",
            Hidden_Group: "33585_group",
            Info_Feilds: ["nameone", "nametwoo", "nabaathrd"],
            Get_Info: [this.user.first_name, this.user.middle_name, this.user.last_name],
        },
      ];

      let Result = Values.find((Finding) => event === Finding.Selected_Value);

      if(Result){
        document.getElementById(Result.Showed_Group).style.display = "block";
        document.getElementById(Result.Hidden_Group).style.display = "none";

        // for(var i = 0; i < Result.Info_Feilds.length; i++){
        //     this.inputFormField[Result.Info_Feilds[i]] = Result.Get_Info[i];
        //     document.getElementsByName(Result.Info_Feilds[i])[0].disabled = true;
        // }
      }else{
        document.getElementById("33585_group").style.display = "none";
        document.getElementById("23341_group").style.display = "none";
      }
  },

  FirstHide(event){
    this.inputFormField["compproce"] = null;
    if(event == "نعم"){
    document.getElementById("51344").style.display = "block";
    }else{
    document.getElementById("51344").style.display = "none";
    }
  },
}