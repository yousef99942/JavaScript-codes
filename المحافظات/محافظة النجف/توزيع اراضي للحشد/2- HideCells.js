{
    First_Hide(event){
        //شهيد
        var First_Fields_ID = [
            "87111", //اسم الشهيد
            //"87105", //مكان الاستشهاد
            "87103", //صلة القرابة
        ],
        //جريح
        Second_Fields_ID = [
            "87112", //اسم الجريح
            "87104", //مكان الاصابة
            "88416", //نسبة العجز
        ],
        Fields_Progs = [
            "nam", //اسم الشهيد
            //"martyrdom", //مكان الاستشهاد
            "forrm", //صلة القرابة
            "namee", //اسم الجريح
            "injury", //مكان الاصابة
            "per", //نسبة العجز
        ];

        for(var i = 0; i < Fields_Progs.length; i++){
            this.inputFormField[Fields_Progs[i]] = null;
        }

        if(event == "شهيد"){
            for(var i = 0; i < First_Fields_ID.length; i++){
                document.getElementById(First_Fields_ID[i]).style.display = "block";
            }

            for(var i = 0; i < Second_Fields_ID.length; i++){
                document.getElementById(Second_Fields_ID[i]).style.display = "none";
            }
        }else if(event == "جريح"){
            for(var i = 0; i < First_Fields_ID.length; i++){
                document.getElementById(First_Fields_ID[i]).style.display = "none";
            }

            for(var i = 0; i < Second_Fields_ID.length; i++){
                document.getElementById(Second_Fields_ID[i]).style.display = "block";
            }
        }else{
            for(var i = 0; i < First_Fields_ID.length; i++){
                document.getElementById(First_Fields_ID[i]).style.display = "none";
            }

            for(var i = 0; i < Second_Fields_ID.length; i++){
                document.getElementById(Second_Fields_ID[i]).style.display = "none";
            }
        }
    },
}