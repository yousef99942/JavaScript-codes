{
  eqarFun(event) {
    if (event == "كلا ، بمقدار اسهم") {
      document.getElementById("34802").style.display = "block";
      this.inputFormField["housech"] = null;
      document.getElementById("34803").style.display = "none";
      this.inputFormField["hasa"] = null;
    }else if (event == "كلا ، بمقدار حصة") {
      document.getElementById("34803").style.display = "block";
      this.inputFormField["hasa"] = null;
      document.getElementById("34802").style.display = "none";
      this.inputFormField["housech"] = null;
    }else {
      document.getElementById("34802").style.display = "none";
      this.inputFormField["housech"] = null;
      document.getElementById("34803").style.display = "none";
      this.inputFormField["hasa"] = null;
    }
  },
      
  haiderrav4(event){
    if (event == "توحيد") {
      document.getElementById("46397").style.display = "block";
      this.inputFormField["hometa"] = null;
    } else {
      document.getElementById("46397").style.display = "none";
      this.inputFormField["hometa"] = null;
    }
  },
    
  haidernin(event) {
    var x = event;
    if (x == "وكيله") {
      document.getElementById("34626").style.display = "block";
      this.inputFormField["haidersa"] = null;
      document.getElementById("34627").style.display = "block";
      this.inputFormField["data"] = null;
      document.getElementById("34628").style.display = "block";
      this.inputFormField["wrttin"] = null;
      document.getElementById("73346").style.display = "block";
      this.inputFormField["OwnerFullName"] = null
    }else {
      document.getElementById("34626").style.display = "none";
      this.inputFormField["haidersa"] = null;
      document.getElementById("34627").style.display = "none";
      this.inputFormField["data"] = null;
      document.getElementById("34628").style.display = "none";
      this.inputFormField["wrttin"] = null;
      document.getElementById("73346").style.display = "none";
      this.inputFormField["OwnerFullName"] = null
    }
  }
}