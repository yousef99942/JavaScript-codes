{
    First_Hide(event){
        this.inputFormField["namez"] = null;
        this.inputFormField["namen"] = null;
        if(event == "نعم"){
            document.getElementById("92480").style.display = "block"; //ماهو البرنامج
            document.getElementById("92481").style.display = "block"; //كم مرة شاركت في البرامج
        }else{
            document.getElementById("92480").style.display = "none"; //ماهو البرنامج
            document.getElementById("92481").style.display = "none"; //كم مرة شاركت في البرامج
        }
    },

    Second_Hide(event){
        this.inputFormField["namem"] = null;
        if(event == "نعم"){
            document.getElementById("93061").style.display = "block"; //نوع العمل
        }else{
            document.getElementById("93061").style.display = "none"; //نوع العمل
        }
    },

    Third_Hide(event){
        this.inputFormField["namerwqxc"] = null;
        if(event == "أخرى"){
            document.getElementById("92493").style.display = "block"; //نوع الدعم الأخر
        }else{
            document.getElementById("92493").style.display = "none"; //نوع الدعم الأخر
        }
    },

    Fourth_Hide(event){
        this.inputFormField["namw"] = null;
        if(event == "نعم"){
            document.getElementById("92484").style.display = "block"; //هل لديك أولاد
        }else{
            document.getElementById("92484").style.display = "none"; //هل لديك أولاد
        }
    },

    Fifth_Hide(event){
        this.inputFormField["namewaos"] = null;
        if(event == "نعم"){
            document.getElementById("92489").style.display = "block"; //نوع التسجيل في الوزارة
        }else{
            document.getElementById("92489").style.display = "none"; //نوع التسجيل في الوزارة
        }
    },

    Sixth_Hide(event){
        this.inputFormField["nameh"] = null;
        if(event == "نعم"){
            document.getElementById("92490").style.display = "block"; //اسم المنظمة التي أستلمت المنحة منها
        }else{
            document.getElementById("92490").style.display = "none"; //اسم المنظمة التي أستلمت المنحة منها
        }
    }
}