{
    First_Function(Field_ID, Field_Prog, Feild_State){
        document.getElementById(Field_ID).style.display = Feild_State;
        this.inputFormField[Field_Prog] = null;
    },

    /*
    FirstHide(event){
        if(event == "تأييد معنون"){
            this.First_Function("67690", "MinistryType", "block");
        }else{
            this.First_Function("67690", "MinistryType", "none");
        }
    },
    */

    Second_Hide(event){
        //اقسام مكتب الوزير
        var Selected_Values = [
            "مكتب الوزير", "مكتب السيد الوكيل الفني", "مكتب السيد الوكيل الاداري", "مكتب السيد المستشار",
            "الادارية والمالية", "شؤون الهجرة", "التخطيط", "القانونية", "المعلومات والبحوث"
        ];

        if(event == "شؤون الفروع"){
            this.First_Function("70003", "PartName", "block");
            this.First_Function("67498", "section", "none");
        }else if(Selected_Values.includes(event)){
            this.First_Function("70003", "PartName", "none");
            this.First_Function("67498", "section", "block");
        }else{
            this.First_Function("70003", "PartName", "none");
            this.First_Function("67498", "section", "none");
        }
    },
}