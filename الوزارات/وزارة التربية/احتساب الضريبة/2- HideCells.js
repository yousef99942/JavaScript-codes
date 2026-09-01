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
    //
    // ملاحظة التصحيح:
    // أضفنا المعامل الثاني isRestore (افتراضياً false).
    // عندما تكون isRestore = true (أي أن الدالة استُدعيت لمجرد استعادة/إعادة رسم
    // حالة الصفحة عند العودة إليها، وليس بسبب تغيير فعلي من المستخدم)،
    // لا نقوم بتصفير قيم الحقول الفرعية، ونعيد أيضاً تطبيق منطق Third_Hide
    // بناءً على القيمة المحفوظة فعلياً لحقل "salary" بدلاً من افتراض أنها فارغة.
    Second_Hide(event, isRestore = false){
        //الاسماء البرمجية
        const Fields_Prog = [
            "birthdaymarried",  // تاريخ الزواج
            "namespouwife",     // اسم الزوج ( الزوجة)
            "birthdayabsoiute", // تاريخ الطلاق
            "cardspouwife",     // رقم البطاقة الوطنية للزوج ( الزوجة)
            "birthdaydeath",    // تاريخ وفاة الزوج ( الزوجة)
            "salary",           // هل الزوجة ربة بيت وليس لها دخل ؟
            "combinesalary",    // هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
            "ChildStat",        //هل لدى المنتسب ابناء ؟
            "PartnerJobType",   //هل الزوج (الزوجة):
            "GettingSpousalAllowances", //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
        ];

        //تفريغ الحقول - فقط في حال لم تكن هذه عملية استعادة للحالة
        if(!isRestore){
            Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);
        }

        // حارس أمان: لا تُنفّذ منطق يعتمد على الجنس قبل أن يكون محمّلاً فعلياً
        // (هذا هو السبب الأساسي المرجّح لاختفاء الحقول الثلاثة عند العودة للصفحة)
        if(event === "متزوج" && !this.inputFormField.gender){
            return;
        }

        if(event === "متزوج"){
            document.getElementById("94443").style.display = "block"; // هل لدى المنتسب ابناء ؟
            document.getElementById("87252").style.display = "block"; // تاريخ الزواج
            document.getElementById("87253").style.display = "block"; // اسم الزوج ( الزوجة)
            document.getElementById("87255").style.display = "block"; // رقم البطاقة الوطنية للزوج ( الزوجة)
            document.getElementById("87254").style.display = "none";  // تاريخ الطلاق
            document.getElementById("87256").style.display = "none";  // تاريخ وفاة الزوج ( الزوجة)

            if(this.inputFormField.gender === "ذكر"){
                document.getElementById("87258").style.display = "block"; // هل الزوجة ربة بيت وليس لها دخل ؟
                document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
                document.getElementById("94694").style.display = "none"; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
                document.getElementById("94419").style.display = "none"; //هل الزوج (الزوجة):

                // عند الاستعادة: أعد تقييم الحقول الفرعية بناءً على القيمة
                // المحفوظة فعلياً لحقل "salary" بدلاً من تركها مخفية دائماً
                if(isRestore){
                    this.Third_Hide(this.inputFormField.salary, true);
                }
            }else if(this.inputFormField.gender === "انثى"){
                document.getElementById("87258").style.display = "none"; // هل الزوجة ربة بيت وليس لها دخل ؟
                document.getElementById("87322").style.display = "block"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
                document.getElementById("94694").style.display = "block"; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
                document.getElementById("94419").style.display = "block"; //هل الزوج (الزوجة):
            }else{
                document.getElementById("87258").style.display = "none"; // هل الزوجة ربة بيت وليس لها دخل ؟
                document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
                document.getElementById("94694").style.display = "none"; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
                document.getElementById("94419").style.display = "none"; //هل الزوج (الزوجة):
            }
        }else if(event === "أرمل"){
            document.getElementById("94443").style.display = "block"; // هل لدى المنتسب ابناء ؟
            document.getElementById("87256").style.display = "block"; // تاريخ وفاة الزوج ( الزوجة)
            document.getElementById("87252").style.display = "none"; // تاريخ الزواج
            document.getElementById("87253").style.display = "none"; // اسم الزوج ( الزوجة)
            document.getElementById("87255").style.display = "none"; // رقم البطاقة الوطنية للزوج ( الزوجة)
            document.getElementById("87254").style.display = "none"; // تاريخ الطلاق
            document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
            document.getElementById("87258").style.display = "none"; // هل الزوجة ربة بيت وليس لها دخل ؟
            document.getElementById("94419").style.display = "none"; //هل الزوج (الزوجة):
            document.getElementById("94694").style.display = "none"; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
        }else if(event === "مطلق"){
            document.getElementById("94443").style.display = "block"; // هل لدى المنتسب ابناء ؟
            document.getElementById("87256").style.display = "none"; // تاريخ وفاة الزوج ( الزوجة)
            document.getElementById("87252").style.display = "none"; // تاريخ الزواج
            document.getElementById("87253").style.display = "none"; // اسم الزوج ( الزوجة)
            document.getElementById("87255").style.display = "none"; // رقم البطاقة الوطنية للزوج ( الزوجة)
            document.getElementById("87254").style.display = "block"; // تاريخ الطلاق
            document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
            document.getElementById("87258").style.display = "none"; // هل الزوجة ربة بيت وليس لها دخل ؟
            document.getElementById("94419").style.display = "none"; //هل الزوج (الزوجة):
            document.getElementById("94694").style.display = "none"; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
        }else{
            document.getElementById("94443").style.display = "none"; // هل لدى المنتسب ابناء ؟
            document.getElementById("87256").style.display = "none"; // تاريخ وفاة الزوج ( الزوجة)
            document.getElementById("87252").style.display = "none"; // تاريخ الزواج
            document.getElementById("87253").style.display = "none"; // اسم الزوج ( الزوجة)
            document.getElementById("87255").style.display = "none"; // رقم البطاقة الوطنية للزوج ( الزوجة)
            document.getElementById("87254").style.display = "none"; // تاريخ الطلاق
            document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
            document.getElementById("87258").style.display = "none"; // هل الزوجة ربة بيت وليس لها دخل ؟
            document.getElementById("94419").style.display = "none"; //هل الزوج (الزوجة):
            document.getElementById("94694").style.display = "none"; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
        }
    },

    //هل الزوجة ربة بيت وليس لها دخل ؟
    //
    // ملاحظة التصحيح: أضفنا isRestore هنا أيضاً بنفس المنطق - عند الاستعادة
    // لا نقوم بتصفير الحقول التابعة (PartnerJobType, combinesalary,
    // GettingSpousalAllowances) قبل إعادة تقييمها.
    Third_Hide(event, isRestore = false){
        if(!isRestore){
            this.inputFormField["PartnerJobType"] = null; //هل الزوج (الزوجة):
            this.inputFormField["combinesalary"] = null; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
            this.inputFormField["GettingSpousalAllowances"] = null; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
        }
        if(event === "كلا"){
            document.getElementById("94419").style.display = "block"; //هل الزوج (الزوجة):
            document.getElementById("87322").style.display = "block"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
            document.getElementById("94694").style.display = "block"; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
        }else{
            document.getElementById("94419").style.display = "none"; //هل الزوج (الزوجة):
            document.getElementById("87322").style.display = "none"; //هل تطلب انت وزوجتك ( زوجك ) دمج المدخولات ( ضمن احتساب الضريبة ) ؟
            document.getElementById("94694").style.display = "none"; //هل الزوج (الزوجة) يتقاضى مخصصات الزوجية؟
        }
    },

    Fourth_Hide(event){
        this.inputFormField["GildAge"] = null; //هل لدى المنتسب أبناء بعمر 18 سنة فأكثر؟
        this.inputFormField["FirstTable"] = null; //اسماء الابناء
        this.inputFormField["WorkingChildren"] = null; //هل لدى المنتسب ابناء قد تم تعيينهم؟
        if(event === "نعم"){
            document.getElementById("94309").style.display = "block";
            document.getElementById("94484").style.display = "block";
            document.getElementById("94697").style.display = "block";
        }else{
            document.getElementById("94309").style.display = "none";
            document.getElementById("94484").style.display = "none";
            document.getElementById("94697").style.display = "none";
        }
    },

    // ملاحظة التصحيح: عند العودة إلى الصفحة (Sixth_Hide) نستدعي الآن
    // Second_Hide مع isRestore = true حتى لا تُصفَّر إجابات المستخدم
    // ولا تُخفى الحقول التابعة بسبب فرع "else" الخاص بحالة gender غير محمّل بعد.
    Sixth_Hide(event){
        if(event){
            this.Second_Hide(this.inputFormField.maritstatus, true);
        }
    }
}