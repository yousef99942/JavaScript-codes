{
    StudentCells(event){
        if(event == "طالب"){
            document.getElementById("50604").style.display = "block";
            this.inputFormField["EducationalLevel"] = null;

            document.getElementById("50605").style.display = "block";
            this.inputFormField["CollageSchoolName"] = null;
        }else{
            document.getElementById("50604").style.display = "none";
            this.inputFormField["EducationalLevel"] = null;

            document.getElementById("50605").style.display = "none";
            this.inputFormField["CollageSchoolName"] = null;
        }
    },

    FirstOtherHide(event){
        if(event == "اخرى"){
            document.getElementById("50626").style.display = "block";
            this.inputFormField["Questiontwelveone"] = null;
        }else{
            document.getElementById("50626").style.display = "none";
            this.inputFormField["Questiontwelveone"] = null;
        }
    },

    SecondOtherHide(event){
        if(event == "أخرى (يرجى التحديد)"){
            document.getElementById("50630").style.display = "block";
            this.inputFormField["Questionthirteenone"] = null;
        }else{
            document.getElementById("50630").style.display = "none";
            this.inputFormField["Questionthirteenone"] = null;
        }
    },

    ThirdOtherHide(event){
        if(event == "اخرى (يرجى التحديد)"){
            document.getElementById("50635").style.display = "block";
            this.inputFormField["Questionfourteenone"] = null;
        }else{
            document.getElementById("50635").style.display = "none";
            this.inputFormField["Questionfourteenone"] = null;
        }
    },

    singleNotification(notifyText, position) {
        this.$toast.error(notifyText, {
            position: position,
            timeout: 6000,
            closeOnClick: false,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: true
        });
    },

    ssingleNotification(notifyText, position) {
        this.$toast.success(notifyText, {
            position: position,
            timeout: 6000,
            closeOnClick: false,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: true
        });
    },

    checkEmployee(event){
        if (event) {
            let loader = this.$loading.show({
                container: this.$refs.formContainer,
                loader: "dots",
                transition: "fade",
                color: "#c30734"
            });

            var phoneNumber = [
                "9647710945050",//نبيل أميلي
                "9647707101805",//مصطفى جاسم هادي
                "9647719758854",//رسل عامر براك
                "9647702534760",//عباس صالح حسن
                "9647708860872",//علي غني
                "9647722972027",//كرار هجرة ومهجرين
                "9647706242275",//كرار مركز بيانات
                "9647811911618",//يوسف احسان مركز بيانات
            ];

            let matchFound = false; // Flag to track if a match is found

            for(var i = 0; i < phoneNumber.length; i++){
                if(this.inputFormField["PhoneNumber"] == phoneNumber[i]){
                    matchFound = true;
                    document.getElementById("33679_group").style.display = "none";
                    document.getElementById("23267_group").style.display = "block";
                    document.getElementById("23269_group").style.display = "block";
    
                    loader.hide();
                    this.ssingleNotification("تم الدخول بنجاح", "top-right");
                    break; // Exit the loop once a match is found
                }
            }

            if (!matchFound) {
                loader.hide();
                this.singleNotification("رقم الهاتف غير مطابق مع المخول ", "top-right");
            }
        }
    },
}