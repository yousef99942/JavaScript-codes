{
    First_Hide(event){
        let Fields_Prog = [
            "sele", //قطاع الوسط
            "south", //القطاع الجنوبي
            "north", //القطاع الشمالي
            "kufa", //قطاع الكوفة
            "mashkhab", //قطاع المشخاب
            "manatheara", //قطاع المناذرة
            "abasyia", //قطاع العباسية
        ];

        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);

        let Values = [
            {Selected_Value: "قطاع الوسط", Showed_Field: ["87771"], Hidden_Field: ["87859", "87861", "87862", "87864", "87865", "87866"]},
            {Selected_Value: "القطاع الجنوبي", Showed_Field: ["87859"], Hidden_Field: ["87771", "87861", "87862", "87864", "87865", "87866"]},
            {Selected_Value: "القطاع الشمالي", Showed_Field: ["87861"], Hidden_Field: ["87771", "87859", "87862", "87864", "87865", "87866"]},
            {Selected_Value: "قطاع الكوفة", Showed_Field: ["87862"], Hidden_Field: ["87771", "87859", "87861", "87864", "87865", "87866"]},
            {Selected_Value: "قطاع المشخاب", Showed_Field: ["87864"], Hidden_Field: ["87771", "87859", "87861", "87862", "87865", "87866"]},
            {Selected_Value: "قطاع المناذرة", Showed_Field: ["87865"], Hidden_Field: ["87771", "87859", "87861", "87862", "87864", "87866"]},
            {Selected_Value: "قطاع العباسية", Showed_Field: ["87866"], Hidden_Field: ["87771", "87859", "87861", "87862", "87864", "87865",]},
        ];

        let Result = Values.find((Finding) => event === Finding.Selected_Value);

        if(Result){
            Result.Showed_Field.forEach((Hiding) => document.getElementById(Hiding).style.display = "block");
            Result.Hidden_Field.forEach((Hiding) => document.getElementById(Hiding).style.display = "none");
        }else{
            Values.forEach((Hiding) => document.getElementById(Hiding.Showed_Field).style.display = "none");
        }
    }
}