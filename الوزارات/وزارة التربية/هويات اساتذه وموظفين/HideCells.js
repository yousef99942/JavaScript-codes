{
    First_Function(Fields_ID, Fields_State){
        for(var i = 0; i < Fields_ID.length; i++){
            document.getElementById(Fields_ID[i]).style.display = Fields_State;
        }
    },

    Second_Function(Fields_Progs){
        for(var i = 0; i < Fields_Progs.length; i++){
            this.inputFormField[Fields_Progs[i]] = null;
        }
    },

    First_Hide(event){
        var First_Choice_IDs = [
            "66330", //المعلومات الشخصية للتدريسي
            "66332", //الاسم الاول
            "66333", //الاسم الثاني
            "66334", //الاسم الثالث
            "66336", //اللقب العلمي
            "66345", //الصفة
            "66346", //المركز الدارسي
            "66340", //كتابة الاسم الكامل باللغة الانكليزية (كما في الجواز )
            "66341", //الاسم الاول
            "66342", //اسم  الاب
            "66343", //اسم الجد
            "66344", //Academic title
            "66347", //Attribute
            "66348", //Study  Center
        ],
        Second_Choice_IDs = [
            "66349", //المعلومات الشخصية للموظف
            "66350", //الاسم الاول للموظف
            "66351", //الاسم الثاني للموظف
            "66352", //الاسم الثالث للموظف
            "66353", //اللقب العملي (ان وجد)
            "67767", //الصفة للموظف
            "66355", //مكان العمل
            "66356", //كتابة الاسم الكامل باللغة الانكليزية  للموظف (كما في الجواز )
            "66357", //Employee First Name
            "66412", //Employee Second Name
            "66413", //Employee Third Name
            "66414", //Academic title (if any)
            "67768", //The attribute
            "66416", //Workplace
        ],
        Progs = [
            //First Choise
            "hghsl", //الاسم الاول
            "hghsljhdusi", //الاسم الثاني
            "bvcdsretun", //الاسم الثالث
            "hghslkoim", //اللقب العلمي
            "hgfredj", //الصفة
            "hgfderyh", //المركز الدارسي
            "hgfdsru", //الاسم الاول
            "Fathername", //اسم  الاب
            "Grandfathersname", //اسم الجد
            "attribute", //Attribute
            "Center", //Study  Center

            //Second Choice
            "HGHHGGT", //الاسم الاول للموظف
            "JHGCY", //الاسم الثاني للموظف
            "JGYG", //الاسم الثالث للموظف
            "HGYFDYI", //اللقب العملي (ان وجد)
            "lkehfgijehi", //الصفة للموظف
            "HUWOEFJ", //مكان العمل
            "HUWDH", //Employee First Name
            "Father", //Employee Second Name
            "Grandfathe", //Employee Third Name
            "Academic", //Academic title (if any)
            "hghghgjg", //The attribute
            "workplace", //Workplace
        ];

        this.Second_Function(Progs);

        if(event == "تدريسي"){
            this.First_Function(First_Choice_IDs, "block");
            this.First_Function(Second_Choice_IDs, "none");
        }else if(event == "موظف"){
            this.First_Function(First_Choice_IDs, "none");
            this.First_Function(Second_Choice_IDs, "block");
        }else{
            this.First_Function(First_Choice_IDs, "none");
            this.First_Function(Second_Choice_IDs, "none");
        }
    },

    Second_Hide(event){
        if(event == "تجديد"){
            document.getElementById("71242").style.display = "block";
            this.inputFormField["nameint"] = null;
        }else{
            document.getElementById("71242").style.display = "none";
            this.inputFormField["nameint"] = null;
        }
    },
}