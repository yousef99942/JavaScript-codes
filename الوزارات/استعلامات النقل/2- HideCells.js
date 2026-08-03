{
    First_Hide(event){
        this.inputFormField["workplace"] = null;
        if(event == "نعم"){
            document.getElementById("76072").style.display = "block";
        }else{
            document.getElementById("76072").style.display = "none";
        }
    },
}