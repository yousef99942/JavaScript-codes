{
    FirstHide(event){
        var shiedValues = [
            "66229",
            "66230",
            "66231",
            "66232",
        ],
  
        ShiedProgrammingName = [
            "ShiedFirstName",
            "ShiedSecondName",
            "ShiedThirdName",
            "ShiedFourthName",
        ],
  
        DeadValues =[
            "66233",
            "66235",
            "66236",
            "66237",
        ],
  
        DeadProgrammingName = [
            "DeadFirstName",
            "DeadSecondName",
            "DeadThirdName",
            "DeadFourthName",
        ],
  
        OtherValues = [
            "53951",
            "63975",
        ],
  
        OtherProgrammingName = [
            "job",
            "work",
        ];
  
        if(event == "ضباط الداخلية" || event == "منتسبي الداخلية"){
  
            for(var i = 0; i < OtherValues.length; i++){
                document.getElementById(OtherValues[i]).style.display = "block";
                this.inputFormField[OtherProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < shiedValues.length; i++){
                document.getElementById(shiedValues[i]).style.display = "none";
                this.inputFormField[ShiedProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < DeadValues.length; i++){
                document.getElementById(DeadValues[i]).style.display = "none";
                this.inputFormField[DeadProgrammingName[i]] = null;
            }
  
            document.getElementById("63979").style.display = "none";
            this.inputFormField["relation"] = null;
  
        }else if(event == "شهداء الداخلية"){
  
            for(var i = 0; i < OtherValues.length; i++){
                document.getElementById(OtherValues[i]).style.display = "block";
                this.inputFormField[OtherProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < shiedValues.length; i++){
                document.getElementById(shiedValues[i]).style.display = "block";
                this.inputFormField[ShiedProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < DeadValues.length; i++){
                document.getElementById(DeadValues[i]).style.display = "none";
                this.inputFormField[DeadProgrammingName[i]] = null;
            }
  
            document.getElementById("63979").style.display = "block";
            this.inputFormField["relation"] = null;
  
        }else if(event == "ذوي متوفين الداخلية"){
  
            for(var i = 0; i < OtherValues.length; i++){
                document.getElementById(OtherValues[i]).style.display = "block";
                this.inputFormField[OtherProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < shiedValues.length; i++){
                document.getElementById(shiedValues[i]).style.display = "none";
                this.inputFormField[ShiedProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < DeadValues.length; i++){
                document.getElementById(DeadValues[i]).style.display = "block";
                this.inputFormField[DeadProgrammingName[i]] = null;
            }
  
            document.getElementById("63979").style.display = "block";
            this.inputFormField["relation"] = null;
  
        }else if(event == "VIP"){
            document.getElementById("66531").style.display = "block";
            this.inputFormField["PrivateCode"] = null;
  
            for(var i = 0; i < shiedValues.length; i++){
                document.getElementById(shiedValues[i]).style.display = "none";
                this.inputFormField[ShiedProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < DeadValues.length; i++){
                document.getElementById(DeadValues[i]).style.display = "none";
                this.inputFormField[DeadProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < OtherValues.length; i++){
                document.getElementById(OtherValues[i]).style.display = "none";
                this.inputFormField[OtherProgrammingName[i]] = null;
            }
  
            document.getElementById("63979").style.display = "none";
            this.inputFormField["relation"] = null;
        }else{
  
            for(var i = 0; i < OtherValues.length; i++){
                document.getElementById(OtherValues[i]).style.display = "none";
                this.inputFormField[OtherProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < shiedValues.length; i++){
                document.getElementById(shiedValues[i]).style.display = "none";
                this.inputFormField[ShiedProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < DeadValues.length; i++){
                document.getElementById(DeadValues[i]).style.display = "none";
                this.inputFormField[DeadProgrammingName[i]] = null;
            }
            
            document.getElementById("63979").style.display = "none";
            this.inputFormField["relation"] = null;
  
            document.getElementById("66531").style.display = "none";
            this.inputFormField["PrivateCode"] = null;
        }
    },
  
    SecondHide(event){
        if(event == "متزوج/ة"){
            document.getElementById("63977").style.display = "block";
            this.inputFormField["namewif"] = null;
        }else{
            document.getElementById("63977").style.display = "none";
            this.inputFormField["namewif"] = null;
        }
    },
  
    ThirdHide(event){
        var shiedValues = [
            "66229",
            "66230",
            "66231",
            "66232",
        ],
        ShiedProgrammingName = [
            "ShiedFirstName",
            "ShiedSecondName",
            "ShiedThirdName",
            "ShiedFourthName",
        ],
        DeadValues =[
            "66233",
            "66235",
            "66236",
            "66237",
        ],
        DeadProgrammingName = [
            "DeadFirstName",
            "DeadSecondName",
            "DeadThirdName",
            "DeadFourthName",
        ],
        OtherValues = [
            "53951",
            "63975",
        ],
        OtherProgrammingName = [
            "job",
            "work",
        ];
  
        if(event == "A0728"){
            document.getElementById("66532").style.display = "block";
            this.inputFormField["VIPsource"] = null;
  
            for(var i = 0; i < shiedValues.length; i++){
                document.getElementById(shiedValues[i]).style.display = "block";
                this.inputFormField[ShiedProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < DeadValues.length; i++){
                document.getElementById(DeadValues[i]).style.display = "block";
                this.inputFormField[DeadProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < OtherValues.length; i++){
                document.getElementById(OtherValues[i]).style.display = "block";
                this.inputFormField[OtherProgrammingName[i]] = null;
            }
  
            document.getElementById("63979").style.display = "block";
            this.inputFormField["relation"] = null;
        }else{
            document.getElementById("66532").style.display = "none";
            this.inputFormField["VIPsource"] = null;
  
            for(var i = 0; i < shiedValues.length; i++){
                document.getElementById(shiedValues[i]).style.display = "none";
                this.inputFormField[ShiedProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < DeadValues.length; i++){
                document.getElementById(DeadValues[i]).style.display = "none";
                this.inputFormField[DeadProgrammingName[i]] = null;
            }
  
            for(var i = 0; i < OtherValues.length; i++){
                document.getElementById(OtherValues[i]).style.display = "none";
                this.inputFormField[OtherProgrammingName[i]] = null;
            }
  
            document.getElementById("63979").style.display = "none";
            this.inputFormField["relation"] = null;
        }
    }
  }