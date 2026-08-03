{
    FirstHide(event){
        this.inputFormField["ContryStudent"] = null;
        if(event == "غير عراقي"){
            document.getElementById("65512").style.display = "block";
        }else{
            document.getElementById("65512").style.display = "none";
        }
    },

    SecondHide(event){
        this.inputFormField["dor"] = null;
        this.inputFormField["FieldYear"] = null;
        if(event == "ناجح" || event == "مكمل"){
            document.getElementById("53963").style.display = "block";
            document.getElementById("53965").style.display = "none";
        }else if(event == "راسب"){
            document.getElementById("53965").style.display = "block";
            document.getElementById("53963").style.display = "none";
        }else{
            document.getElementById("53963").style.display = "none";
            document.getElementById("53965").style.display = "none";
        }
    },
}