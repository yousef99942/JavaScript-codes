{
    inputFormField: {
        UserName: '',           // تصفير اسم المستخدم
            Password: '',           // تصفير كلمة المرور
                TheFullName: '',                 // تصفير حقل gen
                    TheMotherName: '',               // تصفير الاسم الأول
                        GenderOf: '',               // تصفير الاسم الثاني
                            BirthPlace: '',               // تصفير الاسم الثالث
                                BirthDate: '',              // تصفير الاسم الرابع
                                    TheAddress: '',              // تصفير رقم الهاتف
                                        ThePhone: '',              // تصفير القضاء
                                            EduDetails: '',               // تصفير نوع السكن
                                                FirstCer: '',           // تصفير النقطة القريبة
                                                    DuringHire: '',             // تصفير نوع الطلب
                                                        FirstHiringDate: '',              // تصفير حقل reqreq
                                                            Again: '',                 // تصفير الطلب
                                                                Rank: '',             // تصفير التصنيف
                                                                    EduTitle: '',               // تصفير تفاصيل الطلب
                                                                        TheExp: '',                // تصفير التاريخ
                                                                            Mafsoolen: '',             // تصفير reqperh
                                                                                Sho: '',
                                                                                    PrisRu: '',
                                                                                        Taweed: '',
                                                                                            TheDuration: '',
                                                                                                jobtittleinfo: '',
                                                                                                    jobtittletwo: '',
                                                                                                        dawrat: '',
                                                                                                            kbrat: '',
                                                                                                                aqubat: '',
                                                                                                                    taqredat: '',
   },
    // دالة لإظهار إشعار بالخطأ
    singleNotification(notifyText, position){
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

    // دالة لإظهار إشعار بالنجاح
    singleNotificationSuccess(notifyText, position) {
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

    // دالة للتحقق من بيانات المستخدم
    checkEmployee(event) {
        if (event) {
            let loader = this.$loading.show({
                container: this.$refs.formContainer,
                loader: "dots",
                transition: "fade",
                color: "#c30734"
            });
            // create user and paswword for data entry :- 
            //from here .......
            //"       " first one is the user  , "        " second one is the password


            const validCredentials = [
                { username: "user1", password: "password1" },
                { username: "user2", password: "password2" },
                { username: "user3", password: "password3" },
                { username: "user4", password: "password4" },
                { username: "user5", password: "password5" },
                { username: "user6", password: "password6" },
                { username: "user7", password: "password7" },
                { username: "user8", password: "password8" },
                { username: "user9", password: "password9" },
                { username: "user10", password: "password10" },
                { username: "user11", password: "password11" },
                { username: "user12", password: "password12" },
                { username: "user13", password: "password13" },
                { username: "user14", password: "password14" },
                { username: "user15", password: "password15" },
                { username: "user16", password: "password16" },
                { username: "user17", password: "password17" },
                { username: "user18", password: "password18" },
                { username: "user19", password: "password19" },
                { username: "user20", password: "password20" },
                { username: "user21", password: "password21" },
                { username: "user22", password: "password22" },
                { username: "user23", password: "password23" },
                { username: "user24", password: "password24" },
                { username: "user25", password: "password25" },
                { username: "user26", password: "password26" },
                { username: "user27", password: "password27" },
                { username: "user28", password: "password28" },
                { username: "user29", password: "password29" },
                { username: "user30", password: "password30" },
                { username: "user31", password: "password31" },
                { username: "user32", password: "password32" },
                { username: "user33", password: "password33" },
                { username: "user34", password: "password34" },
                { username: "user35", password: "password35" },
                { username: "user36", password: "password36" },
                { username: "user37", password: "password37" },
                { username: "user38", password: "password38" },
                { username: "user39", password: "password39" },
                { username: "user40", password: "password40" },
                { username: "user41", password: "password41" },
                { username: "user42", password: "password42" },
                { username: "user43", password: "password43" },
                { username: "user44", password: "password44" },
                { username: "user45", password: "password45" },
                { username: "user46", password: "password46" },
                { username: "user47", password: "password47" },
                { username: "user48", password: "password48" },
                { username: "user49", password: "password49" },
                { username: "user50", password: "password50" }
            ];

            // Check if the entered username and password match any of the valid credentials
            const isValid = validCredentials.some(
                (cred) =>
                    cred.username === this.inputFormField["UserName"] &&
                    cred.password === this.inputFormField["Password"]
            );

            if (isValid) {
                document.getElementById("23117_group").style.display = "none";
                document.getElementById("23111_group").style.display = "block";
                document.getElementById("23112_group").style.display = "block";
                document.getElementById("23113_group").style.display = "block";
                document.getElementById("23114_group").style.display = "block";
                document.getElementById("23115_group").style.display = "block";
                document.getElementById("23116_group").style.display = "block";
                loader.hide();
                this.singleNotificationSuccess(
                    "تم الدخول بنجاح",
                    "top-right"
                );
            } else {
                loader.hide();
                this.singleNotification(
                    "اسم المستخدم او كلمة المرور خاطئة",
                    "top-right"
                );
            }
        }
    },

    // دالة لتصفير الحقول
    resetFormFields() {
        this.inputFormField.UserName = '';           // تصفير اسم المستخدم
        this.inputFormField.Password = '';           // تصفير كلمة المرور
        this.inputFormField.TheFullName = '';                 // تصفير حقل gen
        this.inputFormField.TheMotherName = '';               // تصفير الاسم الأول
        this.inputFormField.GenderOf = '';               // تصفير الاسم الثاني
        this.inputFormField.BirthPlace = '';               // تصفير الاسم الثالث
        this.inputFormField.BirthDate = '';              // تصفير الاسم الرابع
        this.inputFormField.TheAddress = '';              // تصفير رقم الهاتف
        this.inputFormField.ThePhone = '';              // تصفير القضاء
        this.inputFormField.EduDetails = '';               // تصفير نوع السكن
        this.inputFormField.FirstCer = '';           // تصفير النقطة القريبة
        this.inputFormField.DuringHire = '';             // تصفير نوع الطلب
        this.inputFormField.FirstHiringDate = '';              // تصفير reqreq
        this.inputFormField.Again = '';                 // تصفير الطلب
        this.inputFormField.Rank = '';             // تصفير التصنيف
        this.inputFormField.EduTitle = '';               // تصفير تفاصيل الطلب
        this.inputFormField.TheExp = '';                // تصفير التاريخ
        this.inputFormField.Mafsoolen = '';             // تصفير reqperh
        this.inputFormField.Sho = '';
        this.inputFormField.PrisRu = '';
        this.inputFormField.Taweed = '';
        this.inputFormField.TheDuration = '';
        this.inputFormField.jobtittleinfo = '';
        this.inputFormField.jobtittletwo = '';
        this.inputFormField.dawrat = '';
        this.inputFormField.kbrat = '';
        this.inputFormField.aqubat = '';
        this.inputFormField.taqredat = '';
    }
}