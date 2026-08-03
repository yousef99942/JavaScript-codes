{
    eqarFun(event) {
        this.inputFormField["housech"] = null;
        this.inputFormField["hasa"] = null;
        if (event == "كلا ، بمقدار اسهم") {
            document.getElementById("34913").style.display = "block";
            document.getElementById("34914").style.display = "none";
        } else if (event == "كلا ، بمقدار حصة") {
            document.getElementById("34914").style.display = "block";
            document.getElementById("34913").style.display = "none";
        } else {
            document.getElementById("34913").style.display = "none";
            document.getElementById("34914").style.display = "none";
        }
    },

    haidertat(event) {
        this.inputFormField["number"] = null;
        this.inputFormField["histry"] = null;
        this.inputFormField["Issuer"] = null;
        if (event == "وكيله") {
            document.getElementById("34956").style.display = "block";
            document.getElementById("34958").style.display = "block";  
            document.getElementById("34959").style.display = "block";
        }  else {
            document.getElementById("34956").style.display = "none";
            document.getElementById("34958").style.display = "none";
           document.getElementById("34959").style.display = "none";
        }
    },

    haiderrtr(event) {
        this.inputFormField["haidersa"] = null;
        this.inputFormField["data"] = null;
        this.inputFormField["wrttin"] = null;
        if (event == "وكيله") {
            document.getElementById("34941").style.display = "block";
            document.getElementById("34943").style.display = "block";  
            document.getElementById("34944").style.display = "block";
        }  else {
            document.getElementById("34941").style.display = "none";
            document.getElementById("34943").style.display = "none";
            document.getElementById("34944").style.display = "none";
        }
   },
  
    haiderdheyaa(event) {
      var number = ["34951", "34952", "34953", "34954", "34955", "34956", "34958", "34959", "34960", "34961", "34962"];
      var names = ["haidernam", "haidername", "haiderjtn", "haidert", "haiderlxs", "number", "histry", "Issuer", "haiderasd", "dataas", "mushtary",];
      var x = event ;
      
      if (event !== "مساطحة" && event !== "تسجيل تسقيف" ) {
        let i = 0;
        while (i < 12) {
            document.getElementById(number[i]).style.display = "block";
            this.inputFormField[name[i]] = null;
            i++;
        }      
      }else if (event == "مبادلة" || event == "صلح" || event == "قسمة جمع او قسمة تفريق" )   {
        document.getElementById("50154").style.display = "block";
        this.inputFormField["eqarnam"] = null;
        document.getElementById(number[i]).style.display = "none";
        this.inputFormField[name[i]] = null;
        i++;
      }else {
        let i = 0;
        while (i < 12) {
            document.getElementById(number[i]).style.display = "none";
            this.inputFormField[name[i]] = null;
            i++;
            document.getElementById("50154").style.display = "none";
            this.inputFormField["eqarnam"] = null;
        }
      } 
    },
}