{
    First_Hide(event){
        var Fields_ID = [
            //اسم الوكيل
            "76036", //اسم الوكيل الاول
            "76108", //اسم الوكيل الثاني
            "76109", //اسم الوكيل الثالث
            "76110", //اسم الوكيل الرابع
            //اسم الوريث
            "76037", //اسم الوريث الاول
            "76111", //اسم الوريث الثاني
            "76112", //اسم الوريث الثالث
            "76113", //اسم الوريث الرابع
        ],
        Fields_Prog = [
            //اسم الوكيل
            "wakeelname", //اسم الوكيل الاول
            "WakeelSecondName", //اسم الوكيل الثاني
            "WakeelThirdName", //اسم الوكيل الثالث
            "WakeelFourthName", //اسم الوكيل الرابع
            //اسم الوريث
            "namewareeth", //اسم الوريث الاول
            "WareethSecondName", //اسم الوريث الثاني
            "WareethThirdName", //اسم الوريث الثالث
            "WareethFourthName", //اسم الوريث الرابع
        ];

        for(var i = 0; i < Fields_Prog.length; i++){
            this.inputFormField[Fields_Prog[i]] = null;
        }

        if(event == "وريث"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i >= 4){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }

            this.inputFormField.namewareeth = this.user.first_name; //جلب الاسم الاول
            document.getElementsByName("namewareeth")[0].disabled = true; //قفل حقل الاسم الاول

            this.inputFormField.WareethSecondName = this.user.middle_name; //جلب الاسم الثاني
            document.getElementsByName("WareethSecondName")[0].disabled = true; //قفل حقل الاسم الثاني

            this.inputFormField.WareethThirdName = this.user.last_name; //جلب الاسم الثالث
            document.getElementsByName("WareethThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

            this.inputFormField.WareethFourthName = this.user.forth_name; //جلب الاسم الرابع
            document.getElementsByName("WareethFourthName")[0].disabled = true; //قفل حقل الاسم الرابع
        }else if(event == "وكيل"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i < 4){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }

            this.inputFormField.wakeelname = this.user.first_name; //جلب الاسم الاول
            document.getElementsByName("wakeelname")[0].disabled = true; //قفل حقل الاسم الاول

            this.inputFormField.WakeelSecondName = this.user.middle_name; //جلب الاسم الثاني
            document.getElementsByName("WakeelSecondName")[0].disabled = true; //قفل حقل الاسم الثاني

            this.inputFormField.WakeelThirdName = this.user.last_name; //جلب الاسم الثالث
            document.getElementsByName("WakeelThirdName")[0].disabled = true; //قفل حقل الاسم الثالث

            this.inputFormField.WakeelFourthName = this.user.forth_name; //جلب الاسم الرابع
            document.getElementsByName("WakeelFourthName")[0].disabled = true; //قفل حقل الاسم الرابع
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
            }
        }
    },

    //---------------------------------------------------------------------------------
    Second_Hide(event){
        //هل لديك ادلة رسمية
        this.inputFormField["adela"] = null;
        if(event == "نعم"){
            document.getElementById("75407").style.display = "block";
        }else{
            document.getElementById("75407").style.display = "none";
        }
    },

    //---------------------------------------------------------------------------------
    Third_Hide(event){
        //هل لديك ادلة غير رسمية ؟
        this.inputFormField["aleela"] = null;
        if(event == "نعم"){
            document.getElementById("75408").style.display = "block";
        }else{
            document.getElementById("75408").style.display = "none";
        }
    },

    //---------------------------------------------------------------------------------
    Fourth_Hide(event){
        var Fields_ID = [
            "75395", //اسم المدرسة الابتدائية
            "75396", //اسم المدرسة المتوسطة
            "75397", //اسم المدرسة الاعدادية
            "75399", //اسم المعهد
            "75398", //اسم الجامعة
            "75400", //اخرى
        ],
        Fields_Prog = [
            "primeryshcool", //اسم المدرسة الابتدائية
            "secandryshcool", //اسم المدرسة المتوسطة
            "secanaryyschool", //اسم المدرسة الاعدادية
            "maeed", //اسم المعهد
            "collage", //اسم الجامعة
            "any", //اخرى
        ];

        for(var i = 0; i < Fields_Prog.length; i++){
            this.inputFormField[Fields_Prog[i]] = null;
        }

        if(event == "ابتدائية"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i == 0){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "متوسطة"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i < 2){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "اعدادية"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i < 3){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "بكالوريوس" || event == "ماجستير" || event == "دكتوراه"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i < 3 || i == 4){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "دبلوم"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i < 4){
                    document.getElementById(Fields_ID[i]).style.display = "block";
                }else{
                    document.getElementById(Fields_ID[i]).style.display = "none";
                }
            }
        }else if(event == "اخرى"){
            for(var i = 0; i < Fields_ID.length; i++){
                if(i == 5){
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