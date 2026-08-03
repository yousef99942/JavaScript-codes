{
    First_Function(Field_ID, Field_Prog, Field_State){
        document.getElementById(Field_ID).style.display = Field_State;
        this.inputFormField[Field_Prog] = null;
    },

    Second_Function(event, Field_Condition, Field_ID, Field_Prog){
        if(event.length > 0){
            for(var i = 0; i < event.length; i++){
                if(event[i] == Field_Condition){
                    this.First_Function(Field_ID, Field_Prog, "block");
                    break;
                }else{
                    this.First_Function(Field_ID, Field_Prog, "none");
                }
            }
        }else{
            this.First_Function(Field_ID, Field_Prog, "none");
        }
    },

    //للاسئله من 10 الى 17 ومعتمده على سؤال 9
    First_Hide(event){
        var Fields_ID = [
            "67796",//10
            "67802",//11
            "67805",//12
            "67807",//13
            "67808",//14
            "67987",//15
            "67988",//16
            "67989",//17
        ],
        Fields_Prog = [
            "PEMOneOne",//10
            "PEMOneTwo",//11
            "PEMOneThree",//12
            "PEMOneFour",//13
            "PEMOneFive",//14
            "PEMOneSix",//15
            "PEMOneSeven",//16
            "PEMOneEight",//17
        ];

        for(var i = 0; i < Fields_ID.length; i++){
            if(event == "نعم"){
                this.First_Function(Fields_ID[i], Fields_Prog[i], "block");
            }else{
                this.First_Function(Fields_ID[i], Fields_Prog[i], "none");
            }
        }
    },

    //السؤال رقم 18
    Second_Hide(event){
        var Field_Values = [
            [
                "لم يتم استخدام نتائج تقييم ادائي باي طريقة ذات مغزى.",
            ],
            [
                "لم يتم استخدام نتائج تقييم ادائي باي طريقة ذات مغزى.",
                "مساعدتي في متابعة ادائي.",
                "مساعدتي في تحسين ادائي.",
                "تقييم نوع التدريبات التي ينبغي ان احصل عليها.",
                "تحفيزي على العمل الجاد.",
                "تحديد راتبي.",
                "حصولي على مكافأة مالية.",
                "ترقيتي الى وظيفة اعلى.",
                "نقلي الى وظيفة اخرى.",
                "يعتمد عليه في اتخاذ اجراءات التاديب او الفصل.",
                "تغيير وظيفتي الى وظيفة اقل درجة",
                "غير ذلك.",
                "لا اعرف / افضل عدم الاجابة.",
            ]
        ];
        if(event.length > 0){
            for (var i = 0; i < event.length; i++){
                if(event[i] == "لم يتم استخدام نتائج تقييم ادائي باي طريقة ذات مغزى."){
                    this.group_of_form[0].fields[17].properties[0].values = Field_Values[0];
                    break;
                }else{
                    this.group_of_form[0].fields[17].properties[0].values = Field_Values[1];                    
                }
            }
        }else{
            this.group_of_form[0].fields[17].properties[0].values = Field_Values[1];
        }
    },

    //السؤال 36 والي معتمد على السؤال 35
    Third_Hide(event){
        if(event == "اكثر تحفيزا"){
            this.First_Function("69273", "bdfjjfjdf", "block");
        }else{
            this.First_Function("69273", "bdfjjfjdf", "none");
        }
    },

    //السؤال 39 والي معتمد على السؤال 38
    Fourth_Hide(event){
        if(event == "نعم"){
            this.First_Function("69318", "TRATwo", "block");
        }else{
            this.First_Function("69318", "TRATwo", "none");
        }
    },

    //السؤال 40 الي معتمد على السؤال 39
    Fifth_Hide(event){
        if(event == "المهارات الفنية ( المعرفة والخبرة في مجال العمل )"){
            this.First_Function("69356", "TRATreeA", "block");
        }else{
            this.First_Function("69356", "TRATreeA", "none");
        }
    },

    //السؤال 41 الي معتمد على السؤال 40
    Sixth_Hide(event){
        this.Second_Function(event, "المهارات الفنية ( المعرفة والخبرة في مجال العمل )", "68159", "TRATreeB");
    },

    //السؤال 42 الي معتمد على السؤال 41
    Seventh_Hide(event){
        this.Second_Function(event, "المهارات التقنية ( المعرفة واعرف كيف) في عملك", "68160", "TRAFour");
    },

    //السؤال 45 الي معتمد على السؤال 44
    Eigth_Hide(event){
        if(event == "اوافق" || event == "اوافق بشدة"){
            this.First_Function("68183", "INNOVATEOneB", "block");
        }else{
            this.First_Function("68183", "INNOVATEOneB", "none");
        }
    },

    //السؤال 49 الي معتمد على السؤال 48
    Ninth_Hide(event){
        if(event == "لا تستخدم مؤسستي البيانات عند اتخاذ القرارات الرئيسية."){
            this.First_Function("69357", "DATATwo", "block");
        }else{
            this.First_Function("69357", "DATATwo", "none");
        }
    },

    //السؤال 63 الي معتمد على السؤال 62
    Tenth_Hide(event){
        if(event == "نعم ، قيود داخلية" || event == "كلاهما ، قيود داخلية وخارجية"){
            this.First_Function("68593", "FUTURESeven", "block");
        }else{
            this.First_Function("68593", "FUTURESeven", "none");
        }
    },

    //السؤال 64 الي معتمد على السؤال 63
    Eleventh_Hide(event){
        this.Second_Function(event, "الادارة لا تتقبل التغيير او تقاومه", "68602", "FUTUREEight");
    },

    //السؤال 67 الي معتمد على السؤال 66
    Twelve_Hide(event){
        if(event == "لا"){
            this.First_Function("68864", "TRUSTTwo", "block");
        }else{
            this.First_Function("68864", "TRUSTTwo", "none");
        }
    },

    //السؤال 70 الي معتمد على السؤال 69
    Thirteen_Hide(event) {
        var Values = [
            "مؤسسات اخرى تابعة للقطاع العام / الحكومي",
            "مؤسسات القطاع الخاص",
            "المجتمع المدني",
            "مؤسسات غير ربحية",
            "المواطنون",
        ];

        if (Values.includes(event)) {
            this.First_Function("68871", "TRUSTFive", "block");
        } else {
            this.First_Function("68871", "TRUSTFive", "none");
        }
    },
}