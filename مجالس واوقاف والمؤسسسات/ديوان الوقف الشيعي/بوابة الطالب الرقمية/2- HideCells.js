{
    FirstHide(event){
        var Fields_ID = [
            "51094",//حقل عنوان التاييد
            "51458",//حقل النقل او الاستضافة من
            "51459"//حقل النقل او الاستضافة الى
        ],
        Fields_Prog = [
            "title",//حقل عنوان التاييد
            "from",//حقل النقل او الاستضافة من
            "moveto"//حقل النقل او الاستضافة الى
        ],
        Second_Selected_Values = [
            "عدم ممانعة بالنقل الى الكلية", "استضافة طالب في الكلية", "نقل ضمن فروع الكلية وخارجها"
        ];

        for(var i = 0; i < Fields_Prog.length; i++){
            this.inputFormField[Fields_Prog[i]] = null;
        }

        if(event == "تأييد استمرارية بالدوام"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i == 0){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(Second_Selected_Values.includes(event)){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i > 0){
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
    },
}