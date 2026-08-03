{
    First_Hide(event){
        if(event == "علمي"){
            document.getElementById("70581").style.display = "block";
            document.getElementById("70582").style.display = "none";
        }else if(event == "ادبي"){
            document.getElementById("70581").style.display = "none";
            document.getElementById("70582").style.display = "block";
        }else{
            document.getElementById("70581").style.display = "none";
            document.getElementById("70582").style.display = "none";
        }
    }
}