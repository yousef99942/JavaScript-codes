{
    FirstHide(event){
        var Values = [
            [
                "دورة تدريبية",
                "ورشة عمل",
                "محاضرة",
                "ندوة",
                "مؤتمر"
            ],
            ["تدريب صيفي"],
        ];

        if(event == "موظف داخل الهيئة" || event == "موظف خارج الهيئة"){
            this.group_of_form[0].fields[1].properties[0].values = Values[0];
            this.inputFormField["secondslector"] = null;
        }else if(event == "الطلبة"){
            this.group_of_form[0].fields[1].properties[0].values = Values[1];
            this.inputFormField["secondslector"] = null;
        }else{
            this.group_of_form[0].fields[1].properties[0].values = [];
            this.inputFormField["secondslector"] = null;
        }
    },

    SecondHide(event){
        var FirstGroup = [
            "firstn",
            "secondn",
            "thirdn",
            "JobTitle",
            "JobGrade",
            "Currentstage",
            "EntityName",
            "Certification",
            "GeneralJurisdiction",
            "ExactJurisdiction",
            "TrainingProgramName",
        ],
        SecondGroup = [
            "first",
            "second",
            "third",
            "address",
            "Jobgrad",
            "Formationname",
            "Certificate",
            "Generaljurisdictionn",
            "Exactspecialization",
            "phoneno",
            "emailn",
            "type",
            "workshop",
            "lecture",
            "Nadwa",
            "conference",
            "Posttype",
            "Searchtitle",
        ],
        ThirdGroup = [
            "firstname",
            "secondname",
            "thridname",
            "fourthname",
            "phone",
            "email",
            "Categories",
            "university",
            "college",
            "Institute",
            "section",
            "stage",
            "from",
            "into",
        ];
        if(event == "دورة تدريبية"){
            //to clear the values of the fields of group 2 and 3
            for(var i = 0; i < SecondGroup.length; i++){
                this.inputFormField[SecondGroup[i]] = null;
            }
            for(var i = 0; i < ThirdGroup.length; i++){
                this.inputFormField[ThirdGroup[i]] = null;
            }

            //to get the user data from UR
            this.inputFormField.firstn = this.user.first_name;
            document.getElementsByName("firstn")[0].disabled = true; //الاسم الاول

            this.inputFormField.secondn = this.user.middle_name;
            document.getElementsByName("secondn")[0].disabled = true; //الاسم الثاني

            this.inputFormField.thirdn = this.user.last_name;
            document.getElementsByName("thirdn")[0].disabled = true; //الاسم الثالث

            //to block the fields of group 1 and hide the fields of group 2 and 3
            document.getElementById("33513_group").style.display = "block";

            document.getElementById("33514_group").style.display = "none";
            document.getElementById("33516_group").style.display = "none";

        }else if(event == "ورشة عمل" || event == "محاضرة" || event == "ندوة" || event == "مؤتمر"){
            //to get the user data from UR
            this.inputFormField.first = this.user.first_name;
            document.getElementsByName("first")[0].disabled = true; //الاسم الاول

            this.inputFormField.second = this.user.middle_name;
            document.getElementsByName("second")[0].disabled = true; //الاسم الثاني

            this.inputFormField.third = this.user.last_name;
            document.getElementsByName("third")[0].disabled = true; //الاسم الثالث

            var RequestType = [
                ["ورشة"],
                ["محاضرة"],
                ["ندوة"],
                ["مؤتمر"]
            ];
            var ProgrammingName = [
                "workshop",
                "lecture",
                "Nadwa",
                "conference",
                "Posttype",
                "Searchtitle",
            ];

            //to clear the values of the fields of group 1 and 3
            for(var i = 0; i < ThirdGroup.length; i++){
                this.inputFormField[ThirdGroup[i]] = null;
            }
            for(var i = 0; i < FirstGroup.length; i++){
                this.inputFormField[FirstGroup[i]] = null;
            }

            //to block the fields of group 2 and hide the fields of group 1 and 3
            document.getElementById("33514_group").style.display = "block";

            document.getElementById("33513_group").style.display = "none";
            document.getElementById("33516_group").style.display = "none";

            if(event === "ورشة عمل"){
                //to filer the selctor with the values of the request type
                this.group_of_form[2].fields[11].properties[0].values = RequestType[0];
                this.inputFormField["type"] = null;
                //to clear the values of the fields of group 2 if the user change the RequestType value
                for(var i = 0; i < ProgrammingName.length; i++){
                    if(i != 0){
                        this.inputFormField[ProgrammingName[i]] = null;
                    }
                }
            }else if(event === "محاضرة"){
                //to filer the selctor with the values of the request type
                this.group_of_form[2].fields[11].properties[0].values = RequestType[1];
                this.inputFormField["type"] = null;
                //to clear the values of the fields of group 2 if the user change the RequestType value
                for(var i = 0; i < ProgrammingName.length; i++){
                    if(i != 1){
                        this.inputFormField[ProgrammingName[i]] = null;
                    }
                }
            }else if(event === "ندوة"){
                //to filer the selctor with the values of the request type
                this.group_of_form[2].fields[11].properties[0].values = RequestType[2];
                this.inputFormField["type"] = null;
                //to clear the values of the fields of group 2 if the user change the RequestType value
                for(var i = 0; i < ProgrammingName.length; i++){
                    if(i != 2){
                        this.inputFormField[ProgrammingName[i]] = null;
                    }
                }
            }else if(event === "مؤتمر"){
                //to clear the values of the fields of group 2 if the user change the RequestType value
                for(var i = 0; i < ProgrammingName.length; i++){
                    if(i != 3 || i != 4 || i != 5){
                        this.inputFormField[ProgrammingName[i]] = null;
                    }
                }
                //to filer the selctor with the values of the request type
                this.group_of_form[2].fields[11].properties[0].values = RequestType[3];
                this.inputFormField["type"] = null;
            }

        }else if(event == "تدريب صيفي"){
            //to clear the values of the fields of group 1 and 2
            for(var i = 0; i < FirstGroup.length; i++){
                this.inputFormField[FirstGroup[i]] = null;
            }

            for(var i = 0; i < SecondGroup.length; i++){
                this.inputFormField[SecondGroup[i]] = null;
            }

            //to block the fields of group 3 and hide the fields of group 1 and 2
            document.getElementById("33516_group").style.display = "block";

            document.getElementById("33513_group").style.display = "none";
            document.getElementById("33514_group").style.display = "none";
        }else{
            //to clear the values of the fields of group 1, 2 and 3
            for(var i = 0; i < FirstGroup.length; i++){
                this.inputFormField[FirstGroup[i]] = null;
            }

            for(var i = 0; i < SecondGroup.length; i++){
                this.inputFormField[SecondGroup[i]] = null;
            }

            for(var i = 0; i < ThirdGroup.length; i++){
                this.inputFormField[ThirdGroup[i]] = null;
            }

            //to hide the fields of group 1, 2 and 3
            document.getElementById("33513_group").style.display = "none";
            document.getElementById("33514_group").style.display = "none";
            document.getElementById("33516_group").style.display = "none";
        }
    },

    ThirdHide(event){
        var CellsID = [
            "53634",//عنوان الورشة
            "53633",//عنوان المحاضرة
            "53636",//عنوان الندوة
            "53637",//عنوان المؤتمر
        ],
        CellsNames = [
            "workshop",
            "lecture",
            "Nadwa",
            "conference",
        ],
        
        CellsID2 = "53638",//نوع المشاركة
        CellsNames2 = "Posttype";

        if(event == "ورشة"){
            for(var i = 0; i < CellsID.length; i++){
                if(i == 0){
                    document.getElementById(CellsID[i]).style.display = "block";
                    this.inputFormField[CellsNames[i]] = null;
                }else{
                    document.getElementById(CellsID2).style.display = "none";//نوع المشاركة
                    this.inputFormField[CellsNames2] = null;//نوع المشاركة
                    
                    document.getElementById(CellsID[i]).style.display = "none";
                    this.inputFormField[CellsNames[i]] = null;
                }
            }
        }else if(event == "محاضرة"){
            for(var i = 0; i < CellsID.length; i++){
                if(i == 1){
                    document.getElementById(CellsID[i]).style.display = "block";
                    this.inputFormField[CellsNames[i]] = null;
                }else{
                    document.getElementById(CellsID2).style.display = "none";//نوع المشاركة
                    this.inputFormField[CellsNames2] = null;//نوع المشاركة
                    
                    document.getElementById(CellsID[i]).style.display = "none";
                    this.inputFormField[CellsNames[i]] = null;
                }
            }
        }else if(event == "ندوة"){
            for(var i = 0; i < CellsID.length; i++){
                if(i == 2){
                    document.getElementById(CellsID[i]).style.display = "block";
                    this.inputFormField[CellsNames[i]] = null;
                }else{
                    document.getElementById(CellsID2).style.display = "none";//نوع المشاركة
                    this.inputFormField[CellsNames2] = null;//نوع المشاركة
                    
                    document.getElementById(CellsID[i]).style.display = "none";
                    this.inputFormField[CellsNames[i]] = null;
                }
            }
        }else if(event == "مؤتمر"){
            for(var i = 0; i < CellsID.length; i++){
                if(i == 3){
                    document.getElementById(CellsID[i]).style.display = "block";
                    this.inputFormField[CellsNames[i]] = null;

                    document.getElementById(CellsID2).style.display = "block";//نوع المشاركة
                    this.inputFormField[CellsNames2] = null;//نوع المشاركة
                }else{
                    document.getElementById(CellsID2).style.display = "none";//نوع المشاركة
                    this.inputFormField[CellsNames2] = null;//نوع المشاركة

                    document.getElementById(CellsID[i]).style.display = "none";
                    this.inputFormField[CellsNames[i]] = null;
                }
            }
        }else{
            document.getElementById(CellsID2).style.display = "none";//نوع المشاركة
            this.inputFormField[CellsNames2] = null;//نوع المشاركة

            for(var i = 0; i < CellsID.length; i++){
                document.getElementById(CellsID[i]).style.display = "none";
                this.inputFormField[CellsNames[i]] = null;
            }
        }
        
    },

    FourthHide(event){
        if(event == "ببحث"){
            document.getElementById("53640").style.display = "block";//عنوان البحث
            this.inputFormField["Searchtitle"] = null;//عنوان البحث
        }else{
            document.getElementById("53640").style.display = "none";//عنوان البحث
            this.inputFormField["Searchtitle"] = null;//عنوان البحث
        }
    },

    FifthHide(event){
        var CellsID = [
            "52539",//الجامعة
            "52543",//الكلية
            "53744",//القسم
            "52598",//المرحلة
        ],
        CellsNames = [
            "university",//الجامعة
            "college",//الكلية
            "section",//القسم
            "stage",//المرحلة
        ];

        if(event == "طلبة الجامعات"){
            document.getElementById("53631").style.display = "none";//المعهد
            this.inputFormField["Institute"] = null;//المعهد

            for(var i = 0; i < CellsID.length; i++){
                document.getElementById(CellsID[i]).style.display = "block";
                this.inputFormField[CellsNames[i]] = null;
            }

        }else if(event == "طلبة المعاهد"){

            document.getElementById("53631").style.display = "block";
            this.inputFormField["Institute"] = null;

            for(var i = 2; i < CellsID.length; i++){
                document.getElementById(CellsID[i]).style.display = "block";
                this.inputFormField[CellsNames[i]] = null;
            }
            
            for(var i = 0; i < 2; i++){
                document.getElementById(CellsID[i]).style.display = "none";
                this.inputFormField[CellsNames[i]] = null;
            }

        }else{
            for(var i = 0; i < CellsID.length; i++){
                document.getElementById(CellsID[i]).style.display = "none";
                this.inputFormField[CellsNames[i]] = null;
            }

            document.getElementById("53631").style.display = "none";
            this.inputFormField["Institute"] = null;
        }
    }
}