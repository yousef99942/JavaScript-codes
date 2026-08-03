    {
        FirstHide(event){
            var choices = [
                "فئة المشمولين بالرعاية الاجتماعية",
                "عوائل الشهداء",
                "اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق",
                "شريحة الأطباء الاختصاص",
                "الموظفين الذين توفوا خلال العمل او من جرائه",
                "المهجرين والمهاجرين بسبب اضطهاد النظام السابق",
                "السجناء والمعتقلين السياسيين",
                "اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019",
                "حملة الشهادات العليا ( العاملين في دوائر الدولة )",
                "الصحفيين",
                "المتقاعدين",
                "مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية",
                "عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة",
                "المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد رقم كتاب لجنة التعويض",
                "المشمولين بالمادة 140 من الدستور",
                "المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة",
                "الرياضيين المتمزين واصحاب الانجازات الرياضية",
                "عوائل الشهداء السياسيين",
            ];
            var GroupsID = [
                //group Num 3
                "33783_group",//"فئة المشمولين بالرعاية الاجتماعية"
                //group Num 4
                "33883_group",//"عوائل الشهداء"
                //group Num 5
                "33884_group",//"اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق"
                //group Num 6
                "33885_group",//"شريحة الأطباء الاختصاص"
                //group Num 7
                "33886_group",//"الموظفين الذين توفوا خلال العمل او من جرائه"
                //group Num 8
                "33898_group",//"المهجرين والمهاجرين بسبب اضطهاد النظام السابق"
                //group Num 9
                "33899_group",//"السجناء والمعتقلين السياسيين"
                //group Num 10
                "33902_group",//"اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019"
                //group Num 11
                "33903_group",//"حملة الشهادات العليا ( العاملين في دوائر الدولة )"
                //group Num 12
                "33904_group",//"الصحفيين"
                //group Num 13
                "33906_group",//"المتقاعدين"
                //group Num 14
                "33907_group",//"مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية"
                //group Num 15
                "33908_group",//"عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"
                //group Num 16
                "33909_group",//"المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد رقم كتاب لجنة التعويض"
                //group Num 17
                "33910_group",//"المشمولين بالمادة 140 من الدستور"
                //group Num 18
                "33912_group",//"المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة"
                //group Num 19
                "33913_group",//"الرياضيين المتمزين واصحاب الانجازات الرياضية"
                //group Num 20
                "33916_group",//"عوائل الشهداء السياسيين"
            ];

            var GroupOne = [
                //"فئة المشمولين بالرعاية الاجتماعية"
                "booknumber", "bookdate",
                //"عوائل الشهداء"
                "selectorone", "numberofcertificate", "dateone", "datefour",
                "relventsel", "conditionf", "commitment",
                //"اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق"
                "gfive", "gfivedate", "merraied",
                //"شريحة الأطباء الاختصاص"
                "gsixnumber", "gsixdate",
                //"الموظفين الذين توفوا خلال العمل او من جرائه"
                "seventhnumber", "sventhdate", "sventhnumbertwo", "datetwoseventhg", "sventhgselector",
                //"المهجرين والمهاجرين بسبب اضطهاد النظام السابق"
                "depend", "marieed",
                //"السجناء والمعتقلين السياسيين"
                "dependtwo", "timefrom", "dateto", "prisoner",
                //"اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019"
                "tenthnumber", "tenthdate", "Disabilityrate", "ageofrequester",
                //"حملة الشهادات العليا ( العاملين في دوائر الدولة )"
                "eleventhnumber", "eleventhdate", "Authentication", "eleventhdatetwo",
                "eleventhdatethree", "gradation", "marriage",
                //"الصحفيين"
                "twelvenumber", "twelvedate", "advowson", "advowsondate", "location", "ordernumber", "orderdate",
                //"المتقاعدين"
                "commencement", "commencementdate", "Retirement", "Retirementdate", "deepend",
                //"مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية"
                "Woundedcategory", "Disability", "booknumberr", "boikdate", "contract",
                //"عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"
                "certificatenumber", "certificatedate", "Dateofmartyrdom", "relevant",
                "selectorcondition", "condition",
                //"المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد رقم كتاب لجنة التعويض"
                "Committeenumber", "Committeedate", "locationcondition",
                //"المشمولين بالمادة 140 من الدستور"
                "seventenbooknumber", "seventeenbookdate",
                //"المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة"
                "job", "eighteenbooknumber", "eighteenbookdate", "conditioneighteen",
                //"الرياضيين المتمزين واصحاب الانجازات الرياضية"
                "nineteenbooknumber", "nineteendate", "marrriage", "medals", "type", "medal",
                //"عوائل الشهداء السياسيين"
                "conndition", "lastcondition",
            ];

            for(var i = 0; i < choices.length; i++){
                if(event == choices[i]){
                    document.getElementById(GroupsID[i]).style.display = "block";
                }else{
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < GroupOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
            }
        },

        SecondHide(event){
            var IDs = [
                "65372",
                "65373",
            ],
            ProgNames = [
                "selecthree",
                "selecff",
            ];

            if(event == "متزوج" ||
                event == "ارمل" ||
                event == "مفقود"
            ){
                for(var i = 0; i < IDs.length; i++){
                    document.getElementById(IDs[i]).style.display = "block";
                    this.inputFormField[ProgNames[i]] = null;
                }
            }else if (event == "مطلق"){
                document.getElementById(IDs[1]).style.display = "block";
                this.inputFormField[ProgNames[1]] = null;

                document.getElementById(IDs[0]).style.display = "none";
                this.inputFormField[ProgNames[0]] = null;
            }else{
                for(var i = 0; i < IDs.length; i++){
                    document.getElementById(IDs[i]).style.display = "none";
                    this.inputFormField[ProgNames[i]] = null;
                }  
            }
        },

        //"عوائل الشهداء"
        ThirdHide(event){
            if(event == "كتاب"){
                //مال الكتاب
                document.getElementById("66116").style.display = "block";
                this.inputFormField["numberorid"] = null;
                document.getElementById("66117").style.display = "block";
                this.inputFormField["datetwo"] = null;

                //مال الهوية
                document.getElementById("66426").style.display = "none";
                this.inputFormField["idcardMartyrs"] = null;

            }else if(event == "هوية مؤسسة الشهداء"){
                //مال الكتاب
                document.getElementById("66116").style.display = "none";
                this.inputFormField["numberorid"] = null;
                document.getElementById("66117").style.display = "none";
                this.inputFormField["datetwo"] = null;

                //مال الهوية
                document.getElementById("66426").style.display = "block";
                this.inputFormField["idcardMartyrs"] = null;
            }else{
                //مال الكتاب
                document.getElementById("66116").style.display = "none";
                this.inputFormField["numberorid"] = null;
                document.getElementById("66117").style.display = "none";
                this.inputFormField["datetwo"] = null;

                //مال الهوية
                document.getElementById("66426").style.display = "none";
                this.inputFormField["idcardMartyrs"] = null;
            }
        },

        //"المهجرين والمهاجرين بسبب اضطهاد النظام السابق"
        FourthHide(event){
            if(event == "كتاب"){
                //مال الكتاب
                document.getElementById("66199").style.display = "block";
                this.inputFormField["eightnumber"] = null;
                document.getElementById("66200").style.display = "block";
                this.inputFormField["eigthdate"] = null;

                //مال الهوية
                document.getElementById("66197").style.display = "none";
                this.inputFormField["eightgnumber"] = null;

            }else if(event == "هوية وزارة الهجرة والمهجرين"){
                //مال الكتاب
                document.getElementById("66199").style.display = "none";
                this.inputFormField["eightnumber"] = null;
                document.getElementById("66200").style.display = "none";
                this.inputFormField["eigthdate"] = null;

                //مال الهوية
                document.getElementById("66197").style.display = "block";
                this.inputFormField["eightgnumber"] = null;
            }else{
                //مال الكتاب
                document.getElementById("66199").style.display = "none";
                this.inputFormField["eightnumber"] = null;
                document.getElementById("66200").style.display = "none";
                this.inputFormField["eigthdate"] = null;

                //مال الهوية
                document.getElementById("66197").style.display = "none";
                this.inputFormField["eightgnumber"] = null;
            }
        },

        //"السجناء والمعتقلين السياسيين"
        FifthHide (event){
            if(event == "كتاب"){
                //مال الكتاب
                document.getElementById("66203").style.display = "block";
                this.inputFormField["ninenumber"] = null;
                document.getElementById("66204").style.display = "block";
                this.inputFormField["date"] = null;

                //مال الهوية
                document.getElementById("66205").style.display = "none";
                this.inputFormField["idcarddepend"] = null;

            }else if(event == "هوية مؤسسة السجناء السياسيين"){
                //مال الكتاب
                document.getElementById("66203").style.display = "none";
                this.inputFormField["ninenumber"] = null;
                document.getElementById("66204").style.display = "none";
                this.inputFormField["date"] = null;

                //مال الهوية
                document.getElementById("66205").style.display = "block";
                this.inputFormField["idcarddepend"] = null;
            }else{
                //مال الكتاب
                document.getElementById("66203").style.display = "none";
                this.inputFormField["ninenumber"] = null;
                document.getElementById("66204").style.display = "none";
                this.inputFormField["date"] = null;

                //مال الهوية
                document.getElementById("66205").style.display = "none";
                this.inputFormField["idcarddepend"] = null;
            }
        },

        //"عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"
        SixthHide(event){
            if(event == "كتاب"){
                //مال الكتاب
                document.getElementById("66321").style.display = "block";
                this.inputFormField["booknm"] = null;
                document.getElementById("66322").style.display = "block";
                this.inputFormField["bookkdate"] = null;

                //مال الهوية
                document.getElementById("66323").style.display = "none";
                this.inputFormField["idnumber"] = null;

            }else if(event == "هوية مؤسسة الشهداء"){
                //مال الكتاب
                document.getElementById("66321").style.display = "none";
                this.inputFormField["booknm"] = null;
                document.getElementById("66322").style.display = "none";
                this.inputFormField["bookkdate"] = null;

                //مال الهوية
                document.getElementById("66323").style.display = "block";
                this.inputFormField["idnumber"] = null;
            }else{
                //مال الكتاب
                document.getElementById("66321").style.display = "none";
                this.inputFormField["booknm"] = null;
                document.getElementById("66322").style.display = "none";
                this.inputFormField["bookkdate"] = null;

                //مال الهوية
                document.getElementById("66323").style.display = "none";
                this.inputFormField["idnumber"] = null;
            }
        },

        //"عوائل الشهداء السياسيين"
        SeventhHide(event){
            if(event == "كتاب"){
                //مال الكتاب
                document.getElementById("66389").style.display = "block";
                this.inputFormField["twentybooknumber"] = null;
                document.getElementById("66390").style.display = "block";
                this.inputFormField["twentybookdate"] = null;

                //مال الهوية
                document.getElementById("66391").style.display = "none";
                this.inputFormField["cardidd"] = null;
            }else if(event == "هوية مؤسسة الشهداء"){
                //مال الكتاب
                document.getElementById("66389").style.display = "none";
                this.inputFormField["twentybooknumber"] = null;
                document.getElementById("66390").style.display = "none";
                this.inputFormField["twentybookdate"] = null;

                //مال الهوية
                document.getElementById("66391").style.display = "block";
                this.inputFormField["cardidd"] = null;
            }else{
                //مال الكتاب
                document.getElementById("66389").style.display = "none";
                this.inputFormField["twentybooknumber"] = null;
                document.getElementById("66390").style.display = "none";
                this.inputFormField["twentybookdate"] = null;

                //مال الهوية
                document.getElementById("66391").style.display = "none";
                this.inputFormField["cardidd"] = null;
            }
        },

        //عدد الاولاد
        EighthHide(event){
            var CellsID = [
                "65374",
                "65375",
            ],
            CellsProgs = [
                "numthree",
                "numfour",
            ];

            if(event == "نعم"){
                for(var i = 0; i < CellsID.length; i++){
                    document.getElementById(CellsID[i]).style.display = "block";
                    this.inputFormField[CellsProgs[i]] = null;
                }
            }else{
                for(var i = 0; i < CellsID.length; i++){
                    document.getElementById(CellsID[i]).style.display = "none";
                    this.inputFormField[CellsProgs[i]] = null;
                }
            }
        }
    }