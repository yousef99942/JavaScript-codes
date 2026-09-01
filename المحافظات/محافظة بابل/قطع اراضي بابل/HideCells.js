{
    First_Hide(event) {
        var catTypeIDs = ["72517", "72518"];
        var catTypeNames = ["Type", "MilitaryType"];

        if (event == "موظفي ومنتسبين مديرية الاحوال المدنية") {
            document.getElementById("72517").style.display = "block";
            this.inputFormField["Type"] = null;
        } else {
            document.getElementById("72517").style.display = "none";
            this.inputFormField["Type"] = null;
        }

    },

    //"موظفي ومننتسبين مديرية الاحوال المدنية"
    Second_Hide(event) {
        if (event == "عسكري") {
            document.getElementById("72518").style.display = "block";
            this.inputFormField["MilitaryType"] = null;
        } else {
            document.getElementById("72518").style.display = "none";
            this.inputFormField["MilitaryType"] = null;
        }
    },

    Third_Hide(event) {
        if (event == "نعم") {
            document.getElementById("70969").style.display = "block";
            this.inputFormField["wefs"] = null;
            this.Points_Counts();
        } else {
            document.getElementById("70969").style.display = "none";
            this.inputFormField["wefs"] = null;
            this.Points_Counts();
        }
    },

    Fourth_Hide(event) {
        if (event == "نعم") {
            document.getElementById("70834").style.display = "block";
            this.inputFormField["DisablilityN"] = null;
        } else {
            document.getElementById("70834").style.display = "none";
            this.inputFormField["DisablilityN"] = null;
        }
    },

    Fifth_Hide(event) {
        if (event == "متزوج/ة" || event == "ارمل/ة" || event == "مطلق/ة") {
            if (event == "متزوج/ة") {
                document.getElementById("72406").style.display = "block"; //عدد الزوجات
                this.inputFormField["wiff"] = null;
            } else {
                document.getElementById("72406").style.display = "none"; //عدد الزوجات
                this.inputFormField["wiff"] = null;
            }

            document.getElementById("72410").style.display = "block"; //هل لديك اطفال
            this.inputFormField["HavingChild"] = null;

            document.getElementById("72407").style.display = "none"; //رقم كتاب الاعالة
            this.inputFormField["nambook"] = null;

            document.getElementById("72408").style.display = "none"; //تاريخ كتاب الاعانة
            this.inputFormField["daaatbook"] = null;
        } else if (event == "اعزب/ باكر") {
            document.getElementById("72410").style.display = "none"; //هل لديك اطفال
            this.inputFormField["HavingChild"] = null;

            document.getElementById("72407").style.display = "block"; //رقم كتاب الاعالة
            this.inputFormField["nambook"] = null;

            document.getElementById("72408").style.display = "block"; //تاريخ كتاب الاعانة
            this.inputFormField["daaatbook"] = null;

            document.getElementById("72406").style.display = "none"; //عدد الزوجات
            this.inputFormField["wiff"] = null;
        } else {
            document.getElementById("72410").style.display = "none"; //هل لديك اطفال
            this.inputFormField["HavingChild"] = null;

            document.getElementById("72407").style.display = "none"; //رقم كتاب الاعالة
            this.inputFormField["nambook"] = null;

            document.getElementById("72408").style.display = "none"; //تاريخ كتاب الاعانة
            this.inputFormField["daaatbook"] = null;

            document.getElementById("72406").style.display = "none"; //عدد الزوجات
            this.inputFormField["wiff"] = null;
        }
    },

    //مال نقاط المفاضلة
    Points_Counts() {
        var Points_Sum = 0;

        if (
            this.inputFormField.SelectCategory == "موظفي محافظة بابل" ||
            this.inputFormField.SelectCategory == "موظفي مديرية عقارات الدولة" ||
            this.inputFormField.SelectCategory == "موظفي مديرية البلديات" ||
            this.inputFormField.SelectCategory == "موظفي الدوائر الاصلاحية" ||
            this.inputFormField.SelectCategory == "موظفي جهاز المخابرات" ||
            this.inputFormField.SelectCategory == "موظفي ومنتسبين مديرية الاحوال المدنية" ||
            this.inputFormField.SelectCategory == "الضباط الطياريين" ||
            this.inputFormField.SelectCategory == "موظفي الرقابة المالية" ||
            this.inputFormField.SelectCategory == "موظفي ديوان محافظة بابل" ||
            this.inputFormField.SelectCategory == "موظفي المحاكم" ||
            this.inputFormField.SelectCategory == "اتحاد الاذاعيين" ||
            this.inputFormField.SelectCategory == "الصحفيين" ||
            this.inputFormField.SelectCategory == "موظفي الزراعة" ||
            this.inputFormField.SelectCategory == "موظفي الطابو"
        ) {
            //مال الخبرات
            if (this.inputFormField.years != null || this.inputFormField.years != "") {
                var Years_Num = parseInt(this.inputFormField.years);
                if (Years_Num > 0) {
                    Points_Sum += Years_Num;
                }
            }
        }

        //مال المتزوج
        if (this.inputFormField.maratialStatus == "متزوج/ة") {
            //عدد الزوجات
            if (this.inputFormField.wiff != null || this.inputFormField.wiff != "") {
                var Wife_Num = parseInt(this.inputFormField.wiff);
                if (Wife_Num > 0) {
                    Points_Sum += Wife_Num;
                }
            }
        }

        if (
            (
                this.inputFormField.maratialStatus == "متزوج/ة" ||
                this.inputFormField.maratialStatus == "ارمل/ة" ||
                this.inputFormField.maratialStatus == "مطلق/ة"
            ) &&
            this.inputFormField.HavingChild == "نعم"
        ) {
            //عدد الاطفال
            if (this.inputFormField.numberch != null || this.inputFormField.numberch != "") {
                var Children_Num = parseInt(this.inputFormField.numberch);
                if (Children_Num > 0) {
                    Points_Sum += Children_Num;
                }
            }
        }

        Points_Sum = Points_Sum.toString();
        this.inputFormField.ThePoints = Points_Sum;
        console.log(Points_Sum)
    },

    //مال فلترة عنوان القطعة السكنية
    First_Filter(event) {
        this.inputFormField["set"] = null;
        this.group_of_form[1].fields[23].properties[0].values = [];

        var Showed_Values = [
            [
                //الحلة
                "الحلة", "ابي غرق", "الكفل",
                //المسيب
                "المسيب", "الاسكندرية", "السدة", "جرف النصر", "سوراء",
                //الهاشمية
                "الهاشمية", "القاسم", "الابراهيمية", "المدحتية", "الشوملي", "الطليعة",
                //كوثى
                "كوثى",
                //المحاويل
                "المحاويل", "النيل", "الامام",
            ],//الحلة
            ["المسيب", "الاسكندرية", "السدة", "جرف النصر", "سوراء",],//المسيب
            ["الهاشمية", "القاسم", "الابراهيمية", "المدحتية", "الشوملي", "الطليعة",],//الهاشمية
            //الشويلي
            ["كوثى",],//كوثى
            ["المحاويل", "النيل", "الامام",],//المحاويل
        ];

        if (event == "الحلة") {
            this.group_of_form[1].fields[23].properties[0].values = Showed_Values[0];
        } else if (event == "المسيب") {
            this.group_of_form[1].fields[23].properties[0].values = Showed_Values[1];
        } else if (event == "الهاشمية") {
            this.group_of_form[1].fields[23].properties[0].values = Showed_Values[2];
        } else if (event == "كوثى") {
            this.group_of_form[1].fields[23].properties[0].values = Showed_Values[3];
        } else if (event == "المحاويل") {
            this.group_of_form[1].fields[23].properties[0].values = Showed_Values[4];
        } else if (
            event == "ابي غرق" || event == "الكفل" || //نواحي الحلة
            event == "الاسكندرية" || event == "السدة" || event == "جرف النصر" || event == "سوراء" || //نواحي المسيب
            event == "القاسم" || event == "الابراهيمية" || event == "المدحتية" || event == "الشوملي" || event == "الطليعة" || //نواحي الهاشمية
            event == "النيل" || event == "الامام"
        ) {
            this.group_of_form[1].fields[23].properties[0].values = [event];
        } else {
            this.group_of_form[1].fields[23].properties[0].values = [];
        }
    },

    //هل لديك اطفال؟
    Eight_Hide(event) {
        if (event == "نعم") {
            document.getElementById("70242").style.display = "block";
            this.inputFormField["numberch"] = null;

            document.getElementById("72407").style.display = "none";//رقم كتاب الاعالة
            this.inputFormField["nambook"] = null;

            document.getElementById("72408").style.display = "none";//تاريخ كتاب الاعالة
            this.inputFormField["daaatbook"] = null;
        } else if (
            (this.inputFormField.maratialStatus == "ارمل/ة" || this.inputFormField.maratialStatus == "مطلق/ة") &&
            event == "كلا"
        ) {
            document.getElementById("70242").style.display = "none";
            this.inputFormField["numberch"] = null;

            document.getElementById("72407").style.display = "block";//رقم كتاب الاعالة
            this.inputFormField["nambook"] = null;

            document.getElementById("72408").style.display = "block";//تاريخ كتاب الاعالة
            this.inputFormField["daaatbook"] = null;
        } else {
            document.getElementById("70242").style.display = "none";
            this.inputFormField["numberch"] = null;

            document.getElementById("72407").style.display = "none";//رقم كتاب الاعالة
            this.inputFormField["nambook"] = null;

            document.getElementById("72408").style.display = "none";//تاريخ كتاب الاعالة
            this.inputFormField["daaatbook"] = null;
        }
    }
}