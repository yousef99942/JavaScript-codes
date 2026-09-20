{
    First_Hide(event){
        this.inputFormField["wareethname"] = null;
        if(event === "وريث"){
            document.getElementById("94494").style.display = "block"; //اسم الوريث الرباعي
        }else{
            document.getElementById("94494").style.display = "none"; //اسم الوريث الرباعي
        }
    },

    Second_Hide(event){
        this.inputFormField["idnumber"] = null;
        if(event === "نعم"){
            document.getElementById("94496").style.display = "block"; //رقم الطلب
        }else{
            document.getElementById("94496").style.display = "none"; //رقم الطلب
        }
    }
}