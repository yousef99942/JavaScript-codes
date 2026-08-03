{
    First_Hide(event){
        this.inputFormField["eypech"] = null;//اختر نوع الفصل للدورة التاهيلية لمنح اجازة فتح محل بيع الاعشاب الطبية
        if(event == "الدورة التاهلية لمنح اجازة فتح محل بيع اعشاب طبية"){
            document.getElementById("87455").style.display = "block";
        }else{
            document.getElementById("87455").style.display = "none";
        }
    }
}