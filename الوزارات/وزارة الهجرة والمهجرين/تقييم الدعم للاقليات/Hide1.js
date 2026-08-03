{
    FirstHide(event){//الحالة الاجتماعية
        if(event == "اعزب / عزباء"){
            document.getElementById("50629").style.display = "none";
            this.inputFormField["BoysNum"] = null;

            document.getElementById("50631").style.display = "none";
            this.inputFormField["GirlNum"] = null;
        }else{
            document.getElementById("50629").style.display = "block";
            this.inputFormField["BoysNum"] = null;

            document.getElementById("50631").style.display = "block";
            this.inputFormField["GirlNum"] = null;
        }
    },

    SecondHide(event){//هل انت من فئات عناية الوزارة؟
        if(event == "نعم"){
            document.getElementById("50634").style.display = "block";
            this.inputFormField["persontypeinfo"] = null;
        }else{
            document.getElementById("50634").style.display = "none";
            this.inputFormField["persontypeinfo"] = null;
        }
    },

    ThirdHide(event){//هل انت من النازحين؟
        if(event == "هل انت من النازحين؟"){
            document.getElementById("50551").style.display = "block";
            this.inputFormField["hejrareson"] = null;
        }else{
            document.getElementById("50551").style.display = "none";
            this.inputFormField["hejrareson"] = null;
        }
    },

    FourthHide(event){//مال اخفاء المجاميع
        if(event == "نعم"){
            document.getElementById("50637").style.display = "block";
            this.inputFormField["areyouinformationsix"] = null;
          
          	document.getElementById("23261_group").style.display = "block";
            document.getElementById("23262_group").style.display = "block";
            document.getElementById("23263_group").style.display = "block";
        }else{
            document.getElementById("50637").style.display = "none";
            this.inputFormField["areyouinformationsix"] = null;
          
          	document.getElementById("23261_group").style.display = "none";
            document.getElementById("23262_group").style.display = "none";
            document.getElementById("23263_group").style.display = "none";
        }
    },

    FifthHide(event){//اذا جان الدعم هو اخرى
        if(event == "اخرى"){
            document.getElementById("50638").style.display = "block";
            this.inputFormField["customertypinginfo"] = null;
        }else{
            document.getElementById("50638").style.display = "none";
            this.inputFormField["customertypinginfo"] = null;
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
                    document.getElementById("33668_group").style.display = "none";
                    document.getElementById("23260_group").style.display = "block";
                    document.getElementById("23264_group").style.display = "block";
    
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