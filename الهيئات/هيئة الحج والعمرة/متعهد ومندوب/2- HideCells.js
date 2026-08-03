{
    First_Hide(event){
        this.inputFormField["companyn"] = null; //اسم شركة العمرة
        this.inputFormField["companyserial"] = null; //رمز شركة العمرة
        this.inputFormField["selecttow"] = null; //اسم المكتب

        if(event == "رحلات عمرة مستقلة"){
            document.getElementById("92278").style.display = "none"; //اسم شركة العمرة
            document.getElementById("92279").style.display = "none"; //رمز شركة العمرة
            document.getElementById("92502").style.display = "block"; //اسم المكتب
        }else if(event == "ضمن شركة عمرة"){
            document.getElementById("92278").style.display = "block"; //اسم شركة العمرة
            document.getElementById("92279").style.display = "block"; //رمز شركة العمرة
            document.getElementById("92502").style.display = "none"; //اسم المكتب
        }else{
            document.getElementById("92278").style.display = "none"; //اسم شركة العمرة
            document.getElementById("92279").style.display = "none"; //رمز شركة العمرة
            document.getElementById("92502").style.display = "none"; //اسم المكتب
        }
    },

    Main_Check(Result){
        const Fields_Prog = [
            //البيانات الشخصية
            "fname", //الاسم الاول
            "sname", //الاسم الثاني
            "thname", //الاسم الثالث
            "familyname", //اللقب
            "nid", //رقم البطاقة الوطنية
            "phone", //رقم موبايل فعال للمتقدم
            "passport", //رقم الجواز
            "birth", //التولد
            "soia", //الحالة الاجتماعية
            "gender", //الجنس
            "mothername", //اسم الام
            "mothernames", //اسم اب الام
            "typetwo", //نوع التقديم
            //معلومات السكن
            "governorate", //اختر المحافظة
            "district", //اختر القضاء
            "adcardno", //رقم بطاقة السكن
            "seq", //المحلة
            "street", //الزقاق
            "house", //رقم الدار
            "nearpoint", //اقرب نقطة دالة
            //التحصيل الدراسي والعمل
            "pacadimy", //التحصيل الدراسي للمتقدم
            "wtype", //المجال الذي تعمل به
            "work", //سنوات الخبرة والعمل
            "makaa", //اسماء الفنادق التي تسكن فيها في مكة المكرمة
            "madinahotel", //اسماء الفنادق التي تسكن بها في المدينة المنورة
            "agreement", //التعهد الاول
            "signt", //التعهد الثاني
        ];

        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);
        if(Result){
            document.getElementById("35444_group").style.display = "block"; //البيانات الشخصية
            document.getElementById("35445_group").style.display = "block"; //معلومات السكن
            document.getElementById("35446_group").style.display = "block"; //التحصيل الدراسي والعمل
            document.getElementById("35448_group").style.display = "block"; //التعهد القانوني الالكتروني
        }else{
            document.getElementById("35444_group").style.display = "none"; //البيانات الشخصية
            document.getElementById("35445_group").style.display = "none"; //معلومات السكن
            document.getElementById("35446_group").style.display = "none"; //التحصيل الدراسي والعمل
            document.getElementById("35448_group").style.display = "none"; //التعهد القانوني الالكتروني
        }
    },

    First_Check(event){
        const Companies = [
            { Company_Name: "مسار لابد العراق للحج والعمرة محدودة المسؤولية", Password: "MS@01" },
            { Company_Name: "عارف عواد فرحان للحج والعمرة ونقل المسافرين -مشروع فردي", Password: "EA@02" },
            { Company_Name: "المأثر للحج والعمرة محدودة المسؤولية", Password: "AL@03" },
            { Company_Name: "رحلة العلوش للسفر والسياحة محدودة المسؤولية", Password: "RH@04" },
            { Company_Name: "المهندس للحج والعمرة ونقل المسافرين محدودة المسؤولية", Password: "AL@05" },
            { Company_Name: "ديم البوادي الدولية للحج والعمرة محدودة المسؤولية", Password: "DY@06" },
            { Company_Name: "خيرات مكة للحج والعمرة محدودة المسؤولية", Password: "KY@07" },
            { Company_Name: "ديم البوادي للسفر والسياحة محدودة المسؤولية", Password: "DY@08" },
            { Company_Name: "البشائر للحج والعمرة محدودة المسؤولية", Password: "AL@09" },
            { Company_Name: "البركة الدولية للسفر والسياحة محدودة المسؤولية", Password: "AL@10" },
            { Company_Name: "ارض الحرمين للحج والعمرة محدودة المسؤولية", Password: "AR@11" },
            { Company_Name: "الصفوة للسفر والسياحة محدودة المسؤولية", Password: "AL@12" },
            { Company_Name: "سامراء للسفر والسياحة محدوة المسؤولية", Password: "SA@13" },
            { Company_Name: "مناسك الحرم للحج والعمرة محدودة المسؤولية", Password: "MN@14" },
            { Company_Name: "قصواء المدينة المتحدة للسفر والسياحة محدودة المسؤولية", Password: "QS@15" },
            { Company_Name: "سبيل زمزم للحج والعمرة محدودة المسؤولية", Password: "SB@16" },
            { Company_Name: "الضيافة الدولية للحج والعمرة ونقل المسافرين محدودة المسؤولية", Password: "AL@17" },
            { Company_Name: "رياض السلام للحج والعمرة محدودة المسؤولية", Password: "RY@18" },
            { Company_Name: "الخيمة للحج والعمرة ونقل المسافرين المحدودة", Password: "AL@19" },
            { Company_Name: "القبا للحج والعمرة محدودة المسؤولية", Password: "AL@20" },
            { Company_Name: "الطواف للسفر والسياحة محدودة المسؤولية", Password: "AL@21" },
            { Company_Name: "الشموس الطالعة للحج والعمرة محدودة المسؤولية", Password: "AL@22" },
            { Company_Name: "درة المدينة للحج والعمرة محدودة المسؤولية", Password: "DR@23" },
            { Company_Name: "الضيافة العالمية للسفر والسياحة والحج والعمرة محدودة المسؤولية", Password: "AL@24" },
            { Company_Name: "قريش للحج والعمرة محدودة المسؤولية", Password: "QR@25" },
            { Company_Name: "قريش للسفر والسياحة محدودة المسؤولية", Password: "QR@26" },
            { Company_Name: "الدرة للنقل العام ونقل المسافرين  محدودة المسؤولية", Password: "AL@27" },
            { Company_Name: "ديار المدينة للحج والعمرة محدودة المسؤولية", Password: "DY@28" },
            { Company_Name: "الياسر الدولية للسفر والسياحة محدودة المسؤولية", Password: "AL@29" },
            { Company_Name: "صفوة البيت للحج والعمرة محدودة المسؤولية", Password: "SF@30" },
            { Company_Name: "الصفا والمروة المباركة للحج والعمرة محدودة المسؤولية", Password: "AL@31" },
            { Company_Name: "الرواحل للسفر والسياحة محدودة المسؤولية", Password: "AL@32" },
            { Company_Name: "الاجابة للحج والعمرة محدودة المسؤولية", Password: "AL@33" },
            { Company_Name: "قمر قريش للسفر والسياحة محدودة المسؤولية", Password: "QM@34" },
            { Company_Name: "انوار الصالح الدولية للحج والعمرة محدودة المسؤولية", Password: "AN@35" },
            { Company_Name: "الجراح للحج والعمرة ونقل المسافرين محدودة المسؤولية", Password: "AL@36" },
            { Company_Name: "رند البوادي للسفر والسياحة محدودة المسؤولية", Password: "RN@37" },
            { Company_Name: "نينوى للحج والعمرة محدودة المسؤولية", Password: "NY@38" },
            { Company_Name: "احباب الرحمن للحج والعمرة المحدودة", Password: "AH@39" },
            { Company_Name: "الحرم للحج والعمرة ونقل المسافرين محدودة المسؤولية", Password: "AL@40" },
            { Company_Name: "اجنحة العراق للحج والعمرة محدودة المسؤولية", Password: "AJ@41" },
            { Company_Name: "ركن الحجر الاسود للحج والعمرة محدودة المسؤولية", Password: "RK@42" },
            { Company_Name: "انوار الحرمين للحج والعمرة محدودة المسؤولية", Password: "AN@43" },
            { Company_Name: "رياحين طيبة للحج والعمرة محدودة المسؤولية", Password: "RY@44" },
            { Company_Name: "ايلاف للحج والعمرة محدودة المسؤولية", Password: "AY@45" },
            { Company_Name: "نسيم الصفا للحج والعمرة محدودة المسؤولية", Password: "NS@46" },
            { Company_Name: "رحلة الوسام للحج والعمرة ونقل المسافرين محدودة المسؤولية", Password: "RH@47" },
            { Company_Name: "نوار الخير للحج والعمرة محدودة المسؤولية", Password: "NW@48" },
            { Company_Name: "نور ارض الملتقى للحج والعمرة محدودة المسؤولية", Password: "NW@49" },
            { Company_Name: "انوار الامل للحج والعمرة ونقل المسافرين محدودة المسؤولية", Password: "AN@50" },
            { Company_Name: "جوهرة الارض للسفر والسياحة والحج والعمرة المحدودة", Password: "JW@51" },
            { Company_Name: "ابداع الياسر العالمية للسفر والسياحة المحدودة", Password: "AB@52" },
            { Company_Name: "دار التيسير للحج والعمرة محدودة المسؤولية", Password: "DA@53" },
            { Company_Name: "الايوان للحج والعمرة محدودة المسؤولية", Password: "AA@54" },
            { Company_Name: "نور الماسة للحج والعمرة ونقل المسافرين محدودة المسؤولية", Password: "AB@55" },
            { Company_Name: "نبع الطائف للسفر والسياحة محدودة المسؤولية", Password: "AC@56" },
            { Company_Name: "المربد للسفر والسياحة محدودة المسؤولية", Password: "AD@57" },
            { Company_Name: "البروج للسفر والسياحة المحدودة", Password: "AE@58" },
            { Company_Name: "ديار العراق للحج والعمرة محدودة المسؤولية", Password: "AF@59" },
            { Company_Name: "سفرة الروان لنقل المسافرين المحدودة", Password: "AG@60" },
            { Company_Name: "سما الجود للسفر والسياحة محدودة المسؤولية", Password: "AH@61" },
            { Company_Name: "البحر للحج والعمرة محدودة المسؤولية", Password: "AI@62" },
            { Company_Name: "راوي الخليج للحج والعمرة محدودة المسؤولية", Password: "AJ@63" },
            { Company_Name: "نور المعارف للحج والعمرة محدودة المسؤولية", Password: "AK@64" },
            { Company_Name: "جوهرة الصفا للحج والعمرة محدودة المسؤولية", Password: "AL@65" },
            { Company_Name: "عطاء القائم للحج والعمرة محدودة المسؤولية", Password: "AM@66" },
            { Company_Name: "أجنحة الشاهين للسفر والسياحة المحدودة", Password: "AN@67" },
            { Company_Name: "عود المسك  الطيب للحج والعمرة محدودة المسؤولية", Password: "AO@68" },
            { Company_Name: "طيبة للحج والعمرة المحدودة", Password: "AP@69" },
            { Company_Name: "رحلة نسيم الجنة للحج والعمرة محدودة المسؤولية", Password: "QM@70" },
            { Company_Name: "وادي الحيرة للسفر والسياحة والحج والعمرة محدودة المسؤولية", Password: "LT@71" },
            { Company_Name: "ارض الجنان للحج والعمرة محدودة المسؤولية", Password: "BX@72" },
            { Company_Name: "الظفر للسفر والسياحة المحدودة", Password: "RK@73" },
            { Company_Name: "ارض النجف لنقل المسافرين والحج والعمرة محدودة المسؤولية", Password: "HV@74" },
            { Company_Name: "نجم الرحاب للحج والعمرة محدودة المسؤولية", Password: "CP@75" },
            { Company_Name: "عين الباز للحج والعمرة محدودة المسؤولية", Password: "ZD@76" },
            { Company_Name: "الضاحي للحج والعمرة محدودة المسؤولية", Password: "NF@77" },
            { Company_Name: "البقاع الطاهرة للسفر والسياحة المحدودة", Password: "YW@78" },
            { Company_Name: "مواكب الخير للحج والعمرة محدودة المسؤولية", Password: "GS@79" },
            { Company_Name: "المسرة للحج والعمرة محدودة المسؤولية", Password: "MJ@80" },
        ];

        let Result = Companies.find((Finding) => this.inputFormField.companyn === Finding.Company_Name && event === Finding.Password);
        this.Main_Check(Result);
    },

    Second_Check(event){
        const Offices = [
            { 
                Office_Name: "الانبار", 
                Phone_Number: [
                    "9647806114142", //عبدالله عبدالسلام
                    "9647709941547", //محمد غسان مركز تحول رقمي
                ] 
            },
            { 
                Office_Name: "البصرة", 
                Phone_Number: [
                    "9647708303349", //عبدالخضر عبدالرضا عبدعلي
                ] 
            },
            { 
                Office_Name: "الجزيرة", 
                Phone_Number: [
                    "9647725982014", //داود سليمان حسن
                ] 
            },
            { 
                Office_Name: "الديوانية", 
                Phone_Number: [
                    "9647830759967", //محمد عبدالامير كاظم
                ] 
            },
            { 
                Office_Name: "الصمود", 
                Phone_Number: [
                    "9647804187007", //منتظر سهيل نجم
                ] 
            },
            { 
                Office_Name: "الفلوجة", 
                Phone_Number: [
                    "9647719630675", //عبدالعزيز محمود عبدالعزيز
                ] 
            },
            { 
                Office_Name: "المثنى", 
                Phone_Number: [
                    "9647881112408", //مصطفى
                ] 
            },
            { 
                Office_Name: "النجف الاشرف", 
                Phone_Number: [
                    "9647707935022", //مكتب النجف الأشرف
                ] 
            },
            { 
                Office_Name: "بابل", 
                Phone_Number: [
                    "9647735042688", //قيس كامل حسن
                ] 
            },
            { 
                Office_Name: "بغداد الاول",
                Phone_Number: [
                    "9647818364228", //احمد مجيد سلطان
                    "9647903959578" //هبة عطا باقر
                ]
            },
            { 
                Office_Name: "بغداد الثاني", 
                Phone_Number: [
                    "964718043737", //اركان حميد مركب 
                    "9647733346562", //مهند امجد
                ] 
            },
            { 
                Office_Name: "بغداد الثالث", 
                Phone_Number: [
                    "9647708841188", //خالد ولي ادريس
                    "9647703622643", //بلال احمد عبدالهادي
                ] 
            },
            { 
                Office_Name: "ديالى", 
                Phone_Number: [
                    "9647705686066", //علي كاظم حبيب
                ] 
            },
            { 
                Office_Name: "ذي قار", 
                Phone_Number: [
                    "9647803167173", //حسنين علي عبدالحسين
                ] 
            },
            {
                Office_Name: "صلاح الدين",
                Phone_Number: [
                    "9647705889474", //محجوب عبد الله لطيف
                ] 
            },
            { 
                Office_Name: "طوز", 
                Phone_Number: [
                    "9647702363817", //نوزاد جاسم محمد
                ] 
            },
            { 
                Office_Name: "عنه", 
                Phone_Number: [
                    "9647813186334", //احمد مهيدي داود
                ] 
            },
            { 
                Office_Name: "كربلاء المقدسة", 
                Phone_Number: [
                    "9647808183532", //حيدر طالب محمدعلي
                ] 
            },
            {
                Office_Name: "كركوك", 
                Phone_Number: [
                    "9647701247621", //هدايت خورشيد
                    "9647702392727" //حسين محمد صالح
                ] 
            },
            { 
                Office_Name: "نينوى", 
                Phone_Number: [
                    "9647705242424", //عبدالقادر عبدالسلام 
                ] 
            },
            { 
                Office_Name: "واسط", 
                Phone_Number: [
                    "9647702528799", //سيف رعد عبدالصاحب
                ] 
            },
            { 
                Office_Name: "ميسان", 
                Phone_Number: [
                    "9647705540010", //حيدر صبيح احمد
                    "9647705545554" //حسنين عبدالرضا زويد
                ] 
            },
        ];

        let Result = Offices.find((Finding) => Finding.Office_Name === event && Finding.Phone_Number.includes(this.user.phone_num));
        this.Main_Check(Result);
        if(Result){
            document.getElementById("93575").style.display = "none";
        }else{
            document.getElementById("93575").style.display = "block";

            document.getElementById("93575").style.cssText =
                "color: #ff0000; font-size: 22px; font-weight: bold; padding-top: 10px; padding-bottom: 10px; text-align: center;";
        }
    },

    First_Filter(event){
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
            this.group_of_form[2].fields[1].properties[0].values = Result.Showed_Value;
        }else{
            this.group_of_form[2].fields[1].properties[0].values = [];
        }
    }
}