{
  First_Hide(event){
        let Fields_Progs = [
            "part", //سلكتر
            //مجموعة المواطن
            "gove", //المحافظة
            "dist", //القضاء
            "gender", //الجنس
            "Disab", //العلامات الفارقة
            "work", //نوع العمل
            "certification", //التحصيل الدراسي
            "Social", //الحالة الاجتماعية
            //مجموعة المورد
            "prov", //مورد(مزود خارجي)1
            "placework", //مكان العمل
            "speci", //مجال العمل والتخصص
            "ourorganiz", //الجهة التي تتعامل معها في مؤسستنا
            "agency", //الوكالة الدولية الحاصل عليها
            "years", //عدد سنوات التعامل
            "rept", //تكرارية التعامل
            //مجموعة الشريك
            "opni", //التعامل مع مؤسستنا يحقق منفعة متبادلة
            "eazy", //سهولة التواصل مع اصحاب القرار في مؤسستنا وبدون تعقيد
            "delll", //مؤسستنا تفي بالتزاماتها
            "rel", //علاقتكم مع مؤسستنا حققت لكم قيمة مضافة
            //سمعة المؤسسة
            "FirstQuestion", //يعكس الأعلام صورة حقيقية عن اداء مؤسستنا
            "SecondQuestion", //تتمتع مؤسستنا بحيادية ومصداقية وشفافية في التعامل
            "ThirdQuestion", //انطباعكم الحالي عن اداء مؤسستنا افضل من الأنطباع السابق
            "FourthQuestion", //لدى مؤسستنا نشاطات مجتمعية تهدف الى تعزيز سمعتها
            "FifthQuestion", //تعكس مؤسستنا صورة ايجابية عن الأداء الحكومي
        ];

        Fields_Progs.forEach((Clearing) => this.inputFormField[Clearing] = null); //تفريغ الحقول من المحتوى الذي بداخلها

        if(event == "مواطن"){
            document.getElementById("35643_group").style.display = "block"; //مجموعة المواطن
            document.getElementById("35644_group").style.display = "none"; //مجموعة المورد
            document.getElementById("35727_group").style.display = "none"; //مجموعة الشريك
                
            document.getElementById("96822").style.display = "none"; //سلكتر الشريك        
        }else if(event == "مزود خارجي"){
            document.getElementById("35643_group").style.display = "none"; //مجموعة المواطن
            document.getElementById("35644_group").style.display = "block"; //مجموعة المورد
            document.getElementById("35727_group").style.display = "block"; //مجموعة الشريك
                document.getElementById("35722_group").style.display = "block"; //سمعة المؤسسة
            document.getElementById("96822").style.display = "none"; //سلكتر الشريك        
        }else if(event == "شريك"){
            document.getElementById("35643_group").style.display = "none"; //مجموعة المواطن
            document.getElementById("35644_group").style.display = "none"; //مجموعة المورد
            document.getElementById("35727_group").style.display = "block"; //مجموعة الشريك
            document.getElementById("35722_group").style.display = "block"; //سمعة المؤسسة
            document.getElementById("96822").style.display = "block"; //سلكتر الشريك        
        }else{
            document.getElementById("35643_group").style.display = "none"; //مجموعة المواطن
            document.getElementById("35644_group").style.display = "none"; //مجموعة المورد
            document.getElementById("35727_group").style.display = "none"; //مجموعة الشريك
            document.getElementById("35722_group").style.display = "none"; //سمعة المؤسسة
            document.getElementById("96822").style.display = "none"; //سلكتر الشريك        
        }
    },

    Sceond_Hide(event) {
        var Fields_Prog = [
            //مؤسسات حكومية
            "gov",       // الجهة الحكومية
            "poscode",   // المنصب
            "govname",   // اسم الجهة الحكومية
            "location",  // موقع العمل
            "kind",      // نوع العمل
            "company",   // الجهة التي تتعامل معها في مؤسستنا
            "repear",     // اختر نوع تكرارية التعامل
            //جهات مانحة
            "Nationality", //جنسية الجهة المانحة
            "type", //نوع العمل
            "ourorg", //الجهة التي تتعامل معها في مؤسستنا
            "redeal", //تكرارية التعامل
        ];

        Fields_Progs.forEach((Clearing) => this.inputFormField[Clearing] = null); //تفريغ الحقول من المحتوى الذي بداخلها
            
        if(event == "مؤسسات حكومية"){
            document.getElementById("35666_group").style.display = "block"; //مؤسسات حكومية
            document.getElementById("35667_group").style.display = "none"; //جهات مانحة
        }else if(event == "جهات مانحة"){
            document.getElementById("35666_group").style.display = "none"; //مؤسسات حكومية
            document.getElementById("35667_group").style.display = "block"; //جهات مانحة
        }else{
            document.getElementById("35666_group").style.display = "none"; //مؤسسات حكومية
            document.getElementById("35667_group").style.display = "none"; //جهات مانحة
        }
    },

    Third_Hide(event){
        let Fields_Progs = [
            "sha", //يتم مشاركتكم في تصميم الخدمات المقدمة لكم من مؤوسستنا
            "advise", //تقوم مؤسستنا بتقديم المشورة والدعم للأنشطة التي تقومون بها
            "exe", //تم تنفيذ التحسينات حسب ملاحظاتكم (التغذية الراجعة ) الناتجة عن المشاركة
            "culture", //لدى مؤسساتنا ثقافة مؤسسية لتعميق فاعلية التعاون
        ];

        Fields_Progs.forEach((Clearing) => this.inputFormField[Clearing] = null); //تفريغ الحقول من المحتوى الذي بداخلها

        let Fields_ID = [
            "96335", //يتم مشاركتكم في تصميم الخدمات المقدمة لكم من مؤوسستنا
            "96337", //تقوم مؤسستنا بتقديم المشورة والدعم للأنشطة التي تقومون بها
            "96344", //تم تنفيذ التحسينات حسب ملاحظاتكم (التغذية الراجعة ) الناتجة عن المشاركة
            "96345", //لدى مؤسساتنا ثقافة مؤسسية لتعميق فاعلية التعاون
        ];

        if(event ==  "نعم"){
            Fields_ID.forEach((Clearing) => document.getElementById(Clearing).style.display = "block"); //اظهار الحقول
        }else{
            Fields_ID.forEach((Clearing) => document.getElementById(Clearing).style.display = "none"); //اخفاء الحقول
        }
    },
}