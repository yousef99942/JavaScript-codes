{
    //المعلومات الشخصية
    //هل المنتسب مستمر بالعمل داخل المديرية ؟
    First_Hide(event){
        this.inputFormField["Typeeee"] = null; //يرجى تحديد سبب عدم الاستمرار داخل المديرية
        if(event === "كلا"){
            document.getElementById("93243").style.display = "block"; //يرجى تحديد سبب عدم الاستمرار داخل المديرية
        }else{
            document.getElementById("93243").style.display = "none"; //يرجى تحديد سبب عدم الاستمرار داخل المديرية
        }
    },

    //المحافظة
    First_Filter(event){
        this.inputFormField["district"] = null;
        let Values = [
            {
                Selected_Value: "الانبار", 
                Showed_Value: [
                    "بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية", "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات", "الفلوجة",
                    "القائم", "كبيسة", "الكرمة", "النخيب", "هيت", "الوفاء", "الوليد",
                ]
            },
            {
                Selected_Value: "بابل", 
                Showed_Value: [
                    "أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", "المشروع", "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة",
                    "جرف النصر (جرف الصخر)", "سدة الهندية",
                ]
            },
            {
                Selected_Value: "بغداد", 
                Showed_Value: [
                    "ابي غريب", "العبايجي", "الفحامة", "الفرات", "الكرخ", "الكاظمية", "اللطيفية", "المحمودية", "المأمون", "المنصور", "المشاهدة", "اليوسفية", "النصر والسلام",
                    "الرشيد", "الطارمية",//الكرخ
                    "ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة", "الراشدية", "الرصافة", "الصديق الاكبر", "الصدر الاولى", "الصدر الثانية",
                    "التاجي", "الزهور", "بغداد الجديدة", "ذات السلاسل", "فلسطين",//الرصافة
                ]
            },
            {
                Selected_Value: "البصرة", 
                Showed_Value: [
                    "أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة", "الثغر", "الشهيد عز الدين سليم", "الزبير", "سفوان", "شط العرب",
                    "طلحة", "أم قصر", "الامام الصادق",
                ]
            },
            {
                Selected_Value: "ديالى", 
                Showed_Value: [
                    "أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية", "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز", "هبهب",
                    "جبارة", "جلولاء", "كنعان", "خانقين", "مندلي", "قرة تبة", "سيف سعد",
                ]
            },
            {
                Selected_Value: "ذي قار", 
                Showed_Value: [
                    "الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح", "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار",
                    "أور", "كرمة بني سعد", "قلعة سكر", "سيد دخيل", "سوق الشيوخ", "عكيكة",
                ]
            },
            {
                Selected_Value: "صلاح الدين", 
                Showed_Value: [
                    "الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية", "بيجي", "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت",
                    "طوز خورماتو", "يثرب", "العوجة",
                ]
            },
            {
                Selected_Value: "القادسية", 
                Showed_Value: [
                    "الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية", "الشنافية", "الصلاحية", "السنية", "السدير", "غماس", "نفر", "سومر",  
                ]
            },
            {
                Selected_Value: "كركوك", 
                Showed_Value: [
                    "دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق", "كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان", "تازة",
                    "يايجي",
                ]
            },
            {
                Selected_Value: "كربلاء المقدسة", 
                Showed_Value: ["عين تمر", "الهندية", "الحر", "الحسينية", "الجدول الغربي", "ناحية الخيرات", "كربلاء",]
            },
            {
                Selected_Value: "المثنى", 
                Showed_Value: ["الدراجي", "البصية", "الهلال", "الكرامة", "الخضر", "المجد", "الوركاء", "النجمي", "الرميثة", "السلمان", "السماوة", "السوير",]
            },
            {
                Selected_Value: "ميسان", 
                Showed_Value: [
                    "العدل", "العمارة", "علي الغربي", "علي الشرقي", "الكحلاء", "الخير", "الميمونة", "المجر الكبير", "المشرح", "العزيز", "سيد أحمد الرفاعي", "السلام", "بني هاشم",
                    "كميت", "قلعة صالح",
                ]
            },
            {
                Selected_Value: "النجف الاشرف",
                Showed_Value: ["العباسية", "الحيدرية", "الحيرة", "الحرية", "الكوفة", "المناذرة", "المشخاب", "القادسية", "النجف", "الشبكة",]
            },
            {
                Selected_Value: "نينوى", 
                Showed_Value: [
                    "العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان", "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة", "برطلة",
                    "الحمدانية (بغديدا)", "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة", "سنجار", "تلعفر", "تلكيف", "وانة", "زيلكان",
                    "زمار", "الفاروق",
                ]
            },
            {
                Selected_Value:  "واسط", 
                Showed_Value: [
                    "الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت", "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة",
                    "جصان", "شيخ سعد", "الحفرية (تاج الدين)", "ناحية واسط",
                ]
            },
        ];

        const Result = Values.find((Finding) => Finding.Selected_Value === event);
        if (Result) {
            this.group_of_form[0].fields[10].properties[0].values = Result.Showed_Value;
        }else{
            this.group_of_form[0].fields[10].properties[0].values = [];
        }
    },

    //استمارة بيان قيام الزوجية وعدد الاولاد
    //الحالة الاجتماعية
    Second_Hide(event){
        //الاسماء البرمجية
        const Fields_Prog = [
            "birthdaymarried", // تاريخ الزواج
            "namespouwife",    // اسم الزوج ( الزوجة)
            "birthdayabsoiute", // تاريخ الطلاق
            "cardspouwife",    // رقم البطاقة الوطنية للزوج ( الزوجة)
            "birthdaydeath",   // تاريخ وفاة الزوج ( الزوجة)
            "salary",          // هل الزوجة ربة بيت وليس لها دخل ؟
            "associate",       // هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
            "HusbandEarner",   // هل ( الزوج / الزوجة) كاسب ؟
            "ReturmintType",   // هل (الزوج / الزوجة) متقاعد؟
            "combinesalary",   // هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
            "FirstTable"       // اسماء الابناء
        ],
        //متزوج
        First_Option = [
            "87252", // تاريخ الزواج
            "87253", // اسم الزوج ( الزوجة)
            "87255"  // رقم البطاقة الوطنية للزوج ( الزوجة)
        ];

        const Values = [
            {
                Selected_Value: "متزوج",
                Showed_Fields: [...First_Option],
                Hide_Fields: [
                    "87254", // تاريخ الطلاق
                    "87256", // تاريخ وفاة الزوج ( الزوجة)
                ],
            },
            {
                Selected_Value: "أرمل",
                Showed_Fields: [
                    "87256", // تاريخ وفاة الزوج ( الزوجة)
                ],
                Hide_Fields: [
                    ...First_Option,
                    "87254" // تاريخ الطلاق
                ],
            },
            {
                Selected_Value: "مطلق",
                Showed_Fields: [
                    "87254" // تاريخ الطلاق
                ],
                Hide_Fields: [
                    ...First_Option,
                    "87256", // تاريخ وفاة الزوج ( الزوجة)
                ],
            },
        ];

        //تفريغ الحقول
        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);
        const Result = Values.find((Finding) => this.inputFormField.maritstatus === Finding.Selected_Value);
        if(Result){
            document.getElementById("89137").style.display = "block"; //اسماء الابناء
            Result.Showed_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
            Result.Hide_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }else{
            [...First_Option, "87254", "87256"].forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
            document.getElementById("89137").style.display = "none"; //اسماء الابناء
        }

        this.inputFormField["salary"] = null; //هل الزوجة ربة بيت وليس لها دخل ؟
        this.inputFormField["associate"] = null; // هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
        this.inputFormField["combinesalary"] = null; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
        if(this.inputFormField.maritstatus === "متزوج" && this.inputFormField.gender === "ذكر"){
            document.getElementById("87260").style.display = "none"; //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
            document.getElementById("87258").style.display = "block"; // هل الزوجة ربة بيت وليس لها دخل ؟
            document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
        }else if(this.inputFormField.maritstatus === "متزوج" && this.inputFormField.gender === "انثى"){
            document.getElementById("87260").style.display = "block"; //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
            document.getElementById("87258").style.display = "none"; // هل الزوجة ربة بيت وليس لها دخل ؟
            document.getElementById("87322").style.display = "block"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
        }else{
            document.getElementById("87260").style.display = "none"; //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
            document.getElementById("87258").style.display = "none"; // هل الزوجة ربة بيت وليس لها دخل ؟
            document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
        }
    },

    //هل الزوجة ربة بيت وليس لها دخل ؟
    Third_Hide(event){
        this.inputFormField["associate"] = null; //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
        this.inputFormField["combinesalary"] = null; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
        if(event === "كلا"){
            document.getElementById("87260").style.display = "block"; //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
            document.getElementById("87322").style.display = "block"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
        }else{
            document.getElementById("87260").style.display = "none"; //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
            document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
        }
    },

    //هل الزوجة ( الزوج ) منتسبا ( موظفة / موظف)؟
    Fourth_Hide(event){
        this.inputFormField["HusbandEarner"] = null; //هل ( الزوج / الزوجة) كاسب ؟
        if(event == "كلا"){
            document.getElementById("94045").style.display = "block"; //هل ( الزوج / الزوجة) كاسب ؟
        }else{
            document.getElementById("94045").style.display = "none"; //هل ( الزوج / الزوجة) كاسب ؟
        }
    },

    //هل ( الزوج / الزوجة) كاسب ؟
    Fifth_Hide(event){
        this.inputFormField["ReturmintType"] = null; //هل (الزوج / الزوجة) متقاعد؟
        if(event === "كلا"){
            document.getElementById("94128").style.display = "block"; //هل (الزوج / الزوجة) متقاعد؟
        }else{
            document.getElementById("94128").style.display = "none"; //هل (الزوج / الزوجة) متقاعد؟
        }
    },
}