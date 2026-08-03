{
// insert Companies according to governorate choice
    setCompanies(event){
        console.log(event);
        switch (event) {
            case "بغداد - الكرخ":
                console.log('inside switch');
                this.group_of_form[0].fields[1].properties[0].values = [
                    "الخلية الفائقة"
                    ,"ايرثلنك"
                ];
                console.log(this.group_of_form[0].fields[1].properties[0].values)
                break;

            case "بغداد - الرصافة":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "الجزيرة", "ايرثلنك"
                ];
                break;

            case "بابل":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "هلال الرافدين"
                    ,"ايرثلنك"
                ];
                break;

           case "البصرة":
               this.group_of_form[0].fields[1].properties[0].values = [
                    "العراق الوطنية"
                    ,"ايرثلنك"
                ];
                break;

            case "ذي قار":
              this.group_of_form[0].fields[1].properties[0].values = [
                    "ايرثلنك",
                    "الخلية الفائقة"
                ];
                break;

            case "المثنى":
               this.group_of_form[0].fields[1].properties[0].values = [
                    "ايرثلنك",
                    "الخلية الفائقة"
                ];
                break;

            case "الانبار":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "الرحمة"
                    , "ايرثلنك"
                ];
                break;

            case "كركوك":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "طريق الثريا"
                    ,"ايرثلنك"
                ];
                break;

            case "واسط":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "الخبرة اللامنتهية"
                    ,"ايرثلنك"
                ];
                break;

            case "كربلاء المقدسة":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "عراق سيل"
                    , "ايرثلنك"
                ];
                break;

            case "النجف الاشرف":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "الصباح التقنية"
                    ,"ايرثلنك"
                ];
                break;

            case "القادسية":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "بلد الشموخ"
                    ,"ايرثلنك"
                ];
                break;

            case "صلاح الدين":
               this.group_of_form[0].fields[1].properties[0].values = [
                    "الخلية الفائقة",
                    "ايرثلنك"
               ];
               break;

            case "ديالى":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "نخبة العراق"
                    ,"ايرثلنك"
                ];
                break;

            case "نينوى":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "نور البداية"
                    ,"ايرثلنك"
                ];
                break;
            case "ميسان":
                this.group_of_form[0].fields[1].properties[0].values = [
                    "الحياة"
                    ,"ايرثلنك"
                ];
                break;
            default:
                this.group_of_form[0].fields[2].properties[0].values = [];
        }
        this.inputFormField.residenceGov = event;
        this.inputFormField.internetCo = null;
        this.inputFormField.package = null;

    },
    // insert packages according to company
    setPackages(event){
        switch (event) {
            case "ايرثلنك":
                this.group_of_form[2].fields[0].properties[0].values = ["FIBER 35", "FIBER 50", "FIBER 75", "FIBER 150"];
                break;
            case "الخلية الفائقة":
                this.group_of_form[2].fields[0].properties[0].values = ["HERO 150 MBPS", "HERO 100 MBPS", "HERO 50 MBPS"];
                break;
            case "الجزيرة":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "1 DAY TRAIL",
                    "ULTIMATE",
                    "JAZ 40 MBPS",
                    "JAZ 65 MBPS",
                    "JAZ 150 MBPS",
                    "OFFER",
                    "JAZ 250 MBPS"
                ];
                break;
            case "هالة الرافدين":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "SPARK",
                    "STORM",
                    "THUNDER",
                    "TORNADO",
                    "SPARK_OFFER",
                    "STORM_OFFER"
                ];
                break;
            case "هلال الرافدين":

                this.group_of_form[2].fields[0].properties[0].values = [
                    "P-35000",
                    "P-45000",
                    "P-65000"
                ];
                break;
            case "الرحمة":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "FURAT",
                    "REMAL",
                    "WAHA",
                    "JEBAL"
                ];
                break;
            case "طريق الثريا":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "SUPER-FAST",
                    "HYPER-FAST",
                    "EXTREME-FAST",
                    "ULTRA-FAST",
                    "EXTREME-FAST + IP",
                    "ITPC_OFFER",
                    "SUPER-FAST 3 - MONTHS",
                    "ULTRA-FAST 3 - MONTHS",
                    "ULTRA-FAST 6-MONTHS",
                    "HYPER-FAST 3-MONTHS"
                ];
                break;
            case "الخبرة اللامنتهية":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "باقة التواصل",
                    "باقة فايبر اكس",
                    "باقة العائلة",
                    "باقة هيرو",
                    "الباشا باقة-250",
                    "الباشا باقة - 175",
                    "الباشا باقة - 400",
                    "باقة هيرو +"
                ];
                break;
            case "عراق سيل":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "IRAQCELL_SILVER_PROFILE",
                    "IRAQCELL_GOLD_PROFILE",
                    "IRAQCELL_BRONZE_PROFILE",
                    "IRAQCELL_PLATINUM_PROFILE",
                    "OFFER_NEW"
                ];
                break;
            case "الصباح التقنية":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "A-SILVER",
                    "B-GOLD",
                    "C-DIAMOND"
                ];
                break;
            case "بلد الشموخ":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "NORMAL",
                    "FAST",
                    "STANDER",
                    "SUPER",
                    "SPARK",
                    "VIP",
                    "الترويجي"
                ];
                break;
            case "شبكة العراق":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "FTTH_SILVER P2",
                    "FTTH_GOLD P3",
                    "FTTH_PLATINUM P4",
                    "FTTH_FIRST P1"
                ];
                break;
            case "نخبة العراق":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "SILVER",
                    "GOLD",
                    "ALFA"
                ];
                break;
            case "نور البداية":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "45000_على مودك",
                    "55000_على مودك",
                    "75000_على مودك",
                    "35_MBPS",
                    "60_MBPS",
                    "100_MBPS"
                ];
                break;
            case "الحياة":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "GOLD", "SILVER", "DIAMOND", "PLATINUM"
                ];
                break;
            case "العراق الوطنية":
                this.group_of_form[2].fields[0].properties[0].values = [
                    "باقة التواصل",
                    "باقة فايبر اكس",
                    "باقة العائلة",
                    "باقة هيرو",
                    "الباشا باقة-250",
                    "الباشا باقة - 175",
                    "الباشا باقة - 400",
                    "باقة هيرو +"
                ];
                break;

            default: this.group_of_form[2].fields[0].properties[0].values = [];

        }

        this.inputFormField.package = null;
    },

    setCosts(event){

        // check if the subscription cost div exists in the row, then delete it
        let elementExists = document.getElementById("subscriptionCostDiv")
        if (elementExists) {
            elementExists.remove();
        }

        var text = null

        //packagesSubscriptionRow.appendChild
        switch (event) {
            case '1 DAY TRAIL':
                text = 'سعر الاشتراك: ' + ' 1,500' + ' دينار';
                break;
            case 'OFFER_NEW':
                text = 'سعر الاشتراك: ' + ' 20,000' + ' دينار';
                break;
            case 'ITPC_OFFER':
                text = 'سعر الاشتراك: ' + ' 25,000' + ' دينار';
                break;
            case 'الترويجي':
                text = 'سعر الاشتراك: ' + ' 25,000' + ' دينار';
                break;
            case 'OFFER':
                text = 'سعر الاشتراك: ' + ' 25,000' + ' دينار';
                break;
            case 'باقة التواصل':
            case 'NORMAL':
            case 'FTTH_FIRST P1':
            case '45000_على مودك':
            case 'IRAQCELL_BRONZE_PROFILE':
                text = 'سعر الاشتراك: ' + ' 30,000' + ' دينار';
                break;
            case 'FTTH_SILVER P2':
                text = 'سعر الاشتراك: ' + ' 33,000' + ' دينار';
                break;
            case 'FIBER 35':
            case 'HERO 50 MBPS':
            case 'JAZ 40 MBPS':
            case 'SPARK_OFFER':
            case 'FURAT':
            case 'باقة فايبر اكس':
            case 'P-35000':
            case 'SUPER-FAST':
            case 'A-SILVER':
            case 'SILVER':
            case '35_MBPS':
                text = 'سعر الاشتراك: ' + ' 35,000' + ' دينار';
                break;
            case 'ULTRA-FAST':
                text = 'سعر الاشتراك: ' + ' 39,000' + ' دينار';
                break;
            //case 'SPARK':
            case 'FAST':
            case 'IRAQCELL_SILVER_PROFILE':
                text = 'سعر الاشتراك: ' + ' 40,000' + ' دينار';
                break;
            case 'FTTH_GOLD P3':
                text = 'سعر الاشتراك: ' + ' 43,000' + ' دينار';
                break;
            case 'FIBER 50':
            case 'HERO 100 MBPS':
            case 'JAZ 65 MBPS':
            case 'STORM_OFFER':
            case 'REMAL':
            case 'باقة العائلة':
            case 'P-45000':
            case 'B-GOLD':
            case 'GOLD':
            case '60_MBPS':
            case '55000_على مودك':
                text = 'سعر الاشتراك: ' + ' 45,000' + ' دينار';
                break;
            case 'HYPER-FAST':
                text = 'سعر الاشتراك: ' + ' 49,000' + ' دينار';
                break;
            case 'IRAQCELL_GOLD_PROFILE':
                text = 'سعر الاشتراك: ' + ' 50,000' + ' دينار';
                break;
            case 'WAHA':
                text = 'سعر الاشتراك: ' + ' 60,000' + ' دينار';
                break;
            case 'FIBER 75':
            case 'HERO 150 MBPS':
            case 'JAZ 150 MBPS':
            case 'باقة هيرو':
            case 'P-65000':
            case 'SUPER':
            case 'DIAMOND':
            case 'C-DIAMOND':
            case 'ALFA':
            case '75000_على مودك':
            case '100_MBPS':
            case 'IRAQCELL_PLATINUM_PROFILE':
                text = 'سعر الاشتراك: ' + ' 65,000' + ' دينار';
                break;
            case 'FTTH_PLATINUM P4':
                text = 'سعر الاشتراك: ' + ' 69,000' + ' دينار';
                break;
            case 'EXTREME-FAST':
                text = 'سعر الاشتراك: ' + ' 79,000' + ' دينار';
                break;
            case 'EXTREME-FAST + IP':
                text = 'سعر الاشتراك: ' + ' 89,000' + ' دينار';
                break;
            case 'ULTIMATE':
            case 'باقة هيرو +':
            case 'SPARK':
                text = 'سعر الاشتراك: ' + ' 90,000' + ' دينار';
                break;
            case 'FIBER 150':
            case 'JAZ 250 MBPS':
            case 'JEBAL':
            case 'VIP':
           case 'PLATINUM':
                text = 'سعر الاشتراك: ' + ' 100,000' + ' دينار';
                break;
            case 'SUPER-FAST 3 - MONTHS':
                text = 'سعر الاشتراك: ' + ' 105,000' + ' دينار';
                break;
            case 'الباشا باقة - 175':
                text = 'سعر الاشتراك: ' + ' 150,000' + ' دينار';
                break;
            case 'ULTRA-FAST 3 - MONTHS':
                text = 'سعر الاشتراك: ' + ' 117,000' + ' دينار';
                break;
            case 'HYPER-FAST 3-MONTHS':
                text = 'سعر الاشتراك: ' + ' 147,000' + ' دينار';
                break;
            case 'ULTRA-FAST 6-MONTHS':
                text = 'سعر الاشتراك: ' + ' 234,000' + ' دينار';
                break;
            case 'الباشا باقة-250':
                text = 'سعر الاشتراك: ' + ' 200,000' + ' دينار';
                break;
            case 'الباشا باقة - 400':
                text = 'سعر الاشتراك: ' + ' 300,000' + ' دينار';
                break;
        }

        let packageSubscription = document.getElementById("12285_group");
        if (packageSubscription && text) {


            // add subscription cost
            let subscriptionCost = document.createElement('h5');
            subscriptionCost.innerHTML = text;
            subscriptionCost.style.color = '#dc3545';

            let div = document.createElement('div');
            div.classList.add("col-md-6");
            div.classList.add("col-12");
            div.style.display = "block";
            div.setAttribute("id", "subscriptionCostDiv");
            div.appendChild(subscriptionCost);

            let packageSubscriptionRow = packageSubscription.children[0].children[1].children[0];
            packageSubscriptionRow.appendChild(div);
            console.log(packageSubscription.children[0].children[1].children[0]);

        }
    },

    getsubCities(event) {
        this.inputFormField["district"] = null;
        var getdistnict =
            [
                ["بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية", "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات", "الفلوجة", "القائم", "كبيسة", "الكرمة", "النخيب", "هيت", "الوفاء", "الوليد"],//اقضية الانبار
                ["أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", "المشروع", "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة", "جرف النصر (جرف الصخر)", "سدة الهندية"],//اقضية بابل
                ["ابي غريب", "العبايجي", "الفحامة", "الفرات", "الكرخ", "الكاظمية", "اللطيفية", "المحمودية", "المأمون", "المنصور", "المشاهدة", "اليوسفية", "النصر والسلام", "الرشيد", "الطارمية"],//اقضية بغداد الكرخ
                ["ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة", "الراشدية", "الرصافة", "الصديق الاكبر", "الصدر الاولى", "الصدر الثانية", "التاجي", "الزهور", "بغداد الجديدة", "ذات السلاسل", "فلسطين"],//اقضية بغداد الرصافه
                ["أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة", "الثغر", "الشهيد عز الدين سليم", "الزبير", "سفوان", "شط العرب", "طلحة", "أم قصر", "الامام الصادق"],//اقضية البصرة
                ["أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية", "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز", "هبهب", "جبارة", "جلولاء", "كنعان", "خانقين", "مندلي", "قرة تبة", "سيف سعد"],//اقضية ديالى
                ["الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح", "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار", "أور", "كرمة بني سعد", "قلعة سكر", "سيد دخيل", "سوق الشيوخ", "عكيكة"],//اقضية ذي قار
                ["الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية", "بيجي", "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت", "طوز خورماتو", "يثرب", "العوجة"],//اقضية صلاح الدين
                ["الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية", "الشنافية", "الصلاحية", "السنية", "السدير", "غماس", "نفر", "سومر"],//اقضية القادسية
                ["دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق", "كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان", "تازة", "يايجي"],//اقضية كركوك
                ["عين تمر", "الهندية", "الحر", "الحسينية", "الجدول الغربي", "ناحية الخيرات", "كربلاء"],//اقضية كربلاء
                ["الدراجي", "البصية", "الهلال", "الكرامة", "الخضر", "المجد", "الوركاء", "النجمي", "الرميثة", "السلمان", "السماوة", "السوير"],//اقضية المثنى
                ["العدل", "العمارة", "علي الغربي", "علي الشرقي", "الكحلاء", "الخير", "الميمونة", "المجر الكبير", "المشرح", "العزيز", "سيد أحمد الرفاعي", "السلام", "بني هاشم", "كميت", "قلعة صالح"],//اقضية ميسان
                ["العباسية", "الحيدرية", "الحيرة", "الحرية", "الكوفة", "المناذرة", "المشخاب", "القادسية", "النجف", "الشبكة"],//اقضية النجف
                ["العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان", "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة", "الحمدانية (بغديدا)", "برطلة", "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة", "سنجار", "تلعفر", "تلكيف", "وانة", "زيلكان", "زمار", "الفاروق"],//اقضية نينوى
                ["الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت", "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة", "جصان", "شيخ سعد", "الحفرية (تاج الدين)", "ناحية واسط"],//اقضية واسط
            ];

        var x = event;
        if (x == "الانبار") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[0];
        } else if (x == "بابل") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[1];
        } else if (x == "بغداد - الكرخ") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[2];
        } else if (x == "بغداد - الرصافة") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[3];
        } else if (x == "البصرة") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[4];
        } else if (x == "ديالى") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[5];
        } else if (x == "ذي قار") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[6];
        } else if (x == "صلاح الدين") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[7];
        } else if (x == "القادسية") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[8];
        } else if (x == "كركوك") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[9];
        } else if (x == "كربلاء المقدسة") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[10];
        } else if (x == "المثنى") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[11];
        } else if (x == "ميسان") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[12];
        } else if (x == "النجف الاشرف") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[13];
        } else if (x == "نينوى") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[14];
        } else if (x == "واسط") {
            document.getElementById("32778").style.display = "block";
            this.group_of_form[4].fields[1].properties[0].values = getdistnict[15];
        } else {
            document.getElementById("32778").style.display = "none";
            this.group_of_form[4].fields[1].properties[0].values = [];
        }
    },
  }