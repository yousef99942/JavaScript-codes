{
    First_Hide(event){
        this.inputFormField["nameasa"] = null;
        if(event == "أخرى"){
            document.getElementById("70905").style.display = "block";
        }else{
            document.getElementById("70905").style.display = "none";
        }
    },

    Second_Hide(event){
        this.inputFormField["nameseek"] = null;
        if(event == "نعم"){
            document.getElementById("70908").style.display = "block";
        }else{
            document.getElementById("70908").style.display = "none";
        }
    },

    Third_Hide(event){
        this.inputFormField["nameeea"] = null;
        if(event == "نعم"){
            document.getElementById("70910").style.display = "block";
        }else{
            document.getElementById("70910").style.display = "none";
        }
    },

    Fouth_Hide(event){
        this.inputFormField["namewww"] = null;
        if(event.includes("أخرى")){
            document.getElementById("70914").style.display = "block";
        }else{
            document.getElementById("70914").style.display = "none";
        }
    },
}