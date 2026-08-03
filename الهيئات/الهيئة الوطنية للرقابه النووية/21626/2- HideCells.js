{
    First_Hide(event){
        this.inputFormField["vrl"] = null; //رقم الاجازة
        this.inputFormField["jhv"] = null; //تاريخها
        if(event == "تجديد الاجازة" || event == "تعديل الاجازة"){
            document.getElementById("74217").style.display = "block"; //رقم الاجازة
            document.getElementById("74218").style.display = "block"; //تاريخها
        }else{
            document.getElementById("74217").style.display = "none"; //رقم الاجازة
            document.getElementById("74218").style.display = "none"; //تاريخها
        }
    },

    Second_Hide(event){
        this.inputFormField["rrtr"] = null;
        if(event == "أخرى"){
            document.getElementById("74246").style.display = "block";
        }else{
            document.getElementById("74246").style.display = "none";
        }
    },
}