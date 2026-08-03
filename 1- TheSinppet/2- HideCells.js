{
    First_Hide(event){
        this.inputFormField["FirstText"] = null;
        if(event == "متزوج"){
            document.getElementById("90731").style.display = "block";
            document.getElementById("35403_group").style.display = "block";
        }else if(event == "مطلق"){
            document.getElementById("90731").style.display = "none";
            document.getElementById("35403_group").style.display = "none";
            alert("Why you did this?");
        }else{
            document.getElementById("90731").style.display = "none";
            document.getElementById("35403_group").style.display = "none";
        }
    },

    Second_Hide(event){
        this.inputFormField["HelloThereH"] = null;
        if(event.includes("اخرى")){
            document.getElementById("90739").style.display = "block";
        }else{
            document.getElementById("90739").style.display = "none";
        }
    }
}