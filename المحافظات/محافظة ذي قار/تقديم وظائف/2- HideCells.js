{
    Second_Filter(event){
        /*
        Selected_Value المسمى الوظيفي
        Department القسم
        Qulification المؤهلات
        Exp_Value الخبرة
        Needing_Value المتطلبات الفنية
        Requriments معلومات اخرى
        */
        const Jobs = [
            {
                Selected_Value: "فني لوحة تحكم",
                Department: "العمليات الميدانية",
                Qulification: "دبلوم تقني",
                Exp_Value: "13 سنة كحد ادنى في نفط وغاز",
                Needing_Value: "التميز التشغيلي - التحكم بالعمليات - التشغيل والايقاف - تحديد وحل المشكلات - الامتثال التنظيمي - تقارير التسليم - الاستجابة للطوارئ",
                Requriments: "العمل في غرفة التحكم/الموقع - نظام ورديات - لغة إنجليزية قوية - خبرة في أنظمة PMCS/DCS ميزة - وعي بالسلامة HSE"
            },
            {
                Selected_Value: "فني كهرباء - نقل وتوزيع",
                Department: "العمليات الميدانية",
                Qulification: "دبلوم هندسة كهربائية او ذات صلة",
                Exp_Value: "13 سنة كحد ادنى في نفط وغاز",
                Needing_Value: "صيانة وقائية/تصحيحية - عمليات تبديل LV/HV - تركيبات كهربائية - استكشاف اعطال أنظمة التحكم",
                Requriments: "العمل الميداني/الموقع - نظام ورديات - لغة إنجليزية قوية - خبرة في أنظمة LV/HV - وعي بالسلامة الكهربائية وHSE"
            },
            {
                Selected_Value: "فني انتاج",
                Department: "العمليات الميدانية",
                Qulification: "دبلوم هندسة او مؤهل ذي صلة",
                Exp_Value: "13 سنة كحد ادنى كفني انتاج",
                Needing_Value: "العناية الأساسية بالمعدات EBC - استكشاف الأعطال - التشغيل التجريبي - تحسين العمليات",
                Requriments: "العمل الميداني - نظام ورديات (نهار/ليل) - لغة إنجليزية قوية - يُفضل خبرة في النفط والغاز"
            },
            {
                Selected_Value: "تنفيذي مشرف مواقع خارجية",
                Department: "العمليات الميدانية",
                Qulification: "درجة جامعية في الهندسة (يفضل ميكانيك)",
                Exp_Value: "7-9 سنوات",
                Needing_Value: "استراتيجيات الإنتاج HSE -موثوقية الأصول - التميز التشغيلي",
                Requriments: "العمل في مواقع نائية/خارجية - نظام ورديات - لغة إنجليزية قوية - قدرة قيادية تحت الضغط"
            },
            {
                Selected_Value: "تنفيذي مراقبة وتخصيص الإنتاج",
                Department: "تخطيط الإنتاج",
                Qulification: "درجة جامعية في الهندسة",
                Exp_Value: "5 سنوات كحد ادنى",
                Needing_Value: "استراتيجية وتخطيط الأداء - تحليل أداء الابار - إدارة البيانات والأدوات الرقمية",
                Requriments: "مهارات تحليلية وتقارير قوية - لغة إنجليزية قوية - خبرة في مراقبة الإنتاج ميزة"
            },
            {
                Selected_Value: "فني مفتش",
                Department: "المشاريع",
                Qulification: "دبلوم هندسة",
                Exp_Value: "15 سنة كحد ادنى في التفتيش والانشاء",
                Needing_Value: "تفتيش الانشاء انابيب/ميكانيك - التشغيل التجريبي - مراجعة الوثائق - امتثال للمعايير الدولية وبتروناس",
                Requriments: "العمل الميداني/المشاريع - لغة إنجليزية قوية - القدرة على دعم عدة مشاريع"
            },
            {
                Selected_Value: "تنفيذي ضمان الموثوقية والنزاهة",
                Department: "العمليات الفنية",
                Qulification: "درجة جامعية في الهندسة",
                Exp_Value: "5-7 سنوات",
                Needing_Value: "أدارة النزاهة وضمان الأصول - تتبع التدخلات - امتثال للمعايير - مراقبة الموثوقية",
                Requriments: "لغة إنجليزية قوية - خبرة في أنظمة النزاهة ميزة - العمل في ظروف الميدان"
            },
            {
                Selected_Value: "تنفيذي هندسة ميكانيكية",
                Department: "العمليات الفنية",
                Qulification: "درجة جامعية في الهندسة الميكانيكية",
                Exp_Value: "5-7 سنوات",
                Needing_Value: "دراسة الجدوى - تحليل التصميم - مواصفات المعدات - نزاهة فنية",
                Requriments: "لغة إنجليزية قوية - الإلمام بأكواد الصناعة - خبرة في مراجعة التصميم"
            },
            {
                Selected_Value: "فني III نظام صيانة PMMS",
                Department: "العمليات الفنية",
                Qulification: "دبلوم هندسة",
                Exp_Value: "8-12 سنة كفني صيانة مباني",
                Needing_Value: "تطوير بيانات الأصول - أهمية المعدات - معايير أداء المعدات الحرجة للسلامة - إدارة البيانات",
                Requriments: "لغة إنجليزية قوية - خبرة في أنظمة PMMS/SAP/CMMS ميزة"
            },
            {
                Selected_Value: "فني ميكانيك - منطقة 1",
                Department: "العمليات الفنية",
                Qulification: "دبلوم تقني",
                Exp_Value: "13 سنة كحد ادنى كفني عمليات",
                Needing_Value: "تخطيط وقيادة صيانة المعدات الميكانيكية (ثايتة ودوارة) - تشخيص الأعطال - وقائية وتصحيحية - HSE",
                Requriments: "العمل الميداني/الموقع - نظام ورديات - لغة إنجليزية قوية - القدرة على قيادة الفرق"
            },
            {
                Selected_Value: "تنفيذي موارد بشرية",
                Department: "الموارد البشرية",
                Qulification: "درجة جامعية في HR او إدارة الاعمال",
                Exp_Value: "5-7 سنوات",
                Needing_Value: "عمليات الموارد البشرية - توظيف واداة حياة الموظف - أداء وتقارير - تدريب وتطوير - قوانين العمل",
                Requriments: "لغة إنجليزية قوية - خبرة في HR وOFFICE - بيئة متعددة الثقافات"
            },
            {
                Selected_Value: "تنفيذي مصادر الخدمات",
                Department: "المشتريات",
                Qulification: "درجة جامعية ذات صلة",
                Exp_Value: "8 سنوات كحد ادنى في المشتريات",
                Needing_Value: "استراتيجية التعاقد - توريد وإدارة الموردين - مناقصات وتقييم - تحسين التكلفة",
                Requriments: "لغة إنجليزية قوية - الإلمام بأنظمة وسياسات المشتريات"
            },
            {
                Selected_Value: "تنفيذي إدارة",
                Department: "الشؤون الإدارية",
                Qulification: "درجة جامعية ذات صلة",
                Exp_Value: "5-7 سنوات",
                Needing_Value: "سياسات إدارية - ميزانية - مشتريات وموردين - ادارة أصول ومرافق",
                Requriments: "لغة إنجليزية قوية - OFFICE وتقارير - إدارة مهام متعددة - لوجستيات"
            }
        ];

        let Result = Jobs.find((Finding) => event === Finding.Selected_Value);
        if(Result){
            this.inputFormField.department = Result.Department; //القسم
            this.group_of_form[1].fields[1].properties[0].values = [Result.Department];
            this.inputFormField.qual = Result.Qulification; //المؤهلات
            this.group_of_form[1].fields[2].properties[0].values = [Result.Qulification];
            this.inputFormField.experience = Result.Exp_Value; //الخبرة
            this.group_of_form[1].fields[3].properties[0].values = [Result.Exp_Value];
            this.inputFormField.reqone = Result.Needing_Value; //المتطلبات الفنية
            this.group_of_form[1].fields[4].properties[0].values = [Result.Needing_Value];
            this.inputFormField.anithernote = Result.Requriments; //معلومات اخرى
            this.group_of_form[1].fields[5].properties[0].values = [Result.Requriments];
        }else{
            this.inputFormField.department = []; //القسم
            this.group_of_form[1].fields[1].properties[0].values = [];
            this.inputFormField.qual = []; //المؤهلات
            this.group_of_form[1].fields[2].properties[0].values = [];
            this.inputFormField.experience = []; //الخبرة
            this.group_of_form[1].fields[3].properties[0].values = [];
            this.inputFormField.reqone = []; //المتطلبات الفنية
            this.group_of_form[1].fields[4].properties[0].values = [];
            this.inputFormField.anithernote = []; //معلومات اخرى
            this.group_of_form[1].fields[5].properties[0].values = [];
        }
    }
}