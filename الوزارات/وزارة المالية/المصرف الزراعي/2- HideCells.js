//Write your code here
{
    governorateFun(event){
        const branch = event
        const bankBranches = {
            "بغداد": ["الرئيسي", "المدائن", "المحمودية", "مكتب ما بين النهرين", "الطارمية", "التجهيزات", "بغداد", "الائتمان", "الدفع الإلكتروني"],
            "صلاح الدين": ["تكريت", "بلد", "سامراء"],
            "بابل": ["الحلة", "الهاشمية", "المسيب"],
            "واسط": ["الكوت", "العزيزية", "الصويرة"],
            "ديالى": [
                "الخالص", "المقدادية", //"ديالى"
            ],
            "نينوى": ["تلعفر", "الموصل"],
            "كربلاء المقدسة": ["الهندية", "كربلاء"],
            "البصرة": ["البصرة", "القرنة"],
            "النجف الاشرف": ["النجف"],
            "القادسية": ["الديوانية"],
            "كركوك": ["كركوك"],
            "الانبار": ["الرمادي"],
            "ذي قار": ["الناصرية"],
            "المثنى": ["السماوة"],
            "ميسان": ["ميسان"]
        }

        for (const [key, value] of Object.entries(bankBranches)) {
            if (branch == key) {
                this.inputFormField["BranchName"] = null
                this.group_of_form[0].fields[24].properties[0].values = []
                this.group_of_form[0].fields[24].properties[0].values = value
                break
            } else if (!branch) {
                this.inputFormField["BranchName"] = null
                this.group_of_form[0].fields[24].properties[0].values = []
            }
        }

    },

    loantypeFun(event){
        let loanType = event
        //اخفاء الفورمات
        if (loanType == "قرض تجاري (للمشاريع الصغيرة)") {
            document.getElementById("34364_group").style.display = "block"// استمارة قرض تجاري
            document.getElementById("34365_group").style.display = "none"// استمارة قرض زراعي
 		   document.getElementById("34560_group").style.display = "none"// استمارة قرض منظومة الطاقة
            document.getElementById("34367_group").style.display = "none"// استمارة قرض السيارات
            //تفريغ حقول استمارة القرض التجاري
            for (let i = 1; i <= 4; i++) {
                if (i != 1) {
                    for (let field of this.group_of_form[i].fields) {
                        this.inputFormField[field.name] = null
                    }
                }
            }
        } else if (loanType == "قرض زراعي (للأفراد)") {
            document.getElementById("34365_group").style.display = "block"// استمارة قرض زراعي
            document.getElementById("34364_group").style.display = "none"// استمارة قرض تجاري
 		   document.getElementById("34560_group").style.display = "none"// استمارة قرض منظومة الطاقة
            document.getElementById("34367_group").style.display = "none"// استمارة قرض السيارات
            //تفريغ حقول استمارة القرض الزراعي
            for (let i = 1; i <= 4; i++) {
                if (i != 2) {
                    for (let field of this.group_of_form[i].fields) {
                        this.inputFormField[field.name] = null
                    }
                }
            }
        } else if (loanType == "قرض لشراء منظومة طاقة متجددة") {
		    document.getElementById("34560_group").style.display = "block"// استمارة قرض منظومة الطاقة
            document.getElementById("34364_group").style.display = "none"// استمارة قرض تجاري
            document.getElementById("34365_group").style.display = "none"// استمارة قرض زراعي
            document.getElementById("34367_group").style.display = "none"// استمارة قرض السيارات
            //تفريغ حقول استمارة منظومات الطاقة
            for (let i = 1; i <= 4; i++) {
                if (i != 3) {
                    for (let field of this.group_of_form[i].fields) {
                        this.inputFormField[field.name] = null
                    }
                }
            }
        } else if (loanType == "قرض لشراء السيارات (للمواطنين والموظفين)") {
            document.getElementById("34367_group").style.display = "block"// استمارة قرض السيارات
            document.getElementById("34364_group").style.display = "none"// استمارة قرض تجاري
            document.getElementById("34365_group").style.display = "none"// استمارة قرض زراعي
            document.getElementById("34560_group").style.display = "none"// استمارة قرض منظومة الطاقة
            //تفريغ حقول استمارة السيارت 
            for (let i = 1; i <= 4; i++) {
                if (i != 4) {
                    for (let field of this.group_of_form[i].fields) {
                        this.inputFormField[field.name] = null
                    }
                }
            }
        } else if (!loanType) {
            document.getElementById("34364_group").style.display = "none"// استمارة قرض تجاري
            document.getElementById("34365_group").style.display = "none"// استمارة قرض زراعي
   			document.getElementById("34560_group").style.display = "none"// استمارة قرض منظومة الطاقة
            document.getElementById("34367_group").style.display = "none"// استمارة قرض السيارات
            //تفريغ حقول جميع الاستمارات في حال عدم اختيار اي نوع قرض
            for (let i = 1; i <= 4; i++) {
                for (let field of this.group_of_form[i].fields) {
                    this.inputFormField[field.name] = null
                }
            }
        }
    }
}