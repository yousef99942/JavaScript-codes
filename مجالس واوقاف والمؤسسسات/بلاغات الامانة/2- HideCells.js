{
    First_Hide(event){
        if(event == "موظف"){
            document.getElementById("73695").style.display = "block";
            this.inputFormField["DeptName"] = null;
            document.getElementById("73697").style.display = "block";
            this.inputFormField["MinisteryName"] = null;
        }else{
            document.getElementById("73695").style.display = "none";
            this.inputFormField["DeptName"] = null;
            document.getElementById("73697").style.display = "none";
            this.inputFormField["MinisteryName"] = null;
        }
    },
}