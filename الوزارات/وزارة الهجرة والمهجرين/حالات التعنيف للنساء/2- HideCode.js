{
    //الشخص المتسبب بالتعنيف
    First_Hide(event){
        if(event == "غيره"){
            document.getElementById("70762").style.display = "block";
            this.inputFormField["nameqq"] = null;
        }else{
            document.getElementById("70762").style.display = "none";
            this.inputFormField["nameqq"] = null;
        }
    },

    //هل ترغبين بتقديم بلاغ رسمي للجهات المعنية
    Second_Hide(event){
        if(event == "نعم"){
            document.getElementById("70766").style.display = "block";
            this.inputFormField["namerrrr"] = null;
        }else{
            document.getElementById("70766").style.display = "none";
            this.inputFormField["namerrrr"] = null;
        }
    },

    //نوع التعنيف
    Third_Hide(event){
        if(event == "اخرى" || event == "اخري"){
            document.getElementById("71053").style.display = "block";
            this.inputFormField["texttayp"] = null;
        }else{
            document.getElementById("71053").style.display = "none";
            this.inputFormField["texttayp"] = null;
        }
    },

    //نوع الطلب
    Fourth_Hide(event){
        this.inputFormField["namerytyu"] == null; //تفاصيل الاستشارة النفسية
        this.inputFormField["nameqwias"] == null; //تفاصيل الاستشارة القانونية
        this.inputFormField["info"] == null; //معلومات الابلاغ بالتفصيل

        if(event === "أستشارة نفسية بخصوص حالة التعنيف المتعرضة لها (أكتب تفاصيل الأستشارة المطلوبة)"){
            document.getElementById("90814").style.display = "block"; //تفاصيل الاستشارة النفسية
            document.getElementById("90815").style.display = "none"; //تفاصيل الاستشارة القانونية
            document.getElementById("70800").style.display = "none"; //معلومات الابلاغ بالتفصيل
        }else if(event === "أستشارة قانونية بخصوص حالة التعنيف المتعرضة لها (أكتب تفاصيل الاستشارة المطلوبة)"){
            document.getElementById("90814").style.display = "none"; //تفاصيل الاستشارة النفسية
            document.getElementById("90815").style.display = "block"; //تفاصيل الاستشارة القانونية
            document.getElementById("70800").style.display = "none"; //معلومات الابلاغ بالتفصيل
        }else if(event === "تقديم بلاغ"){
            document.getElementById("90814").style.display = "none"; //تفاصيل الاستشارة النفسية
            document.getElementById("90815").style.display = "none"; //تفاصيل الاستشارة القانونية
            document.getElementById("70800").style.display = "block"; //معلومات الابلاغ بالتفصيل
        }else{
            document.getElementById("90814").style.display = "none"; //تفاصيل الاستشارة النفسية
            document.getElementById("90815").style.display = "none"; //تفاصيل الاستشارة القانونية
            document.getElementById("70800").style.display = "none"; //معلومات الابلاغ بالتفصيل
        }
    },
}