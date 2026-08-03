{
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

            var branchesName = [
                "فرع بغداد الكرخ",
                "فرع محافظة الانبار",
                "فرع ديالى",
                "مكتب الفلوجة",
                "فرع بابل",
                "مكتب تلعفر",
                "مكتب الحمدانية",
                "فرع صلاح الدين",
                "فرع نينوى",
                "مكتب سامراء",
                "فرع محافظة كركوك",
                "مكتب سنجار",
                "مكتب خانقين",
                "للتجربة",
            ],

            phoneNumber = [
                "9647724293733",//فرع بغداد
                "9647800600267",//فرع محافظة الانبار
                "9647733774303",//فرع ديالى
                "9647505635090",//مكتب الفلوجة
                "9647748209050",//فرع بابل
                "9647740921510",//مكتب تلعفر
                "9647730922633",//مكتب الحمدانية
                "9647811567141",//فرع صللاح الدين
                "9647740860203",//فرع نينوى
                "9647713944979",//مكتب سامراء
                "9647702183634",//فرع محافظة كركوك
                "9647716972327",//مكتب سنجار
                "9647710395398",//مكتب خانقين
                "9647722972027",//للتجربة 1 كرار
                "9647708860872",//للتجربة 2 علي غني
                "9647811911618",//للتجربة 3 يوسف
            ]

            let matchFound = false; // Flag to track if a match is found
            var start_Num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                End_Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16];
            for(var i = 0; i < branchesName.length; i++){        
                if(this.inputFormField["Branches"] == branchesName[i]){
                    var sstart = start_Num[i], eend = End_Num[i];
                    for(var j = sstart; j <= eend; j++){                 
                        if(this.inputFormField["PhoneNumber"] == phoneNumber[j]){
                            matchFound = true;
                            document.getElementById("33644_group").style.display = "none";
                            document.getElementById("33360_group").style.display = "block";
                            document.getElementById("33361_group").style.display = "block";

                            loader.hide();
                            this.ssingleNotification("تم الدخول بنجاح", "top-right");
                            break; // Exit the loop once a match is found
                        }
                    }
                }
            }

            if (!matchFound) {
                loader.hide();
                this.singleNotification("رقم الهاتف غير مطابق مع المخول ", "top-right");
            }
        }
    },
}