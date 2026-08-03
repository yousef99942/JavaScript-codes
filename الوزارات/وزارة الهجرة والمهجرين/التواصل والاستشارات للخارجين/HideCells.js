{
    First_Hide(event){
        if(event == "اخرى"){
            document.getElementById("70835").style.display = "block";
            this.inputFormField["nameczx"] = null;
        }else{
            document.getElementById("70835").style.display = "none";
            this.inputFormField["nameczx"] = null;
        }
    },

    Second_Hide(event){
        if(event == "نعم"){
            document.getElementById("70846").style.display = "block";
            this.inputFormField["namweer"] = null;
        }else{
            document.getElementById("70846").style.display = "none";
            this.inputFormField["namweer"] = null;
        }
    },

    Third_Hide(event){
        if(event == "نعم"){
            document.getElementById("70886").style.display = "block";
            this.inputFormField["Nameea"] = null;
        }else{
            document.getElementById("70886").style.display = "none";
            this.inputFormField["Nameea"] = null;
        }
    },

    Fourth_Hide(event){
        if(event.length != 0){
            for(var i = 0; i < event.length; i++){
                if(event[i] == "اخرى"){
                    document.getElementById("71551").style.display = "block";
                    this.inputFormField["OtherService"] = null;
                    break;
                }else{
                    document.getElementById("71551").style.display = "none";
                    this.inputFormField["OtherService"] = null;
                }
            }
        }else{
            document.getElementById("71551").style.display = "none";
            this.inputFormField["OtherService"] = null;
        }
    }
}