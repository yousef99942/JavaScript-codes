{
    First_Hide(event){
        this.inputFormField["Depnm"] = null; //القسم
        if(event === "دبلوم"){
            document.getElementById("96445").style.display = "block";
        }else{
            document.getElementById("96445").style.display = "none";
        }
    },

    Second_Hide(event){
        this.inputFormField["Stype"] = null; //نوع المخاطبة
        if(event === "مخاطبات رسمية"){
            document.getElementById("96514").style.display = "block";
        }else{
            document.getElementById("96514").style.display = "none";
        }
    },

    fieldFunc(event) {
        this.inputFormField["SupSpec"] = null; //الاختصاص الدقيق
        let Values = [
            {
                Selected_Value: "قسم الكهرباء",
                Showed_Value: [
                    "الكترون",
                    "الكترونيك والاتصالات",
                    "الكهرباء العام",
                    "كهرباء معدات نفطية",
                    "القياس والسيطرة",
                    "آلآلات الدقيقة",
                    "مواصلات سلكية ولاسلكية",
                    "مواصلات سلكية ولاسلكية راديو",
                    "مواصلات سلكية ولاسلكية تلفون",
                    "التجميع الكهربائي",
                    "التصليح واللف"
                ],
            }, //قسم الكهرباء
            {
                Selected_Value: "قسم النفط",
                Showed_Value: [ "فحص الآبار", "حفر الآبار", "انتاج النفط", "الانتاج والقياسات الحقلية", "ميكانيك معدات الحفر", "ميكانيك اجهزة الحفر" ],
            }, //قسم النفط
            {
                Selected_Value: "قسم الميكانيك",
                Showed_Value: [
                    "السيارات والساحبات",
                    "المكائن والمعدات الثقيلة",
                    "اللحام",
                    "تكنولوجيا اللحام",
                    "تقنية اللحام",
                    "تقنيات اللحام",
                    "اللحام الغازي والكهربائي",
                    "المضخات والضاغطات",
                    "المضخات والتوربينات الغازية",
                    "التبريد والتكييف",
                    "ميكانيك معدات نفطية",
                    "انابيب النفط",
                    "خطوط انابيب النفط",
                    "تصنيع معادن",
                    "ميكانيك عام",
                    "ميكانيك عام خراطة وتفريز",
                    "ميكانيك عام معادن"
                ],
            }, //قسم الميكانيك
            {
                Selected_Value: "قسم التصفية",
                Showed_Value: [
                    "مساعد مختبر",
                    "التحليلات الكيميائية",
                    "التحليلات النفطية",
                    "تقنية الغاز",
                    "مشغل فني",
                    "التشغيل الفني / تسويق",
                    "التشغيل الفني / تصفية",
                    "التشغيل الفني / توزيع",
                    "التشغيل والسيطرة"
                ],
            }, //قسم التصفية
            {
                Selected_Value: "قسم المدني",
                Showed_Value: [ "المدني", "المسح الطوبوغرافي", "التشييد المدني", "المساحة", "بناء وانشاءات"],
            }, //قسم المدني
            {
                Selected_Value: "قسم ادارة مواد",
                Showed_Value: ["ادارة مواد"],
            } //قسم ادارة مواد
        ];

        let Result = Values.find((item) => item.Selected_Value === event);
        if(Result) {
            document.getElementById("96456").style.display = "block";
            this.group_of_form[1].fields[2].properties[0].values = Result.Showed_Value;
        }else{
            document.getElementById("96456").style.display = "none";
        }
    }
}