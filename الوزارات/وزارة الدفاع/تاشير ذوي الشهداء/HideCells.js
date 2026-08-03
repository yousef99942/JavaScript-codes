{
    EmployeeGov(event){
        this.inputFormField["namemanstry"] = null;
        if(event == "نعم"){
            document.getElementById("25590").style.display = "block";
        }else{
            document.getElementById("25590").style.display = "none";
        }
    }
}