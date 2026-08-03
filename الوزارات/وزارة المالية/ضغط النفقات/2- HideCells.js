{
    First_Function(Value, Discount){
        let Value_As_Number = Number(Value),
        Discount_Value = 1 - Discount;
        return Math.round(Value_As_Number * Discount_Value);
    },

    First_Sum(event){
        let Sum = this.First_Function(this.inputFormField.FirstActualExpenditure, 0.9);
        this.inputFormField.FirstResult = String(Sum);
        this.Total();
    },

    Second_Sum(event){
        let Sum = this.First_Function(this.inputFormField.SecondActualExpenditure, 0.5);
        this.inputFormField.SecondResult = String(Sum);
        this.Total();
    },

    Total(){
        var First_Fields_prog = [
            "FirstResult", //الايفادات
            "SecondResult", //الوقود
            "ThirdResult", //المصروف الفعلي للمكافات للسنة الماضية
            "FourthResult", //المصروف الفعلي للتفصيلات الاخرى للسنة الماضية
        ],
        Second_Fields_prog = [
            "FirstActualExpenditure", //الايفادات
            "SecondActualExpenditure", //الوقود
            "ThirdActualExpenditure", //المصروف الفعلي للمكافات للسنة الماضية
            "FourthPrimeMinister", //المصروف الفعلي للتفصيلات الاخرى للسنة الماضية
        ];

        let Total_Discount = 0;
        let Total_Sum = 0;

        for(var i = 0; i < First_Fields_prog.length; i++){
            if(this.inputFormField[First_Fields_prog[i]] && this.inputFormField[Second_Fields_prog[i]]){
                Total_Discount += Number(this.inputFormField[First_Fields_prog[i]]);
                Total_Sum += Number(this.inputFormField[Second_Fields_prog[i]]);
            }
        }
        this.inputFormField.SecondFinal = String(Total_Discount); //مجموع التخفيض
        this.inputFormField.FirstFinal = String(Total_Sum); //مجموع المصروف الفعلي
    },
}