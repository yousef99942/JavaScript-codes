{
    First_Function(event, Field_Location, Fields_Prog, Field_ID){
        //تفريغ حقل الاقضية
        this.inputFormField[Fields_Prog] = null;
        
        let Values = [
            {
                Selected_Value: "الانبار", Showed_Value: [
                    "بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية", "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات", "الفلوجة",
                    "القائم", "كبيسة", "الكرمة", "النخيب", "هيت", "الوفاء", "الوليد",
                ]
            },//"الانبار"
            {
                Selected_Value: "بابل", Showed_Value: [
                    "أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", "المشروع", "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة",
                    "جرف النصر (جرف الصخر)", "سدة الهندية",
                ]
            },//"بابل"
            {
                Selected_Value: "بغداد", Showed_Value: [
                    "ابي غريب", "العبايجي", "الفحامة", "الفرات", "الكرخ", "الكاظمية", "اللطيفية", "المحمودية", "المأمون", "المنصور", "المشاهدة", "اليوسفية", "النصر والسلام",
                    "الرشيد", "الطارمية",//الكرخ
                    "ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة", "الراشدية", "الرصافة", "الصديق الاكبر", "الصدر الاولى", "الصدر الثانية",
                    "التاجي", "الزهور", "بغداد الجديدة", "ذات السلاسل", "فلسطين",//الرصافة
                ]
            },//"بغداد"
            {
                Selected_Value: "البصرة", Showed_Value: [
                    "أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة", "الثغر", "الشهيد عز الدين سليم", "الزبير", "سفوان", "شط العرب",
                    "طلحة", "أم قصر", "الامام الصادق",
                ]
            }, //"البصرة"
            {
                Selected_Value: "ديالى", Showed_Value: [
                    "أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية", "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز", "هبهب",
                    "جبارة", "جلولاء", "كنعان", "خانقين", "مندلي", "قرة تبة", "سيف سعد",
                ]
            }, //"ديالى"
            {
                Selected_Value: "ذي قار", Showed_Value: [
                    "الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح", "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار", "أور",
                    "كرمة بني سعد", "قلعة سكر", "سيد دخيل", "سوق الشيوخ", "عكيكة",
                ]
            }, //"ذي قار"
            {
                Selected_Value: "صلاح الدين", Showed_Value: [
                    "الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية", "بيجي", "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت",
                    "طوز خورماتو", "يثرب", "العوجة",
                ]
            }, //"صلاح الدين"
            {
                Selected_Value: "القادسية", Showed_Value: [
                    "الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية", "الشنافية", "الصلاحية", "السنية", "السدير", "غماس", "نفر", "سومر",
                ]
            }, //"القادسية"
            {
                Selected_Value: "كركوك", Showed_Value: [
                    "دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق","كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان", "تازة",
                    "يايجي",
                ]
            }, //"كركوك"
            {
                Selected_Value: "كربلاء المقدسة", Showed_Value: ["عين تمر", "الهندية", "الحر", "الحسينية", "الجدول الغربي", "ناحية الخيرات", "كربلاء",]
            }, //"كربلاء المقدسة"
            {
                Selected_Value: "المثنى", Showed_Value: ["الدراجي", "البصية", "الهلال", "الكرامة", "الخضر", "المجد", "الوركاء", "النجمي", "الرميثة", "السلمان", "السماوة", "السوير",]
            }, //"المثنى"
            {
                Selected_Value: "ميسان", Showed_Value: [
                    "العدل", "العمارة", "علي الغربي", "علي الشرقي", "الكحلاء", "الخير", "الميمونة", "المجر الكبير", "المشرح", "العزيز", "سيد أحمد الرفاعي", "السلام", "بني هاشم",
                    "كميت", "قلعة صالح",
                ]
            }, //"ميسان"
            {
                Selected_Value: "النجف الاشرف", Showed_Value: ["العباسية", "الحيدرية", "الحيرة", "الحرية", "الكوفة", "المناذرة", "المشخاب", "القادسية", "النجف", "الشبكة",]
            }, //"النجف الاشرف"
            {
                Selected_Value: "نينوى", Showed_Value: [
                    "العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان", "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة",
                    "الحمدانية (بغديدا)", "برطلة", "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة", "سنجار", "تلعفر", "تلكيف", "وانة",
                    "زيلكان", "زمار", "الفاروق",
                ]
            }, //"نينوى"
            {
                Selected_Value: "واسط", Showed_Value: [
                    "الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت", "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة",
                    "جصان", "شيخ سعد", "الحفرية (تاج الدين)", "ناحية واسط",
                ]
            }, //"واسط"
        ];

        let Result = Values.find((Finding) => event == Finding.Selected_Value);
        if(Result){
            document.getElementById(Field_ID).style.display = "block";
            this.group_of_form[0].fields[Field_Location].properties[0].values = Result.Showed_Value;
        }else{
        document.getElementById(Field_ID).style.display = "none";
            this.group_of_form[0].fields[Field_Location].properties[0].values = [];
        }
    },

    First_Hide(event){
        let Values = [
            {
                Selected_Value: "نقل داخل المحافظة",
                Block_Fields: [
                    "69614", //القضاء الحالي
                    "69639", //القضاء الذي  ينقل الاثاث اليه
                ],
                None_Fields: [
                    "69612", //المحافظة الحالية
                    "69637", //المحافظة الذي  ينقل الاثاث اليها
                ],
                First_Field: true, //القضاء الحالي
                Second_Field: true, //القضاء الذي  ينقل الاثاث اليه
            },
            {
                Selected_Value: "نقل من محافظة الانبار الى محافظة اخرى",
                Block_Fields: [
                    "69614", //القضاء الحالي
                    "69637", //المحافظة الذي  ينقل الاثاث اليها
                ],
                None_Fields: [
                    "69612", //المحافظة الحالية
                    "69639", //القضاء الذي  ينقل الاثاث اليه
                ],
                First_Field: true, //القضاء الحالي
                Second_Field: false, //القضاء الذي  ينقل الاثاث اليه
            },
            {
                Selected_Value: "نقل من محافظة اخرى الى محافظة الانبار",
                Block_Fields: [
                    "69612", //المحافظة الحالية
                    "69639", //القضاء الذي  ينقل الاثاث اليه
                ],
                None_Fields: [
                    "69614", //القضاء الحالي
                    "69637", //المحافظة الذي  ينقل الاثاث اليها
                ],
                First_Field: false, //القضاء الحالي
                Second_Field: true, //القضاء الذي  ينقل الاثاث اليه
            }
        ];

        //تفريغ الحقول
        var Fields_Prog = [
            "governorate", //المحافظة الحالية
            "district", //القضاء الحالي
            "Governoratet", //المحافظة الذي  ينقل الاثاث اليها
            "Judiciary", //القضاء الذي  ينقل الاثاث اليه
        ];
        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);

        let Result = Values.find((Finding) => event === Finding.Selected_Value);
        if(Result){
            Result.Block_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
            Result.None_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
            if(Result.First_Field){
                this.First_Function("الانبار", 15, "district", "69614");
            }
            if(Result.Second_Field){
                this.First_Function("الانبار", 18, "Judiciary", "69639");
            }
        }else{
            ["69612", "69614", "69637", "69639",].forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }
    },

    Second_Hide(event){
        let First_Selected_Value = [
            "بغداد", "بابل", "البصرة", "ذي قار", "المثنى", "كركوك", "واسط", "كربلاء المقدسة", "النجف الاشرف", "القادسية", "صلاح الدين", "ديالى", "نينوى", "ميسان",
        ],
        Second_Selected_Value = ["اربيل", "سليمانية", "دهوك",];
        if(First_Selected_Value.includes(event)){
            this.First_Function(event, 15, "district", "69614");
            document.getElementById("90783").style.display = "none"; //القضاء الحالي.
        }else if(Second_Selected_Value.includes(event)){
            document.getElementById("69614").style.display = "none"; //القضاء الحالي
            document.getElementById("90783").style.display = "block"; //القضاء الحالي.
        }else{
            document.getElementById("69614").style.display = "none"; //القضاء الحالي
            document.getElementById("90783").style.display = "none"; //القضاء الحالي.
        }
    },

    Third_Hide(event){
        let First_Selected_Value = [
            "بغداد", "بابل", "البصرة", "ذي قار", "المثنى", "كركوك", "واسط", "كربلاء المقدسة", "النجف الاشرف", "القادسية", "صلاح الدين", "ديالى", "نينوى", "ميسان",
        ],
        Second_Selected_Value = ["اربيل", "سليمانية", "دهوك",];
        if(First_Selected_Value.includes(event)){
            this.First_Function(event, 18, "Judiciary", "69639");
            document.getElementById("90784").style.display = "none";
        }else if(Second_Selected_Value.includes(event)){
            document.getElementById("69639").style.display = "none";
            document.getElementById("90784").style.display = "block";
        }else{
            document.getElementById("69639").style.display = "none";
            document.getElementById("90784").style.display = "none";
        }
    },
}