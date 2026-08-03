{
    FirstHide(event){
        this.inputFormField["bxx"] = null;
        if(event == "مكتب الوزير ( شؤون المواطنين/ الاصلاح العراقية/ الاحداث)"){
            document.getElementById("67154").style.display = "block";
        }else{
            document.getElementById("67154").style.display = "none";
        }

        this.group_of_form[0].fields[8].properties[0].values = [
            "شكوى", "تظلم", "مقابلة", "تنسيب", "تكليف", "استثناء", "طلب", "اخرى"
        ];
    },

    First_Filter(event){
        let Orgnial_Values = [
            "شكوى", "تظلم", "مقابلة", "تنسيب", "تكليف", "استثناء", "طلب", "اخرى"
        ],
        New_Values = [
            "شكوى", "تظلم", "مقابلة", "مقابلة المدير العام", "تنسيب", "تكليف", "استثناء", "طلب", "اخرى"
        ];
        if(event == "دائرة الاصلاح العراقية"){
            this.group_of_form[0].fields[8].properties[0].values = New_Values;
        }else{
            this.group_of_form[0].fields[8].properties[0].values = Orgnial_Values;
        }
    }
}