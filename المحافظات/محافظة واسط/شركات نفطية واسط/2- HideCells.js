{
    First_Hide(event){
        var Fields_ID = [
            "87064", //الكلية/المعهد
            "87065", //القسم
            "87067", //التخصص الدقيق
            "87069", //جهة التخرج
            "87068", //المعدل
            "87070", //تاريخ التخرج
        ],
        Fields_Prog = [
            "sdname", //الكلية/المعهد
            "ssdname", //القسم
            "sasname", //التخصص الدقيق
            "aduname", //جهة التخرج
            "avname", //المعدل
            "dname", //تاريخ التخرج
        ];

        var First_Selected_Values = ["دكتوراه", "ماجستير", "بكالوريوس",],
        Second_Selected_Values = ["اعدادية", "متوسطة", "ابتدائية",];

        for(var i = 0; i < Fields_Prog.length; i++){
            this.inputFormField[Fields_Prog[i]] = null;
        }

        if(First_Selected_Values.includes(event)){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
            }
        }else if(event == "دبلوم"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i != 2){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(Second_Selected_Values.includes(event)){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i >= 3){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            }
        }
    }
}
