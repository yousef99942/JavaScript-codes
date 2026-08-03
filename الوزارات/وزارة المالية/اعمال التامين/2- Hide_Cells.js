{
    FilterValues(event){
        this.inputFormField["PeType"] = null;
        var Values = [
            //الشخص المعنوي
            [
                "شركة تأمين", "فرع لشركة تأمين اجنبية", "شركة اعادة التأمين", "فرع لشركة اعادة تأمين اجنبية",
                "شركة وساطة التأمين", "شركة وساطة اعادة التأمين", "وكيل تأمين", "خبير كشف وتقدير الاضرار وتسويتها",
            ],
            //فرع لشخص معنوي (اجنبي) وشخص طبيعي
            [
                "شركة وساطة التأمين", "شركة وساطة اعادة التأمين", "وكيل تأمين", "خبير كشف وتقدير الاضرار وتسويتها",
            ],
        ]

        if(event == "شخص معنوي"){ 
            this.group_of_form[0].fields[9].properties[0].values = Values[0];
        }else if(event == "شخص طبيعي" || event == "فرع لشخص معنوي (اجنبي)"){
            this.group_of_form[0].fields[9].properties[0].values = Values[1];
        }else{
            this.group_of_form[0].fields[9].properties[0].values = "لا يوجد";
        }
    }
}