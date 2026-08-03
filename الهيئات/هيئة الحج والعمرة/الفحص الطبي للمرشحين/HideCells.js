{
    First_Function(Field_ID, Field_Prog, Field_State){
        document.getElementById(Field_ID).style.display = Field_State;
        this.inputFormField[Field_Prog] == null;
    },

    Second_Function(Fields_Progs){
        for(var i = 0; i < Fields_Progs.length; i++){
            this.inputFormField[Fields_Progs[i]] = null;
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
        var Fields_Progs = [
            //Group 2
            "nid", "governorate", "phone", "passport", "firstname", "secondname", "thirdname", "founame",
            "mothername", "birth", "gender",
            //Group 3
            "disise", "test", "bloodtype", "MIDECAL", "DATE", "details", "notes",
            //Group 4
            "recomndions",
        ];

        if (event) {
            let loader = this.$loading.show({
                container: this.$refs.formContainer,
                loader: "dots",
                transition: "fade",
                color: "#c30734"
            });

            var Passwords = [
                //بغداد الاول
                "mcVx1ZOGC",
                "QCYrQAZon",
                //بغداد الثاني
                "R4dwggZc7",
                "0Cgq5rTiC",
                "d0EeaHC2b",
                "RmhsdOvXS",
                "exn6NvxyB",
                //بغداد الثالث
                "EZz0re7N0",
                "w2niBeOcV",
                "D9b6NgojF",
                //ذي قار
                "8l9cUZEGW",
                "J6SZR3KGT",
                "XLLTE162r",
                //ميسان
                "w66udM0zW",
                "JMleKE10v",
                //كربلاء المقدسة
                "Tg7ulHXze",
                "ZpVGP3Wmq",
                //الديوانية
                "3c9On3kGV",
                "1X6qOFJRp",
                //البصرة
                "hfLRoo3r4",
                "0A650VD2j",
                //بابل
                "8BHp87GX8",
                "lkdW6tw7s",
                "bvn3drwE3",
                //واسط
                "nd6LNXzMg",
                "TdruPdUUl",
                "SiTVRp6Ob",
                //الانبار
                "v7iK9LTS7",
                "WMgKa0KmM",
                "rOLCGtidI",
                "IuLhBnknY",
                //شعبة الفلوجة
                "0YUxZkNbi",
                "XSXARQOaj",
                //المثنى
                "pWXirg271",
                //صلاح الدين
                "cRemRnsNe",
                "8mAy2khjy",
                //شعبة الصمود
                "cPOASratN",
                "GvsEezaOU",
                //نينوى
                "suGJ2qw2Z",
                "gXYDRIyax",
                //الطوز
                "VZ7c8MIST",
                //الجزيرة
                "TsBbFMPEr",
                "tSXfQMzNh",
                //النجف الاشرف
                "U3glAHJzo",
                "h6M47RdpY",
                //كركوك
                "UmYanlGR1",
                "qLSPpb2NF",
                //ديالى
                "kxcNJr6iV",
                "f02WOxP1a",
                "6Yx2OIBXv",
                //اربيل
                "mcVx1ZOGC11",
                "QCYrQAZon12",
                "R4dwggZc713",
                "0Cgq5rTiC14",
                "d0EeaHC2b15",
                "RmhsdOvXS16",
                "exn6NvxyB17",
                "EZz0re7N018",
                "w2niBeOcV19",
                "D9b6NgojF20",
                "bvn3drwE334",
                //دهوك
                "8l9cUZEGW21",
                "J6SZR3KGT22",
                "XLLTE162r23",
                "w66udM0zW24",
                "JMleKE10v25",
                //سليمانية
                "Tg7ulHXze26",
                "ZpVGP3Wmq27",
                "3c9On3kGV28",
                "1X6qOFJRp29",
                "hfLRoo3r430",
                "0A650VD2j31",
                "8BHp87GX832",
                "lkdW6tw7s33",
            ];

            let matchFound = false; // Flag to track if a match is found

            for(var i = 0; i < Passwords.length; i++){
                if(this.inputFormField["Password"] == Passwords[i] ||
                    this.inputFormField["Password"] == "NDTC331YMZ"
                ){
                    matchFound = true;
                    this.Second_Function(Fields_Progs);
                    document.getElementById("34389_group").style.display = "none";
                    document.getElementById("34190_group").style.display = "block";
                    document.getElementById("34191_group").style.display = "block";
                    document.getElementById("34203_group").style.display = "block";
    
                    loader.hide();
                    this.ssingleNotification("تم الدخول بنجاح", "top-right");
                    break; // Exit the loop once a match is found
                }
            }

            if (!matchFound) {
                loader.hide();
                this.singleNotification("كلمة المرور غير مطابقة", "top-right");
            }
        }
    },

    First_Hide(event){
        if(event == "نعم"){
            this.First_Function("68886", "test", "block");
        }else{
            this.First_Function("68886", "test", "none");
        }
    },

    Second_Hide(event){
        if(event == "نعم"){
            this.First_Function("68916", "DATE", "block");
            this.First_Function("68918", "details", "block");
        }else{
            this.First_Function("68916", "DATE", "none");
            this.First_Function("68918", "details", "none");
        }
    }
}