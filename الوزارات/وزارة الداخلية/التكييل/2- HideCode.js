{
    TheHide(event){
        this.inputFormField["OilGas"] = null;
        if (event == "هيئة توزيع منتجات بغداد") {
            document.getElementById("64242").style.display = "block";
        }else{
            document.getElementById("64242").style.display = "none";
        }
    }
}