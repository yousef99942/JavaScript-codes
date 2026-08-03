{
    FirstHide(event){
        if(event == "أقل من 18 سنة"){
            document.getElementById("65280").style.display = "block";
            this.inputFormField["FirstTextArea"] = null;
        }else{
            document.getElementById("65280").style.display = "none";
            this.inputFormField["FirstTextArea"] = null;
        }
    },

    SecondHide(event){
        if(event == "كاسب (أعمال حرة)"){
            document.getElementById("65281").style.display = "block";
            this.inputFormField["FreeWorkType"] = null;

            document.getElementById("65282").style.display = "none";
            this.inputFormField["FirstOther"] = null;
        }else if(event == "أخرى"){
            document.getElementById("65282").style.display = "block";
            this.inputFormField["FirstOther"] = null;

            document.getElementById("65281").style.display = "none";
            this.inputFormField["FreeWorkType"] = null;
        }else{
            document.getElementById("65281").style.display = "none";
            this.inputFormField["FreeWorkType"] = null;

            document.getElementById("65282").style.display = "none";
            this.inputFormField["FirstOther"] = null;
        }
    },

    ThirdHide(event){
        if(event == "كاسب (أعمال حرة)"){
            document.getElementById("65284").style.display = "block";
            this.inputFormField["SFreeWorkType"] = null;

            document.getElementById("65285").style.display = "none";
            this.inputFormField["SecondOther"] = null;
        }else if(event == "أخرى"){
            document.getElementById("65285").style.display = "block";
            this.inputFormField["SecondOther"] = null;

            document.getElementById("65284").style.display = "none";
            this.inputFormField["SFreeWorkType"] = null;
        }else{
            document.getElementById("65284").style.display = "none";
            this.inputFormField["SFreeWorkType"] = null;

            document.getElementById("65285").style.display = "none";
            this.inputFormField["SecondOther"] = null;
        }
    },

    FourthHide(event){
        if(event == "ملك"){
            document.getElementById("65292").style.display = "block";
            this.inputFormField["MolokType"] = null;

            document.getElementById("65293").style.display = "none";
            this.inputFormField["OtherHouseType"] = null;
        }else if(event == "أخرى"){
            document.getElementById("65293").style.display = "block";
            this.inputFormField["OtherHouseType"] = null;

            document.getElementById("65292").style.display = "none";
            this.inputFormField["MolokType"] = null;
        }else{
            document.getElementById("65292").style.display = "none";
            this.inputFormField["MolokType"] = null;

            document.getElementById("65293").style.display = "none";
            this.inputFormField["OtherHouseType"] = null;
        }
    },

    FifthHide(event){
        if(event == "أخرى"){
            document.getElementById("65295").style.display = "block";
            this.inputFormField["OtherHouseMatarial"] = null;
        }else{
            document.getElementById("65295").style.display = "none";
            this.inputFormField["OtherHouseMatarial"] = null;
        }
    },

    SixthHide(event){
        if(event == "أخرى"){
            document.getElementById("65420").style.display = "block";
            this.inputFormField["OtherHomeState"] = null;
        }else{
            document.getElementById("65420").style.display = "none";
            this.inputFormField["OtherHomeState"] = null;
        }
    },

    seventhHide(event){
        if(event == "أخرى"){
            document.getElementById("65803").style.display = "block";
            this.inputFormField["OtherOriginalHome"] = null;
        }else{
            document.getElementById("65803").style.display = "none";
            this.inputFormField["OtherOriginalHome"] = null;
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
                "9647724486678",//اياد مزبان مراد
                "9647712741049",//رسل حسن محمد
                "9647767299981",//زينة غالب عباس
                "9647731396634",//زينة عبد الجليل
                "9647710945050",//نبيل ايملي هواس
                "9647817974443",//اسامة صلاح علوان
                "9647505635090",//عمر فوزي طعمة
                "9647712222991",//حيدر موفق كامل
                "9647733654399",//فؤاد سالم عباس
                "9647513554034",//وليد خالد محمد
                "9647516601259",//محمد ابراهيم رباش
                "9647759693843",//وسام محمد عبد
                "9647519660767",//مثنى شوقي حسن
                "9647708860872",//علي غني نعمة
                "9647722972027",//كرار هجرة ومهجرين
                "9647706242275",//كرار مركز بيانات
                "9647811911618",//يوسف احسان مركز بيانات
            ];

            let matchFound = false; // Flag to track if a match is found

            for(var i = 0; i < phoneNumber.length; i++){
                if(this.inputFormField["PhoneNumber"] == phoneNumber[i]){
                    matchFound = true;
                    document.getElementById("33820_group").style.display = "none";
                    document.getElementById("33764_group").style.display = "block";
    
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