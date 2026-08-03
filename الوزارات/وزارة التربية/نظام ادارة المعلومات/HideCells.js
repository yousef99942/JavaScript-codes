{
    First_Hide(event){
        if(event == "نعم"){
            document.getElementById("70955").style.display = "block";
            this.inputFormField["Modem"] = null;
        }else{
            document.getElementById("70955").style.display = "none";
            this.inputFormField["Modem"] = "";
        }
    },
}