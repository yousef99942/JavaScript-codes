{
    First_Function(Field_ID, Field_Prog, Field_State){
        document.getElementById(Field_ID).style.display = Field_State;
        this.inputFormField[Field_Prog] = null;
    },

    First_Hide(event){
        if(event == "مقر الوزارة"){
            this.First_Function("69588", "DeptName", "block");
            this.First_Function("69421", "namei", "block");
            this.First_Function("69589", "PartName", "none");
        }else if(event == "دائرة الفروع"){
            this.First_Function("69588", "DeptName", "none");
            this.First_Function("69421", "namei", "none");
            this.First_Function("69589", "PartName", "block");            
        }else{
            this.First_Function("69588", "DeptName", "none");
            this.First_Function("69421", "namei", "none");
            this.First_Function("69589", "PartName", "none");
        }
    },

    Second_Hide(event){
        if(event == "متزوج"){
            this.First_Function("69435", "namberbn", "block");
        }else{
            this.First_Function("69435", "namberbn", "none");
        }
    },

    Third_Hide(event){
        if(event == "شؤون الفروع"){
            this.First_Function("69589", "PartName", "block"); 
        }else{
            this.First_Function("69589", "PartName", "none");
        }
    },

    Fourth_Hide(event){
        if(event == "نعم"){
            this.First_Function("72001", "nameb", "block");
        }else{
            this.First_Function("72001", "nameb", "none");
        }
    },

    Fifth_Hide(event){
        if(event == "نعم"){
            this.First_Function("72003", "namdc", "block");
        }else{
            this.First_Function("72003", "namdc", "none");
        }
    },

    Sixth_Hide(event){
        if(event == "نعم"){
            this.First_Function("72005", "nambn", "block");
        }else{
            this.First_Function("72005", "nambn", "none");
        }
    },

    Seveth_Hide(event){
        if(event == "نعم"){
            this.First_Function("72007", "namweerw", "block");
        }else{
            this.First_Function("72007", "namweerw", "none");
        }
    },
}