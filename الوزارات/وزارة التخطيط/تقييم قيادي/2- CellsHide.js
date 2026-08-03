{
    First_Hide(event){
        this.inputFormField["nid"] = null; //رقم البطاقة الوطنية
        this.inputFormField["PassportID"] = null; //رقم جواز السفر
        if(event == "البطاقة الوطنية"){
            document.getElementById("86578").style.display = "block"; //رقم البطاقة الوطنية
            document.getElementById("86681").style.display = "none"; //رقم جواز السفر
        }else if(event == "جواز السفر"){
            document.getElementById("86578").style.display = "none"; //رقم البطاقة الوطنية
            document.getElementById("86681").style.display = "block"; //رقم جواز السفر
        }else{
            document.getElementById("86578").style.display = "none"; //رقم البطاقة الوطنية
            document.getElementById("86681").style.display = "none"; //رقم جواز السفر
        }
    },

    Second_Hide(event){
        this.inputFormField["yes"] = null;
        if(event == "نعم"){
            document.getElementById("86608").style.display = "block";
        }else{
            document.getElementById("86608").style.display = "none";
        }
    },
}