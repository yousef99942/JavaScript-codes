{
    First_Hide(event){
        if(event == "أخرى"){
            document.getElementById("70905").style.display = "block";
            this.inputFormField["nameasa"] = null;
        }else{
            document.getElementById("70905").style.display = "none";
            this.inputFormField["nameasa"] = null;
        }
    },

    Second_Hide(event){
        if(event == "نعم"){
            document.getElementById("70908").style.display = "block";
            this.inputFormField["nameseek"] = null;
        }else{
            document.getElementById("70908").style.display = "none";
            this.inputFormField["nameseek"] = null;
        }
    },

    Third_Hide(event){
        if(event == "نعم"){
            document.getElementById("70910").style.display = "block";
            this.inputFormField["nameeea"] = null;
        }else{
            document.getElementById("70910").style.display = "none";
            this.inputFormField["nameeea"] = null;
        }
    },

    Fouth_Hide(event){
        if(event.length != 0){
            for(var i = 0; i < event.length; i++){
                if(event[i] == "أخرى"){
                    document.getElementById("70914").style.display = "block";
                    this.inputFormField["namewww"] = null;
                    break;
                }else{
                    document.getElementById("70914").style.display = "none";
                    this.inputFormField["namewww"] = null;
                }
            }
        }else{
            document.getElementById("70914").style.display = "none";
            this.inputFormField["namewww"] = null;
        }
    },
}