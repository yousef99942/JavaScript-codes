{
    First_Function(Fields_ID, Fields_State){
        for(var i = 0; i < Fields_ID.length; i++){
            document.getElementById(Fields_ID[i]).style.display = Fields_State;
        }
    },

    Second_Function(Fields_Prog){
        for(var i = 0; i < Fields_Prog.length; i++){
            this.inputFormField[Fields_Prog[i]] = null;
        }
    },

    Third_Function(Fields_ID){
        document.getElementById(Fields_ID).style.cssText =
            "color: #860404; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 13px; text-align: center;";
    },

    First_Hide(event){
        //منح رخصة
        var New_Request_ID = [
            "86857", //استمارة منح اجازة الممارسة
        ],
        //تجديد رخصة
        Renew_Request_ID = [
            "86858", //استمارة تجديد اجازة الممارسة
            "86831", //رقم الاجازة
            "86832", //تاريخ منح الاجازة
        ],
        Fields_Progs = [
            "licno", //رقم الاجازة
            "licdate", //تاريخ منح الاجازة
        ];

        this.Second_Function(Fields_Progs);

        if(event == "منح"){
            this.First_Function(New_Request_ID, "block");
            this.First_Function(Renew_Request_ID, "none");
            this.Third_Function(New_Request_ID[0]);
        }else if(event == "تجديد"){
            this.First_Function(New_Request_ID, "none");
            this.First_Function(Renew_Request_ID, "block");
            this.Third_Function(Renew_Request_ID[0]);
        }else{
            this.First_Function(New_Request_ID, "none");
            this.First_Function(Renew_Request_ID, "none");
        }
    }
}