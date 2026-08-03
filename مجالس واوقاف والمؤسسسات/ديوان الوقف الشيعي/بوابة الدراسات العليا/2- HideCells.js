{
    First_Hide(event){
        var Fields_ID = [
            "75090", //تاريخ التخرج
            "48839", //عنوان الجهة
            "75093", //عنوان الجامعة المراد النقل اليها
            "75095", //اسباب النقل
            "75096", //اسباب التأجيل
            "75097", //اسباب تخفيض القسط
            "75098", //هل لديك تخفيض سابق
            "75100", //سبب ترقين القيد
            "75101", //هل تمت الاستفادة من قرار العودة سابقاً
            "75102", //سبب ترقين القيد (الانسحاب بعد المباشرة)
            "75103", //سبب الغاء القبول
            "75104", //سبب النقل من كليتك
            "75105", //ذكر اسم الجامعة المنقول منها
        ],
        Fields_Progs = [
            "graduatdate", //تاريخ التخرج
            "addressEntity", //عنوان الجهة
            "transporttitel", //عنوان الجامعة المراد النقل اليها
            "reasonstransfer", //اسباب النقل
            "reasonspostpone", //اسباب التأجيل
            "reasonslow", //اسباب تخفيض القسط
            "previouslydiscount", //هل لديك تخفيض سابق
            "reasonsclose", //سبب ترقين القيد
            "returnQ", //هل تمت الاستفادة من قرار العودة سابقاً
            "withdrawal", //سبب ترقين القيد (الانسحاب بعد المباشرة)
            "withdrawall", //سبب الغاء القبول
            "reasonstransformfrom", //سبب النقل من كليتك
            "nameuniversity", //ذكر اسم الجامعة المنقول منها
        ],
        First_Selected_Values = [
            "وثيقة تخرج بدون درجات باللغة العربية", "وثيقة تخرج بالدرجات باللغة العربية",
            "وثيقة تخرج بالدرجات باللغة الانكليزية", "جدارية تخرج"
        ],
        Second_Selected_Values = [
            "تأييد مناقشة", "تأييد استمرارية بالدوام", "تأييد مباشرة بالدوام"
        ];

        for(var i = 0; i < Fields_Progs.length; i++){
            this.inputFormField[Fields_Progs[i]] = null;
        }

        if(First_Selected_Values.includes(event)){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i < 2){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(Second_Selected_Values.includes(event)){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i == 1){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "نقل الى خارج كلية الامام الكاظم"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i >= 1 && i <= 3){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "تأجيل سنة دراسية"){
           for(var i = 0; i < Fields_ID.length; i++){
                if(i == 4){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "تخفيض الاجور الدراسية"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i == 5 || i == 6){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "اعادة المرقن قيده الى مقاعد الدراسة"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i == 7 || i == 8){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "ترقين قيد (انهاء علاقة)"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i == 9){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "الغاء قبول"){
           for(var i = 0; i < Fields_ID.length; i++){
                if(i == 10){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            } 
        }else if(event == "عدم ممانعة نقل الى داخل الكلية"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i >= 11){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            } 
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            } 
        }
    },

    Second_Hide(event){
        this.inputFormField["howmatchdiscount"] = null; //كم كانت نسبة التحفيض
        if(event == "نعم"){
            document.getElementById("75099").style.display = "block";
        }else{
            document.getElementById("75099").style.display = "none";
        }
    },

    First_Filter(event){
        var Selected_Values = [
            "العلوم السياسية", "اللغة العربية", "القانون", "التاريخ", "الفكر الاسلامي", "الشريعة", "علوم القران",
            "رياض الاطفال"
        ],
        Showed_Values = [
            ["النظم السياسية", "الدراسات الدولية"], //"العلوم السياسية"
            ["اللغة", "الادب"], //اللغة العربية
            ["القانون العام", "القانون الخاص"], //"القانون"
            ["تاريخ الاسلامي", "تاريخ الحديث والمعاصر"], //"التاريخ"
            ["الفكر الاسلامي"], //"الفكر الاسلامي"
            ["الفقه واصوله"], //"الشريعة"
            ["علوم القران والحديث"], //"علوم القران"
            ["رياض الاطفال-التربية الخاصة", "رياض الاطفال-طرائق تعليم الطفولة المبكرة"], //"رياض الاطفال"
        ];

        for(var i = 0; i < Selected_Values.length; i++){
            if(event == Selected_Values[i]){
                this.group_of_form[1].fields[4].properties[0].values = Showed_Values[i];
                break;
            }else{
                this.group_of_form[1].fields[4].properties[0].values = [];
            }
        }
    }
}