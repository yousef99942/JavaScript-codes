{
    First_Hide(event) {
        this.inputFormField["numberw"] = null; //عدد الزوجات
        this.inputFormField["numberch"] = null; // عدد الأطفال
        if (event == "متزوج/متزوجة" && this.inputFormField.Type === "ذكر") {
            document.getElementById("89881").style.display = "block"; //عدد الزوجات
            document.getElementById("89882").style.display = "block"; // عدد الأطفال
        }else if((event == "متزوج/متزوجة" && this.inputFormField.Type === "انثى") || event == "ارمل/ارملة" || event == "مطلق/مطلقة") {
            document.getElementById("89882").style.display = "block"; //عدد الأطفال
            document.getElementById("89881").style.display = "none"; //عدد الزوجات
        }else{
            document.getElementById("89881").style.display = "none"; //عدد الزوجات
            document.getElementById("89882").style.display = "none"; // عدد الأطفال
        }
    },

    Second_Hide(event) {
        if(event){
            this.First_Hide(this.inputFormField.marital);
        }
    }
}