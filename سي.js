//Mariam
{  Eight_Case(event){
      
                 //تفريغ حقل الاقضية
        //نضع الاسم البرمجي الخاص بحقل الاقضية
        this.inputFormField["district"] = null;

        var Values = [
            "الأنبار",
            "بابل",
            "بغداد",
            "البصرة",
            "ديالى",
            "ذي قار",
            "صلاح الدين",
            "القادسية",
            "كركوك",
            "كربلاء المقدسة",
            "المثنى",
            "ميسان",
            "النجف الاشرف",
            "نينوى",
            "واسط",
        ],
        getdistinct =
            [
                [
                    "بروانة", "البغدادي", "الحبانية", "الحقلانية", "حديثة", "راوة", "الرطبة", "الرمادي", "الصقلاوية",
                    "العامرية", "عنه", "الرمانة", "العبيدي", "الفرات", "الفلوجة", "القائم", "كبيسة", "الكرمة",
                    "النخيب", "هيت", "الوفاء", "الوليد",
                ],//اقضية الانبار
                [
                    "أبي غرق", "الهاشمية", "الحلة", "الامام", "الاسكندرية", "الكفل", "المدحتية", "المحاويل", "المشروع",
                    "المسيب", "القاسم", "النيل", "الشوملي", "الطليعة", "جرف النصر (جرف الصخر)", "سدة الهندية",
                ],//اقضية بابل
                [
                    "ابي غريب", "العبايجي", "الفحامة", "الفرات", "الكرخ", "الكاظمية", "اللطيفية", "المحمودية",
                    "المأمون", "المنصور", "المشاهدة", "اليوسفية", "النصر والسلام", "الرشيد", "الطارمية",//الكرخ
                    "ابناء الرافدين", "الاعظمية", "الجسر", "الكرادة الشرقية", "المدائن", "المنورة", "الوحدة",
                    "الراشدية", "الرصافة", "الصديق الاكبر", "الصدر الاولى", "الصدر الثانية", "التاجي", "الزهور",
                    "بغداد الجديدة", "ذات السلاسل", "فلسطين",//الرصافة
                ],//اقضية بغداد
                [
                    "أبي الخصيب", "الدير", "البصرة", "الفاو", "الهارثة", "المدينة", "القرنة", "النشوة", "السيبة",
                    "الثغر", "الشهيد عز الدين سليم", "الزبير", "سفوان", "شط العرب", "طلحة", "أم قصر", "الامام الصادق",
                ],//اقضية البصرة
                [
                    "أبي صيدا", "العبارة", "الخالص", "المنصورية", "المقدادية", "الوجيهية", "السد العظيم", "السعدية",
                    "السلام", "بلدروز", "بني سعد", "بعقوبة", "بهرز", "هبهب", "جبارة", "جلولاء", "كنعان", "خانقين",
                    "مندلي", "قرة تبة", "سيف سعد",
                ],//اقضية ديالى
                [
                    "الدواية", "البطحاء", "الفضيلة", "الفجر", "الفهود", "الغراف", "الحمار (المنار)", "الاصلاح",
                    "الجبايش", "الناصرية", "النصر", "الرفاعي", "الشطرة", "الطار", "أور", "كرمة بني سعد", "قلعة سكر",
                    "سيد دخيل", "سوق الشيوخ", "عكيكة",
                ],//اقضية ذي قار
                [
                    "الدور", "الدجيل", "الضلوعية", "العلم", "الإسحاقي", "المعتصم", "امرلي", "الشرقاط", "الصينية",
                    "بيجي", "بلد", "دجلة", "سامراء", "سليمان بيك", "تكريت", "طوز خورماتو", "يثرب", "العوجة",
                ],//اقضية صلاح الدين
                [
                    "الدغارة", "الديوانية", "عفك", "البدير", "الحمزة", "المهناوية", "الشافعية", "الشامية",
                    "الشنافية", "الصلاحية", "السنية", "السدير", "غماس", "نفر", "سومر",
                ],//اقضية القادسية
                [
                    "دبس", "العباسي", "الحويجة", "الملتقى", "التون كبري", "الرشاد", "الرياض", "الزاب", "داقوق",
                    "كركوك", "ليلان", "قرة هنجير", "سركوان (القدس)", "شوان", "تازة", "يايجي",
                ],//اقضية كركوك
                [
                    "عين تمر", "الهندية", "الحر", "الحسينية", "الجدول الغربي", "ناحية الخيرات", "كربلاء",
                ],//اقضية كربلاء
                [
                    "الدراجي", "البصية", "الهلال", "الكرامة", "الخضر", "المجد", "الوركاء", "النجمي", "الرميثة",
                    "السلمان", "السماوة", "السوير",
                ],//اقضية المثنى
                [
                    "العدل", "العمارة", "علي الغربي", "علي الشرقي", "الكحلاء", "الخير", "الميمونة", "المجر الكبير",
                    "المشرح", "العزيز", "سيد أحمد الرفاعي", "السلام", "بني هاشم", "كميت", "قلعة صالح",
                ],//اقضية ميسان
                [
                    "العباسية", "الحيدرية", "الحيرة", "الحرية", "الكوفة", "المناذرة", "المشخاب", "القادسية",
                    "النجف", "الشبكة",
                ],//اقضية النجف
                [
                    "العياضية", "البعاج", "الحضر", "الكوير", "الموصل", "المحلبية", "القحطانية", "القيروان",
                    "القيارة", "القوش", "الشمال", "شبخان", "الشورة", "تل عبطة", "الحمدانية (بغديدا)", "برطلة",
                    "بعشيقة", "فايدة", "حمام العليل", "كنديناوة", "مخمور", "ملاقرة", "نمرود", "قراج", "ربيعة",
                    "سنجار", "تلعفر", "تلكيف", "وانة", "زيلكان", "زمار", "الفاروق",
                ],//اقضية نينوى
                [
                    "الخلفاء (دبوني)", "الذهب (زرباطية)", "الاحرار", "العزيزية", "البشائر", "الحي", "الكوت",
                    "الموفقية", "النعمانية", "الشحمية", "الصويرة", "الزبيدية", "بدرة", "جصان", "شيخ سعد",
                    "الحفرية (تاج الدين)", "ناحية واسط",
                ],//اقضية واسط
            ];

            /*
                document.getElementById("12345").style.display = "block"; ايعاز
                يمكن ابقائه في حالة كان حقل الاقضية مخفي فيمكن اظهاره ومن ثم فلترة قيمة من خلال الايعاز الثاني
                ولكن اذا كان حقل الاقضية ظاهر في جميع الاحوال فيمكن حذف هذا الايعاز

                حتى القيم تتسكن بالحقل الصحيح
                group_of_form
                المقصود بيه رقم المجموعه الي بيه القائمة المنسدله الي راح تتسكن بيها القيم بس ننقص من الرقم 1
                Fields
                المقصود بيه تسلسل الحقل داخل المجموعه مالته بس ننقص من الرقم 1

                في التسلسلين نحتاج ان نطرح ما قميته 1 من التسلسل الذي يتم اخذه
                مثلا اذا كان تسلسل المجموعة هو 3 فنكتب الرقم 2 داخل الايعاز
                ونفس الشيء مع تسلسل الحقل
            */
            for(var i = 0; i < Values.length; i++){
                if(event == Values[i]){
                    this.group_of_form[1].fields[1].properties[0].values = getdistinct[i];
                    break;
                }else{
                    this.group_of_form[1].fields[1].properties[0].values = [];
                }
          
            }
  var z = event
     if  ( z  == "بغداد"){
         
            document.getElementById("96936").style.display = "block";
        } else{
            document.getElementById("96936").style.display = "none";
    
     //   this.inputFormField["externalPortalMunSel"] = null;
        } 
                      
  },
    
    Baghdad_Boundary(event) {

    if (event == "داخل حدود البلدية") {

        // إظهار حقل بلديات أمانة بغداد
        document.getElementById("75775").style.display = "block";

    } else {

        // إخفاء حقل بلديات أمانة بغداد
        document.getElementById("75775").style.display = "none";

        // تفريغ الحقل
        this.inputFormField["externalPortalMunSel"] = null;
    }
}
  
  hideOne(event2) {
        var x = event2;
        if (x == "مكاتب المحافظات التابعة للمديرية") {
             document.getElementById("72600").style.display="block";     }
    else {
              document.getElementById("72600").style.display="none";    }  
    
                                                      },
  

thisOrThat(event1) {
        var y = event1;
        if (y == "مخول") {
             document.getElementById("72653").style.display="block";
            document.getElementById("72604").style.display="block";
          document.getElementById("72655").style.display="block";
            document.getElementById("72656").style.display="block";
            document.getElementById("72606").style.display="block";
          document.getElementById("72607").style.display="block";
             
        this.inputFormField.externalReqAppName = this.user.first_name;
        document.getElementsByName('externalReqAppName')[0].disabled = true;//الاسم الاول

        this.inputFormField.FatherName = this.user.middle_name;
        document.getElementsByName('FatherName')[0].disabled = true;//الاسم الثاني

        this.inputFormField.GrandFather = this.user.last_name;
        document.getElementsByName('GrandFather')[0].disabled = true;//الاسم الثالث
  
         this.inputFormField.externalReqAppMob = this.user.phone_num;
         document.getElementsByName('externalReqAppMob')[0].disabled = true;//رقم الهاتف
    
              this.inputFormField["externalReqOwnName"]=null;
                   document.getElementsByName('externalReqOwnName')[0].disabled = false;//رقم الهاتف
                 this.inputFormField["secondName"]=null;
                             document.getElementsByName('secondName')[0].disabled = false;//رقم الهاتف
                 this.inputFormField["ThirdName"]=null;
                             document.getElementsByName('ThirdName')[0].disabled = false;//رقم الهاتف
                 this.inputFormField["externalReqOwnMob"]=null;
                             document.getElementsByName('externalReqOwnMob')[0].disabled = false;//رقم الهاتف


          
        }
    else {

       document.getElementById("72653").style.display="none";  
      document.getElementById("72604").style.display="none";
      document.getElementById("72655").style.display="none"; 
      document.getElementById("72656").style.display="none"; 
      document.getElementById("72606").style.display="none";
      document.getElementById("72607").style.display="none";    
    
        this.inputFormField.externalReqOwnName = this.user.first_name;
              document.getElementsByName('externalReqOwnName')[0].disabled = true;//الاسم الاول
        this.inputFormField.secondName = this.user.middle_name;
              document.getElementsByName('secondName')[0].disabled = true;//الاسم الثاني
        this.inputFormField.ThirdName = this.user.last_name;
              document.getElementsByName('ThirdName')[0].disabled = true;//الاسم الثالث
         this.inputFormField.externalReqOwnMob = this.user.phone_num;
               document.getElementsByName('externalReqOwnMob')[0].disabled = true;//رقم الهاتف

}
    
                                                      }
  
}