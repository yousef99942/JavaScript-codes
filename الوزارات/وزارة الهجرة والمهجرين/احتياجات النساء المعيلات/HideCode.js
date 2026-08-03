{
    firstHide(event){
        if(event == "نعم"){
            document.getElementById("64101").style.display = "block";
            this.inputFormField["TheirNum"] == null;
        }else{
            document.getElementById("64101").style.display = "none";
            this.inputFormField["TheirNum"] == null;
        }
    },

    SecondHide(event){
        if(event == "كلا"){
            document.getElementById("64399").style.display = "block";
            this.inputFormField["MissingServices"] = null;
        }else{
            document.getElementById("64399").style.display = "none";
            this.inputFormField["MissingServices"] = null;
        }
    },

    ThirdHide(event){
        if(event == "كلا"){
            document.getElementById("64220").style.display = "block";
            this.inputFormField["ReasonOfNotGet"] = null;
        }else{
            document.getElementById("64220").style.display = "none";
            this.inputFormField["ReasonOfNotGet"] = null;
        }
    },

    FourthHide(event){
        if(event == "كلا"){
            document.getElementById("64222").style.display = "block";
            this.inputFormField["SecondReasonOfNotGet"] = null;
        }else{
            document.getElementById("64222").style.display = "none";
            this.inputFormField["SecondReasonOfNotGet"] = null;
        }
    },

    FifthHide(event){
        if(event == "نعم"){
            document.getElementById("64233").style.display = "block";
            this.inputFormField["HealthProblemExplain"] = null;
        }else{
            document.getElementById("64233").style.display = "none";
            this.inputFormField["HealthProblemExplain"] = null;
        }
    },

    SixthHide(event){
        if(event.length != 0){
            for(var i = 0; i < event.length; i++){
                if(event[i] == "اخرى"){
                    document.getElementById("64235").style.display = "block";
                    this.inputFormField["OtherDiffcults"] = null;
                    break;
                }else{
                    document.getElementById("64235").style.display = "none";
                    this.inputFormField["OtherDiffcults"] = null;
                }
            }
        }else{
            document.getElementById("64235").style.display = "none";
            this.inputFormField["OtherDiffcults"] = null;
        }
    },

    SeventhHide(event){
        if(event.length != 0){
            for(var i = 0; i < event.length; i++){
                if(event[i] == "اخرى"){
                    document.getElementById("64237").style.display = "block";
                    this.inputFormField["OtherNeeds"] = null;
                    break;
                }else{
                    document.getElementById("64237").style.display = "none";
                    this.inputFormField["OtherNeeds"] = null;
                }
            }
        }else{
            document.getElementById("64237").style.display = "none";
            this.inputFormField["OtherNeeds"] = null;
        }
    },

    eighthHide(event){
        if(event == "عمل حر" || event == "راتب رعاية اجتماعية" || event == "مساعدات" || event == "دعم الأقارب"){
            document.getElementById("64180").style.display = "block";
            this.inputFormField["IncomeLevel"] = null;
        }else{
            document.getElementById("64180").style.display = "none";
            this.inputFormField["IncomeLevel"] = null;
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
                "9647734290515",//ايمان علي سلمان
                "9647700078192",//فاطمة محمد عوض محمد
                "9647904906800",//حسين محمد علوان
                "9647714701467",//ايلاف محمد علي
                "9647711211120",//اسيل هشام عبد الكريم
                "9647739556780",//بيداء جمال فهمي
                "9647702972094",//جنان حميد محمد مهدي
                "9647710655531",//شيماء بدر عباس
                "9647731301979",//اسراء عادل نعمة
                "9647719758854",//رسل عامر براك
                "9647708860872",//علي غني هجرة ومهجرين
                "9647722972027",//كرار هجرة ومهجرين
                "9647706242275",//كرار مركز بيانات
                "9647811911618",//يوسف احسان مركز بيانات
            ];

            let matchFound = false; // Flag to track if a match is found

            for(var i = 0; i < phoneNumber.length; i++){
                if(this.inputFormField["EmpPhoneNumber"] == phoneNumber[i]){
                    matchFound = true;
                    document.getElementById("33680_group").style.display = "none";
                    document.getElementById("33653_group").style.display = "block";
                    document.getElementById("33655_group").style.display = "block";
                    document.getElementById("33656_group").style.display = "block";
                    document.getElementById("33657_group").style.display = "block";
                    document.getElementById("33658_group").style.display = "block";
                    document.getElementById("33659_group").style.display = "block";
    
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