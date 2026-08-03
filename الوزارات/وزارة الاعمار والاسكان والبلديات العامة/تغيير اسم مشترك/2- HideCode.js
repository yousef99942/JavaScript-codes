{
    First_Function(Field_ID, Field_Prog, Field_State, Field_Location, Field_Values){
        this.inputFormField[Field_Prog] = null;
        document.getElementById(Field_ID).style.display = Field_State;
        this.group_of_form[0].fields[Field_Location].properties[0].values = Field_Values;
    },

    First_Filter(event){
        if(event == "كركوك"){
            this.First_Function("68314", "city", "block", 10, ["كركوك",]);
        }else{
            this.First_Function("68314", "city", "none", 10, []);
        }
    },

    Second_Filter(event){
        var First_Condition_Values = [
            "مركز قضاء كركوك", "يايجي", "التون كوبري", "الملتقى (ملال عبدالله)", "تازة خورماتو", "ليلان",
            "شوان", "قرة هنجير (الربيع)",
        ],
        Second_Condition_Values = ["مركز قضاء الحويجة", "العباسي", "الرياض", "الزاب",],
        Third_Condition_Values = ["مركز قضاء داقوق", "الرشاد",],
        Fourth_Condition_Values = ["مركز قضاء دبس", "سركران",];
        if(event == "كركوك"){
            this.First_Function("68315", "town", "block", 11, First_Condition_Values);
        }else if(event == "الحويجة"){
            this.First_Function("68315", "town", "block", 11, Second_Condition_Values);
        }else if(event == "داقوق"){
            this.First_Function("68315", "town", "block", 11, Third_Condition_Values);
        }else if(event == "دبس"){
            this.First_Function("68315", "town", "block", 11, Fourth_Condition_Values);
        }else{
            this.First_Function("68315", "town", "none", 11, []);
        }
    },
}