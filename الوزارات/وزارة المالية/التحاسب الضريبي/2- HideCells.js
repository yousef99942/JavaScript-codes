{
    getType(event) {
      if (event == "تحاسب ضريبي") {
        document.getElementById('34600_group').style.display = "block";
        document.getElementById('34656_group').style.display = "block";
        document.getElementById('34655_group').style.display = "block";
      } else if (event == "عدم ممانعة") {
        document.getElementById('34600_group').style.display = "none";
        document.getElementById('34656_group').style.display = "none";
        document.getElementById('34655_group').style.display = "none";
        localStorage.removeItem("codeBol");
        window.location.href = "https://eservice.ur.gov.iq/customer/applyService/21563";
      } else {
        document.getElementById('34600_group').style.display = "none";
        document.getElementById('34656_group').style.display = "none";
        document.getElementById('34655_group').style.display = "none";
      }
    },

    getdoyou(event) {
        this.inputFormField["FirstNa"] = null;
        this.inputFormField["secondNa"] = null;
        this.inputFormField["ThirdNa"] = null;
      if (event == "نعم") {
            document.getElementById('73038').style.display = "block";
            document.getElementById('93901').style.display = "block";
            document.getElementById('93902').style.display = "block";
            this.inputFormField.FirstNa = this.user.first_name;
            this.inputFormField.secondNa = this.user.middle_name;
            this.inputFormField.ThirdNa = this.user.last_name;
        }else {
            document.getElementById('73038').style.display = "none";
            document.getElementById('93901').style.display = "none";
            document.getElementById('93901').style.display = "none";
        }
    },

    //فلترة المحافظات
    getsubCities(event) {
        this.inputFormField["district"] = null; //* تفريغ حقل الاقضية
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
            this.group_of_form[2].fields[5].properties[0].values = Result.Showed_Value;
        }else{
            this.group_of_form[2].fields[5].properties[0].values = [];
        }
    }
}