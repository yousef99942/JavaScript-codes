{
  First_Filter(event){
    this.inputFormField["town"] = null;
    if(event == "كركوك"){
      document.getElementById("74685").style.display = "block";//حقل الناحية
    }else{
      document.getElementById("74685").style.display = "none";
    }
  },

  Second_Filter(event){
    this.inputFormField["city"] = null;
    if(event == "كركوك"){
      document.getElementById("68661").style.display = "block";//حقل القضاء
    }else{
      document.getElementById("68661").style.display = "none";
    }
  },
}
