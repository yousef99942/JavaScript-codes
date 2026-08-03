{
    First_Hide(event){
        let Selected_Value = [
            "البكالوريوس", "ماجستير", "دكتوراه", "الاعداديات المهنية", "معهد"
        ];

        this.inputFormField["Specialization"] = null;
        if(Selected_Value.includes(event)){
            document.getElementById("89199").style.display = "block"; //التخصص
        }else{
            document.getElementById("89199").style.display = "none";
        }
    }
}