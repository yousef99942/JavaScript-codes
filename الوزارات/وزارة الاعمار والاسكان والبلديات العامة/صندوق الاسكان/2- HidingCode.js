{
    KafeelCells(event){
        const ID = [
            "49166",//اسم الكفيل الاول
            "49167",//اسم الاكل للكفيل الاول
            "49168",//مواليد الكفيل الاول
            "49169",//دائرة الكفيل الاول
            "49170",//تاريخ استمارة تعهد الكفيل الاول
            "49171",//رقم استمارة تعهد الكفيل الاول
            "49172",//الراتب الكلي للكفيل الاول
            "49173",//الراتب الاسمي للكفيل الاول
            "49174",//اسم الكفيل الثاني
            "49175",//اسم الام للكفيل الثاني
            "49176",//مواليد الكفيل الثاني
            "49177",//دائرة الكفيل الثاني
            "49178",//تاريخ استمارة تعهد الكفيل الثاني
            "49179",//رقم استمارة تعهد الكفيل الثاني
            "49180",//الراتب الكلي للكفيل الثاني
            "49181",//الراتب الاسمي للكفيل الثاني
            "49182",//اسم الكفيل الثالث
            "49183",//اسم الام للكفيل الثالث
            "49184",//مواليد الكفيل الثالث
            "49185",//دائرة الكفيل الثالث
            "49186",//تاريخ استمارة تعهد الكفيل الثالث
            "49187",//رقم استمارة تعهد الكفيل الثالث
            "49188",//الراتب الكلي للكفيل الثالث
            "49189",//الراتب الاسمي للكفيل الثالث
        ];

        const Name = [
            "FirstSponsorName",//اسم الكفيل الاول
            "sponsermothername",//اسم الام للكفيل الاول
            "FirstDOB",//مواليد الكفيل الاول
            "FirstSponsorOfficeId",//دائرة الكفيل الاول
            "FirstDateSponsorLetter",//تاريخ استمارة تعهد الكفيل الاول
            "FirstNoSponsorLetter",//رقم استمارة تعهد الكفيل الاول
            "FirstHalfMonthlyWage",//الراتب الكلي للكفيل الاول
            "kafelBasicSalary1",//الراتب الاسمي للكفيل الاول
            "SecondSponsorName",//اسم الكفيل الثاني
            "SecondMotherName",//اسم الام للكفيل الثاني
            "SecondDOB",//مواليد الكفيل الثاني
            "SecondSponsorOfficeId",//دائرة الكفيل الثاني
            "SecondDateSponsorLetter",//تاريخ استمارة تعهد الكفيل الثاني
            "SecondNoSponsorLetter",//رقم استمارة تعهد الكفيل الثاني
            "SecondHalfMonthlyWage",//الراتب الكلي لللكفيل الثاني
            "kafelBasicSalary2",//الراتب الاسمي للكفيل الثاني
            "ThirdSponsorName",//اسم الكفيل الثالث
            "ThirdMotherName",//اسم الام للكفيل الثالث
            "ThirdDOB",//مواليد الكفيل الثالث
            "ThirdSponsorOfficeId",//دائرة الكفيل الثالث
            "ThirdDateSponsorLetter",//تاريخ استمارة تعهد الكفيل الثالث
            "ThirdNoSponsorLetter",//رقم استمارة تعهد الكفيل الثالث
            "ThirdHalfMonthlyWage",//الراتب الكلي للكفيل الثالث
            "kafelBasicSalary3",//الراتب الاسمي للكفيل الثالث
        ];

        for(var i = 0; i < Name.length; i++){
            this.inputFormField[Name[i]] = null;
        }
        if (event == "كفيل واحد") {
            for (let i = 0; i <= ID.length; i++) {
                if(i < 8){
                    document.getElementById(ID[i]).style.display = "block";
                }else{
                    document.getElementById(ID[i]).style.display = "none";
                }
            }
        } else if (event == "كفيل عدد اثنين") {
            for (let i = 0; i <= ID.length; i++) {
                if(i < 16){
                    document.getElementById(ID[i]).style.display = "block";
                }else{
                    document.getElementById(ID[i]).style.display = "none";
                }
            }
        } else if (event == "كفيل عدد ثلاثة") {
            for (let i = 0; i <= ID.length; i++) {
                document.getElementById(ID[i]).style.display = "block";
            }
        } else {
            for (let i = 0; i <= ID.length; i++) {
                document.getElementById(ID[i]).style.display = "none";
            }
        }
    },

    PersonState(event){
        var Children_Number = [
            ["1", "2", "3", "4 وما فوق", "لا يوجد",],
            ["لا يوجد"],
        ];

        if (event == "متزوج-ارملة-مطلقة") {
            this.group_of_form[0].fields[8].properties[0].values = Children_Number[0];
        } else {
            this.group_of_form[0].fields[9].properties[0].values = Children_Number[1];
        }
    },
}