{
    First_Hide(event){
        var Selected_Values = ["ارمل / ارملة", "مطلق/ مطلقة", "متزوج/ متزوجة",],
        Fields_ID = [
            "73487", //اسم الزوج / الزوجة الاول
            "75347", //اسم الزوج / الزوجة الثاني
            "75346", //اسم الزوج / الزوجة الثالث
            "75503", //هل يوجد تعدد زوجات
        ],
        Fields_Prog = [
            "Wife", //اسم الزوج / الزوجة الاول
            "Swifename", //اسم الزوج / الزوجة الثاني
            "Wifename", //اسم الزوج / الزوجة الثالث
            "Swife", //هل يوجد تعدد زوجات
        ];

        if(Selected_Values.includes(event)){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
                this.inputFormField[Fields_Prog[i]] = null;
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
                this.inputFormField[Fields_Prog[i]] = null;
            }
        }
    },

    Second_Hide(event){
        //بيانات الزوجات الأخريات
        this.inputFormField["Otherwife"] = null;
        if(event == "نعم"){
            document.getElementById("75506").style.display = "block";
        }else{
            document.getElementById("75506").style.display = "none";
        }
    }
}