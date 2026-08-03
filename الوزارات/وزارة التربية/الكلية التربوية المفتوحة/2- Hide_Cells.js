{
    First_Hide(event){
        var Selected_Value = ["وثقية تخرج بدون درجات", "وثيقة تخرج بالدرجات باللغة العربية", "تاييد تخرج"];
        var English_IDs = [
            "14333", //اذا كان الطلب للوثائق باللغة الانكليزية يرجى ملئ الحقول التالية:
            "14334", //ذكر العنوان باللغة الانكليزية
            "14336" //(كتابة الاسم باللغة الانكليزية )Full Name
        ],
        English_Progs = [
            "TowhomEnglish", //ذكر العنوان باللغة الانكليزية
            "EngName", //(كتابة الاسم باللغة الانكليزية )Full Name
        ];

        this.inputFormField["addres"] = null; //الجهة المعنونة اليها
        for(var i = 0; i < English_Progs.length; i++){
            this.inputFormField[English_Progs[i]] = null;
        }

        if(Selected_Value.includes(event)){
            document.getElementById("73225").style.display = "block"; //الجهة المعنونة اليها
            
            for(var j = 0; j < English_IDs.length; j++){
                document.getElementById(English_IDs[j]).style.display = "none";
            }
        }else if(event == "وثيقة تخرج بالدرجات باللغة الانكليزية"){
           document.getElementById("73225").style.display = "none"; //الجهة المعنونة اليها
            
            for(var j = 0; j < English_IDs.length; j++){
                document.getElementById(English_IDs[j]).style.display = "block";
            }

            document.getElementById("14333").style.cssText =
                "color: red; font-size: 18px; font-weight: bold; padding-top: 19px; padding-bottom: 15px;";
        }else{
            document.getElementById("73225").style.display = "none"; //الجهة المعنونة اليها
            
            for(var j = 0; j < English_IDs.length; j++){
                document.getElementById(English_IDs[j]).style.display = "none";
            }
        }
    },

    //-----------------------------------------------------------------------------------------------------------
    //--------------------------------------------كود تسهيل-----------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------
    singleNotification(notifyText, position) {
        this.$toast.success(notifyText, {
            position: position,
            timeout: 6000,
            closeOnClick: false,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: true
        });
    },

    getManagCity(event) {
        this.group_of_form[0].fields[26].properties[0].values = [];
        document.getElementById("87128").style.display = "none";
        //تفريغ سلكتر المنطقة في حال عدم اختيار اي محافظة
        this.inputFormField["customArea"] = null;
        var arrCities = [
            "بابل", //0--
            "الانبار", //1--
            "الموصل", //2--
            "الناصرية", //3--
            "البصرة", //4--
            "ديالى", //5--
            "كركوك", //6--
            "صلاح الدين", //7--
            "الكوت", //8--
            "ميسان", //9--
            "كربلاء", //10--
            "النجف", //11--
            "القادسية", //12--
            "المثنى", //13--
            "بغداد" //14--
        ];
        var arrayBranch = [
            [
                "الحلة - الجديدة",
                "الفرات",
                "الكفل",
                "الهاشمية",
                "الحلة",
                "الحمزة الغربي",
                "المسيب",
                "القاسم",
                "كوثى",
                "الصويرة",
                "النيل",
                "التحاويل",
                "الخرسة"
            ],//0--
            [
                "راية",
                "العامرية",
                "الرطبة",
                "الفلوجة",
                "حديثة",
                "الكرمة",
                "البغدادي",
                "القائم",
                "الرمادي",
                "الحبانية",
                "عانة",
                "الخالدية",
                "هيت",
                "نينوى",
                "الصقلاوية"
            ],//1--
            [
                "تلكيف",
                "الحمدانية",
                "العربي",
                "وادي حجر",
                "المدينة العتيقة",
                "نينوى",
                "المنصور",
                "تلعفر",
                "المأمون",
                "السكر",
                "الشفاء",
                "سنجار",
                "القيارة",
                "التنك",
                "الشيخان",
                "البعاج",
                "عقرة",
                "المثنى",
                "الحضر",
                "الزهراء"
            ],//2--
            [
                "الرفاعي",
                "الجزائر",
                "الجبايش",
                "التربية",
                "المصطفى",
                "الفضيلية",
                "الشطرة",
                "المعلمون",
                "مخمور",
                "البطحاء",
                "الإسكان",
                "النصر",
                "ذي قار",
                "الفجر",
                "الحبوبي",
                "الفهود",
                "سوق الشيوخ",
                "الصناعي",
                "المجر",
                "الشهداء"
            ],//3--
            [
                "الهارثة",
                "شط العرب",
                "المعقل",
                "البرجسية",
                "الزبير",
                "المدينة",
                "القبلة",
                "ابو الخصيب",
                "سفوان",
                "العشار",
                "القرنة",
                "الخورة",
                "التنومة",
                "الفاو",
                "الجمهورية",
                "الأبلة"
            ],//4--
            [
                "خانقين",
                "الخالص",
                "جلولاء",
                "بعقوبة",
                "المقدادية",
                "السعدية",
                "منصورية الجبل",
                "بلد روز",
                "قرة تبة",
                "مندلي"
            ],//5--
            [
                "الحرية",
                "القادسية",
                "داقوق",
                "دوميز",
                "المعلمين",
                "العسكري",
                "شورو",
                "الواسطي",
                "الحويجة",
                "رحيماوا",
                "المنصور",
                "دبس",
                "عرفة",
                "كركوك"
            ],//6--
            [
                "سليمان بيك",
                "بيجي",
                "امرلي",
                "سامراء",
                "الدجيل",
                "العلم",
                "الدور",
                "طوز خورماتو",
                "خان البغدادي",
                "تكريت",
                "الشرقاط",
                "بلد"
            ],//7--
            [
                "الموفقية",
                "الخلاني",
                "الاحرار",
                "المحمودية",
                "الصويرة",
                "المدينة",
                "النعمانية",
                "العزيزية",
                "السوق",
                "الحي",
                "الجبيري",
                "الزبيدية",
                "بدرة",
                "السد",
                "واسط",
                "مركز مدينة الكوت",
                "النصر"
            ],//8--
            [
                "القلعة",
                "المجمع",
                "البطلة",
                "الميمونة",
                "الكحلاء",
                "قلعة صالح",
                "علي الشرقي",
                "المجر",
                "المدائن",
                "الكحلاء",
                "العمارة",
                "السلام",
                "الصدر",
                "علي الغربي",
                "البيضاء"
            ],//9--
            [
                "الصادق",
                "القادسية",
                "الحسين",
                "الهندية",
                "مركز مدينة كربلاء",
                "الجادرية",
                "الحر",
                "مذبح",
                "الفرات",
                "الخيرات",
                "المخيم",
                "عين التمر"
            ],//10--
            [
                "النجف الأشرف",
                "مركز مدينة النجف",
                "السجاد",
                "المشخاب",
                "الكوفة",
                "المناذرة",
                "القادرية",
                "الحيدرية",
                "الحنانة",
                "المثنى",
                "الخور"
            ],//11--
            [
                "الشافعية",
                "السيافية",
                "السنية",
                "الدغارة",
                "المقدادية",
                "السوق",
                "الكحلاء",
                "آل بدير",
                "الحمزة",
                "سومر",
                "نفر",
                "حي الجزائر",
                "الجمهورية",
                "الشامية",
                "مركز مدينة الديوانية",
                "المخيم",
                "البطينة"
            ],//12--
            [
                "المجر",
                "الحي",
                "الرميثة",
                "الخالدية",
                "السلمان",
                "السد",
                "الوركاء",
                "السماوة",
                "الهارثة",
                "الخضر"
            ],//13--
            [
                "يوسفية",
                "عامرية",
                "حارثية",
                "اسكان",
                "عرصات",
                "حي الاعلام",
                "يرموك",
                "جمعية خير الله",
                "علي الصالح",
                "مواصلات",
                "صليخ",
                "ري",
                "نهضة",
                "فحامة",
                "بيجية",
                "امين",
                "تراث",
                "شعلة",
                "غزالية",
                "قاهرة",
                "شالجية",
                "دولعي",
                "كاظمية",
                "مهدية",
                "رشاد",
                "مستنصرية",
                "سفارات",
                "علوية",
                "غدير",
                "شارع المغرب",
                "مدينة الصدر",
                "مشتل",
                "حي الجهاد",
                "رسالة",
                "شرطة خامسة",
                "الطوبجي",
                "زعفرانية",
                "مشتل",
                "تاجي",
                "لطيفية",
                "ثعالبة",
                "راشدية",
                "دورة",
                "سبع ابكار",
                "وزيرية",
                "وزيرية",
                "شارع فلسطين",
                "محمودية",
                "عبيدي",
                "شعب",
                "حي تونس",
                "عدل",
                "باب الشرقي",
                "ابي غريب",
                "حي أور",
                "رصافة",
                "بسماية",
                "الحرية",
                "فضيلية",
                "اعطيفية",
                "باب المعظم",
                "أعظمية",
                "كريعات",
                "قادسية",
                "بكرية",
                "أبو دشير",
                "زيونة",
                "شباب",
                "جوادين",
                "مدائن",
                "طارمية",
                "رفاق",
                "صالحية",
                "وحدة",
                "حي الجامعة",
                "بنوك",
                "حي العامل",
                "حي الخضراء",
                "صحة",
                "كرخ",
                "منصور",
                "جادرية",
                "كرادة",
                "معامل",
                "حي جميلة",
                "شارع حيفا",
                "داودي",
                "حسينية",
                "كمالية",
                "وشاش",
                "بغداد الجديدة",
                "بياع",
                "الكفاح",
                "كرادة مريم",
                "صالحية",
                "الطالبية",
                "شرطة رابعة",
                "ميكانيك",
                "البلديات",
                "المنطقة الخضراء",
                "سيدية",
                "خطيب",
                "معالف"
            ]//14
        ];
        for (var i = 0; i < arrCities.length; i++) {
            if (arrCities[i] == event) {
                //سلكتر المنطقة
                document.getElementById("87128").style.display = "block";
                this.group_of_form[0].fields[26].properties[0].values =
                    arrayBranch[i];
            }
        }
    },

    async getPriceInfoApi(city, area) {
        let loader = this.$loading.show({
            container: this.$refs.formContainer,
            loader: "dots",
            transition: "fade",
            color: "#c30734"
        });
        try {
            const response = await fetch(
                "https://eservice.ur.gov.iq/api/v2/customer/tashel/total_amount",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${this.token}`
                    },
                    body: JSON.stringify({
                        city: city,
                        area: area
                    })
                }
            );
            loader.hide();
            const result = await response.json();
            if (!result.response.message || !result.response.message.total_amount) {
                this.evalErr.push("لم يتم جلب بيانات السعر الكلي ");
                this.singleNotification(
                    "لم يتم جلب بيانات السعر الكلي",
                    "top-right"
                );
            } else {
                this.evalErr = [];
                this.singleNotification(
                    "تم جلب بيانات السعر الكلي بنجاح",
                    "top-right"
                );
                var totalAmount = result.response.message.total_amount;

                if (totalAmount) {
                    //اظهار حقل مبلغ التوصيل وقفله واضافة مبلغ التوصيل بداخله
                    document
                        .getElementById("87129")
                        .classList.add("isDisabled");

                    document.getElementById("87129").style.display =
                        "block";

                    this.inputFormField["totalPrice"] = `${totalAmount}`;

                    document.getElementsByName(
                        "totalPrice"
                    )[0].disabled = true;
                }
            }
        } catch (error) {
            this.singleNotification(
                "حدث خطأ أثناء جلب بيانات السعر الكلي",
                "top-right"
            );
            loader.hide();
            this.hideErr.push(error);
        }
    },

    getTotalPrice(event) {
        if (event) {
            var selectedCityEnglish = "";
            //ياخذ قيمة المحافظة ويحطها بهذا المتغير
            var selectedCityArabic = this.inputFormField["customCity"];
            var citiesArabic = [
                "بابل", //0
                "الانبار", //1
                "الموصل", //2
                "الناصرية", //3
                "البصرة", //4
                "ديالى", //5
                "كركوك", //6
                "صلاح الدين", //7
                "الكوت", //8
                "ميسان", //9
                "كربلاء", //10
                "النجف", //11
                "القادسية", //12
                "المثنى", //13
                "بغداد" //14
            ];
            var citiesEnglish = [
                "Babil",
                "Al-Anbar",
                "Mosul",
                "Al-Nasiriyah",
                "Basra",
                "Diyala",
                "Kirkuk",
                "Salah al-Din",
                "Al-Kut",
                "Maysan",
                "Karbala",
                "Najaf",
                "Al-Qadisiyyah",
                "Al-Muthanna",
                "Baghdad"
            ];

            for (var i = 0; i < citiesArabic.length; i++) {
                if (citiesArabic[i] == selectedCityArabic) {
                    selectedCityEnglish = citiesEnglish[i];
                }
            }
            this.getPriceInfoApi(
                selectedCityArabic,
                this.inputFormField["customArea"]
            );
        } else {
            //اخفاء حقل مبلغ التوصيل
            document.getElementById("87129").style.display = "none";
            this.inputFormField["totalPrice"] = null;
            document.getElementById("87129").classList.add("isDisabled");
        }
    },
    
    getTasheelInfo(event) {
        var fieldsIDs = [
            "87110", //البريد الالكتروني
            "87119", //رقم القطعة
            "87120", //محلة
            "87121", //رقم الدار
            "87122", //الزقاق
            "87125", //اقرب نقطة دالة
            "87126", //المحافظة
        ];
        var fieldsNames = [
            "tasheelEmail", //البريد الالكتروني
            "addressLineOne", //رقم القطعة
            "addressLineTow", //محلة
            "homeNumber", //رقم الدار
            "county", //الزقاق
            "nearestLandmark", //اقرب نقطة دالة
            "customCity", //المحافظة
        ];
        if (event) {
            fieldsIDs.forEach(el => {
                document.getElementById(el).style.display = "block";
            });
            fieldsNames.forEach(fieldName => {
                this.inputFormField[fieldName] = null;
            });
        } else {
            fieldsIDs.forEach(el => {
                document.getElementById(el).style.display = "none";
            });
            fieldsNames.forEach(fieldName => {
                this.inputFormField[fieldName] = null;
            });
            //---- empty the customArea
            this.group_of_form[0].fields[26].properties[0].values = [];
            document.getElementById("87128").style.display = "none";
            this.inputFormField["customArea"] = null;
        }
    },
}