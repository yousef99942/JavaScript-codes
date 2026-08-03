{
    Partners(event) {
        if (event == "نعم") {
            console.log("Hello1");
            document.getElementById("68349").style.display = "block";
            this.inputFormField["Numberofpartners"] = null;
        }else {
            console.log("Hello3");
            document.getElementById("68349").style.display = "none"; 
            this.inputFormField["Numberofpartners"] = null;
        }
    },
}