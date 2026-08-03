{
    First_Function(Field_ID, Field_Prog, Field_State){
        document.getElementById(Field_ID).style.display = Field_State;
        this.inputFormField[Field_Prog] = null;
    },

    First_Hide(event){
        if(event == "مواطن"){
            this.First_Function("69555", "maeu", "block");
            this.First_Function("69556", "namep", "none");
        }else if(event == "موظف"){
            this.First_Function("69555", "maeu", "none");
            this.First_Function("69556", "namep", "block");
        }else{
            this.First_Function("69555", "maeu", "none");
            this.First_Function("69556", "namep", "none");
        }
    },

    Second_Hide(event){
        var Fields_ID = [
            "69580",
            "69581",
            "69582",
        ],
        Fields_Prog = [
            "complaintNum",
            "complaintDate",
            "complaintNotes",
        ];

        if(event == "نعم"){
            for(var i = 0; i < Fields_ID.length; i++){
                this.First_Function(Fields_ID[i], Fields_Prog[i], "block");
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                this.First_Function(Fields_ID[i], Fields_Prog[i], "none");
            }
        }
    },

    Third_Hide(event){
        if(event == "البطاقة الموحدة"){
            this.First_Function("69557", "nameaq", "block"); //البطاقة الموحدة
            this.First_Function("69558", "namet", "none"); //جواز السفر
        }else if(event == "جواز السفر"){
            this.First_Function("69557", "nameaq", "none"); //البطاقة الموحدة
            this.First_Function("69558", "namet", "block"); //جواز السفر
        }else{
            this.First_Function("69557", "nameaq", "none"); //البطاقة الموحدة
            this.First_Function("69558", "namet", "none"); //جواز السفر
        }
    },
}