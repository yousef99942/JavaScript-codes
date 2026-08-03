{
  ServiceFun(event){
    for (let field of this.group_of_form[1].fields) {
      this.inputFormField[field.name] = null;
    }

    if(event == "اعداد تصاميم شبكات الغاز السائل"){
      //اظهار استمارة الاشراف على نصب منظومات الغاز السائل
      document.getElementById("35092_group").style.display = "block";
    }else{
      //اخفاء استمارة الاشراف على نصب منظومات الغاز السائل
      document.getElementById("35092_group").style.display = "none";
    }
  },

  First_Hide(event){
    //في حال تجاوز حجم ملف المخططات المعمارية  (25) ميكا بايت، يمكن رفعها على (Microsoft Drive) أو (Google Drive) وإرفاق الرابط.
    this.inputFormField["Microsoft"] = null;
    
    if(event == "نعم"){
      document.getElementById("90797").style.display = "block";
    }else{
      document.getElementById("90797").style.display = "none";
    }
  }
}