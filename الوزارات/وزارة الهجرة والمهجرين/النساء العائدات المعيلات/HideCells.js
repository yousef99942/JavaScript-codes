{
    //عدد ذوي الاحتياجات
    First_Hide(event){
        if(event == "نعم"){
            document.getElementById("72294").style.display = "block";
            this.inputFormField["fnamber"] = null;
        }else{
            document.getElementById("72294").style.display = "none";
            this.inputFormField["fnamber"] = null;
        }
    },

    //الخدمات الاساسية للسكن
    Second_Hide(event){
        if(event == "كلا"){
            document.getElementById("72327").style.display = "block";
            this.inputFormField["nametvb"] = null;
        }else{
            document.getElementById("72327").style.display = "none";
            this.inputFormField["nametvb"] = null;
        }
    },

    //المشتقات النفطية
    Third_Hide(event){
        if(event == "كلا"){
            document.getElementById("72387").style.display = "block";
            this.inputFormField["nameq"] = null;
        }else{
            document.getElementById("72387").style.display = "none";
            this.inputFormField["nameq"] = null;
        }
    },

    //البطاقة التموينية
    Fourth_Hide(event){
        if(event == "كلا"){
            document.getElementById("72336").style.display = "block";
            this.inputFormField["namxcf"] = null;
        }else{
            document.getElementById("72336").style.display = "none";
            this.inputFormField["namxcf"] = null;
        }
    },

    //امراض مزمنة
    Fifth_Hide(event){
        var IDs = [
            "72338", //اذكري نوع المرض
            "72388", //اسم المريض ( اذا كان احد من افراد الاسرة)
            "72340", //عمر المريض
        ],
        Progs = [
            "taype", //اذكري نوع المرض
            "namepashent", //اسم المريض ( اذا كان احد من افراد الاسرة)
            "agey", //عمر المريض
        ];

        if(event == "نعم"){
            for(var i = 0; i < IDs.length; i++){
                document.getElementById(IDs[i]).style.display = "block";
                this.inputFormField[Progs[i]] = null;
            }
        }else{
            for(var i = 0; i < IDs.length; i++){
                document.getElementById(IDs[i]).style.display = "none";
                this.inputFormField[Progs[i]] = null;
            }
        }
    },

    Sexth_Hide(event){
        if(event.length != 0){
            for(var i = 0; i < event.length; i++){
                if(event[i] == "اخرى"){
                    document.getElementById("72344").style.display = "block";
                    this.inputFormField["namcvx"] = null;
                    break;
                }else{
                    document.getElementById("72344").style.display = "none";
                    this.inputFormField["namcvx"] = null;
                }
            }
        }else{
            document.getElementById("72344").style.display = "none";
            this.inputFormField["namcvx"] = null;
        }
    }
}