{
  MainFun(event) {
        var x = event;
        if(
            x === "البيع" ||
            x === "الهبة" ||
            x === "بيع حكمي" ||
            x === "ازالة شيوع" ||
            x === "تخارج" ||
            x === "بيع شركة /مصرف" ||
            x === "افراز بشرط التوحيد" || 
            x === "الهبة" ||
            x === "افراغ"
        ){
            document.getElementById("12551_group").style.display = "block";
            document.getElementById("12750_group").style.display = "none";
        }else if(
            x === "تمليك" ||
            x === "تنازل عن تمليك" ||
            x === "الرهن" ||
            x === "فسخ رهن"
        ) {
            document.getElementById("12551_group").style.display = "none";
            document.getElementById("12750_group").style.display ="block";
            document.getElementById("36081").style.display = "none";
            this.inputFormField["bankName"] = null;
            document.getElementById("36082").style.display = "block";
            this.inputFormField["Ministry"] = null;
        }else {
            document.getElementById("12750_group").style.display = "none";
            document.getElementById("12551_group").style.display = "none";
            document.getElementById("36081").style.display = "none";
            this.inputFormField["bankName"] = null;
            document.getElementById("36082").style.display = "none";
            this.inputFormField["Ministry"] = null;
        }
        if( x === "بيع حكمي" ) 
            {           
                      document.getElementById("34405").style.display = "none";
                       document.getElementById("34428").style.display = "none";
                        document.getElementById("34407").style.display = "none";
                        document.getElementById("34408").style.display = "none";
                        document.getElementById("34409").style.display = "none";
                        document.getElementById("34410").style.display = "none";
                        document.getElementById("34411").style.display = "none";
                        document.getElementById("34413").style.display = "none";
                        document.getElementById("34414").style.display = "none";
                        document.getElementById("73382").style.display = "none";
                        document.getElementById("34415").style.display = "none";
                        document.getElementById("34416").style.display = "none";
                        document.getElementById("34417").style.display = "none";
                        document.getElementById("34418").style.display = "none";
                        document.getElementById("34422").style.display = "none";
                        document.getElementById("34426").style.display = "none";
                        document.getElementById("34797").style.display = "none";

                }
        else {    document.getElementById("34405").style.display = "block";
                        document.getElementById("34428").style.display = "block";
                        document.getElementById("34407").style.display = "block";
                        document.getElementById("34408").style.display = "block";
                        document.getElementById("34409").style.display = "block";
                        document.getElementById("34410").style.display = "block";
                        document.getElementById("34411").style.display = "block";
                        document.getElementById("34413").style.display = "block";
                        document.getElementById("34414").style.display = "block";
                        document.getElementById("73382").style.display = "block";
                        document.getElementById("34415").style.display = "block";
                        document.getElementById("34416").style.display = "block";
                        document.getElementById("34417").style.display = "block";
                        document.getElementById("34418").style.display = "block";
                        document.getElementById("34422").style.display = "block";
                        document.getElementById("34426").style.display = "block";
                        document.getElementById("34797").style.display = "block";


              }
    },
    
    eqarFun(event) {
      var x = event;
      if (x == "كلا ، بمقدار اسهم") {
        document.getElementById("36088").style.display = "block";
        this.inputFormField["husech"] = null;
        document.getElementById("36089").style.display = "none";
        this.inputFormField["haasa"] = null;
      } else if (x == "كلا ، بمقدار حصة") {
        document.getElementById("36088").style.display = "none";
        this.inputFormField["husech"] = null;
        document.getElementById("36089").style.display = "block";
        this.inputFormField["haasa"] = null;
        }else{
        document.getElementById("36088").style.display = "none";
        this.inputFormField["husech"] = null;
        document.getElementById("36089").style.display = "none";
        this.inputFormField["haasa"] = null;
        }
    },
      
haiderrtr(event) {
        var x = event;
        if (x == "وكيله") {
          document.getElementById("34411").style.display = "block";
              this.inputFormField["haidersa"] = null;
            document.getElementById("34413").style.display = "block";
              this.inputFormField["data"] = null;
           document.getElementById("34414").style.display = "block";
              this.inputFormField["wrttin"] = null;
          document.getElementById("73382").style.display = "block";
          this.inputFormField["SecondOwnerFullName"] = null;
              
          
         
        }  else {
            document.getElementById("34411").style.display = "none";
              this.inputFormField["haidersa"] = null;
            document.getElementById("34413").style.display = "none";
              this.inputFormField["data"] = null;
           document.getElementById("34414").style.display = "none";
              this.inputFormField["wrttin"] = null;
              document.getElementById("73382").style.display = "none";
          this.inputFormField["SecondOwnerFullName"] = null;
  
      }
   },
    
     haiderrr(event) {
        var x = event;
        if (x == "كلا وكيله") {
          document.getElementById("36095").style.display = "block";
              this.inputFormField["haidersaa"] = null;
            document.getElementById("36096").style.display = "block";
              this.inputFormField["edata"] = null;
           document.getElementById("36097").style.display = "block";
              this.inputFormField["wwrttin"] = null;
          document.getElementById("73304").style.display = "block";
          this.inputFormField["OwnerFullName"] = null;
         
        }  else {
              document.getElementById("36095").style.display = "none";
              this.inputFormField["haidersaa"] = null;
            document.getElementById("36096").style.display = "none";
              this.inputFormField["edata"] = null;
           document.getElementById("36097").style.display = "none";
              this.inputFormField["wwrttin"] = null;
            document.getElementById("73304").style.display = "none";
          this.inputFormField["OwnerFullName"] = null;
      }
   },

  haidertat(event) {
    if (event == "وكيله") {
      document.getElementById("34438").style.display = "block";
      this.inputFormField["number"] = null;
      document.getElementById("34439").style.display = "block";
      this.inputFormField["histry"] = null;
      document.getElementById("34440").style.display = "block";
      this.inputFormField["Issuer"] = null;
    } else {
      document.getElementById("34438").style.display = "none";
      this.inputFormField["number"] = null;
      document.getElementById("34439").style.display = "none";
      this.inputFormField["histry"] = null;
      document.getElementById("34440").style.display = "none";
      this.inputFormField["Issuer"] = null;
    }
  }
}