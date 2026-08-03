{
    First_Hide(event){
        let Values = [
            {
                Selected_Value: "البطاقة الوطنية",
                Showed_Fields: [
                    "92552", //رقم البطاقة الوطنية
                ],
                Hide_Fields: [
                    "92553", //رقم هوية الاحوال المدنية
                    "92555", //رقم السجل
                    "92556", //رقم الصحيفة
                    "92554", //اسم الدائرة
                ],
            },
            {
                Selected_Value: "هوية الاحوال المدنية",
                Showed_Fields: [
                    "92553", //رقم هوية الاحوال المدنية
                    "92555", //رقم السجل
                    "92556", //رقم الصحيفة
                    "92554", //اسم الدائرة
                ],
                Hide_Fields: [
                    "92552", //رقم البطاقة الوطنية
                ],
            },
        ],
        Fields_Prog = [
            "nationalnu", //رقم البطاقة الوطنية
            "numberciv", //رقم هوية الاحوال المدنية
            "sinumber", //رقم السجل
            "numnn", //رقم الصحيفة
            "ciname", //اسم الدائرة
        ];

        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);

        let Result = Values.find((Finding) => event == Finding.Selected_Value);
        if(Result){
            Result.Showed_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
            Result.Hide_Fields.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }else{
            ["92552", "92553", "92555", "92556", "92554",].forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }
    },
}