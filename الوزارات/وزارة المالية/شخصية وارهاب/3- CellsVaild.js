//Write your code here
{
    //فكشن للتحقق من نوع محتوى الحقول 
  	// function useRegex(input, regex) {
	// 	return regex.test(input)
	// }

    // const EngArbNameRegex = /\s.*\s|[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]|[0-9]/
    // const noSymbolRegex = /[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]/
    // //يسمح باكثر من فراغ  
    // const EngArbRegex = /[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]|[0-9]/

    // التحقق من حقل رقم الهاتف يجب ان يبدء الرقم ب07
	const phoneNo = this.inputFormField[1].phoneN
	let startNo = phoneNo.substring(0, 2)
	if (startNo != "07") {
		this.evalErr.push("يجب أن يبدأ رقم الهاتف بالرقم 07 / The phone number must begin with the number 07")
	}  
  	// التحقق من حقل رقم الهاتف البديل يجب ان يبدء الرقم ب07
	const phoneNo2 = this.inputFormField[1].phoneNo
	let startNo2 = phoneNo2.substring(0, 2)
	if (startNo2 != "07") {
		this.evalErr.push("يجب أن يبدأ رقم الهاتف البديل بالرقم 07 / The alternate phone number must begin with the number 07")
	}
  
    //جعل حقل اسم الشركة ومبلغ التأمين ضرورية
    const insured = this.inputFormField.personall
    if (insured == "نعم / Yes") {
        if (this.inputFormField["copmanyy"] == null || this.inputFormField["copmanyy"] == "") {
            this.evalErr.push("الحقل (اسم الشركة) مطلوب. / Field (company name) required.")
        }

        if (this.inputFormField["InsurAmountt"] == null || this.inputFormField["InsurAmountt"] == "") {
            this.evalErr.push("الحقل (مبلغ التأمين) مطلوب. / Field (insurance amount) required.")
        }
    }

    //حقول طبيعة الحادث، تاريخ الحادث، مبلغ التعويض
    const compensation = this.inputFormField.askingg
    if(compensation == "نعم / Yes"){
        const infoNames = ["smashh", "IncidentDatee", "moneynumm"]  
        for(let i=0; i < infoNames.length; i++){
            if (this.inputFormField[infoNames[i]] == null || this.inputFormField[infoNames[i]] == "") {
                this.evalErr.push(`الحقل (${this.group_of_form[5].fields[i+4].label}) مطلوب. / Field (${this.group_of_form[5].fields[i+4].eng_label}) required`)
            }else{
  			    if(i == 0){
            	    //التحقق من نوع محتوى حقل طبيعة الحادث
				    let accidentContent = this.inputFormField.smashh
				    if (useRegex.call(this, accidentContent, noSymbolRegex)) {
				        this.evalErr.push(`في حقل ${this.group_of_form[5].fields[5].label} قيمة غير مسموح بها. / In the ${this.group_of_form[5].fields[5].eng_label} field, the value is not allowed.`)
		            } 
                }
            }
        }  
  
    }
  
    const submittedBy =  this.inputFormField.SubmittedBy
    if(submittedBy == "مُنتْج (موظف التأمين) / Insurance Employee"){
        //التحقق من نوع محتوى حقول طالب التأمين
        const arabNames = ["firstN", "secondN", "thirdN"]
        for (let i = 0; i < arabNames.length; i++) {
            let namesContent = this.inputFormField[arabNames[i]]
            if (useRegex.call(this, namesContent, EngArbNameRegex)) {
                this.evalErr.push(`في حقل ${this.group_of_form[1].fields[i].label} قيمة غير مسموح بها. / In the ${this.group_of_form[1].fields[i].eng_label} field, the value is not allowed.`)
            }
        }
    } 

    //التحقق من نوع محتوى حقل المهنة
    // if (useRegex.call(this, this.inputFormField.Occupation, EngArbRegex)) {
    //     this.evalErr.push(`في حقل ${this.group_of_form[1].fields[3].label} قيمة غير مسموح بها. / In the ${this.group_of_form[1].fields[3].eng_label} field, the value is not allowed.`)
    // } 

    //التحقق من نوع محتوى حقل العنوان
    // let content = this.inputFormField.smashh
    // const addressRegex = /[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\?؟\{\}\$%\[\]\?\.-]/
    // if (useRegex.call(this, content, addressRegex)) {
    //     this.evalErr.push(`في حقل ${this.group_of_form[1].fields[4].label} قيمة غير مسموح بها. / In the ${this.group_of_form[1].fields[4].eng_label} field, the value is not allowed.`)
    // } 

    //التحقق من نوع محتوى حقل الاسم الثلاثي للمستفيد
    // if (useRegex.call(this, this.inputFormField.beneficiar, EngArbRegex)) {
    //     this.evalErr.push(`في حقل ${this.group_of_form[3].fields[1].label} قيمة غير مسموح بها. / In the ${this.group_of_form[3].fields[1].eng_label} field, the value is not allowed.`)
    // } 

    //التحقق من نوع محتوى حقل هل تعاني من اي مرض اخر
    // let illnessContent = this.inputFormField.bodyy
    // const illnessRegex = /[><:;؛"'`،,’‘÷~!@#\^&\*\(\)_=\+\\/\?؟\{\}\$\|%\[\]\?\.-]|[0-9]/
    // if (useRegex.call(this, illnessContent, illnessRegex)) {
    //     this.evalErr.push(`في حقل ${this.group_of_form[4].fields[8].label} قيمة غير مسموح بها. / In the ${this.group_of_form[4].fields[8].eng_label} field, the value is not allowed.`)
    // }
}