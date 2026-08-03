{
    First_Hide(event){
        this.group_of_form[0].fields[6].properties[0].values = [];
        if(event == "جريح"){
            this.group_of_form[0].fields[6].properties[0].values = [
                "عن نفسه (للجرحى)",
                "اخرى",
            ];
            
            document.getElementById("68194").style.display = "none";
            this.inputFormField["retirementnumb"] = null;
        }else if(event == "متوفي منجز" || event == "شهيد منجز"){
            this.group_of_form[0].fields[6].properties[0].values = [
                "اب الشهيد / المتوفي",
                "ام الشهيد / المتوفي",
                "زوجة الشهيد / المتوفي",
                "ابناء الشهيد / المتوفي"
            ];

            document.getElementById("68194").style.display = "block";
            this.inputFormField["retirementnumb"] = null;
        }else{
            document.getElementById("68194").style.display = "none";
            this.inputFormField["retirementnumb"] = null;
            this.group_of_form[0].fields[6].properties[0].values = [];
        }
    },

    getsubCities(event) {
        this.inputFormField["district"] = null;
        var getdistinct =
            [
                [
                    "بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية", 
                    "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات", "الفلوجة", "القائم", "كبيسة", "الكرمة", 
                    "النخيب", "هيت", "الوفاء", "الوليد"
                ],//اقضية الانبار
                [
                    "أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", 
                    "المشروع", "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة", "جرف النصر (جرف الصخر)", 
                    "سدة الهندية"
                ],//اقضية بابل
                [
                    "ابي غريب", "العبايجي", "الفحامة", "الفرات", "الكرخ", "الكاظمية", "اللطيفية", "المحمودية", 
                    "المأمون", "المنصور", "المشاهدة", "اليوسفية", "النصر والسلام", "الرشيد", "الطارمية",
                    "ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة", 
                    "الراشدية", "الرصافة", "الصديق الاكبر", "الصدر الاولى", "الصدر الثانية", "التاجي", "الزهور", 
                    "بغداد الجديدة", "ذات السلاسل", "فلسطين"
                ],//اقضية بغداد
                [
                    "أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة",
                    "الثغر", "الشهيد عز الدين سليم", "الزبير", "سفوان", "شط العرب", "طلحة", "أم قصر", "الامام الصادق"
                ],//اقضية البصرة
                [
                    "أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية", 
                    "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز", "هبهب", "جبارة", "جلولاء", "كنعان", "خانقين", 
                    "مندلي", "قرة تبة", "سيف سعد"
                ],//اقضية ديالى
                [
                    "الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح", 
                    "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار", "أور", "كرمة بني سعد", "قلعة سكر", 
                    "سيد دخيل", "سوق الشيوخ", "عكيكة"
                ],//اقضية ذي قار
                [
                    "الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية", 
                    "بيجي", "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت", "طوز خورماتو", "يثرب", "العوجة"
                ],//اقضية صلاح الدين
                [
                    "الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية", 
                    "الشنافية", "الصلاحية", "السنية", "السدير", "غماس", "نفر", "سومر"
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
                    "العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان", 
                    "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة", "الحمدانية (بغديدا)", "برطلة", 
                    "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة", 
                    "سنجار", "تلعفر", "تلكيف", "وانة", "زيلكان", "زمار", "الفاروق"
                ],//اقضية نينوى
                [
                    "الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت", 
                    "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة", "جصان", "شيخ سعد",
                    "الحفرية (تاج الدين)", "ناحية واسط"
                ],//اقضية واسط
            ];

        if (event == "الانبار") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[0];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية الانبار"];
        } else if (event == "بابل") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[1];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية بابل"];
        } else if (event == "بغداد") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[2];
            this.group_of_form[0].fields[15].properties[0].values = [
                "بلدية النصر والسلام", "بلدية النهروان", "بلدية المدائن", "بلدية الزهور", "بلدية الراشدية",
                "بلدية المحمودية", "بلدية اللطيفية", "بلدية ابي غريب", "بلدية الوحدة", "بلدية الجسر",
                "بلدية التاجي", "بلدية اليوسفية", "بلدية الطارمية", "بلدية الرشيد",
            ];
        } else if (event == "البصرة") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[3];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية البصره"];
        } else if (event == "ديالى") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[4];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية ديالى"];
        } else if (event == "ذي قار") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[5];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية ذي قار"];
        } else if (event == "صلاح الدين") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[6];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية صلاح الدين"];
        } else if (event == "القادسية") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[7];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية القادسية"];
        } else if (event == "كركوك") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[8];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية كركوك"];
        } else if (event == "كربلاء المقدسة") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[9];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية كربلاء"];
        } else if (event == "المثنى") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[10];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية المثنى"];
        } else if (event == "ميسان") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[11];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية ميسان"];
        } else if (event == "النجف الاشرف") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[12];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية النجف"];
        } else if (event == "نينوى") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[13];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية نينوى"];
        } else if (event == "واسط") {
            document.getElementById("68185").style.display = "block";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[13].properties[0].values = getdistinct[14];
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية واسط"];
        }else if(event == "اربيل"){
            document.getElementById("68185").style.display = "none";
            document.getElementById("69494").style.display = "block";
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية اربيل"];
        }else if(event == "السليمانية"){
            document.getElementById("68185").style.display = "none";
            document.getElementById("69494").style.display = "block";
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية السليمانية"];
        }else if(event == "دهوك"){
            document.getElementById("68185").style.display = "none";
            document.getElementById("69494").style.display = "block";
            this.group_of_form[0].fields[15].properties[0].values = ["بلدية دهوك"];
        } else {
            document.getElementById("68185").style.display = "none";
            document.getElementById("69494").style.display = "none";
            this.group_of_form[0].fields[14].properties[0].values = [];
        }
    },
}