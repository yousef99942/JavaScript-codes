{
    First_Hide(event){
        if(event == "مواطن بموجب وكالة, مساهم, مدير مفوض"){
            document.getElementById("72391").style.display = "block";
            this.inputFormField["condition"] = null;
        }else{
            document.getElementById("72391").style.display = "none";
            this.inputFormField["condition"] = null;
        }
    }
}