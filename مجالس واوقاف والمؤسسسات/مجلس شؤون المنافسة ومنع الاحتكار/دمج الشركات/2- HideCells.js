{
    FirstHide(event){
        var GroupsID = [
            "33368_group", //اول شركة
            "33386_group", //ثاني شركة
            "33807_group", //ثالث شركة
            "33808_group", //رابع شركة
            "33809_group", //خامس شركة
            "33811_group", //سادس شركة
        ];
        var ProgsName = [
            //اول شركة
            "compname", "comprec", "comp", "compmon", "compaddr", "compnum", "compemail", "compbossfirst", "compbosssec", "compbossthird",
            //ثاني شركة
            "seccompname", "secrec", "secact", "secmony", "seccompadd", "seccompphone", "seccompemail", "secbossname", "secbnsec", "secbthr",
            //ثالث شركة
            "companynameA", "companynemperA", "companynatherA", "companymoneeyA", "companyadrresA", "companyfhoneA", "companyemealA", "companyfirstnameA", "companysecondnameA",
            "companytherdnameA",
            //رابع شركة
            "companynameB", "companynemperB", "companynatherB", "companymoneeyB", "companyadrresB", "companyfhoneB", "companyemealB", "companyfirstnameB", "companysecondnameB",
            "companytherdnameB",
            //خامس شركة
            "companynameC", "companynemperC", "companynatherC", "companymoneeyC", "companyadrresC", "companyfhoneC", "companyemealC", "companyfirstnameC", "companysecondnameC",
            "companytherdnameCC",
            //سادس شركة
            "companynameD", "companynemperD", "companynatherD", "companymoneeyD", "companyadrresD", "companyfhoneD", "companyemealD", "companyfirstnameD", "companysecondnameD",
            "companytherdnameD",
        ];

        // تصفير الحقول الخاصة بكل الأفراد
        ProgsName.forEach((Clearing) => this.inputFormField[Clearing] = null);

        const groupCount = parseInt(event); // عدد الأفراد المطلوب عرضهم

        // عرض المجموعات المطلوبة وإخفاء الباقي
        for (let i = 0; i < GroupsID.length; i++) {
            document.getElementById(GroupsID[i]).style.display = (i < groupCount) ? "block" : "none";
        }
    },
}