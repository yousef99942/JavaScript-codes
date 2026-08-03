{
    First_Hide(event){
        const Fields_Prog = [
            //معلومات الطلب
            "relation", //صلة قرابة قناة الرعاية
            "topranking", //تسلسل الطالب من الثلاثة الاوائل (قناة الاوائل)
            "rate", //نسبة عجز الطالب % (قناة ذوي الاعاقة)
            "partnum", //عدد الاجزاء المحفوظة
            "exception", //الاقسام المشمولة بالتخفيض لقناة منتسبي الحشد ورجال الدين
            //مجموعة معلومات المطلوبة للقريب في قناة الاقارب
            "firstna", //الاسم الاول
            "secondna", //اسم الاب
            "thiredna", //اسم الجد
            "fourthna", //اسم الرابع
            "relationsh", //صلة القرابة
            "nameinstitution", //الطالب القريب في اي محافظة؟
            "departmentrelation", //في اي قسم يتواجد الطالب القريب؟
            "stagereal", //في اي مرحلة يتواجد الطالب القريب؟
            "studyreal", //الدراسة
            "pledgereal", //اتعهد بصحة كافة المعلومات والمستمسكات المرافقة وخلافه اتحمل كافة المسؤولية عند رفض طلب التخفيض
            //معلومات المطلوبة لقناة ممن لدى ذويهم عجز
            "disabilityrelation", //ذوي الطالب ممن لديهم عجز
            "ratedisable", //نسبة العجز %
            "pledgedisable", //اتعهد بصحة كافة المعلومات والمستمسكات المرافقة وخلافه اتحمل كافة المسؤولية عند رفض طلب التخفيض
            //معلومات التدريسي او الموظف من والدي الطالب (قناة ابناء الاساتذة والموظفين)
            "nameprof", //اسم الرباعي للتدريسي او الموظف
            "affiliation", //جهة انتساب التدريسي او الموظف
            "jobtitle", //العنوان الوظيفي
            "pledgeprof", //اتعهد بصحة كافة المعلومات والمستمسكات المرافقة وخلافه اتحمل كافة المسؤولية عند رفض طلب التخفيض
        ];

        const Values = [
            {
                Selected_Value: "الرعاية الاجتماعية",
                Showed_Fields: ["93392",], //صلة قرابة قناة الرعاية
                Hide_Fields: ["35511_group", "93450", "93453", "35513_group", "93465", "35514_group", "93391",]
            },
            {
                Selected_Value: "الاقارب",
                Showed_Fields: ["35511_group",], //مجموعة معلومات المطلوبة للقريب في قناة الاقارب
                Hide_Fields: ["93392", "93450", "93453", "35513_group", "93465", "35514_group", "93391",]
            },
            {
                Selected_Value: "الاوائل",
                Showed_Fields: ["93450",], //تسلسل الطالب من الثلاثة الاوائل (قناة الاوائل)
                Hide_Fields: ["93392", "35511_group", "93453", "35513_group", "93465", "35514_group", "93391",]
            },
            {
                Selected_Value: "ذوي الاعاقة (العجز) بنسبة 70%",
                Showed_Fields: ["93453",], //نسبة عجز الطالب % (قناة ذوي الاعاقة)
                Hide_Fields: ["93392", "35511_group", "93450", "35513_group", "93465", "35514_group", "93391",]
            },
            {
                Selected_Value: "ممن ذويهم لديهم عجز بنسبة 70%",
                Showed_Fields: ["35513_group"], //معلومات المطلوبة لقناة ممن لدى ذويهم عجز
                Hide_Fields: ["93392", "35511_group", "93450", "93453", "93465", "35514_group", "93391",]
            },
            {
                Selected_Value: "حافظي القرآن 5 اجزاء",
                Showed_Fields: ["93465",], //عدد الاجزاء المحفوظة
                Hide_Fields: ["93392", "35511_group", "93450", "93453", "35513_group", "35514_group", "93391",]
            },
            {
                Selected_Value: "ابناء الاساتذة والموظفين وابناؤهم",
                Showed_Fields: ["35514_group",], //معلومات التدريسي او الموظف من والدي الطالب (قناة ابناء الاساتذة والموظفين)
                Hide_Fields: ["93392", "35511_group", "93450", "93453", "35513_group", "93465", "93391",]
            },
            {
                Selected_Value: "منتسبي الحشد الشعبي ورجال الدين في الحوزة العلمية",
                Showed_Fields: ["93391",], //الاقسام المشمولة بالتخفيض لقناة منتسبي الحشد ورجال الدين
                Hide_Fields: ["93392", "35511_group", "93450", "93453", "35513_group", "93465", "35514_group",]
            },
        ];

        let Result = Values.find((Finding) => event === Finding.Selected_Value);
        if(Result){
            Result.Showed_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
            Result.Hide_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }else{
            ["93392", "35511_group", "93450", "93453", "35513_group", "93465", "35514_group", "93391",].forEach((Hiding) =>
                document.getElementById(Hiding).style.display = "none"
            );
        }
    },
}