{
    singleNotification(notifyText, position) {
        this.$toast.error(notifyText, {
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

    First_Hide(event){
        let Groups_ID = [
            "35309_group", //البيانات الشخصية
            "35311_group", // الأستعداد للتحول الرقمي
            "35312_group", //الأستعداد النفسي والمهني للتحول الرقمي
            "35313_group", //المهارات الرقمية الأساسية
            "35314_group", //كفاءت البنية التقنية المتاحة
            "35315_group", //الانظمة والبرامج الالكترونية
            "35316_group", //الدورات التدريبية التي تحتاجها لتكون جاهز للتحول الرقمي
            "35317_group", //مقترحاتك لتحسين التحول الرقمي
            "35320_group", //البيانات الأساسية للتشكيل
            "35321_group", //أستعداد التشكيل للتحول الرقمي
            "35322_group", //مقترحاتك لتحسين التحول الرقمي.
        ];

        let Fields_Prog = [
            //البيانات الشخصية
            "namejob", //العنوان الوظيفي
            "namebb", //التشكيل
            "namerr", //القسم
            //الأستعداد للتحول الرقمي
            "namename", //هل لديك الأستعداد للتحول الرقمي؟
            //البيانات الأساسية للتشكيل
            "bname", //التشكيل
            "number", //عدد الموظفين الحاليين
            //أستعداد التشكيل للتحول الرقمي
            "fgfdgdfrhh", //هل عدد الموظفين كاف للعمل الرقمي ؟
            "jhdsvikhweif", //هل تتوفر أنظمة رقمية متكاملة وحديثة ؟
            "qwdfgrvds", //هل الأجهزة المتوفرة كافية وحديثة ؟
            "qwasezdq", //هل الموظفين بحاجة الى دورات تدريب رقمي؟
            "ajkdhjdjdxbx", //هل التشكيل بحاجة الى استحداث ............ معني بالتحول الرقمي ؟
            //مقترحاتك لتحسين التحول الرقمي.
            "namerdsw", //مقترحاتك لتحسين التحول الرقمي
        ];

        let PhoneNumbers = [
            "9647710945050", //نبيل اميلي هواس
            "9647707101805", //مصطفى جاسم هادي
            "9647702534760", //عباس صالح حسن
            "9647702534760", //رسل عامر براك
            "9647719758854", //رسل عامر براك
            "9647730999700", //احمد عبدالله ساجت
            "9647811911618", //يوسف احسان علي
            "9647708860872", //علي غني
            "9647718267149", //ماريا 
            "9647712728880", //احمد جناح
        ];

        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);

        let Values = [
            {
                Selected_Value: "موظف",
                Block_Groups: ["35309_group", "35311_group",], 
                Hide_Groups: ["35320_group", "35321_group", "35322_group",],
            },
            {
                Selected_Value: "مدير",
                Block_Groups: ["35320_group", "35321_group", "35322_group",],
                Hide_Groups: ["35309_group", "35311_group",], 
            },
        ];

        let Result = Values.find((Finding) => event === Finding.Selected_Value);

        if(Result && PhoneNumbers.includes(this.inputFormField.PhoneNumber)){
            Result.Block_Groups.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
            Result.Hide_Groups.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }else{
            Groups_ID.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }

        if(Result && !PhoneNumbers.includes(this.inputFormField.PhoneNumber)){
            Groups_ID.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");

            this.singleNotification("رقم الهاتف غير مطابق مع المخول ", "top-right");
        }
    },

    Second_Hide(event){
        this.inputFormField["namethan"] = null;
        if(event.includes("اخرى")){
            document.getElementById("89571").style.display = "block";
        }else{
            document.getElementById("89571").style.display = "none";
        }
    },

    //هل لديك استعداد للتحول الرقمي؟
    Third_Hide(event){
        let Fields_Prog = [
            //الأستعداد النفسي والمهني للتحول الرقمي
            "nem", //مدى رغبتك في المشاركة بأنتظام في أنشظة التطوير المهني الرقمي؟
            "new", //أستعدادك لأستخدام التطبيق والأنظمة الجديدة الداعمة للتحول الرقمي؟
            "nzq", //مدى تقبلك للأستغناء الكامل عن المعاملات الورقية التقليدية؟
            //المهارات الرقمية الأساسية
            "zeawqws", //مدى ألمامك بالمهارات الأساسية للحاسوب (تشغيل ، أنشاء ملفات ، طباعة)؟
            "zxcvb", //كفاءتك في برنامج Microsoft Word لأعداد الكتب والتقارير الأدارية؟
            "zxcdsa", //كفائتك في بنامج Microsoft Excel لأدخال البيانات وتحليلها؟
            "zawdftg", //كفاءتك في برنامج Microsoft PowerPoint لأعداد العروض التقديمية؟
            "zcsfgh", //كفاءتك في استخدام التخزين السحابي ( One Drive ' Google Drive )؟
            //كفاءت البنية التقنية المتاحة
            "bnhsf", //كفاية أجهزة الحاسوب المتاحة لأداء المهام الوظفية؟
            "qwsdcvb", //كفاءة الطابعات والماسحات الضوئية المتاحة والعملية؟
            "qwezxdsa", //توفير الأجهزة اللوحية اثناء الأعمال الميدانية؟
            "zxasqwerdfcv", //كفاءة الدعم الفني المتاح عند حدوث الأعطال التقنية؟
            "kjasdgcves", //أداء الشبكة في دعم أنجازهم المهام الوظيفية بكفاءة؟
            //الانظمة والبرامج الالكترونية
            "sdsdcvdsvsd", //مدى فعالية الأنظمة الألكترونية في دعم أنجاز العمل؟
            "zxsadvsgre", //مدى سهولة أستخدام واجهات البرنامج الأدارية المتاحة؟
            "zxcvgfsdawe", //مدى رضاك الشخصي عن الأنظمة الرقمية المتاحة حالياً؟
            "awsqsdewfrv", //مدى كفاءتك الشخصية في التعامل مع الأرشفة الألكترونية؟
            "lkjhgds", //مدى كفاءتك الشخصية في استخدام منصة "اور" (انشاء الحساب،تسجيل الدخول،ملء الأستمارة)؟
            "okjhsdffggsa", //مدى كفاءتك الشخصية في أدارة المراسلات عبر البريد الألكتروني الرسمي؟
            //الدورات التدريبية التي تحتاجها لتكون جاهز للتحول الرقمي
            "nameawy", //الدورات التدريبية التي تحتاجها لتكون جاهز للتحول الرقمي
            //مقترحاتك لتحسين التحول الرقمي
            "uhbname", //مقترحك لتحسين التحول الرقمي
        ];

        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);

        let Groups_ID = ["35312_group", "35313_group", "35314_group", "35315_group", "35316_group", "35317_group",];
        
        if(event === "نعم"){
            Groups_ID.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
        }else{
            Groups_ID.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }
    }
}