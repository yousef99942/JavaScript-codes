{
    First_Filter(event, Group_Num, Field_Num){
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
                    "ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة", "الراشدية", "الرصافة", "الصديق الاكبر", "الصدر الاولى",
                    "الصدر الثانية", "التاجي", "الزهور", "بغداد الجديدة", "ذات السلاسل", "فلسطين",//الرصافة
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
                    "الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح", "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار", "أور",
                    "كرمة بني سعد", "قلعة سكر", "سيد دخيل", "سوق الشيوخ", "عكيكة",
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
                    "دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق","كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان", "تازة",
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
                    "العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان", "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة",
                    "الحمدانية (بغديدا)", "برطلة", "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة", "سنجار", "تلعفر", "تلكيف", "وانة",
                    "زيلكان", "زمار", "الفاروق",
                ]
            },
            {
                Selected_Value: "واسط",
                Showed_Value: [
                    "الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت", "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة",
                    "جصان", "شيخ سعد", "الحفرية (تاج الدين)", "ناحية واسط",
                ]
            },
        ];

        let Result = Values.find((Finding) => event == Finding.Selected_Value);
        if(Result){
            this.group_of_form[Group_Num].fields[Field_Num].properties[0].values = Result.Showed_Value;
        }else{
            this.group_of_form[Group_Num].fields[Field_Num].properties[0].values = [];
        }
    },

    First_Hide(event){
        var Group_Fields = [
            //مال الكروب الاول
            { id: "68042", name: "secondFullNameAr" },
            { id: "68045", name: "firstNameArSec" },
            { id: "68048", name: "secondNameSec" },
            { id: "68046", name: "thirdNameSec" },
            { id: "68047", name: "fourthNameSec" },
            { id: "68049", name: "fullNameEnSec" },
            { id: "68043", name: "firstNameEnSec" },
            { id: "68050", name: "secondNameEnSec" },
            { id: "68052", name: "thirdNameEnSec" },
            { id: "68053", name: "fourthNameEnSec" },
            { id: "68054", name: "nationalIdSec" },
            { id: "68055", name: "certificateSec" },
            { id: "68056", name: "certificateYearSec" },
            //مال الكروب الثاني
            { id: "68244", name: "ownerTwoAddress" },
            { id: "68245", name: "OwnerSecGov" },
            { id: "73795", name: "ThirdDistrict" },
            { id: "68246", name: "ownerSecPhone" },
            { id: "68247", name: "districtOwnerSec" },
            { id: "68248", name: "alleyOwnerSec" },
            { id: "68249", name: "houseNumberOwnerSec" },
        ];

        Group_Fields.forEach((Field) => this.inputFormField[Field.name] = null);
        if(event == "نعم"){
            Group_Fields.forEach((Field) => document.getElementById(Field.id).style.display = "block");
        }else{
            Group_Fields.forEach((Field) => document.getElementById(Field.id).style.display = "none");
        }
    },

    Second_Hide(event) {
        const Fields_IDs = ["68251", "68252", "68253", "68254", "68255", "68256", "68257", "68258", "68259", "68260"],
        Fields_Progs = [
            "entitynamefirst", "servicedurationfirst", "entitynamesecond", "servicedurationsecond", "entitynamethird", "servicedurationthird", "entitynamefourth",
            "servicedurationfourth", "entitynamefifth", "servicedurationfifth",
        ];

        Fields_Progs.forEach((Clearing) => this.inputFormField[Clearing] = null);
        if (event) {
            const visibleCount = event * 2;
            for (let i = 0; i < Fields_IDs.length; i++) {
                const element = document.getElementById(Fields_IDs[i]);
                if (element) {
                    element.style.display = i < visibleCount ? "block" : "none";
                }
            }
        }else{
            Fields_IDs.forEach((ID) => document.getElementById(ID).style.display = "none");
        }
    },

    Third_Hide(event){
        const Fields_IDs = [
            "70355", "68899", "68901", "68908", "68909", "68912", "68913", "70356", //ملعومات العامل الاول
            "68984", "68900", "68917", "68919", "68921", "68923", "68925", "70357", //ملعومات العامل الثاني
            "68974", "68981", "68982", "68985", "70339", "70338", "68988", "70358", //ملعومات العامل الثالث
            "69052", "69053", "69054", "69055", "68986", "68987", "70342", "70359", //ملعومات العامل الرابع
            "70343", "70294", "70344", "70345", "70346", "70347", "70348", "70360", //ملعومات العامل الخامس
            "70349", "70296", "70350", "70351", "70352", "70353", "70361", "70362", //ملعومات العامل السادس
            "70363", "70298", "70364", "70365", "70366", "70367", "70368", "70369", //ملعومات العامل السابع
            "70370", "70302", "70371", "70372", "70373", "70374", "70375", "70376", //ملعومات العامل الثامن
            "70377", "70299", "70378", "70379", "70380", "70381", "70382", "70383", //ملعومات العامل التاسع
            "70384", "70300", "70385", "70386", "70387", "70388", "70389", "70390", //ملعومات العامل العاشر
        ],
        Fields_Progs = [
            "informationA", "firstnameA", "secondnameA", "thirdnameA", "fourthnameA", "educationA", "universityA", "yearA", //ملعومات العامل الاول
            "informationB", "firstnameB", "secondnameB", "thirdnameB", "fourthnameB", "educationB", "universityB", "yearB", //ملعومات العامل الثاني
            "informationC", "firstnameC", "secondnameC", "thirdnameC", "fourthnameC", "educationC", "universityC", "yearC", //ملعومات العامل الثالث
            "informationD", "firstnameD", "secondnameD", "thirdnameD", "fourthnameD", "educationD", "universityD", "yearD", //ملعومات العامل الرابع
            "informationE", "firstnameE", "secondnameE", "thirdnameE", "fourthnameE", "educationE", "universityE", "yearE", //ملعومات العامل الخامس
            "informationF", "firstnameF", "secondnameF", "thirdnameF", "fourthnameF", "educationF", "universityF", "yearF", //ملعومات العامل السادس
            "informationG", "firstnameG", "secondnameG", "thirdnameG", "fourthnameG", "educationG", "universityG", "yearG", //ملعومات العامل السابع
            "informationH", "firstnameH", "secondnameH", "thirdnameH", "fourthnameH", "educationH", "universityH", "yearH", //ملعومات العامل الثامن
            "informationI", "firstnameI", "secondnameI", "thirdnameI", "fourthnameI", "educationI", "universityI", "yearI", //ملعومات العامل التاسع
            "informationJ", "firstnameJ", "secondnameJ", "thirdnameJ", "fourthnameJ", "educationJ", "universityJ", "yearJ", //ملعومات العامل العاشر
        ];

        Fields_Progs.forEach((Clearing) => this.inputFormField[Clearing] = null);
        if (event) {
            const visibleCount = event * 8;
            for (let i = 0; i < Fields_IDs.length; i++) {
                const element = document.getElementById(Fields_IDs[i]);
                if (element) {
                    element.style.display = i < visibleCount ? "block" : "none";
                }
            }
        }else{
            Fields_IDs.forEach((ID) => document.getElementById(ID).style.display = "none");
        }
    },

    Fourth_Hide(event){
        const Fields_IDs = [
            "70919", "70921", "70922", "70924", "70917", "70925", "70926", "70927", "70973", "70974", "70975", "70976", "70977", "71016", "71017", "71018", "71019", "71020", "71021",
            "71022", "72009", "72010", "72011", "72012", "72013", "72014", "72015", "72016", "72109", "72110", "72111", "72112", "72113", "72114", "72115", "72116", "72117", "72118",
            "72119", "72121", "72123", "72124", "72125", "72126", "72127", "72128", "72129", "72130", "72131", "72132", "72133", "72134", "72135", "72136", "72137", "72138", "72139",
            "72140", "72141", "72142",
        ],
        Fields_Progs = [
            "ConsultationA", "BeneficiaryA", "CompletionDateA", "CompletionRateA", "ConsultationB", "BeneficiaryB", "CompletionDateB", "CompletionRateB", "ConsultationC", "BeneficiaryC",
            "CompletionDateC", "CompletionRateC", "ConsultationD", "BeneficiaryD", "CompletionDateD", "CompletionRateD", "ConsultationE", "BeneficiaryE", "CompletionDateE", "CompletionRateE",
            "ConsultationF", "BeneficiaryF", "CompletionDateF", "CompletionRateF", "ConsultationG", "BeneficiaryG", "CompletionDateG", "CompletionRateG", "ConsultationH", "BeneficiaryH",
            "CompletionDateH", "CompletionRateH", "ConsultationI", "BeneficiaryI", "CompletionDateI", "CompletionRateI", "ConsultationJ", "BeneficiaryJ", "CompletionDateJ", "CompletionRateJ",
            "ConsultationK", "BeneficiaryK", "CompletionDateK", "CompletionRateK", "ConsultationL", "BeneficiaryL", "CompletionDateL", "CompletionRateL", "ConsultationM", "BeneficiaryM",
            "CompletionDateM", "CompletionRateM", "ConsultationN", "BeneficiaryN", "CompletionDateN", "CompletionRateN", "ConsultationO", "BeneficiaryO", "CompletionDateO", "CompletionRateO"
        ];

        Fields_Progs.forEach((Clearing) => this.inputFormField[Clearing] = null);
        if (event) {
            const visibleCount = event * 4;
            for (let i = 0; i < Fields_IDs.length; i++) {
                const element = document.getElementById(Fields_IDs[i]);
                if (element) {
                    element.style.display = i < visibleCount ? "block" : "none";
                }
            }
        }else{
            Fields_IDs.forEach((ID) => document.getElementById(ID).style.display = "none");
        }
    },

    // نوع الإجراء
    Fifth_Hide(event){
        var IDs = [
            //المجموعة الاولى
            "72146", //اختر نوع الطلب
            "68040", //هل يوجد مؤسس ثاني ؟
            //المجموعة الثانية
            "34098_group", //المجموعه الثانية العناوين
            //المجموعة الثالثة
            "34099_group", //المجموعة الثالثة  التوظيف لدى الجهات الاخرى
            //المجموعة الرابعة
            "34100_group", //المجموعة الرابعه  اسماء العاملين في المكتب
            //المجموعة الخامسة
            "34101_group", //المجموعة الخامسة  الاعمال المنجزة من قبل المكتب
            //المجموعة السادسة
            "34537_group", //المجموعة السادسة التعهد
        ],
        Progs = [
            //المجموعة الاولى
            "requset", //اختر نوع الطلب
            "hasSecondOwner", //هل يوجد مؤسس ثاني ؟
            "name", //اسم المكتب
            "enName", //اسم المكتب باللغة الانكليزية
            "specialization", //اختصاص المكتب
            "activity", //نشاط المكتب
            "firstName", //الاسم الاول
            "secondNameAr", //الاسم الثاني
            "thirdNameAr", //الاسم الثالث
            "fourthNameAr", //الاسم الرابع
            "firstNameEn", //First Name
            "secondNameEn", //Second Name
            "thirdNameEn", //Third Name
            "fourthNameEn", //Fourth Name
            "nationalId", //رقم الهوية الوطنية الموحدة
            "certificate", //التحصيل الدراسي
            "certificateYear", //سنة الحصول على اخر شهادة
            //المجموعة الثانية
            "governorate", //المحافظة
            "FirstDistrict", //القضاء
            "officePhone", //رقم الهاتف
            "district", //المحلة
            "alley", //زقاق
            "houseNo", //الدار
            "ownerGov", //المحافظة (المؤسس)
            "SecondDistrict", //القضاء (المؤسس)
            "ownerPhone", //رقم الهاتف (المؤسس)
            "districtOwner", //المحلة (مؤسس)
            "alleyOwner", //الزقاق (المؤسس)
            "houseNumberOwner", //الدار (المؤسس)
            //المجموعة الثالثة
            "number", //اذكر عدد الجهات التي يتم التعامل معها
            //المجموعة الرابعه
            "numberOf", //اذكر عدد العاملين في المكتب
            //المجموعة الخامسة
            "officeWorkDone", //عدد الاعمال المنجزة من قبل المكتب
            //المجموعة السادسة
            "Pledge", //التعهد
        ];
        const Values = [
            {
                Selected_Value: ["تجديد اجازة المكتب", "بدل تالف"],
                IDs: IDs,
            },
            {
                Selected_Value: ["تأسيس مكتب"],
                IDs: ["72146", "68040", "34098_group", "34099_group", "34100_group", "34537_group"],
            },
            {
                Selected_Value: ["تجميد مكتب"],
                IDs: ["72146", "34099_group", "34100_group", "34101_group"],
            },
        ];

        Progs.forEach((Clearing) => this.inputFormField[Clearing] = null);
        const Result = Values.find((Finding) => Finding.Selected_Value.includes(event));
        if(Result){
            Result.IDs.forEach((ID) => document.getElementById(ID).style.display = "block");
        }else{
            IDs.forEach((ID) => document.getElementById(ID).style.display = "none");
        }
    },

    First_GetsubCities(event) {
        this.inputFormField["FirstDistrict"] = null; //تفريغ حقل الاقضية
        this.First_Filter(event, 1, 2);
    },

    Second_GetsubCities(event) {
        this.inputFormField["SecondDistrict"] = null; //تفريغ حقل الاقضية
        this.First_Filter(event, 1, 9);
    },

    Third_GetsubCities(event) {
        this.inputFormField["ThirdDistrict"] = null; //تفريغ حقل الاقضية
        this.First_Filter(event, 1, 16);
    },
}