{
 getSection(event){
    if(event == "الاعلام"){
        document.getElementById("33641").style.display = "block";
    }else if(event == "رياض الاطفال والتربية الخاصة"){
        document.getElementById("33641").style.display = "none";
        this.inputFormField["sectionmedia"] = null;

        document.getElementById("33642").style.display = "block";
        this.inputFormField["sectionkg"] = null;
    }else{
        document.getElementById("33641").style.display = "none";
        this.inputFormField["sectionmedia"] = null;
        
        document.getElementById("33642").style.display = "none";
        this.inputFormField["sectionkg"] = null;
    } 
  },
     
  job(event){
        if(event == "موظف"){
            document.getElementById("34878").style.display = "block";
            this.inputFormField["employer"] = null;
        }else{
            document.getElementById("34878").style.display = "none";
            this.inputFormField["employer"] = null;
        }
    }
}