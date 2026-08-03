{
    First_Function(event, Fields_ID, Fields_Prog, Condition_Value){
        for(var i = 0; i < Fields_ID.length; i++){
            if(event == Condition_Value){
                document.getElementById(Fields_ID[i]).style.display = "block";
                this.inputFormField[Fields_Prog[i]] = null;
            }else{
                document.getElementById(Fields_ID[i]).style.display = "none";
                this.inputFormField[Fields_Prog[i]] = null;
            }
        }
    },

    Second_Function(event, Increase_Value, Fields_IDs, Fields_Progs){
        if(event != null || event != ""){
            for(var i = 0; i < Fields_IDs.length; i++){
                if(i < (event*Increase_Value)){
                    document.getElementById(Fields_IDs[i]).style.display = "block";
                    this.inputFormField[Fields_Progs[i]] = null;
                }else{
                    document.getElementById(Fields_IDs[i]).style.display = "none";
                    this.inputFormField[Fields_Progs[i]] = null;
                }
            }
        }
    },

    First_Filter(event, Group_Num, Field_Num){
        var Values = [
            "الانبار", "بابل", "بغداد", "البصرة", "ديالى", "ذي قار", "صلاح الدين", "القادسية", "كركوك", "كربلاء المقدسة",
            "المثنى", "ميسان", "النجف الاشرف", "نينوى", "واسط",
        ],
        getdistnict =
            [
                [
                    "بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية",
                    "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات", "الفلوجة", "القائم", "كبيسة", "الكرمة", "النخيب",
                    "هيت", "الوفاء", "الوليد"
                ],//اقضية الانبار
                [
                    "أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", "المشروع",
                    "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة", "جرف النصر (جرف الصخر)", "سدة الهندية"
                ],//اقضية بابل
                [
                    "ابي غريب", "العبايجي", "الفحامة", "الفرات", "الكرخ", "الكاظمية", "اللطيفية", "المحمودية", "المأمون",
                    "المنصور", "المشاهدة", "اليوسفية", "النصر والسلام", "الرشيد", "الطارمية",//الكرخ
                    "ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة", "الراشدية",
                    "الرصافة", "الصديق الاكبر", "الصدر الاولى", "الصدر الثانية", "التاجي", "الزهور", "بغداد الجديدة",
                    "ذات السلاسل", "فلسطين"//الرصافة
                ],//اقضية بغداد
                [
                    "أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة", "الثغر",
                    "الشهيد عز الدين سليم", "الزبير", "سفوان", "شط العرب", "طلحة", "أم قصر", "الامام الصادق"
                ],//اقضية البصرة
                [
                    "أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية",
                    "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز", "هبهب", "جبارة", "جلولاء", "كنعان", "خانقين", "مندلي",
                    "قرة تبة", "سيف سعد"
                ],//اقضية ديالى
                [
                    "الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح", "الجبايش",
                    "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار", "أور", "كرمة بني سعد", "قلعة سكر", "سيد دخيل",
                    "سوق الشيوخ", "عكيكة"
                ],//اقضية ذي قار
                [
                    "الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية", "بيجي",
                    "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت", "طوز خورماتو", "يثرب", "العوجة"
                ],//اقضية صلاح الدين
                [
                    "الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية", "الشنافية",
                    "الصلاحية", "السنية", "السدير", "غماس", "نفر", "سومر"
                ],//اقضية القادسية
                [
                    "دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق",
                    "كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان", "تازة", "يايجي"
                ],//اقضية كركوك
                [
                    "عين تمر", "الهندية", "الحر", "الحسينية", "الجدول الغربي", "ناحية الخيرات", "كربلاء"
                ],//اقضية كربلاء
                [
                    "الدراجي", "البصية", "الهلال", "الكرامة", "الخضر", "المجد", "الوركاء", "النجمي", "الرميثة",
                    "السلمان", "السماوة", "السوير"
                ],//اقضية المثنى
                [
                    "العدل", "العمارة", "علي الغربي", "علي الشرقي", "الكحلاء", "الخير", "الميمونة", "المجر الكبير",
                    "المشرح", "العزيز", "سيد أحمد الرفاعي", "السلام", "بني هاشم", "كميت", "قلعة صالح"
                ],//اقضية ميسان
                [
                    "العباسية", "الحيدرية", "الحيرة", "الحرية", "الكوفة", "المناذرة", "المشخاب", "القادسية",
                    "النجف", "الشبكة"
                ],//اقضية النجف
                [
                    "العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان", "القيارة",
                    "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة", "الحمدانية (بغديدا)", "برطلة", "بعشيقة", "فايدة",
                    "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة", "سنجار", "تلعفر", "تلكيف",
                    "وانة", "زيلكان", "زمار", "الفاروق"
                ],//اقضية نينوى
                [
                    "الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت", "الموفقية",
                    "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة", "جصان", "شيخ سعد", "الحفرية (تاج الدين)",
                    "ناحية واسط"
                ],//اقضية واسط
        ];

        for(var i = 0; i < Values.length; i++){
            if(event == Values[i]){
                this.group_of_form[Group_Num].fields[Field_Num].properties[0].values = getdistnict[i];
                break;
            }else{
                this.group_of_form[Group_Num].fields[Field_Num].properties[0].values = [];
            }
        }
    },

    First_Hide(event){
        //مال الكروب الاول
        var First_Group_IDs = [
            "68042",
            "68045",
            "68048",
            "68046",
            "68047",
            "68049",
            "68043",
            "68050",
            "68052",
            "68053",
            "68054",
            "68055",
            "68056",
        ],
        First_Group_Progs = [
            "secondFullNameAr",
            "firstNameArSec",
            "secondNameSec",
            "thirdNameSec",
            "fourthNameSec",
            "fullNameEnSec",
            "firstNameEnSec",
            "secondNameEnSec",
            "thirdNameEnSec",
            "fourthNameEnSec",
            "nationalIdSec",
            "certificateSec",
            "certificateYearSec",
        ];
        //مال الكروب الثاني
        var Second_Group_IDs = [
            "68244",
            "68245",
            "73795",
            "68246",
            "68247",
            "68248",
            "68249",
        ],
        Second_Group_Progs = [
            "ownerTwoAddress",
            "OwnerSecGov",
            "ThirdDistrict",
            "ownerSecPhone",
            "districtOwnerSec",
            "alleyOwnerSec",
            "houseNumberOwnerSec",
        ];

        this.First_Function(event, First_Group_IDs, First_Group_Progs, "نعم");
        this.First_Function(event, Second_Group_IDs, Second_Group_Progs, "نعم");
    },

    Second_Hide(event){
        var Fields_IDs = [
            "68251",
            "68252",
            "68253",
            "68254",
            "68255",
            "68256",
            "68257",
            "68258",
            "68259",
            "68260",
        ],
        Fields_Progs = [
            "entitynamefirst",
            "servicedurationfirst",
            "entitynamesecond",
            "servicedurationsecond",
            "entitynamethird",
            "servicedurationthird",
            "entitynamefourth",
            "servicedurationfourth",
            "entitynamefifth",
            "servicedurationfifth",
        ];

        this.Second_Function(event, 2, Fields_IDs, Fields_Progs);
    },

    Third_Hide(event){
        var Fields_IDs = [
            "70355", "68899", "68901", "68908", "68909", "68912", "68913", "70356",
            "68984", "68900", "68917", "68919", "68921", "68923", "68925", "70357",
            "68974", "68981", "68982", "68985", "70339", "70338", "68988", "70358",
            "69052", "69053", "69054", "69055", "68986", "68987", "70342", "70359",
            "70343", "70294", "70344", "70345", "70346", "70347", "70348", "70360",
            "70349", "70296", "70350", "70351", "70352", "70353", "70361", "70362",
            "70363", "70298", "70364", "70365", "70366", "70367", "70368", "70369",
            "70370", "70302", "70371", "70372", "70373", "70374", "70375", "70376",
            "70377", "70299", "70378", "70379", "70380", "70381", "70382", "70383",
            "70384", "70300", "70385", "70386", "70387", "70388", "70389", "70390",
        ],
        Fields_Progs = [
            "informationA", "firstnameA", "secondnameA", "thirdnameA", "fourthnameA", "educationA", "universityA", "yearA",
            "informationB", "firstnameB", "secondnameB", "thirdnameB", "fourthnameB", "educationB", "universityB", "yearB",
            "informationC", "firstnameC", "secondnameC", "thirdnameC", "fourthnameC", "educationC", "universityC", "yearC",
            "informationD", "firstnameD", "secondnameD", "thirdnameD", "fourthnameD", "educationD", "universityD", "yearD",
            "informationE", "firstnameE", "secondnameE", "thirdnameE", "fourthnameE", "educationE", "universityE", "yearE",
            "informationF", "firstnameF", "secondnameF", "thirdnameF", "fourthnameF", "educationF", "universityF", "yearF",
            "informationG", "firstnameG", "secondnameG", "thirdnameG", "fourthnameG", "educationG", "universityG", "yearG",
            "informationH", "firstnameH", "secondnameH", "thirdnameH", "fourthnameH", "educationH", "universityH", "yearH",
            "informationI", "firstnameI", "secondnameI", "thirdnameI", "fourthnameI", "educationI", "universityI", "yearI",
            "informationJ", "firstnameJ", "secondnameJ", "thirdnameJ", "fourthnameJ", "educationJ", "universityJ", "yearJ",
        ];

        this.Second_Function(event, 8, Fields_IDs, Fields_Progs);
    },

    Fourth_Hide(event){
        var Fields_IDs = [
            "70919", "70921", "70922", "70924", "70917", "70925", "70926", "70927", "70973", "70974", "70975", "70976",
            "70977", "71016", "71017", "71018", "71019", "71020", "71021", "71022", "72009", "72010", "72011", "72012",
            "72013", "72014", "72015", "72016", "72109", "72110", "72111", "72112", "72113", "72114", "72115", "72116",
            "72117", "72118", "72119", "72121", "72123", "72124", "72125", "72126", "72127", "72128", "72129", "72130",
            "72131", "72132", "72133", "72134", "72135", "72136", "72137", "72138", "72139", "72140", "72141", "72142",
        ],
        Fields_Progs = [
            "ConsultationA", "BeneficiaryA", "CompletionDateA", "CompletionRateA", "ConsultationB", "BeneficiaryB",
            "CompletionDateB", "CompletionRateB", "ConsultationC", "BeneficiaryC", "CompletionDateC", "CompletionRateC",
            "ConsultationD", "BeneficiaryD", "CompletionDateD", "CompletionRateD", "ConsultationE", "BeneficiaryE",
            "CompletionDateE", "CompletionRateE", "ConsultationF", "BeneficiaryF", "CompletionDateF", "CompletionRateF",
            "ConsultationG", "BeneficiaryG", "CompletionDateG", "CompletionRateG", "ConsultationH", "BeneficiaryH",
            "CompletionDateH", "CompletionRateH", "ConsultationI", "BeneficiaryI", "CompletionDateI", "CompletionRateI",
            "ConsultationJ", "BeneficiaryJ", "CompletionDateJ", "CompletionRateJ", "ConsultationK", "BeneficiaryK",
            "CompletionDateK", "CompletionRateK", "ConsultationL", "BeneficiaryL", "CompletionDateL", "CompletionRateL",
            "ConsultationM", "BeneficiaryM", "CompletionDateM", "CompletionRateM", "ConsultationN", "BeneficiaryN",
            "CompletionDateN", "CompletionRateN", "ConsultationO", "BeneficiaryO", "CompletionDateO", "CompletionRateO"
        ];

        this.Second_Function(event, 4, Fields_IDs, Fields_Progs);
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
        
        for(var i = 0; i < Progs.length; i++){
            this.inputFormField[Progs[i]] = null;
        }

        if(event == "تجديد اجازة المكتب" || event == "بدل تالف"){
            for(var i = 0; i < IDs.length; i++){
                document.getElementById(IDs[i]).style.display = "block";
            }
        }else if(event == "تأسيس مكتب"){
            for(var i = 0; i < IDs.length; i++){
                if(i != 5){
                    document.getElementById(IDs[i]).style.display = "block";
                }else{
                    document.getElementById(IDs[i]).style.display = "none";
                }
            }
        }else if(event == "تجميد مكتب"){
            for(var i = 0; i < IDs.length; i++){
                if(i != 6 && i != 1 && i != 2){
                    document.getElementById(IDs[i]).style.display = "none";
                }else{
                    document.getElementById(IDs[i]).style.display = "block";
                }
            }
        }else{
            for(var i = 0; i < IDs.length; i++){
                document.getElementById(IDs[i]).style.display = "none";
            }
        }
    },

    First_GetsubCities(event) {
        //تفريغ حقل الاقضية
        this.inputFormField["FirstDistrict"] = null;//القضاء

        this.First_Filter(event, 1, 2);
    },

    Second_GetsubCities(event) {
        //تفريغ حقل الاقضية
        this.inputFormField["SecondDistrict"] = null;//القضاء

        this.First_Filter(event, 1, 9);
    },

    Third_GetsubCities(event) {
        //تفريغ حقل الاقضية
        this.inputFormField["ThirdDistrict"] = null;//القضاء

        this.First_Filter(event, 1, 16);
    },
}