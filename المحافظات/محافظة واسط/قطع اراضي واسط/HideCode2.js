{
    FirstHide(event){
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

        //"فئة المشمولين بالرعاية الاجتماعية"
        var GroupOne = ["booknumber", "bookdate"];
        //"عوائل الشهداء"
        var GroupTwo = ["selectorone", "numberofcertificate", "dateone", "datefour", "relventsel", "conditionf", "commitment"];
        //"اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق"
        var GroupThree = ["gfive", "gfivedate", "merraied"];
        //"شريحة الأطباء الاختصاص"
        var GroupFour = ["gsixnumber", "gsixdate"];
        //"الموظفين الذين توفوا خلال العمل او من جرائه"
        var GroupFive = ["seventhnumber", "sventhdate", "sventhnumbertwo", "datetwoseventhg", "sventhgselector"];
        //"المهجرين والمهاجرين بسبب اضطهاد النظام السابق"
        var GroupSix = ["depend", "marieed"];
        //"السجناء والمعتقلين السياسيين"
        var GroupSeven = ["dependtwo", "timefrom", "dateto", "prisoner"];
        //"اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019"
        var GroupEight = ["tenthnumber", "tenthdate", "Disabilityrate", "ageofrequester"];
        //"حملة الشهادات العليا ( العاملين في دوائر الدولة )"
        var GroupNine = ["eleventhnumber", "eleventhdate", "Authentication", "eleventhdatetwo", "eleventhdatethree", "gradation", "marriage"];
        //"الصحفيين"
        var GroupTen = ["twelvenumber", "twelvedate", "advowson", "advowsondate", "location", "ordernumber", "orderdate"];
        //"المتقاعدين"
        var GroupEleven = ["commencement", "commencementdate", "Retirement", "Retirementdate", "deepend"];
        //"مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية"
        var GroupTwelve = ["Woundedcategory", "Disability", "booknumberr", "boikdate", "contract"];
        //"عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"
        var GroupThriteen = ["certificatenumber", "certificatedate", "Dateofmartyrdom", "relevant", "selectorcondition", "condition"];
        //"المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد رقم كتاب لجنة التعويض"
        var GroupFourteen = ["Committeenumber", "Committeedate", "locationcondition"];
        //"المشمولين بالمادة 140 من الدستور"
        var GroupFifthteen = ["seventenbooknumber", "seventeenbookdate"];
        //"المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة"
        var GroupSixTeen = ["job", "eighteenbooknumber", "eighteenbookdate", "conditioneighteen"];
        //"الرياضيين المتمزين واصحاب الانجازات الرياضية"
        var GroupSeventeen = ["nineteenbooknumber", "nineteendate", "marrriage", "medals", "type", "medal"];
        //"عوائل الشهداء السياسيين"
        var GroupEighteen = ["conndition", "lastcondition"];
        
        //GroupOne && GroupFour && GroupSix && GroupFifthteen && GroupEighteen
        var ProgsCountOne = [0, 1],
        //GroupTwo && GroupNine && GroupTen
        ProgsCountTwo = [0, 1, 2, 3, 4, 5, 6],
        //GroupThree && GroupFourteen
        ProgsCountThree = [0, 1, 2],
        //GroupFive && GroupEleven && GroupTwelve
        ProgsCountFour = [0, 1, 2, 3, 4],
        //GroupSeven && GroupEight && GroupSixTeen
        ProgsCountfive = [0, 1, 2, 3],
        //GroupThriteen && GroupSeventeen
        ProgsCountSix = [0, 1, 2, 3, 4, 5];

        if(event == "فئة المشمولين بالرعاية الاجتماعية"){
            document.getElementById(GroupsID[0]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 0){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "عوائل الشهداء"){
            document.getElementById(GroupsID[1]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 1){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "اعضاء النقابات ( المحامين ، المعلمين ، المهندسين ، الفنانين ... الخ ) التي لها نظام داخلي مصدق"){
            document.getElementById(GroupsID[2]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 2){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "شريحة الأطباء الاختصاص"){
            document.getElementById(GroupsID[3]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 3){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "الموظفين الذين توفوا خلال العمل او من جرائه"){
            document.getElementById(GroupsID[4]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 4){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "المهجرين والمهاجرين بسبب اضطهاد النظام السابق"){
            document.getElementById(GroupsID[5]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 5){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "السجناء والمعتقلين السياسيين"){
            document.getElementById(GroupsID[6]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 6){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "اصحاب الاحتياجات الخاصة باحكام قانون (70) لسنة 2019"){
            document.getElementById(GroupsID[7]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 7){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "حملة الشهادات العليا ( العاملين في دوائر الدولة )"){
            document.getElementById(GroupsID[8]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 8){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "الصحفيين"){
            document.getElementById(GroupsID[9]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 9){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "المتقاعدين"){
            document.getElementById(GroupsID[10]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 10){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "مصابي العمليات الارهابية والاخطاء العسكرية والاعمال الارهابية"){
            document.getElementById(GroupsID[11]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 11){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "عوائل شهداء العمليات الارهابية والاخطاء العسكرية والاعمال المريبة"){
            document.getElementById(GroupsID[12]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 12){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "المتضررين الذين فقدوا جزء من اجسادهم جراء ممارسات النظام البائد"){
            document.getElementById(GroupsID[13]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 13){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "المشمولين بالمادة 140 من الدستور"){
            document.getElementById(GroupsID[14]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 14){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "المرأة بلا معيل وتشمل ( الارامل ، المطلقات ، زوجات المفقودين ، غير المتزوجة البالغة عمرها (35) سنة"){
            document.getElementById(GroupsID[15]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 15){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "الرياضيين المتمزين واصحاب الانجازات الرياضية"){
            document.getElementById(GroupsID[16]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 16){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else if(event == "عوائل الشهداء السياسيين"){
            document.getElementById(GroupsID[17]).style.display = "block";

            for(var i = 0; i < GroupsID.length; i++){
                if(i != 17){
                    document.getElementById(GroupsID[i]).style.display = "none";
                }
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
        }else{
            for(var i = 0; i < GroupsID.length; i++){
                document.getElementById(GroupsID[i]).style.display = "none";
            }

            for(var i = 0; i < ProgsCountOne.length; i++){
                this.inputFormField[GroupOne[i]] = null;
                this.inputFormField[GroupFour[i]] = null;
                this.inputFormField[GroupSix[i]] = null;
                this.inputFormField[GroupFifthteen[i]] = null;
                this.inputFormField[GroupEighteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountTwo.length; i++){
                this.inputFormField[GroupTwo[i]] = null;
                this.inputFormField[GroupNine[i]] = null;
                this.inputFormField[GroupTen[i]] = null;
            }

            for(var i = 0; i < ProgsCountThree.length; i++){
                this.inputFormField[GroupThree[i]] = null;
                this.inputFormField[GroupFourteen[i]] = null;
            }

            for(var i = 0; i < ProgsCountFour.length; i++){
                this.inputFormField[GroupFive[i]] = null;
                this.inputFormField[GroupEleven[i]] = null;
                this.inputFormField[GroupTwelve[i]] = null;
            }

            for(var i = 0; i < ProgsCountfive.length; i++){
                this.inputFormField[GroupSeven[i]] = null;
                this.inputFormField[GroupEight[i]] = null;
                this.inputFormField[GroupSixTeen[i]] = null;
            }

            for(var i = 0; i < ProgsCountSix.length; i++){
                this.inputFormField[GroupThriteen[i]] = null;
                this.inputFormField[GroupSeventeen[i]] = null;
            }
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