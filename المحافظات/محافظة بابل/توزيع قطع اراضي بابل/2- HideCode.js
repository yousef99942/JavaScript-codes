{
    //مال الحالة الاجتماعية
    First_Hide(event){
        if(event == "متزوج/ة" || event == "ارمل/ة" || event == "مطلق/ة"){
            document.getElementById("70242").style.display = "block";
            this.inputFormField["numberch"] == null;
        }else{
            document.getElementById("70242").style.display = "none";
            this.inputFormField["numberch"] = null;
        }
    },

    //تاريخ التعيين
    Second_Hide(event){
        if(
            event == "مديرية عقارات الدولة" ||
            event == "مديرية البلديات" ||
            event == "مديرية الاحوال المدنية" ||
            event == "الدوائر الاصلاحية"
        ){
            document.getElementById("70243").style.display = "block";
            this.inputFormField["datejob"] == null;
        }else{
            document.getElementById("70243").style.display = "none";
            this.inputFormField["datejob"] = null;
        }
    },
}