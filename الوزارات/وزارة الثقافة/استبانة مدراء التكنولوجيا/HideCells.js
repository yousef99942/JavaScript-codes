{
    singleNotification(notifyText, position) {
        this.$toast.error(notifyText, {
            position: position,
            timeout: 6000,
            closeOnClick: false,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablemPercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: true
        });
    },

    ssingleNotification(notifyText, position) {
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

    checkEmployee(event){
        if (event) {
            let loader = this.$loading.show({
                container: this.$refs.formContainer,
                loader: "dots",
                transition: "fade",
                color: "#c30734"
            });

            var phoneNumber = [
                "9647718675413",//زيد علي عودة
                "9647709617338",//نادية حاتم جاسم
                "9647901423849",//ظافر نوري راضي
                "9647717236347",//ابو بكر عبد ابراهيم
                "9647901170883",//منى خليل ابراهيم
                "9647701824691",//مريم يونس عبد الرزاق
                "9647707766818",//عقيل داود حبيب*
                "9647726337360",//صبا محمود شاكر
                "9647901768952",//علاء عبد العباس عبد المطلب
                "9647700745889",//احمد فائق حميد
                "9647708876326",//اسامة صبري
                "9647901991011",//احمد عوني قدوري
                "9647704662552",//مصعب عبد المنعم طه
                "9647700205595",//وليد ابراهيم داود
                "9647715417414",//حيدر سعدي
            ],
            Dept_Names = [
                "مقر الوزارة",
                "دار الكتب و الوثائق",
                "الدار العراقية للازياء",
                "دائرة العلاقات الثقافية",
                "دار ثقافة الأطفال",
                "دار الثقافة و النشر الكردية",
                "هيئة السياحة",
                "دار المامون للترجمة و النشر",
                "الهيئة العامة للاثار و التراث",
                "دائرة الفنون الموسيقية",
                "دائرة السينما و المسرح",
                "دائرة الفنون العامة",
                "دائرة الشؤون الثقافية",
                "الشركة العامة للمدينة السياحية في الحبانية",
                "قصر المؤتمرات",
            ];

            let matchFound = false; // Flag to track if a match is found

            for(var i = 0; i < phoneNumber.length; i++){
                if((this.inputFormField["PhoneNumber"] == phoneNumber[i] && this.inputFormField["Department"] == Dept_Names[i]) ||
                    this.inputFormField["PhoneNumber"] == "9647811911618" ||
                    this.inputFormField["PhoneNumber"] == "9647706242275" ||
                    this.inputFormField["PhoneNumber"] == "9647718267149" ||
                    this.inputFormField["PhoneNumber"] == "9647712728880"
                ){
                    matchFound = true;
                    document.getElementById("34088_group").style.display = "none";
                    document.getElementById("34089_group").style.display = "block";
                    document.getElementById("34092_group").style.display = "block";
                    document.getElementById("34093_group").style.display = "block";
    
                    loader.hide();
                    this.ssingleNotification("تم الدخول بنجاح", "top-right");
                    break; // Exit the loop once a match is found
                }
            }

            if (!matchFound) {
                loader.hide();
                this.singleNotification("رقم الهاتف او الدائرة غير مطابقين مع المخول ", "top-right");
            }
        }
    },

    First_Function(event, Field_ID, Field_Prog, Condition_Value){
        this.inputFormField[Field_Prog] = null;
        if(event == Condition_Value){
            document.getElementById(Field_ID).style.display = "block";
        }else{
            document.getElementById(Field_ID).style.display = "none";
        }
    },

    Second_Function(event, Fields_ID, Fields_Prog, Condition_Value){
        if(event == Condition_Value){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
                this.inputFormField[Fields_Prog[i]] = null;
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
                this.inputFormField[Fields_Prog[i]] = null;
            }
        }
    },

    FirstHide(event){
        this.First_Function(event, "67909", "NetworkType", "نعم");
    },

    SecondHide(event){
        var IDs = [
            "67911", "67912",
        ],
        Progs = [
            "SubDeptNum", "ThirdSelector",
        ];

        this.Second_Function(event, IDs, Progs, "نعم");
    },

    ThirdHide(event){
        this.First_Function(event, "67918", "FirstTable", "نعم");
    },

    FourthHide(event){
        this.First_Function(event, "67920", "SecondTable", "نعم");
    },

    FifthHide(event){
        this.First_Function(event, "67926", "NumberNeeded", "كلا");
    },

    SixthHide(event){
        this.First_Function(event, "67930", "MentionThem", "نعم");
    },

    SeventhHide(event){
        this.First_Function(event, "67933", "TheirType", "نعم");
    },

    EigthHide(event){
        this.First_Function(event, "67936", "ArchiveType", "نعم");
    },

    NinthHide(event){
        this.First_Function(event, "67939", "MailNum", "نعم");
    },
}