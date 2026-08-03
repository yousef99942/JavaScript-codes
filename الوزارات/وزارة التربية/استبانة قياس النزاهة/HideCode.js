{
    FirstHide(event){
        this.inputFormField["two"] = null;
        if(event == "كلا"){
            document.getElementById("50758").style.display = "block";
        }else{
            document.getElementById("50758").style.display = "none";
        }
    },

    SecondHide(event){
        this.inputFormField["towleve"] = null;
        if(event == "نعم"){
            document.getElementById("50586").style.display = "block";
        }else{
            document.getElementById("50586").style.display = "none";
        }
    },

    ThirdHide(event){
        this.inputFormField["fourteen"] = null;
        this.inputFormField["fifteen"] = null;
        if(event == "نعم"){
            document.getElementById("50588").style.display = "block";
            document.getElementById("50792").style.display = "block";
        }else{
            document.getElementById("50588").style.display = "none";
            document.getElementById("50792").style.display = "none";
        }
    },
}