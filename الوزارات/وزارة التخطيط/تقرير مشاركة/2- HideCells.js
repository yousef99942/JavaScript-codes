{
    First_Hide(){
        let Result = this.inputFormField.evaluatevalue == "ليس بمستوى الطموح" || this.inputFormField.curriculumevaluatee == "ليس بمستوى الطموح";
        this.inputFormField["valuenote"] = null;
        if(Result){
            document.getElementById("90714").style.display = "block"; //يجب ذكر  المبررات في حالة اختيار (ليس بمستوى الطموح)
        }else{
            document.getElementById("90714").style.display = "none"; //يجب ذكر  المبررات في حالة اختيار (ليس بمستوى الطموح)
        }
    },

    Date_Check(){
        let First_Date = new Date(this.inputFormField.datefrom); //التاريخ من
        let Second_Date = new Date(this.inputFormField.dateto); //التاريخ الى

        let Result = (Second_Date - First_Date) / (1000 * 60 * 60 * 24); //حساب الفرق بين التاريخين
        if(Result <= 0){
            return 0;
        }else{
            return Result;
        }
    },

    First_Check(event){
        document.getElementsByName("programduration")[0].disabled = true; //مدة البرنامج
        let Result = this.Date_Check();
        this.inputFormField.programduration = Result + " يوم ";
    }
}