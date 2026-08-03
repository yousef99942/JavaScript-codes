{
    First_Hide(event){
        this.inputFormField["oth"] = null;
        if(event == "آخرى تذكر"){
            document.getElementById("69201").style.display = "block"; //آخرى تذكر
        }else{
            document.getElementById("69201").style.display = "none";
        }
    },

    Second_Hide(event){
        this.inputFormField["fdhkh"] = null;
        if(event == "نعم"){
            document.getElementById("30313").style.display = "block"; //تملء بيانات الترخيص السابقة (اذا كانت الاجابة نعم)
        }else{
            document.getElementById("30313").style.display = "none";
        }
    },

    Third_Hide(event){
        this.inputFormField["TVB"] = null;
        if(event == "نعم"){
            document.getElementById("30321").style.display = "block"; //اذا كانت الاجابة نعم قم بملئ الدورات التدريبية في مجال الوقاية من الاشعاع (ترفق نسخة من شهادات التدريب)
        }else{
            document.getElementById("30321").style.display = "none";
        }
    },
}