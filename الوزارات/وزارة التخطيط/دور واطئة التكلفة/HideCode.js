{
    hide(event){
        if (event == "نعم"){
            document.getElementById("52101").style.display = "block";
        }else{
            document.getElementById("52101").style.display = "none";
        }
    },

    firstNameParent(event) {
        this.inputFormField["FirstNameA"] = event;
    },
    
    secondNameParent(event) {
        this.inputFormField["SecondNameA"] = event;
    },
    
    thirdNameParent(event) {
        this.inputFormField["ThirdNameA"] = event;
    },
    
    fourtNameParent(event) {
        this.inputFormField["FourthName"] = event;
    },
    
    MothersnameParent(event) {
        this.inputFormField["Mothersname"] = event;
    },

    MothersfathersnameParent(event) {
        this.inputFormField["Motherfathername"] = event;
    },
    
    maternalgrandfathernameParent(event) {
        this.inputFormField["Maternalgrandsfathername"] = event;
    },

    genderAChanged(event){
        this.inputFormField["genderA"] = event;
    },

    governorateChanged(event){
        this.inputFormField["Placeofbirth"] = event;
    },

    birthdateChanged(event){
        this.inputFormField["ageA"] = event;
    },

    RelationChanged(event){
        this.inputFormField["RelationA"] = event;
    },

    StatusChanged(event){
        this.inputFormField["StatusA"] = event;
    },
    
    AcademicChanged(event){
        this.inputFormField["AcademicA"] = event;
    }, 
    
    JobChanged(event){
        this.inputFormField["JobA"] = event;
    },

    OccupationChanged(event){
        this.inputFormField["OccupationA"] = event;
    },
    
    SalaryChanged(event){
        this.inputFormField["SalaryA"] = event;
    }, 
    
    DisabilityChanged(event){
        this.inputFormField["DisabilityA"] = event;
    }, 

    environment(event){
        if (event == "حضر"){
            document.getElementById("52065").style.display = "block";
            document.getElementById("52066").style.display = "block";
            document.getElementById("52067").style.display = "block";
            document.getElementById("52068").style.display = "block";
            document.getElementById("52070").style.display = "none";
            document.getElementById("52069").style.display = "none";
        }else if (event == "ريف"){
            document.getElementById("52065").style.display = "none";
            document.getElementById("52066").style.display = "none";
            document.getElementById("52067").style.display = "none";
            document.getElementById("52068").style.display = "none";
            document.getElementById("52070").style.display = "block";
            document.getElementById("52069").style.display = "block";
        }else{
            document.getElementById("52065").style.display = "none";
            document.getElementById("52066").style.display = "none";
            document.getElementById("52067").style.display = "none";
            document.getElementById("52068").style.display = "none";
            document.getElementById("52070").style.display = "none";
            document.getElementById("52069").style.display = "none";
        }
    },

    TheHide(event) {
        const groups = 
        [
            "33718_group", "33719_group", "33720_group","33721_group","33722_group","33723_group","33724_group", "33725_group",
            "33726_group","33727_group","33728_group","33729_group","33730_group","33731_group","33732_group", "33733_group",
            "33734_group","33735_group","33736_group","33737_group"
        ];

        const suffixes = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"];

        const keys = [
            "FirstName", "SecondName", "ThirdName", "gender", "age","Relation", "Status","Academic","Job","Occupation",
            "Salary","Disability"
        ];
        
        const maxIndex = parseInt(event); // "1", or "2"

        groups.forEach((groupId, index) => {
        const display = index < maxIndex ? "block" : "none";
        document.getElementById(groupId).style.display = display;

        if (display === "none") {
            const suffix = suffixes[index];
            keys.forEach(key => {
            this.inputFormField[`${key}${suffix}`] = null;
            });
        }
        });
    },

    TheHideOne(event2){
        this.inputFormField["OccupationA"] = null;      
        if(event2 == "أخرى"){
            document.getElementById("65010").style.display = "block";
        }else{
            document.getElementById("65010").style.display = "none";
        }
    },

    TheHideTwo(event3){
        this.inputFormField["OccupationB"] = null;
        if(event3 == "أخرى"){
            document.getElementById("65072").style.display = "block";
        }else{
            document.getElementById("65072").style.display = "none";
        }
    },

    TheHideThree(event4){
        this.inputFormField["OccupationC"] = null;
        if(event4 == "أخرى"){
            document.getElementById("65079").style.display = "block";
        }else{
            document.getElementById("65079").style.display = "none";
        }
    },

    TheHideFour(event5){
        this.inputFormField["OccupationD"] = null;
        if(event5 == "أخرى"){
            document.getElementById("65083").style.display = "block";
        }else{
            document.getElementById("65083").style.display = "none";
        }
    },

    TheHideFive(event6){
        this.inputFormField["OccupationE"] = null;
        if(event6 == "أخرى"){
            document.getElementById("65087").style.display = "block";
        }else{
            document.getElementById("65087").style.display = "none";
        }
    },

    TheHideSix(event7){
        this.inputFormField["OccupationF"] = null;
        if(event7 == "أخرى"){
            document.getElementById("65096").style.display = "block";
        }else{
            document.getElementById("65096").style.display = "none";
        }
    },
    
    TheHideSeven(event8){
        this.inputFormField["OccupationG"] = null;
        if(event8 == "أخرى"){
            document.getElementById("65103").style.display = "block";
        }else{
            document.getElementById("65103").style.display = "none";   
        }
    },

    TheHideEight(event9){
        this.inputFormField["OccupationH"] = null;
        if(event9 == "أخرى"){
            document.getElementById("65109").style.display = "block";
        }else{
            document.getElementById("65109").style.display = "none";   
        }
    },

    TheHideNine(event10){
        this.inputFormField["OccupationI"] = null;
        if(event10 == "أخرى"){
            document.getElementById("65115").style.display = "block";
        }else{
            document.getElementById("65115").style.display = "none";   
        }
    },

    TheHideTen(event11){
        this.inputFormField["OccupationJ"] = null;
        if(event11 == "أخرى"){
            document.getElementById("65127").style.display = "block";
        }else{
            document.getElementById("65127").style.display = "none";   
        }
    },

    TheHideEleven(event12){
        this.inputFormField["OccupationK"] = null;
        if(event12 == "أخرى"){
            document.getElementById("65091").style.display = "block";
        }else{
            document.getElementById("65091").style.display = "none";
        }
    },
    
    TheHideTwelve(event13){
        this.inputFormField["OccupationL"] = null;
        if(Twelve=="أخرى"){
            document.getElementById("65102").style.display = "block";
        }else{
            document.getElementById("65102").style.display = "none";   
        }
    },

    TheHideThirteen(event14){
        this.inputFormField["OccupationM"] = null;
        if(event14 == "أخرى"){
            document.getElementById("65122").style.display = "block";
        }else{
            document.getElementById("65122").style.display = "none";
        }
    },

    TheHideFourteen(event15){
        this.inputFormField["OccupationN"] = null;
        if(Fourteen=="أخرى"){
            document.getElementById("65138").style.display = "block";
        }else{
            document.getElementById("65138").style.display = "none";   
        }
    },
    
    TheHideFifteen(event16){
        this.inputFormField["OccupationO"] = null;
        if(event16 == "أخرى"){
            document.getElementById("65152").style.display = "block";
        }else{
            document.getElementById("65152").style.display = "none";
        }
    },
    
    TheHideSixteen(event17){
        this.inputFormField["OccupationP"] = null;
        if(event17 == "أخرى"){
            document.getElementById("65168").style.display = "block";
        }else{
            document.getElementById("65168").style.display = "none";
        }
    },
    
    TheHideSeventeen(event18){
        this.inputFormField["OccupationQ"] = null;
        if(event18 == "أخرى"){
            document.getElementById("65177").style.display = "block";
        }else{
            document.getElementById("65177").style.display = "none";
        }
    },
    
    TheHideEighteen(event19){
        this.inputFormField["OccupationR"] = null;
        if(event19 == "أخرى"){
            document.getElementById("65182").style.display = "block";
        }else{
            document.getElementById("65182").style.display = "none";
        }
    },

    TheHideNineteen(event20){
        this.inputFormField["OccupationS"] = null;
        if(event20 == "أخرى"){
            document.getElementById("65186").style.display = "block";
        }else{
            document.getElementById("65186").style.display = "none";
        }
    },
    
    TheHideTwenty(event21){
        this.inputFormField["OccupationT"] = null;
        if(event21 == "أخرى"){
            document.getElementById("65172").style.display = "block";
        }else{
            document.getElementById("65172").style.display = "none";
        }
    },


    TradeOffCalculate(event){
        var TradeValue = 0;
        event = 0;
        if(this.inputFormField["Status"] == "متزوج"){
            event += 5;
        }else if(this.inputFormField.Status == "مطلق" || this.inputFormField.Status == "ارمل"){
            event += 3;
        }else{
            event += 0;
        }

        console.log(event);
        this.inputFormField.TradeOffValue = event;
    },
    
    CalculatePoints(){
        var points = 0;
        if(this.inputFormField["StatusA"] == "متزوج"){
            points += 5;
        }else if(this.inputFormField.StatusA == "مطلق" || this.inputFormField.StatusA == "ارمل"){
            points += 3;
        }else{
            points += 0;
        }
        this.inputFormField["ThePoints"] = points;
    }
}