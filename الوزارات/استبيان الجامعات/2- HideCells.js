{
    First_Function(Fields_ID, Fields_Prog, Field_State){
        for (let i = 0; i < FieldsID.length; i++) {
            document.getElementById(Fields_ID).style.display = Field_State;
            this.inputFormField[Fields_Prog] = null;
        }
    },

    Second_Function(Field_ID, Field_Prog, Field_State){
        this.inputFormField[Field_Prog] = null;
        document.getElementById(Field_ID).style.display = Field_State;
    },

    //مجموعة البنى التحتية
    FirstHide(event){
        if(event == "نعم"){
            this.Second_Function("67308", "internaltype", "block");
        }else{
            this.Second_Function("67308", "internaltype", "none");
        }
    },

    SecondHide(event){
        var FieldsID = ["67310", "67311", "67312",],
        ProgsName = ["subsidairycount", "networknumber", "networkconn",];

        if(event == "نعم"){
            this.First_Function(FieldsID, ProgsName, "block");
        }else{
            this.First_Function(FieldsID, ProgsName, "none");
        }
    },

    ThirdHide(event){
        var FieldsID = ["67313", "67314",],
        ProgsName = ["cnumber", "uncovered",];

        if(event == "نعم"){
            this.First_Function(FieldsID, ProgsName, "block");
        }else{
            this.First_Function(FieldsID, ProgsName, "none");
        }
    },

    FourthHide(event){
        if(event == "نعم"){
            this.Second_Function("67826", "serverstype", "block");
        }else{
            this.Second_Function("67826", "serverstype", "none");
        }
    },

    FifthHide(event){
        if(event == "كلا"){
            this.Second_Function("67322", "requirednum", "block");
        }else{
            this.Second_Function("67322", "requirednum", "none");
        }
    },

    ThirteenHide(event){
        if(event == "نعم"){
            this.Second_Function("67825", "fiberopticnode", "block");
        }else{
            this.Second_Function("67825", "fiberopticnode", "none");
        }
    },

    FourteenHide(event){
        if(event == "نعم"){
            this.Second_Function("67823", "firwallnumber", "block");
        }else{
            this.Second_Function("67823", "firwallnumber", "none");
        }
    },

    //مجموعة البرامجيات والتطبيقات
    SixthHide(event){
        if(event == "نعم"){
            this.Second_Function("67330", "types", "block");
        }else{
            this.Second_Function("67330", "types", "none");
        }
    },

    SeventhHide(event){
        if(event == "نعم"){
            this.Second_Function("67502", "licensedoffice", "block");
        }else{
            this.Second_Function("67502", "licensedoffice", "none");
        }
    },

    EghitHide(event){
        if(event == "نعم"){
            this.Second_Function("67511", "antivirustype", "block");
        }else{
            this.Second_Function("67511", "antivirustype", "none");
        }
    },

    NinthHide(event){
        var FieldsID = ["67570", "67337",],
        ProgsName = ["erpusers", "application",];

        if(event == "نعم"){
            this.First_Function(FieldsID, ProgsName, "block");
        }else{
            this.First_Function(FieldsID, ProgsName, "none");
        }
    },

    TenthHide(event){
        var FieldsID = ["67340", "67341", "67342",],
        ProgsName = ["percentage", "userarchive", "scanners",];

        if(event == "نعم"){
            this.First_Function(FieldsID, ProgsName, "block");
        }else{
            this.First_Function(FieldsID, ProgsName, "none");
        }
    },

    EleventhHide(event){
        if(event == "نعم"){
            this.Second_Function("67603", "paperlesstype", "block");
        }else{
            this.Second_Function("67603", "paperlesstype", "none");
        }
    },

    TwelvethHide(event){
        var FieldsID = ["67346", "67347",],
        ProgsName = ["emailstype", "noemail",];

        if(event == "نعم"){
            this.First_Function(FieldsID, ProgsName, "block");
        }else{
            this.First_Function(FieldsID, ProgsName, "none");
        }
    },
}