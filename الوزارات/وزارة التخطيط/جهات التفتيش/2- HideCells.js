{
    First_Hide(event){
        this.inputFormField["parentname"] = null;
        if(event === "نعم / Yes."){
            document.getElementById("92425").style.display = "block"; //اذا كانت الاجابة نعم - اسم المؤسسة الام :
        }else{
            document.getElementById("92425").style.display = "none"; //اذا كانت الاجابة نعم - اسم المؤسسة الام :
        }
    },

    Second_Hide(event){
        this.inputFormField["ppp"] = null;
        if(event.includes("اخرى / Others")){
            document.getElementById("93089").style.display = "block"; //اذا كانت اختيارك لمجال الاعتماد (أخرى) املأ الحقل التالي:
        }else{
            document.getElementById("93089").style.display = "none";
        }
    }
}
   