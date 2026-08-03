{
    First_Hide(event){
        this.inputFormField["owners"] = null;
        if(event == "شريك في العقار"){
            document.getElementById("71696").style.display = "block";
        }else{
            document.getElementById("71696").style.display = "none";
        }
    },

    Second_Hide(event){
        this.inputFormField["housedetails"] = null;//جدول السكني
        this.inputFormField["commercialdetails"] = null;//جدول التجاري
        if(event == "سكني"){
            this.group_of_form[0].fields[20].properties[0].values = ["دار سكني",];
            document.getElementById("86204").style.display = "block";//جدول السكني
            document.getElementById("86206").style.display = "none";//جدول التجاري
        }else if(event == "تجاري"){
            this.group_of_form[0].fields[20].properties[0].values = [
                "محلات تجارية",
                "بناية تجارية",
                "فندق",
                "مجمع سكني",
                "ابنية حكومية",
            ];
            document.getElementById("86204").style.display = "none";//جدول السكني
            document.getElementById("86206").style.display = "block";//جدول التجاري
        }else if(event == "صناعي"){
            this.group_of_form[0].fields[20].properties[0].values = ["ورشة تصليح", "مصنع"];
            document.getElementById("86204").style.display = "none";//جدول السكني
            document.getElementById("86206").style.display = "none";//جدول التجاري
        }else{
            this.group_of_form[0].fields[20].properties[0].values = [];
            document.getElementById("86204").style.display = "none";//جدول السكني
            document.getElementById("86206").style.display = "none";//جدول التجاري
        }
    },

    First_Filter(event){
        var Showed_Values = [
            ["مركز قضاء الديوانية", "الدغارة", "السنية", "الشافعية",],//نواحي الديوانية
            ["مركز قضاء عفك", "آل بدير", "سومر", "نفر",],//نواحي عفك
            ["مركز قضاء الشامية", "غماس", "الصلاحية",],//نواحي الشامية
            ["مركز قضاء المهناوية",],//نواحي المهناوية
            ["السدير", "مركز قضاء الحمزة الشرقي"],//نواحي الحمزة الشرقي
        ],
        Selected_Values = [
            "الديوانية", "عفك", "الشامية", "المهناوية", "الحمزة الشرقي",
        ];

        for(var i = 0; i < Selected_Values.length; i++){
            if(Selected_Values[i] == event){
                this.group_of_form[0].fields[8].properties[0].values = Showed_Values[i];
                break;
            }else{
                this.group_of_form[0].fields[8].properties[0].values = [];
            }
        }
    },
}