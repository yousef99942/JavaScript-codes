{
    First_Hide(event){
        let Groups_ID = [
            "35228_group", //الملائمة
            "35229_group", //الكفاءة
            "35230_group", //الفعالية
            "35231_group", //الأثر
            "35232_group", //الأستدامة
        ];
        let Fields_Prog = [
            //الملائمة
            "nameee", //هل شاركت في اختيار نوع المشروع المناسب لك؟
            "namee", //هل كان نوع المشروع ملائم لمهاراتك الشخصية؟
            "nameeee", //هل كان المشروع مناسب لحاجة السوق في منطقتك؟
            //الكفاءة
            "namese", //هل كانت المعدات والأدوات المقدمة كافية؟
            "namerw", //هل هنالك متابعة من المشرفين بعد البدء بالمشروع؟
            //الفعالية
            "namez", //مامدى رضاك عن نتائج المشروع حاليا؟
            "nameb", //ما عدد الزبائن الدائمين لمشروعك؟
            "nameqp", //ما عدد ساعات عملك
            //الاثر
            "namexc", //هل ازداد دخل بيتك الشهري بسبب المشروع؟
            "namerty", //هل تحسن واقعكم المعيشي بسبب المشروع؟
            "nametz", //هل قل أعتماد عائلتك على المساعدات الخارجية بعد المشروع؟
            "namepoiu", //هل وظفت شخصا اخر معك في المشروع؟
            //الأستدامة
            "namertyi", //هل تستطيعين مواصلة مشروعك بدون دعم اضافي؟
            "namezaidf", //هل لديك خطة لتطوير المشروع مستقبلا؟
        ];

        this.inputFormField["bocos"] = null; //اذا كانت الاجابة كلا , ما هو سبب عدم أستمرار المشروع؟

        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);
        if(event == "نعم"){
            document.getElementById("88995").style.display = "none";//اذا كانت الاجابة كلا , ما هو سبب عدم أستمرار المشروع؟

            Groups_ID.forEach((Showing) => document.getElementById(Showing).style.display = "block");
        }else if(event == "كلا"){
            document.getElementById("88995").style.display = "block";//اذا كانت الاجابة كلا , ما هو سبب عدم أستمرار المشروع؟

            Groups_ID.forEach((Showing) => document.getElementById(Showing).style.display = "none");
        }else{
            document.getElementById("88995").style.display = "none";//اذا كانت الاجابة كلا , ما هو سبب عدم أستمرار المشروع؟

            Groups_ID.forEach((Showing) => document.getElementById(Showing).style.display = "none");
        }
    },
}