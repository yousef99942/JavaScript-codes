{
    FirstHide(event){
        if(
            event == "موظف" ||
            event == "ضباط الداخلية" ||
            event == "منتسبي الداخلية"
        ){
            document.getElementById("66800").style.display = "block";
            this.inputFormField["job"] = null;

            document.getElementById("66802").style.display = "block";
            this.inputFormField["work"] = null;
        }else{
            document.getElementById("66800").style.display = "none";
            this.inputFormField["job"] = null;

            document.getElementById("66802").style.display = "none";
            this.inputFormField["work"] = null;
        }
    },
}