{
    
    let Form_Value = this.inputFormField.LawsType;
    let Birth_Date = new Date(this.inputFormField.birth);
    let Today = new Date();

    let Birth_Year = Birth_Date.getFullYear();
    let Birth_Month = Birth_Date.getMonth() + 1;
    let Birth_Day = Birth_Date.getDate();

    // حساب العمر الفعلي
    let Age = Today.getFullYear() - Birth_Year;

    if (
        Today.getMonth() + 1 < Birth_Month ||
        (
            Today.getMonth() + 1 === Birth_Month &&
            Today.getDate() < Birth_Day
        )
    ) {
        Age--;
    }

    if (Form_Value === "نعم") {
        if (Age < 37 || Age > 65) {
            this.evalErr.push("عذراً، العمر غير مسموح به للتقديم");
        } else if (
            Age === 65 &&
            !(
                (Birth_Month === 7 && Birth_Day === 1) ||
                Birth_Month > 10 ||
                (Birth_Month === 10 && Birth_Day >= 19)
            )
        ) {
            this.evalErr.push("عذراً، العمر غير مسموح به للتقديم");
        }

    } else if (Form_Value === "كلا") {
        if (Age < 37 || Age > 60) {
            this.evalErr.push("عذراً، العمر غير مسموح به للتقديم");
        } else if (
            Age === 60 &&
            !(
                (Birth_Month === 7 && Birth_Day === 1) ||
                Birth_Month > 10 ||
                (Birth_Month === 10 && Birth_Day >= 19)
            )
        ) {
            this.evalErr.push("عذراً، العمر غير مسموح به للتقديم");
        }
    }


    //----------------------------------------------------------------------------------------------------
    //التخصص الاخر
    if(this.inputFormField.field === "اخرى"){
        if(
            this.inputFormField["OtherField"] === "" ||
            this.inputFormField["OtherField"] === null
        ){
            this.evalErr.push(
                `الحقل ${this.group_of_form[0].fields[26].label} مطلوب`,
            );
        }
    }

    //الشهاده الاخرى
    if(this.inputFormField.fieldStudy === "اخرى"){
        if(
            this.inputFormField["OtherDegree"] === "" ||
            this.inputFormField["OtherDegree"] === null
        ){
            this.evalErr.push(
                `الحقل ${this.group_of_form[0].fields[28].label} مطلوب`,
            );
        }
    }
}
