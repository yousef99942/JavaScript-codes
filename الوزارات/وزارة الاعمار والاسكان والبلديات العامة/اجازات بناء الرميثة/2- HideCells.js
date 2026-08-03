{
    First_Hide(event){
        this.inputFormField["owners"] = null;
        if(event == "شريك في العقار"){
            document.getElementById("75420").style.display = "block";
        }else{
            document.getElementById("75420").style.display = "none";
        }
    },

    Second_Hide(event){
        var Showed_Values = [
            //سكني
            ["دار سكني", ],
            //تجاري
            ["محلات تجارية", "بناية تجارية", "فندق", "مجمع سكني", "ورشة تصليح"],
            //مصنع
            ["مصنع"],
        ];

        this.inputFormField["nineteen"] = null; //الغرض من البناء
        this.inputFormField["housedetails"] = null; //تفاصيل المبنى السكني
        this.inputFormField["commercialdetails"] = null; //تفاصيل المبنى التجاري
        if(event == "سكني"){
            this.group_of_form[0].fields[19].properties[0].values = Showed_Values[0];

            document.getElementById("75459").style.display = "block"; //تفاصيل المبنى السكني
            document.getElementById("75504").style.display = "none"; //تفاصيل المبنى التجاري
        }else if(event == "تجاري"){
            this.group_of_form[0].fields[19].properties[0].values = Showed_Values[1];

            document.getElementById("75459").style.display = "none"; //تفاصيل المبنى السكني
            document.getElementById("75504").style.display = "block"; //تفاصيل المبنى التجاري
        }else if(event == "صناعي"){
            this.group_of_form[0].fields[19].properties[0].values = Showed_Values[2];
            
            document.getElementById("75459").style.display = "none"; //تفاصيل المبنى السكني
            document.getElementById("75504").style.display = "none"; //تفاصيل المبنى التجاري
        }else{
            this.group_of_form[0].fields[19].properties[0].values = [];

            document.getElementById("75459").style.display = "none"; //تفاصيل المبنى السكني
            document.getElementById("75504").style.display = "none"; //تفاصيل المبنى التجاري
        }
    },

    First_Filter(event){
        var Selected_Values = [
            "السماوة", "الرميثة", "السلمان", "الخضر", "الوركاء", "الهلال", "السوير", "المجد", "النجمي",
        ],
        Showed_Values = [
            ["مركز قضاء السماوة",],//نواحي السماوة
            ["مركز قضاء الرميثة",],//نواحي الرميثة
            ["مركز قضاء السلمان", "البصية",],//نواحي السلمان
            ["مركز قضاء الخضر", "الدراجي",],//نواحي الخضر
            ["مركز قضاء الوركاء", "الكرامة"],//نواحي الوركاء
            ["مركز قضاء الهلال",],//نواحي الهلال
            ["مركز قضاء السوير",],//نواحي السوير
            ["مركز قضاء المجد",],//نواحي المجد
            ["مركز قضاء النجمي",],//نواحي النجمي
        ];

        for(var i = 0; i < Selected_Values.length; i++){
            if(event == Selected_Values[i]){
                this.group_of_form[0].fields[8].properties[0].values = Showed_Values[i];
                break;
            }else{
                this.group_of_form[0].fields[8].properties[0].values = [];
            }
        }
    }
}