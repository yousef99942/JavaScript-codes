{
    //دوال مشتركة
    First_Function(Fields_Prog){
        for(var i = 0; i < Fields_Prog.length; i++){
            this.inputFormField[Fields_Prog[i]] = null;
        }
    },

    //اظهار مجاميع
    First_Hide(event){
        var Group_ID = [
            "34827_group", // معلومات عن المستثمر (الشخص الطبيعي)
            "34829_group", // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
            "34832_group", // معلومات عن المستثمر (الشخص المعنوي)
            "34897_group", // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
        ];

        var Fields_Prog = [
            // معلومات عن المستثمر (الشخص الطبيعي)
            "FirstName", //الاسم الاول
            "SecondName", //الاسم الثاني
            "ThirdName", //الاسم الثالث
            "FourthName", //الاسم الرابع
            "BrithDate", //تأريخ الولادة
            "NationalityOfResidence", //جنسية المستثمر
            "Phone", //رقم الهاتف (المكتب)
            "Email", //البريد الإلكتروني
            "Mobile", //رقم الهاتف النقال (الشخصي)
            "Website", //الموقع الإلكتروني
            "governorate", //المحافظة
            "RegionVillage", //المنطقة/ القرية
            "districtStreetHouse", //محلة، زقاق، دار
            "CountryResidence", //عنوان السكن والإقامة للمستثمر
            "FullAdress", //العنوان الكامل
            "AdditionalNotes", //ملاحظات إضافية
            "SEN", //هل صدر بحقك حكماً بإشهار الإفلاس أو الحجز؟
            // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
            "Fullna", //الاسم الكامل
            "natio", //الجنسية
            "jobtitle", //العنوان الوظيفي / الصفة
            "typeauth", //نوع التخويل
            "PhoNo", //رقم الهاتف (المكتب)
            "MbPho", //رقم الهاتف النقال (الشخصي)
            "Emaill", //البريد الإلكتروني
            "Countryofreside", //عنوان السكن والإقامة للمخول:
            "adition", //ملاحظات اضافية:
            "investment", //هل سبق وان تقدم المستثمر بطلب على اجازة استثمار؟
            "marketselecter", //الاسواق الرئيسية للمستثمر؟
            "Countryy", //الدولة و المدينة او الاقليم
            "note", //ملاحظات اضافية
            // معلومات عن المستثمر (الشخص المعنوي)
            "TypeOfInvestmentEntity", //نوع الجهة المستثمرة
            "ToWhich", //القطاع الذي تنتمي إليه الشركة أو الجهة المستثمرة
            "PlaceOfEstablishment", //محل التأسيس
            "DateOfEstablishment", //تأريخ التأسيس
            "Adress", //العنوان
            "AddressDetails", //العنوان بالتفصيل
            "Ema", //البريد الإلكتروني
            "Websit", //الموقع الالكتروني
            "field", //ماهو النشاط الأساسي للشركة او الجهة المستثمرة؟
            "Activity", //هل نشاط الشركة يتطابق مع طبيعة المشروع الاستثماري؟
            "branches", //هل هناك فرع للشركة في العالم؟
            "obtained", //هل حصلت الشركة على شهادة عالمية (شهادات الجودة والكفاءة)
            "working", //كم عدد العاملين في الشركة او الجهة المستثمرة ؟
            "bankruptey", //هل تم الإعلان عن إفلاس الشركة او الجهة المستثمرة؟
            // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
            "fullNam", //الاسم الكامل
            "JobTitleBusiness", //العنوان الوظيفي / الصفة
            "TypeOfAuthorization", //نوع التخويل
            "PhoneNo", //رقم الهاتف (المكتب)
            "MobilePhoneNo", //رقم الهاتف (النقال)
            "Emai", //البريد الإلكتروني
            "National", //الجنسية
            "CountryOfResidence", //عنوان السكن والإقامة للمخول
            "Details", //تفاصيل السكن
            "HaveYouEverAppliedForInvestment", //هل سبق وان تقدم المستثمر بطلب على اجازة استثمار؟
            "MajorFinancialMarkets", //الاسواق الرئيسية لهذه الشركة أو الجهة المستثمرة
            "CountryCityRegion", //الدولة و المدينة او الاقليم
            "ManagementBeenChanged", //هل تغيرت الإدارة الغليا للشركة او الجهة المستثمرة خلال الثمانية عشر شهراً الماضية؟ وهل تتوقع أن تتغير في الثمانية عشر شهراً المقبلة؟
            "Explan", //توضيح الحقل السابق
            "AdditionalNote", //ملاحظات اضافية
        ];

        this.First_Function(Fields_Prog);
        if(event == "شخص طبيعي (Natural Person)"){
            for(var i = 0; i < Group_ID.length; i++){
                if(i <= 1){
                    document.getElementById(Group_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Group_ID[i]).style.display = "none";
                }
            }
        }else if(event == "شخص معنوي (Legal Entity)"){
            for(var i = 0; i < Group_ID.length; i++){
                if(i > 1){
                    document.getElementById(Group_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Group_ID[i]).style.display = "none";
                }
            }
        }else{
            for (var i = 0; i < Group_ID.length; i++) {
                document.getElementById(Group_ID[i]).style.display = "none";
            }
        }
    },

    // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
    Second_Hide(event){
        var Fields_ID = [
            "74483", //تاريخ الطلب السابق
            "74487", //رقم الطلب السابق
            "74491", //اسم الجهة التي قدم اليها الطلب؟
            "87425", // الطلب الذي قدمتة
            "74504", //هل هناك علاقة بين المشروع في الطلب الحالي والطلب السابق
            "74505", //هل سبق وان حصل المستثمر على اجازة استثمار
            "74507", //هل الاجازة ؟
            "74508", //نسبة انجاز المشروع
        ];
        var Fields_Prog = [
            "dateapl", //تاريخ الطلب السابق"
            "Datepre", //رقم الطلب السابق
            "nameofentiy", //اسم الجهة التي قدم اليها الطلب؟
            "Rido", //الطلب  الذي قدمتة
            "Selecter", //هل هناك علاقة بين المشروع في الطلب الحالي والطلب السابق
            "selc", //هل سبق وان حصل المستثمر على اجازة استثمار
            "radio", //هل الاجازة ؟
            "mform", //نسبة انجاز المشروع
        ];

        this.First_Function(Fields_Prog);
        if(event == "نعم-Yes"){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            }
        }
    },

    Third_Hide(event){
        this.inputFormField["resone"] = null;
        if(event == "تم رفضه - Rejected"){
            document.getElementById("74501").style.display = "block";
        }else{
            document.getElementById("74501").style.display = "none";
        }
    },

    Fourth_Hide(event){
        this.inputFormField["form"] = null;//اسم الجهة التي منحت الاجازة
        if(event == "نعم-Yes"){
            document.getElementById("74506").style.display = "block";
        }else{
            document.getElementById("74506").style.display = "none";
        }
    },

    // معلومات عن المستثمر (الشخص الطبيعي)
    First_Filter(event){
        this.inputFormField["district"] = null;
        var Values = [
            "الانبار",
            "بابل",
            "بغداد",
            "البصرة",
            "ديالى",
            "ذي قار",
            "صلاح الدين",
            "القادسية",
            "كركوك",
            "كربلاء المقدسة",
            "المثنى",
            "ميسان",
            "النجف الاشرف",
            "نينوى",
            "واسط",
        ],
        getdistinct =
        [
            [
                "بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية",
                "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات", "الفلوجة", "القائم", "كبيسة", "الكرمة",
                "النخيب", "هيت", "الوفاء", "الوليد",
            ],//اقضية الانبار
            [
                "أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", "المشروع",
                "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة", "جرف النصر (جرف الصخر)", "سدة الهندية",
            ],//اقضية بابل
            [
                "ابي غريب", "العبايجي", "الفحامة", "الفرات", "الكرخ", "الكاظمية", "اللطيفية", "المحمودية",
                "المأمون", "المنصور", "المشاهدة", "اليوسفية", "النصر والسلام", "الرشيد", "الطارمية",//الكرخ
                "ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة",
                "الراشدية", "الرصافة", "الصديق الاكبر", "الصدر الاولى", "الصدر الثانية", "التاجي", "الزهور",
                "بغداد الجديدة", "ذات السلاسل", "فلسطين",//الرصافة
            ],//اقضية بغداد
            [
                "أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة",
                "الثغر", "الشهيد عز الدين سليم", "الزبير", "سفوان", "شط العرب", "طلحة", "أم قصر", "الامام الصادق",
            ],//اقضية البصرة
            [
                "أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية",
                "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز", "هبهب", "جبارة", "جلولاء", "كنعان", "خانقين",
                "مندلي", "قرة تبة", "سيف سعد",
            ],//اقضية ديالى
            [
                "الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح",
                "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار", "أور", "كرمة بني سعد", "قلعة سكر",
                "سيد دخيل", "سوق الشيوخ", "عكيكة",
            ],//اقضية ذي قار
            [
                "الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية",
                "بيجي", "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت", "طوز خورماتو", "يثرب", "العوجة",
            ],//اقضية صلاح الدين
            [
                "الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية",
                "الشنافية", "الصلاحية", "السنية", "السدير", "غماس", "نفر", "سومر",
            ],//اقضية القادسية
            [
                "دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق",
                "كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان", "تازة", "يايجي",
            ],//اقضية كركوك
            [
                "عين تمر", "الهندية", "الحر", "الحسينية", "الجدول الغربي", "ناحية الخيرات", "كربلاء",
            ],//اقضية كربلاء
            [
                "الدراجي", "البصية", "الهلال", "الكرامة", "الخضر", "المجد", "الوركاء", "النجمي", "الرميثة",
                "السلمان", "السماوة", "السوير",
            ],//اقضية المثنى
            [
                "العدل", "العمارة", "علي الغربي", "علي الشرقي", "الكحلاء", "الخير", "الميمونة", "المجر الكبير",
                "المشرح", "العزيز", "سيد أحمد الرفاعي", "السلام", "بني هاشم", "كميت", "قلعة صالح",
            ],//اقضية ميسان
            [
                "العباسية", "الحيدرية", "الحيرة", "الحرية", "الكوفة", "المناذرة", "المشخاب", "القادسية",
                "النجف", "الشبكة",
            ],//اقضية النجف
            [
                "العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان",
                "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة", "الحمدانية (بغديدا)", "برطلة",
                "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة",
                "سنجار", "تلعفر", "تلكيف", "وانة", "زيلكان", "زمار", "الفاروق",
            ],//اقضية نينوى
            [
                "الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت",
                "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة", "جصان", "شيخ سعد",
                "الحفرية (تاج الدين)", "ناحية واسط",
            ],//اقضية واسط
        ];

        for(var i = 0; i < Values.length; i++){
            if(event == Values[i]){
                this.group_of_form[1].fields[12].properties[0].values = getdistinct[i];
                break;
            }else{
                this.group_of_form[1].fields[12].properties[0].values = [];
            }
        }
    },

    Fifth_Hide(event){
        var Fields_ID = [
            "74472", //الدولة
            "74473", //المحافظة:
            "74475", //المدينة
        ],
        Fields_Prog = [
            "Country", //الدولة
            "Governor", //المحافظة:
            "City", //المدينة
        ];

        this.First_Function(Fields_Prog);
        if(event == "خارج العراق - Outside Iraq"){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            }
        }
    },

    // معلومات عن المستثمر (الشخص المعنوي)
    Sixth_Hide(event){
        this.inputFormField["characteristic"] = null; //اذكر الصفة الاخرى
        if(event == "صفة أخرى - Other"){
            document.getElementById("74593").style.display = "block";
        }else{
            document.getElementById("74593").style.display = "none";
        }
    },

    Seventh_Hide(event){
        this.inputFormField["OtherNationality"] = null; //الجنسية الأخرى
        if(event == "أخرى - Other"){
            document.getElementById("74497").style.display = "block";
        }else{
            document.getElementById("74497").style.display = "none";
        }
    },

    Eigth_Hide(event){
        this.inputFormField["reasons"] = null; //يتم ذكر الأسباب (إذا كانت الإجابة كلا)
        if(event == "كلا - No"){
            document.getElementById("74587").style.display = "block";
        }else{
            document.getElementById("74587").style.display = "none";
        }
    },

    Nineth_Hide(event){
        this.inputFormField["NamrOfBranche"] = null; //إذا كانت الإجاية نعم يرجى ذكر الفرع
        if(event == "نعم - Yes"){
            document.getElementById("74554").style.display = "block";
        }else{
            document.getElementById("74554").style.display = "none";
        }
    },

    Tenth_Hide(event){
        this.inputFormField["obtainedyes"] = null; //اذا كانت الاجابه نعم فما هي وكم عددها
        if(event == "نعم -Yes"){
            document.getElementById("74566").style.display = "block";
        }else{
            document.getElementById("74566").style.display = "none";
        }
    },

    Eleventh_Hide(event){
        this.inputFormField["explain"] = null; //يرجى التوضيح (إذا اكنت الإجابة نعم عن الحقل السابق)
        if(event == "نعم - Yes"){
            document.getElementById("74590").style.display = "block";
        }else{
            document.getElementById("74590").style.display = "none";
        }
    },

    // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص المعنوي)
    Twelveth_Hide(event){
        var Fields_ID = [
            "75205", //تاريخ الطلب السابق
            "75206", //رقم الطلب السابق
            "75208", //اسم الجهة التي قدم اليها الطلب؟
            "87446", //الطلب الذي قدمتة
            "75211", //هل هناك علاقة بين المشروع في الطلب الحالي والطلب السابق؟
            "87447", //هل سبق وان حصل المستثمر على اجازة استثمار؟
            "87448", //هل الاجازة ؟
            "75230", //نسبة انجاز المشروع
        ];
        var Fields_Prog = [
            "DateOfThePreviousApplication", //تاريخ الطلب السابق"
            "PreviousApplicationNumber", //رقم الطلب السابق
            "NameOfEntity", //اسم الجهة التي قدم اليها الطلب؟
            "ApplicationWas", //الطلب الذي قدمتة
            "relation", //هل هناك علاقة بين المشروع في الطلب الحالي والطلب السابق؟
            "LnvestmentLicense", //هل سبق وان حصل المستثمر على اجازة استثمار؟
            "IsThelicense", //هل الاجازة ؟
            "ProjectImplementation", //نسبة انجاز المشروع
        ];

        this.First_Function(Fields_Prog);
        if(event == "نعم - Yes"){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            }
        }
    },

    Threeteen_Hide(event){
        this.inputFormField["ReasonOfRejected"] = null; //سبب الرفض
        if(event == "تم رفضه - Rejected"){
            document.getElementById("75210").style.display = "block";
        }else{
            document.getElementById("75210").style.display = "none";
        }
    },

    Fourteen_Hide(event){
        var Fields_ID = [
            "75212", // اسم الجهة التي منحت الاجازة 
            "75229", // هل الاجازة ؟ 
        ];
        var Fields_Prog = [
            "GrantedTheLicense", // اسم الجهة التي منحت الاجازة 
            "IsThelicense", // هل الاجازة ؟ 
        ];

        this.First_Function(Fields_Prog);
        if(event == "نعم - Yes"){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            }
        }
    },

    Fifteen_Hide(event){
        this.inputFormField["ReasonForWithdrawal"] = null; //سبب السحب
        if(event == "تم سحبها - withdrawn"){
            document.getElementById("75231").style.display = "block";
        }else{
            document.getElementById("75231").style.display = "none";
        }
    },

    //معلومات عن المشروع
    Sixteen_Hide(event){
        var Fields_ID = [
            "74914", //مبلغ القرض (دولار أمريكي)
            "87697", //مصدر القرض
        ],
        Fields_Progs = [
            "AmountOfLoan", //مبلغ القرض (دولار أمريكي)
            "SourceOfLoan", //مصدر القرض
        ];

        this.First_Function(Fields_Progs);
        if(event == "نعم - Yes"){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            }
        }
    },

    Seventeen_Hide(event){
        var Fields_ID = [
            "86860", //شرح موجز عن التكنولوجيا التي سيتم نقلها
            "86861", //فوائد التكنولوجيا الجديدة
        ],
        Fields_Prog = [
            "ABriefDescription", //شرح موجز عن التكنولوجيا التي سيتم نقلها
            "BenefitsOfTheNewAdoptedTechnology", //فوائد التكنولوجيا الجديدة
        ];

        this.First_Filter(Fields_Prog)
        if(event == "نعم - Yes"){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            }
        }
    },

    //مقدم الطلب
    Eighteen_Hide(event){
        this.inputFormField["authoriz"] = null;
        if(event == "نعم"){
            document.getElementById("74998").style.display = "block";
        }else{
            document.getElementById("74998").style.display = "none";
        }
    },

    // معلومات عن المخول المسؤول عن توفير المعلومات والإجابة عن أية استفسارات (الشخص الطبيعي)
    //هل الاجازة
    Nineteen_Hide(event){
        this.inputFormField["formreason"] = null;
        if(event == "تم سحبها - withdrawn"){
            document.getElementById("74510").style.display = "block";
        }else{
            document.getElementById("74510").style.display = "none";
        }
    },
}