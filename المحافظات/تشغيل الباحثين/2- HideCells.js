{
    FirstHide(event){
        let Values = [
            {
                Selected_Value: ["دكتوراه", "ماجستير", "بكالوريوس", "دبلوم عالي"],
                Showed_Fields: [
                    "92427", //نوع الجامعة
                    "64641", //الجامعة
                    "64676", //الكلية
                    "64677", //القسم
                    "64678", //التخصص الدقيق
                    "64679", //تاريخ التخرج
                    "70123", //المعدل
                ],
                Hide_Fields: [
                    "65786", //المعهد
                ],
            },
            {
                Selected_Value: ["دبلوم"],
                Showed_Fields: [
                    "65786", //المعهد
                    "64677", //القسم
                    "64678", //التخصص الدقيق
                    "64679", //تاريخ التخرج
                    "70123", //المعدل
                ],
                Hide_Fields: [
                    "92427", //نوع الجامعة
                    "64641", //الجامعة
                    "64676", //الكلية
                ],
            },
            {
                Selected_Value: ["اعدادية", "ابتدائية", "متوسطة"],
                Showed_Fields: [
                    "64679", //تاريخ التخرج
                    "70123", //المعدل
                ],
                Hide_Fields: [
                    "92427", //نوع الجامعة
                    "64641", //الجامعة
                    "64676", //الكلية
                    "64677", //القسم
                    "64678", //التخصص الدقيق
                    "65786", //المعهد
                ],
            },
        ],
        CellsName = [
            "UniversityType", //نوع الجامعة
            "university", //الجامعة
            "collage", //الكلية
            "department", //القسم
            "major", //التخصص الدقيق
            "graduationdate", //تاريخ التخرج
            "average", //المعدل
            "diploma", //المعهد
        ];
        
        CellsName.forEach((Clearing) => this.inputFormField[Clearing] = null);
        let Result = Values.find((Finding) => Finding.Selected_Value.includes(event));
        if(Result){
            Result.Showed_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
            Result.Hide_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }else{
            [
                "92427", //نوع الجامعة
                "64641", //الجامعة
                "64676", //الكلية
                "64677", //القسم
                "64678", //التخصص الدقيق
                "64679", //تاريخ التخرج
                "70123", //المعدل
                "65786", //المعهد
            ].forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }
    },

    First_Filter(event){
        this.inputFormField["majorr"] = null;
        if(event == "CEET"){
            this.group_of_form[2].fields[2].properties[0].values = ["مهندس كهرباء"];
        }else if(event == "GW"){
            this.group_of_form[2].fields[2].properties[0].values = ["حارس امني"];
        }else{
            this.group_of_form[2].fields[2].properties[0].values = [];
        }
    }
}