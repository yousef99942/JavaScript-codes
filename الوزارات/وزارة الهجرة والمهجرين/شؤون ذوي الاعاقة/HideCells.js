{
    First_Function(event, Fields_ID, Fields_prog, Condition_Value){
        if(event == Condition_Value){
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "block";
                this.inputFormField[Fields_prog[i]] = null;
            }
        }else{
            for(var i = 0; i < Fields_ID.length; i++){
                document.getElementById(Fields_ID[i]).style.display = "none";
                this.inputFormField[Fields_prog[i]] = null;
            }
        }
    },

    Second_Function(event, Field_ID, Field_prog, Condition_Value){
        this.inputFormField[Field_prog] = null;
        if(event == Condition_Value){
            document.getElementById(Field_ID).style.display = "block";
        }else{
            document.getElementById(Field_ID).style.display = "none";
        }
    },

    FirstHide(event){
        var Fields_ID = ["34748", "53586"],
        Fields_prog = ["dateboofg", "data"];

        this.First_Function(event, Fields_ID, Fields_prog, "متابعة كتاب ( اذكر رقم وتاريخ الكتاب )");
    },

    SecondHide(event){
        var CellsID = ["66817", "66818", "50213",],
        CellsProgs = ["DisabilityType", "DisabiltyReason", "namerrrrrrrr",];

        this.First_Function(event, CellsID, CellsProgs, "نعم");
    },

    ThirdHide(event){
        this.Second_Function(event, "66819", "IDProcessNumber", "نعم");
    },

    FourthHide(event){
        this.Second_Function(event, "66821", "DisibiltyChildrenNum", "نعم");
    },

    FifthHide(event) {

        var GroupsID = [
            "33984_group", //معلومات الفرد الاول
            "33985_group", //معلومات الفرد الثاني
            "33986_group", //معلومات الفرد الثالث
            "33987_group", //معلومات الفرد الرابع
            "33988_group", //معلومات الفرد الخامس
            "33989_group", //معلومات الفرد السادس
            "33990_group", //معلومات الفرد السابع
            "33991_group", //معلومات الفرد الثامن
            "33992_group", //معلومات الفرد التاسع
            "33993_group", //معلومات الفرد العاشر
            "33994_group", //معلومات الفرد الحادي عشر
            "33995_group", //معلومات الفرد الثاني عشر
            "33996_group", //معلومات الفرد الثالث عشر
            "33997_group", //معلومات الفرد الرابع عشر
            "33998_group", //معلومات الفرد الخامس عشر
          ];

        var FirstProgs = [
            //معلومات الفرد الاول
            "FirstNameA", "SecondNameA", "ThirdNameA", "FourthNameA", "FamilyRelationA", "GenderA", "BirthPlaceA",
            "BirthYearA", "SchoolA", "WorkA", "DiseaseA", "DisabilityTypeA",

            //معلومات الفرد الثاني
            "FirstNameB", "SecondNameB", "ThirdNameB", "FourthNameB", "FamilyRelationB", "GenderB", "BirthPlaceB",
            "BirthYearB", "SchoolB", "WorkB", "DiseaseB", "DisabilityTypeB",

            //معلومات الفرد الثالث
            "FirstNameC", "SecondNameC", "ThirdNameC", "FourthNameC", "FamilyRelationC", "GenderC", "BirthPlaceC",
            "BirthYearC", "SchoolC", "WorkC", "DiseaseC", "DisabilityTypeC",

            //معلومات الفرد الرابع
            "FirstNameD", "SecondNameD", "ThirdNameD", "FourthNameD", "FamilyRelationD", "GenderD", "BirthPlaceD",
            "BirthYearD", "SchoolD", "WorkD", "DiseaseD", "DisabilityTypeD",

            //معلومات الفرد الخامس
            "FirstNameE", "SecondNameE", "ThirdNameE", "FourthNameE", "FamilyRelationE", "GenderE", "BirthPlaceE",
            "BirthYearE", "SchoolE", "WorkE", "DiseaseE", "DisabilityTypeE",

            //معلومات الفرد السادس
            "FirstNameF", "SecondNameF", "ThirdNameF", "FourthNameF", "FamilyRelationF", "GenderF", "BirthPlaceF",
            "BirthYearF", "SchoolF", "WorkF", "DiseaseF", "DisabilityTypeF",

            //معلومات الفرد السابع
            "FirstNameG", "SecondNameG", "ThirdNameG", "FourthNameG", "FamilyRelationG", "GenderG", "BirthPlaceG",
            "BirthYearG", "SchoolG", "WorkG", "DiseaseG", "DisabilityTypeG",

            //معلومات الفرد الثامن
            "FirstNameH", "SecondNameH", "ThirdNameH", "FourthNameH", "FamilyRelationH", "GenderH", "BirthPlaceH",
            "BirthYearH", "SchoolH", "WorkH", "DiseaseH", "DisabilityTypeH",

            //معلومات الفرد التاسع
            "FirstNameI", "SecondNameI", "ThirdNameI", "FourthNameI", "FamilyRelationI", "GenderI", "BirthPlaceI",
            "BirthYearI", "SchoolI", "WorkI", "DiseaseI", "DisabilityTypeI",

            //معلومات الفرد العاشر
            "FirstNameJ", "SecondNameJ", "ThirdNameJ", "FourthNameJ", "FamilyRelationJ", "GenderJ", "BirthPlaceJ",
            "BirthYearJ", "SchoolJ", "WorkJ", "DiseaseJ", "DisabilityTypeJ",

            //معلومات الفرد الحادي عشر
            "FirstNameK", "SecondNameK", "ThirdNameK", "FourthNameK", "FamilyRelationK", "GenderK", "BirthPlaceK",
            "BirthYearK", "SchoolK", "WorkK", "DiseaseK", "DisabilityTypeK",

            //معلومات الفرد الثاني عشر
            "FirstNameL", "SecondNameL", "ThirdNameL", "FourthNameL", "FamilyRelationL", "GenderL", "BirthPlaceL",
            "BirthYearL", "SchoolL", "WorkL", "DiseaseL", "DisabilityTypeL",

            //معلومات الفرد الثالث عشر
            "FirstNameM", "SecondNameM", "ThirdNameM", "FourthNameM", "FamilyRelationM", "GenderM", "BirthPlaceM",
            "BirthYearM", "SchoolM", "WorkM", "DiseaseM", "DisabilityTypeM",

            //معلومات الفرد الرابع عشر
            "FirstNameN", "SecondNameN", "ThirdNameN", "FourthNameN", "FamilyRelationN", "GenderN", "BirthPlaceN",
            "BirthYearN", "SchoolN", "WorkN", "DiseaseN", "DisabilityTypeN",

            //معلومات الفرد الخامس عشر
            "FirstNameO", "SecondNameO", "ThirdNameO", "FourthNameO", "FamilyRelationO", "GenderO", "BirthPlaceO",
            "BirthYearO", "SchoolO", "WorkO", "DiseaseO", "DisabilityTypeO",
        ];

        const groupCount = parseInt(event); // عدد الأفراد المطلوب عرضهم

        // عرض المجموعات المطلوبة وإخفاء الباقي
        for (let i = 0; i < GroupsID.length; i++) {
            document.getElementById(GroupsID[i]).style.display = (i < groupCount) ? "block" : "none";
        }

        // تصفير الحقول الخاصة بكل الأفراد
        for (let i = 0; i < FirstProgs.length; i++) {
            this.inputFormField[FirstProgs[i]] = null;
        }
    },

    //معلومات الفرد الاول
    FirstHideA(event){
        this.Second_Function(event, "66983", "FirstOtherA", "أخرى");
    },

    SecondHideA(event){
        this.Second_Function(event, "67233", "SecondOtherA", "اخرى");
    },

    ThirdHideA(event){
        this.Second_Function(event, "67280", "ThirdOtherA", "اخرى");
    },

    //معلومات الفرد الثاني
    FirstHideB(event){
        this.Second_Function(event, "66989", "FirstOtherB", "أخرى");
    },

    SecondHideB(event){
        this.Second_Function(event, "67234", "SecondOtherB", "اخرى");
    },

    ThirdHideB(event){
        this.Second_Function(event, "67281", "ThirdOtherB", "اخرى");
    },

    //معلومات الفرد الثالث
    FirstHideC(event){
        this.Second_Function(event, "66996", "FirstOtherC", "أخرى");
    },

    SecondHideC(event){
        this.Second_Function(event, "67235", "SecondOtherC", "اخرى");
    },

    ThirdHideC(event){
        this.Second_Function(event, "67282", "ThirdOtherC", "اخرى");
    },

    //معلومات الفرد الرابع
    FirstHideD(event){
        this.Second_Function(event, "67053", "FirstOtherD", "أخرى");
    },

    SecondHideD(event){
        this.Second_Function(event, "67236", "SecondOtherD", "اخرى");
    },

    ThirdHideD(event){
        this.Second_Function(event, "67283", "ThirdOtherD", "اخرى");
    },

    //معلومات الفرد الخامس
    FirstHideE(event){
        this.Second_Function(event, "67055", "FirstOtherE", "أخرى");
    },

    SecondHideE(event){
        this.Second_Function(event, "67237", "SecondOtherE", "اخرى");
    },

    ThirdHideE(event){
        this.Second_Function(event, "67284", "ThirdOtherE", "اخرى");
    },

    //معلومات الفرد السادس
    FirstHideF(event){
        this.Second_Function(event, "67057", "FirstOtherF", "أخرى");
    },

    SecondHideF(event){
        this.Second_Function(event, "67238", "SecondOtherF", "اخرى");
    },

    ThirdHideF(event){
        this.Second_Function(event, "67285", "ThirdOtherF", "اخرى");
    },

    //معلومات الفرد السابع
    FirstHideG(event){
        this.Second_Function(event, "67059", "FirstOtherG", "أخرى");
    },

    SecondHideG(event){
        this.Second_Function(event, "67239", "SecondOtherG", "اخرى");
    },

    ThirdHideG(event){
        this.Second_Function(event, "67286", "ThirdOtherG", "اخرى");
    },

    //معلومات الفرد الثامن
    FirstHideH(event){
        this.Second_Function(event, "67162", "FirstOtherH", "أخرى");
    },

    SecondHideH(event){
        this.Second_Function(event, "67240", "SecondOtherH", "اخرى");
    },

    ThirdHideH(event){
        this.Second_Function(event, "67287", "ThirdOtherH", "اخرى");
    },

    //معلومات الفرد التاسع
    FirstHideI(event){
        this.Second_Function(event, "67164", "FirstOtherI", "أخرى");
    },

    SecondHideI(event){
        this.Second_Function(event, "67241", "SecondOtherI", "اخرى");
    },

    ThirdHideI(event){
        this.Second_Function(event, "67288", "ThirdOtherI", "اخرى");
    },

    //معلومات الفرد العاشر
    FirstHideJ(event){
        this.Second_Function(event, "67166", "FirstOtherJ", "أخرى");
    },

    SecondHideJ(event){
        this.Second_Function(event, "67242", "SecondOtherJ", "اخرى");
    },

    ThirdHideJ(event){
        this.Second_Function(event, "67289", "ThirdOtherJ", "اخرى");
    },

    //معلومات الفرد الحادي عشر
    FirstHideK(event){
        this.Second_Function(event, "67168", "FirstOtherK", "أخرى");
    },

    SecondHideK(event){
        this.Second_Function(event, "67243", "SecondOtherK", "اخرى");
    },

    ThirdHideK(event){
        this.Second_Function(event, "67290", "ThirdOtherK", "اخرى");
    },

    //معلومات الفرد الثاني عشر
    FirstHideL(event){
        this.Second_Function(event, "67170", "FirstOtherL", "أخرى");
    },

    SecondHideL(event){
        this.Second_Function(event, "67244", "SecondOtherL", "اخرى");
    },

    ThirdHideL(event){
        this.Second_Function(event, "67291", "ThirdOtherL", "اخرى");
    },

    //معلومات الفرد الثالث عشر
    FirstHideM(event){
        this.Second_Function(event, "67172", "FirstOtherM", "أخرى");
    },

    SecondHideM(event){
        this.Second_Function(event, "67245", "SecondOtherM", "اخرى");
    },

    ThirdHideM(event){
        this.Second_Function(event, "67292", "ThirdOtherM", "اخرى");
    },

    //معلومات الفرد الرابع عشر
    FirstHideN(event){
        this.Second_Function(event, "67174", "FirstOtherN", "أخرى");
    },

    SecondHideN(event){
        this.Second_Function(event, "67246", "SecondOtherN", "اخرى");
    },

    ThirdHideN(event){
        this.Second_Function(event, "67292", "ThirdOtherN", "اخرى");
    },

    //معلومات الفرد الخامس عشر
    FirstHideO(event){
        this.Second_Function(event, "67176", "FirstOtherO", "أخرى");
    },

    SecondHideO(event){
        this.Second_Function(event, "67247", "SecondOtherO", "اخرى");
    },

    ThirdHideO(event){
        this.Second_Function(event, "67294", "ThirdOtherO", "اخرى");
    },
}