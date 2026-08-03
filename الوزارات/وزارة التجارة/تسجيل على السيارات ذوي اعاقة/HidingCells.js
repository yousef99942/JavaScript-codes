{
    FirstHide(event){
        var Cars_Name = [
            "تويوتا كامري LE",
            "تويوتا راف فور مواصفات عادية RS",
            "تويوتا راف فور مواصفات متوسطة RM",
        ],
        Cars_Model = "2025",
        Cars_Price = [
            "37,050,000 دينار عراقي",
            "39,250,000 دينار عراقي",
            "41,350,000 دينار عراقي"
        ];

        for(var i = 0; i < Cars_Name.length; i++){
            if(event == Cars_Name[i]){
                this.inputFormField.module = Cars_Model;
                this.inputFormField.price = Cars_Price[i];
            }
        }
    }
}