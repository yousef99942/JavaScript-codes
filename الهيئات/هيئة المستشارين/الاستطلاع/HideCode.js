{
    LocationHide(event){
        var CityNames = [
            ["العلاوي","شارع حيفا","العطيفية","كرادة مريم","المنطقة الخضراء","الحارثية","الكاظمية","الشعلة","الحرية","المنصور","حي الجامعة",
                "حي الخضراء","العامرية","الغزالية","حي الجهاد","حي الفرات","حي العامل","الإسكان","الدورة","السيدية","البياع","القادسية",
                "اليرموك","التاجي","أبي غريب",],

            ["الشعب","زيونة","الاعظمية","مدينة الصدر","الجادرية","حي اور","باب المعظم","المستنصرية","الحسينية","الوزيرية","حي القاهرة","الكريعات",
                "البنوك","بغداد الجديدة","الكرادة","شارع فلسطين","المشتل","البلديات","سبع ابكار","الصليخ","الباب الشرقي","حي تونس","الغدير",
                "الزعفرانية","بسمايا","العبيدي","الكمالية",],
        ];

        if(event == "الكرخ"){
            this.group_of_form[0].fields[7].properties[0].values = CityNames[0];
            this.inputFormField["city"] = null;
        }else{
            this.group_of_form[0].fields[7].properties[0].values = CityNames[1];
            this.inputFormField["city"] = null;
        }
    },

    CollageHiding(event){
        var CollageNames = [
            [
                "جامعة بغداد","جامعة النهرين","الجامعة المستنصرية","الجامعة التقنية الوسطى","جامعة الكرخ","الجامعة العراقية","جامعة ابن سينا",
                "الجامعة التكنولوجية","جامعة تكنولوجيا المعلومات","المجلس العراقي للاختصاصات الطبية"
            ],
            [
                "جامعة التراث","كلية المنصور الجامعة","كلية الرافدين الجامعة","كلية المأمون الجامعة","كلية بغداد للعلوم الاقتصادية","كلية بغداد للعلوم الطبية",
                "كلية دجلة الجامعة","كلية السلام الجامعة","كلية مدينة العلم الجامعة","جامعة الامام الصادق (عليه السلام)","جامعة المشرق","جامعة الشعب",
                "كلية الرشيد الجامعة", "كلية صدر العراق الجامعة","كلية الحكمة الجامعة","كلية أصول العلم الجامعة","جامعة الناجي","جامعة الاسراء",
                "جامعة الفراهيدي","جامعة المصطفى","كلية الفارابي الجامعة", "كلية الباني الجامعة","كلية النخبة الجامعة","كلية النسور الجامعة",
                "كلية الامال الجامعة","جامعة اوروك","كلية الهادي الجامعة","جامعة البيان","الجامعة الامريكية",
            ],
        ];

        if (event == "حكومي"){
            this.group_of_form[0].fields[9].properties[0].values = CollageNames[0];
            this.inputFormField["collegenam"] = null;
        }else{
            this.group_of_form[0].fields[9].properties[0].values = CollageNames[1];
            this.inputFormField["collegenam"] = null;
        }
    },

    CollageLocationHiding(event){
        var CollageLocations = [
            ["مجمع الجادرية","مجمع باب المعظم","مجمع ابي غريب","الوزيرية","الاعظمية","النهضة"],
            ["مجمع الجادرية","مجمع الكاظمية"],
            ["باب المعظم","سبع ابكار","شارع فلسطين","الطالبية","اليرموك","القادسية"],
            ["باب المعظم","الاعظمية","الدورة"],
            ["الكاظمية","الغزالية","الدورة","ابي غريب"],
            ["مجمع الاعظمية","مجمع سبع ابكار","مجمع ابي غريب","الطارمية"],
            ["مجمع القادسية"],
            ["مجمع الجامعة التكنولوجية"],
            ["شارع النضال","مجمع المنصور"],
            ["المنصور"],//جامعة التراث وكلية النخبة الجامعة
            ["ساحة الاندلس"],
            ["حي القاهرة","حي البنوك","شارع فلسطين"],
            ["الإسكان"],//كلية المأمون الجامعة وكلية بغداد للعلوم الاقتصادية
            ["باب المعظم"],//كلية بغداد للعلوم الطبية وكلية أصول العلم الجامعة والمجلس العراقي للاختصاصات الطبية
            ["الدورة"],//كلية دجلة الجامعة وكلية الفارابي الجامعة وكلية الهادي الجامعة
            ["السيدية"],//كلية السلام الجامعة وكلية الشعب
            ["الكاظمية"],//كلية مدينة العلم الجامعة وكلية صدر العراق الجامعة
            ["حي القاهرة"],
            ["شارع المطار"],//جامعة المشروق ووجامعة البيان والجامعة الامريكية
            ["حي الحسين","ساحة الاندلس","الطارمية"],
            ["اليرموك"],//كلية الحكمة الجامعة وجامعة الناجي
            ["ساحة الاندلس"],
            ["القادسية"],
            ["شارع فلسطين"],
            ["الشعب"],
            ["ساحة النسور"],
            ["الكرادة","الجادرية"],
            ["الكرادة"],
        ];

        if (event == "جامعة بغداد"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[0];
            this.inputFormField["bracol"] = null;
        }else if(event =="جامعة النهرين"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[1];
            this.inputFormField["bracol"] = null;
        }else if(event == "الجامعة المستنصرية"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[2];
            this.inputFormField["bracol"] = null;
        }else if(event == "الجامعة التقنية الوسطى"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[3];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة الكرخ"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[4];
            this.inputFormField["bracol"] = null;
        }else if(event == "الجامعة العراقية"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[5];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة ابن سينا"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[6];
            this.inputFormField["bracol"] = null;
        }else if(event == "الجامعة التكنولوجية"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[7];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة تكنولوجيا المعلومات"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[8];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة التراث" || event == "كلية النخبة الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[9];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية المنصور الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[10];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية الرافدين الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[11];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية المأمون الجامعة" || event == "كلية بغداد للعلوم الاقتصادية"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[12];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية أصول العلم الجامعة" || event == "كلية بغداد للعلوم الطبية" || event == "المجلس العراقي للاختصاصات الطبية"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[13];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية دجلة الجامعة" || event == "كلية الفارابي الجامعة" || event == "كلية الهادي الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[14];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية السلام الجامعة" || event == "جامعة الشعب"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[15];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية مدينة العلم الجامعة" || event == "كلية صدر العراق الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[16];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة الامام الصادق (عليه السلام)"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[17];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة المشرق" || event == "جامعة البيان" || event == "الجامعة الامريكية"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[18];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية الرشيد الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[19];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية الحكمة الجامعة" || event == "جامعة الناجي"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[20];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة الاسراء"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[21];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة الفراهيدي"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[22];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة المصطفى"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[23];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية الباني الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[24];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية النسور الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[25];
            this.inputFormField["bracol"] = null;
        }else if(event == "كلية الامال الجامعة"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[26];
            this.inputFormField["bracol"] = null;
        }else if(event == "جامعة اوروك"){
            this.group_of_form[0].fields[10].properties[0].values = CollageLocations[27];
            this.inputFormField["bracol"] = null;
        }
    },

    ReasonHide(event){
        if(event == "غير ملائمة"){
            document.getElementById("50378").style.display = "block";
            this.inputFormField["unsuitable"] = null;
        }else{
            document.getElementById("50378").style.display = "none";
            this.inputFormField["unsuitable"] = null;
        }
    },
}