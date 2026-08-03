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
                                                                                                                        tmafsol: '',
                                                                                                                            thsohada: '',
                                                                                                                                Sojana: '',
                                                                                                                                    Moj: ''

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
                { username: "وزارة الاتصالات", password: "5WRu54GNdmPBCs" },
                { username: "وزارة الإعمار والإسكان والبلديات والأشغال العامة", password: "4yK2aRVmwvy9NW" },
                { username: "وزارة التجارة", password: "RXzEYF9wrkPbvw" },
                { username: "وزارة التخطيط", password: "p745BW8wD6AaJ8" },
                { username: "وزارة التخطيط /هيئة الإحصاء ونظم المعلومات الجغرافية", password: "HAwUps9UofCXMK" },
                { username: "وزارة التربية", password: "pibzJ7X7yN4kAi" },
                { username: "وزارة الثقافة", password: "chs4LKfv6Kr3Rh" },
                { username: "وزارة الثقافة/هيئة السياحة", password: "4U3TBV3SAaPuYi" },
                { username: "وزارة الثقافة/هيئة الاثار والتراث", password: "mJ5dkw3XSqt9xa" },
                { username: "وزارة الدفاع", password: "7WabY3qrRxPNZm" },
                { username: "وزارة الزراعة", password: "Lz9c2uWVTAhpme" },
                { username: "وزارة الشباب والرياضة", password: "5qKJf2Hn7GtP4t" },
                { username: "وزارة الصحة", password: "7AKdKKvLPRfNH9" },
                { username: "وزارة الصناعة والمعادن", password: "gWQsBeC2BRhcZZ" },
                { username: "وزارة العدل", password: "KbFwbVED7994kt" },
                { username: "وزارة العمل والشؤون الاجتماعية", password: "toBsXyoGMHgYN4" },
                { username: "وزارة العمل والشؤون الاجتماعية/هيئة الحماية الاجتماعية", password: "2pRxRFWnHWBh9q" },
                { username: "وزارة العمل والشؤون الاجتماعية/هيئة حقوق ذوي الإعاقة والاحتياجات الخاصة", password: "guoX7Pcu2usnJa" },
                { username: "وزارة الكهرباء", password: "d24FLAiysY7Pmi" },
                { username: "وزارة المالية", password: "wk43ePkqQNoxSN" },
                { username: "وزارة الموارد المائية", password: "tsaSK7jQtFRyxR" },
                { username: "وزارة النفط", password: "BZQaCTdCVp3Lpn" },
                { username: "وزارة النقل", password: "dT37q4XwALnfYw" },
                { username: "وزارة الهجرة والمهجرين", password: "7oL7NqTjjkznUN" },
                { username: "وزارة الداخلية", password: "PmZ9nZUBMKnQdj" },
                { username: "وزارة العلوم والتكنولوجيا", password: "Nf5gxUiETCFYdp" },
                { username: "وزارة التعليم العالي والبحث العلمي", password: "4SYsfAzAMvUM5H" },
                { username: "وزارة البيئة", password: "DyDEpZ68tkr4j9" },
                { username: "وزارة الخارجية", password: "csf3He6vFhYypf" },
                { username: "البنك المركزي", password: "4ch3YoykptEpWU" },
                { username: "الهيئة الوطنية العليا للمساءلة والعدالة", password: "af3eBJES854eBX" },
                { username: "الهيئة الوطنية للاستثمار", password: "AuUkh3hzv2MKEx" },
                { username: "محافظة بغداد", password: "aG2obJvi4pRHpm" },
                { username: "محافظة الانبار", password: "gCgjM8CaTN4gtX" },
                { username: "محافظة صلاح الدين", password: "VtuCH4Nx7exwRn" },
                { username: "محافظة كربلاء المقدسة", password: "TtVfav6qEDiick" },
                { username: "محافظة النجف الاشرف", password: "dNGEfC8EnEog8C" },
                { username: "محافظة ميسان", password: "e6Z3MHvodYDU3w" },
                { username: "محافظة ذي قار", password: "YZPSm8DUVmSxo7" },
                { username: "محافظة المثنى", password: "np9iYZ3iNRbZkL" },
                { username: "محافظة واسط", password: "66A7k6EBCaCDUh" },
                { username: "محافظة نينوى", password: "4Z476x9WrMdfSK" },
                { username: "محافظة كركوك", password: "svhQ4xhAa5aGzm" },
                { username: "محافظة ديالى", password: "brzdeiY5RYGcBJ" },
                { username: "محافظة الديوانية", password: "t2WJWt4wxv5HWg" },
                { username: "محافظة البصرة", password: "yNjDuTMTo9Vinm" },
                { username: "محافظة بابل", password: "yaY47eiEcg6CGD" },
                { username: "أمانة بغداد", password: "G5M4abQ3W52vtG" },
                { username: "ديوان الرقابة المالية الاتحادي", password: "GjFf6dDNB39p8T" },
                { username: "ديوان الوقف السني", password: "auFwBaP784zgEX" },
                { username: "ديوان الوقف الشيعي", password: "xeHpYLeZA4vrND" },
                { username: "ديوان أوقاف الديانات المسيحية والأيزيدية والصابئة المندائية", password: "ScffcURX8QJThq" },
                { username: "مجلس القضاء الأعلى", password: "NZ2ihRFeadyVo5" },
                { username: "مؤسسة السجناء", password: "pMwWPhXA4BiwhM" },
                { username: "مؤسسة الشهداء", password: "czxCoCxPSxay6h" },
                { username: "هيئة الحج والعمرة", password: "9z3FYfqXjtCVtq" },
                { username: "هيئة التصنيع الحربي", password: "BBM3vUF5DJdu7o" },
                { username: "هيئة المنافذ الحدودية", password: "rid23fjLK7z8Nt" },
                { username: "هيئة النزاهة الاتحادية", password: "Pxm9byc82GyYNB" },
                { username: "هيئة دعاوى الملكية", password: "A4iWof6QpLPr5f" },
                { username: "مجلس الخدمة الاتحادي", password: "4FnLu4dcX5pKGH" },
                { username: "جهاز الامن الوطني العراقي", password: "8nvpdZZky8VezH" },
                { username: "جهاز المخابرات الوطني العراقي", password: "7o96AuhBnsEEkj" },
                { username: "المفوضية العليا المستقلة للانتخابات", password: "e46NcPVHRWSLsX" },
                { username: "المصرف العراقي للتجارة", password: "WM6DV8WSsrQhnk" },
                { username: "مستشارية الامن القومي", password: "5iud2MSTDeJRur" },
                { username: "المجمع العلمي العراقي", password: "LsuAQjmQoJdV7V" },
                { username: "الهيئة العامة لتخصيص الواردات الاتحادية", password: "6Bd5wgT6BYPMKd" },
                { username: "صندوق إعادة اعمار المناطق المتضررة", password: "NupZr7VTqprP9G" },
                { username: "صندوق اعمار المحافظات الأكثر فقراً", password: "52Ewbz25FVfNDW" },
                { username: "هيئة الطاقة الذرية  العراقية", password: "v8kr7fZk23oWWW" },
                { username: "جهاز مكافحة الإرهاب", password: "APaKtXdikZ67j6" },
                { username: "صندوق اعمار محافظة ذي قار", password: "kCiatwM3Fsh3YY" },
                { username: "الهيئة الوطنية للرقابة النووية والاشعاعية والكيميائية والبايولوجية", password: "NTM4zQSegVzQLG" },
                { username: "الهيئة العليا للتنسيق بين المحافظات", password: "6nFRDAmcU3vceQ" },
                { username: "مجلس المنافسة ومنع الاحتكار", password: "J7FHLZ7tH6gU76" },
                { username: "هيئة المستشارين", password: "6ZRtCaP6LnBf47" },
                { username: "رئاسة الجمهورية", password: "77idHtMufT6v6u" },
                { username: "المحكمة الاتحادية", password: "password50" }
            ];

            // Check if the entered username and password match any of the valid credentials
            const isValid = validCredentials.some(
                (cred) =>
                    cred.username === this.inputFormField["TheMin"] &&
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
                document.getElementById("23148_group").style.display = "block";
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
        this.inputFormField.tmafsol = '';
        this.inputFormField.thsohada = '';
        this.inputFormField.Sojana = '';
        this.inputFormField.Moj = '';
    },
    ezero(eventzero){
        var m = eventzero;
        if (m === "نعم") {
          document.getElementById("49299").style.display = "block";
        }else if (m === "كلا") {
          document.getElementById("49299").style.display = "none";
          this.inputFormField["FaslYears"] = null;
        }else {
          document.getElementById("49299").style.display = "none";
          this.inputFormField["FaslYears"] = null;
        }
    },
    eone(eventone){
        var y = eventone;
        if (y === "نعم") {
          document.getElementById("49301").style.display = "block";
        } else if (y === "كلا") {
          document.getElementById("49301").style.display = "none";
          this.inputFormField["LawYears"] = null;
        }
        else {
          document.getElementById("49301").style.display = "none";
          this.inputFormField["LawYears"] = null;
        }
    },
    etwo(eventtwo){
        var c = eventtwo;
        if (c === "نعم") {
            document.getElementById("49303").style.display = "block";
        } else if (c === "كلا") {
            document.getElementById("49303").style.display = "none";
            this.inputFormField["yearofcon"] = null;
        }else{
          document.getElementById("49303").style.display = "none";
          this.inputFormField["yearofcon"] = null;
        }
    },
    ethree(eventthree){
        var r = eventthree;
        if (r === "نعم") {
          document.getElementById("49305").style.display = "block";
          document.getElementById("49306").style.display = "block";
        }else if (r === "كلا") {
          document.getElementById("49305").style.display = "none";
          document.getElementById("49306").style.display = "none";
          this.inputFormField["OtherName"] = null;
          this.inputFormField["OtherYearOfSe"] = null;
        }else{
          document.getElementById("49305").style.display = "none";
          document.getElementById("49306").style.display = "none";
			    this.inputFormField["OtherName"] = null;
          this.inputFormField["OtherYearOfSe"] = null;

        }
    },
  TheHired(eventfour){
    var p=eventfour;
    if(p=="شاغل منصب"){
        document.getElementById("50514").style.display = "block";
        document.getElementById("50520").style.display = "block";
        document.getElementById("50521").style.display = "block";
    }else if(p=="مرشح"){
        document.getElementById("50514").style.display = "none";
        document.getElementById("50520").style.display = "none";
        document.getElementById("50521").style.display = "none";
        document.getElementById("50644").style.display = "none";
        this.inputFormField["TheRole"] = null;
        this.inputFormField["IsTheR"] = null;
        this.inputFormField["TheMinistries"] = null;
    }else{
        document.getElementById("50514").style.display = "none";
        document.getElementById("50520").style.display = "none";
        document.getElementById("50521").style.display = "none";
            
        this.inputFormField["TheRole"] = null;
        this.inputFormField["IsTheR"] = null;
        this.inputFormField["TheMinistries"] = null;
    }
  },
  BranchHiding(event1){
    var Branch_Names = [
          ["العلاقات الخارجية والاعلام","القانونية"," الدائرة الادارية والمالية","التخطيط والمتابعة","شركة السلام العامة","شركة السلام العامة","الشركة العامة للبريد والتوفير"
            ,"الشركة العامة للاتصالات والمعلوماتية","الشؤون الإدارية","الشؤون الفنية"], //وزارة الاتصالات
            ["المقر الرئيسي"]//مؤسسة الشهداء
          ];

    var x = event1;
      
    if (x == "وزارة الاتصالات"){
        this.group_of_form[4].fields[4].properties[0].values = Branch_Names[0];
        document.getElementById("50644").style.display = "block";
    }else if (x == "مؤسسة الشهداء"){
        this.group_of_form[4].fields[4].properties[0].values = Branch_Names[1];
        document.getElementById("50644").style.display = "block";
    }else{
        document.getElementById("50644").style.display = "none";
        this.inputFormField["workplace"] = null;
    }
  }
}