{
    First_Hide(event){
        this.inputFormField["numhours"] = null;
        if(event == "صباحاً" || event == "مساءً"){
            document.getElementById("67660").style.display = "block";
        }else{
            document.getElementById("67660").style.display = "none";
        }
    }
}