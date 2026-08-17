{
    First_Hide(event){
        const Fields_Prog = [
            //بيانات ورثة المتوفي
            "firstnamee",      // اسم الوريث الاول
            "fatherwareeth",   // اسم اب الوريث
            "thiredwareeth",   // اسم جد الوريث
            "furthwareth",     // اسم الجد الرابع للوريث
            "laqb",            // اللقب
            "mothernamee",     // اسم ام الوريث
            "twoname",         // اسم اب الام للوريث
            "thiredmothere",   // اسم جد الام للوريث
            "birthdayy",       // تاريخ الميلاد
            "genderr",         // الجنس
            "sela",            // صلة الوريث من المشمول
            //بيانات تنازل الاصيل الحي للورثة
            "firstnamme",      // الاسم الاول
            "sacnednamme",     // اسم الاب
            "thirednamme",     // اسم الجد
            "furthnamme",      // اسم اب الجد
            "laaqb",           // اللقب
            "mothernamme",     // اسم الام
            "fathernameee",    // اسم اب الام
            "thierdnameee",    // اسم جد الام
            "birthdaayy",      // تاريخ الميلاد
            "geender",         // الجنس
            "sefaa",           // صلة القرابة من المشمول
        ];
        
        Fields_Prog.forEach((Clearing) => this.inputFormField[Clearing] = null);

        if(event == "تقديم الوريث للمشمول المتوفي"){
            document.getElementById("35475_group").style.display = "block";
            document.getElementById("35476_group").style.display = "none";
        }else if(event == "التقديم لتنازل المشمول الحي لاحد الورثة"){
            document.getElementById("35475_group").style.display = "none";
            document.getElementById("35476_group").style.display = "block";
        }else{
            document.getElementById("35475_group").style.display = "none";
            document.getElementById("35476_group").style.display = "none";
        }
    },
}
