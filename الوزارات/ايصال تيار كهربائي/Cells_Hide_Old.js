{
  //فلترة فروع المحافظات
  getCompany(event) {
    //يصفر حقل الفروع
    this.inputFormField["branch"] = null;
    //مصفوفة فروع كل محافظة
    var sectionss = [
      //شركة توزيع كهرباء بغداد
      ["توزيع كهرباء الكرخ", "توزيع كهرباء الرصافة", "توزيع كهرباء مدينة الصدر"],//فروع بغداد
      
      //شركة توزيع كهرباء الفرات الاوسط
      ["توزيع كهرباء بابل"], //فروع بابل
      ["توزيع كهرباء كربلاء المقدسة"], //فروع كربلاء
      ["توزيع كهرباء النجف الاشرف"], //فروع النجف
      ["توزيع كهرباء الديوانية"], //فروع الديوانية (القادسية)

      //شركة توزيع كهرباء الجنوب
      ["توزيع كهرباء ذي قار","توزيع كهرباء شمال الناصرية",], //فرع ذي قار
      ["توزيع كهرباء شمال البصرة","توزيع كهرباء البصرة",], //فرع البصرة
      ["توزيع كهرباء ميسان",], //فرع ميسان
      ["توزيع كهرباء المثنى",], //فرع المثنى

      //شركة تزويع كهرباء الشمال
      ["توزيع كهرباء اطراف نينوى", "توزيع كهرباء مركز نينوى"], //فرع نينوى
      ["توزيع كهرباء جنوب صلاح الدين", "توزيع كهرباء صلاح الدين",], //فرع صلاح الدين
      ["توزيع كهرباء كركوك",], //فرع كركوك

      //شركة توزيع كهرباء الوسط
      ["توزيع كهرباء ديالى", "توزيع كهرباء شمال ديالى", ], //فرع ديالى
      ["توزيع كهرباء الفرات الاعلى", "توزيع كهرباء مركز الانبار", "توزيع كهرباء شرق الانبار",], //الانبار
      ["توزيع كهرباء واسط"], //واسط
    ];
    
    if (event == "بغداد") {
      this.group_of_form[0].fields[2].properties[0].values = sectionss[0];
      document.getElementById("14761").style.display = "block";
      this.inputFormField.CompanyType = "شركة توزيع كهرباء بغداد";
    } else if(event == "بابل"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الفرات الاوسط";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[1];
      document.getElementById("14761").style.display = "block";
    }else if(event == "كربلاء المقدسة"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الفرات الاوسط";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[2];
      document.getElementById("14761").style.display = "block";
    }else if(event == "النجف الاشرف"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الفرات الاوسط";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[3];
      document.getElementById("14761").style.display = "block";
    }else if(event == "القادسية"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الفرات الاوسط";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[4];
      document.getElementById("14761").style.display = "block";
    }else if(event == "ذي قار"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الجنوب";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[5];
      document.getElementById("14761").style.display = "block";
    }else if(event == "البصرة"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الجنوب";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[6];
      document.getElementById("14761").style.display = "block";
    }else if(event == "ميسان"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الجنوب";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[7];
      document.getElementById("14761").style.display = "block";
    }else if(event == "المثنى"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الجنوب";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[8];
      document.getElementById("14761").style.display = "block";
    }else if(event == "نينوى"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الشمال";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[9];
      document.getElementById("14761").style.display = "block";
    }else if(event == "صلاح الدين"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الشمال";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[10];
      document.getElementById("14761").style.display = "block";
    }else if(event == "كركوك"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الشمال";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[11];
      document.getElementById("14761").style.display = "block";
    }else if(event == "ديالى"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الوسط";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[12];
      document.getElementById("14761").style.display = "block";
    }else if(event == "الانبار"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الوسط";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[13];
      document.getElementById("14761").style.display = "block";
    }else if(event == "واسط"){
      this.inputFormField.CompanyType = "شركة توزيع كهرباء الوسط";
      this.group_of_form[0].fields[2].properties[0].values = sectionss[14];
      document.getElementById("14761").style.display = "block";
    }else{
      this.inputFormField.CompanyType = "";
      document.getElementById("14761").style.display = "none";
      this.group_of_form[0].fields[2].properties[0].values = [];
    }
  },

  //فلترة قطاعات الفروع
  gitSections(event) {
    //يصفر حقل القطاعات
    this.inputFormField["section"] = null;
    //مصفوفة قطاعات الفروع
    var sectionss = [
      //قطاعات محافظة بغداد
      [
        "قطاع الكرخ الشمالي", "قطاع الكرخ الجنوبي", "قطاع الكاظمية", "قطاع الحرية", "قطاع السلام", "قطاع البياع", 
        "قطاع العامل", "قطاع الكرخ المركز", "قطاع الشعلة", "قطاع الدورة", "قطاع ابي غريب", "قطاع الغزالية"
      ],//قطاعات توزيع كهرباء الكرخ

      [
        "قطاع الرصافة الشمالي","قطاع الرصافة الجنوبي","قطاع فلسطين","قطاع الرصافة المركز","قطاع الرصافة اطراف الجنوبي","قطاع الاعظمية"
      ],//قطاعات توزيع كهرباء الرصافة

      [
        "قطاع اور", "قطاع الراشدية", "قطاع الصدر الاول", "قطاع الصدر الثاني", "قطاع الصدر الثالث", "قطاع البنوك",
        "قطاع الكمالية", "قطاع المنتظر", "قطاع الحسينية", "قطاع بوب الشام", "قطاع البلديات", "قطاع الامين", 
        "قطاع العبيدي", "قطاع الشعب"
      ],//قطاعات توزيع كهرباء مدينة الصدر

      //قطاعات محافظة بابل
      [
        "الحمزة الغربي", "الشوملي","الهاشمية", "المسيب", "الاسكندرية", "الفيحاء", "الرافدين", "النيل", "ابي غرق",
        "كوثى", "الكفل", "الحلة", "المحاويل", "القاسم",
      ],//قطاعات توزيع كهرباء بابل

      //قطاعات محافظة كربلاء
      [
        "الهندية","عين التمر","الحسينية - كربلاء","الجدول الغربي","الجنوبي","المركز - كربلاء","الشمالي","الحر"
      ],//قطاعات توزيع كهرباء كربلاء

      //قطاعات محافظة النجف
      [
        "الجنوبي - النجف", "العروبة", "الشمالي - النجف", "الحيدرية", "الكوفة", "العباسية", "المناذرة", "المشخاب",
      ],//قطاعات توزيع كهرباء النجف

      //قطاعات محافظة الديوانية
      [
        "الديوانية الاول", "الديوانية الثاني", "الشامية - الديوانية", "عفك", "الدغارة", "الحمزة - الديوانية", "غماس",
      ],//قطاعات توزيع كهرباء الديوانية

      //قطاعات محافظة ذي قار
      ["الجزيرة", "الشامية", "الفرات", "الاهوار", "جنوب ذي قار",], //قطاعات توزيع كهرباء ذي قار
      ["الشطرة", "الغراف", "القلعة", "الرفاعي",], //قطاعات توزيع كهرباء الناصرية

      //قطاعات محافظة البصرة
      ["الزبير", "سفوان", "شط العرب", "شهداء الجراحي", "الدير", "القرنة", "المدينة",], //قطاعات توزيع كهرباء شمال البصرة
      [
        "5 ميل", "العشار", "الفاو", "المركز", "الجمهورية", "الجنينة", "غرب البصرة", "ابي الخصيب", "شمال البصرة", "القبلة",
      ], //قطاعات توزيع كهرباء البصرة

      //قطاعات محافظة ميسان
      ["العمارة الأول", "العمارة الثاني", "شمال العمارة", "شرق العمارة", "غرب العمارة",],//قطاعات توزيع كهرباء ميسان

      //قطاعات محافظة المثنى
      ["الصوب الكبير", "الصوب الصغير", "الرميثة", "الوركاء", "الخضر",],//قطاعات توزيع كهرباء المثنى

      //قطاعات محافظة نينوى
      ["الغربي", "محلبية وبادوش", "تلكيف", "برطلة", "بعشيقة", "الشرقي", "الجنوبي - نينوى", "سنجار",],//قطاعات توزيع كهرباء اطراف نينوى
      ["مركز نينوى",], //قطاعات توزيع كهرباء مركز نينوى

      //قطاعات صلاح الدين
      ["جنوب صلاح الدين",],//قطاعات توزيع كهرباء جنوب صلاح الدين
      ["صلاح الدين",],//قطاعات توزيع كهرباء صلاح الدين

      //قطاعات كركوك
      ["كركوك",],//قطاعات توزيع كهرباء كركوك

      //قطاعات ديالى
      ["الخالص", "بعقوبة الاطراف", "هبهب", "بهرز", "بلدروز", "الوجيهية", "مقدادية", "مندلي", "المنصورية" , "جديدة الشط",],//قطاعات توزيع كهرباء ديالى
      ["العظيم", "جلولاء", "كشكولات", "خانقين",],//قطاعات توزيع شمال ديالى
      
      //قطاعات الانبار
      ["حديثة", "عنة", "القائم", "الرمانة", "بروانة", "راوه", "البغدادي",], //قطاعات توزيع الفرات الاعلى
      ["الرمادي", "غرب الرمادي", "هيت", "الخالدية", "الرطبة",], //قطاعات توزيع الانبار
      ["الفلوجة الشمالي", "الفلوجة الجنوبي", "الصقلاوية", "الكرمة", "العامرية"], //قطاعات توزيع شرق الانبار

      //قطاعات واسط
      [
        "الكوت الاول", "الكوت الثاني", "الكوت الثالث", "الحكيم", "الصويرة", "العزيزية", "الزبيدية", "تاج الدين", 
        "النعمانية", "الاحرار", "بدرة", "الحي", "الموفقية", "البشائر",
      ],//قطاعات توزيع كهرباء واسط
    ];

    if (event == "توزيع كهرباء الكرخ") {
      this.group_of_form[0].fields[3].properties[0].values = sectionss[0];
      document.getElementById("14762").style.display = "block";
    }else  if (event == "توزيع كهرباء الرصافة") {
      this.group_of_form[0].fields[3].properties[0].values = sectionss[1];
      document.getElementById("14762").style.display = "block";
    }else  if (event == "توزيع كهرباء مدينة الصدر") {
      this.group_of_form[0].fields[3].properties[0].values = sectionss[2];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء بابل"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[3];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء كربلاء المقدسة"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[4];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء النجف الاشرف"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[5];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء الديوانية"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[6];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء ذي قار"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[7];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء شمال الناصرية"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[8];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء شمال البصرة"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[9];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء البصرة"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[10];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء ميسان"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[11];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء المثنى"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[12];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء اطراف نينوى"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[13];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء مركز نينوى"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[14];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء جنوب صلاح الدين"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[15];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء صلاح الدين"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[16];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء كركوك"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[17];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء ديالى"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[18];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء شمال ديالى"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[19];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء الفرات الاعلى"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[20];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء مركز الانبار"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[21];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء شرق الانبار"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[22];
      document.getElementById("14762").style.display = "block";
    }else if(event == "توزيع كهرباء واسط"){
      this.group_of_form[0].fields[3].properties[0].values = sectionss[23];
      document.getElementById("14762").style.display = "block";
    }else{
      document.getElementById("14762").style.display = "none";
      this.group_of_form[0].fields[3].properties[0].values = [];
    }
  },

//فلترة صيانات القطاعات
getMaintain(event) {
  //يصفر حقل الصيانات
    this.inputFormField["maintains"] = null;
    //مصفوفة صيانات القطاعات
    var maintain = [
      //شركة توزيع كهرباء بغداد
      //صيانات قطاعات محافظة بغداد
      ["الاعلام", "السيدية", "البياع"],//صيانات قطاع البياع
      ["العامل", "الجهاد", "الرضوانية"],//صيانات قطاع العامل
      ["الخضراء والعامرية", "اليرموك", "المنصور","الجامعة والعدل","كرادة مريم"],//صيانات قطاع الكرخ المركز
      ["الفضل","المثنى","السعدون"],//صيانات قطاع الرصافة الشمالي
      ["الزعفرانية","جسر ديالى","المدائن"],//صيانات قطاع الرصافة الجنوبي
      ["فلسطين","الغدير"],//صيانات قطاع فلسطين
      ["بغداد الجديدة","الفتح"],//صيانات قطاع الرصافة المركز
      ["النهروان","الوحدة"],//صيانات قطاع الرصافة اطراف الجنوبي
      ["الاعظمية","الوزيرية"],//صيانات قطاع الاعظمية
      ["صيانات قطاع اور"],//صيانات قطاع اور
      ["صيانات قطاع الراشدية"],//صيانات قطاع الراشدية
      ["صيانات قطاع الصدر الاول"],//صيانات قطاع الصدر الاول
      ["صيانات قطاع الصدر الثاني"],//صيانات قطاع الصدر الثاني
      ["صيانات قطاع الصدر الثالث"],//صيانات قطاع الصدر الثالث
      ["صيانات قطاع البنوك"],//صيانات قطاع البنوك
      ["صيانات قطاع الكمالية"],//صيانات قطاع الكمالية
      ["صيانات قطاع المنتظر"],//صيانات قطاع المنتظر
      ["صيانات قطاع الحسينية"],//صيانات قطاع الحسينية
      ["صيانات قطاع البلديات"],//صيانات قطاع البلديات
      ["صيانات قطاع بوب الشام"],//صيانات قطاع بوب الشام
      ["صيانات قطاع الامين"],//صيانات قطاع الامين
      ["صيانات قطاع العبيدي"],//صيانات قطاع العبيدي
      ["صيانات قطاع الشعب"],//صيانات قطاع الشعب
      ["النصر والسلام","الزيتون","الشهداء",],//صيانات قطاع ابي غريب
      ["الميكانيك","الدورة الشمالي","الدورة الجنوبي"],//صيانات قطاع الدورة
      ["صيانة الشعلة", "الدوانم"],//صيانات قطاع الشعلة
      ["النصر","المشاهدة","الطارمية", "شاطئ الطارمية", "العبايجي"],//صيانات قطاع الكرخ الشمالي
      ["المحمودية","الرشيد","اليوسفية","الزنبرانية","صدر اللطيفية","اللطيفية","عويريج"],//صيانات قطاع الكرخ الجنوبي
      ["الكاظمية","العطيفية","سبع البور","التاجي"],//صيانات قطاع الكاظمية
      ["الكرامة","العلاوي","الطوبجي"],//صيانات قطاع السلام
      ["الحرية"],//صيانات قطاع الحرية
      ["الكفاءات", "الغزالية",],//صيانات قطاع الغزالية

      //شركة توزيع كهرباء الفرات الاوسط
      //صيانات محافظة بابل
      ["الحمزة الغربي",],//قطاع الحمزة الغربي
      ["الشوملي",],//قطاع الشوملي
      ["الهاشمية",],//قطاع الهاشمية
      ["المسيب", "السدة",],//قطاع المسيب
      ["الاسكندرية",],//قطاع الاسكندرية
      ["الفيحاء - بابل",],//قطاع الفيحاء
      ["الرافدين",],//قطاع الرافدين
      ["النيل",],//قطاع النيل
      ["ابي غرق",],//قطاع ابي غرق
      ["كوثى",],//قطاع كوثى
      ["الكفل",],//قطاع الكفل
      ["الحلة",],//قطاع الحلة
      ["المحاويل", "الامام", "تونس",],//قطاع المحاويل
      ["القاسم", "الشهداء - بابل", "الطليعة",],//قطاع القاسم

      //صيانات محافظة كربلاء
      ["الهندية"],//قطاع الهندية
      ["عين التمر"],//قطاع عين التمر
      ["الحسينية - كربلاء"],//قطاع الحسينية - كربلاء
      ["الجدول الغربي"],//قطاع الجدول الغربي
      ["الجنوبي"],//قطاع الجنوبي
      ["المركز - كربلاء"],//قطاع المركز - كربلاء
      ["الشمالي"],//قطاع الشمالي
      ["الحر"],//قطاع الحر

      //صيانات محافظة النجف
      ["الجنوبي - النجف",],//قطاع الجنوبي - النجف
      ["العروبة",],//قطاع العروبة
      ["الشمالي - النجف",],//قطاع الشمالي - النجف
      ["الحيدرية",],//قطاع الحيدرية
      ["الكوفة",],//قطاع الكوفة
      ["العباسية",],//قطاع العباسية
      ["المناذرة",],//قطاع المناذرة
      ["المشخاب",],//قطاع المشخاب

      //صيانات محافظة الديوانية
      ["الديوانية الاول",],//قطاع الديوانية الاول
      ["الديوانية الثاني",],//قطاع الديوانية الثاني
      ["الشامية - الديوانية",],//قطاع الشامية - الديوانية
      ["عفك",],//قطاع عفك
      ["الدغارة",],//قطاع الدغارة
      ["الحمزة - الديوانية",],//قطاع الحمزة - الديوانية
      ["غماس",],//قطاع غماس

      // شركة توزيع كهرباء الجنوب
      //صيانات محافظة ذي قار
      ["سومر", "الجزيرة", "النور",],// قطاع الجزيرة
      ["الشامية", "البطحاء", "الشموخ", "الفضلية", "الاسكان"],// قطاع الشامية
      ["الفرات", "الشهداء(مقر القطاع)", "اور",],// قطاع الفرات
      ["الجبايش", "المنار", "الفهود", "الاصلاح", "سيد دخيل",],// قطاع الاهوار
      ["السوق", "الشموع", "العكيكة", "الكرمة", "الطار",],// قطاع جنوب ذي قار
      ["الشعلة", "اكد",],// قطاع الشطرة
      ["الغراف", "الدواية",], // قطاع الغراف
      ["الفجر", "قلعة سكر",],// قطاع القلعة
      ["الرفاعي 1", "الرفاعي 2", "النصر(مقر القطاع)",], // قطاع الرفاعي

      //صيانات محافظة البصرة
      ["الخطوة", "المربد", "الشعيبة", "الدريهمية",], // قطاع الزبير
      ["سفوان", "ام قصر", "خور الزبير",], // قطاع سفوان
      ["التنومة", "الصالحية", "الفيحاء", "كتيبان", "الزريجي",], // قطاع شط العرب
      ["كرمة علي", "الهارثة", "شهداء الجراحي",], // قطاع شهداء الجراحي
      ["الدير", "النشوة", "الشافي"], // قطاع الدير
      ["القرنة", "الشرش", "الثغر",], // قطاع القرنة
      ["المدينة", "الصادق", "عز الدين سليم", "الماجدية",], // قطاع المدينة
      ["5 ميل", "الجامعة(مقر القطاع)", "غرب الصلال", "حي الغدير",], // قطاع 5 ميل
      ["العشار", "البراضعية",], // قطاع العشار
      ["البحار", "الفاو", "السيبة",], // قطاع الفاو
      ["البصرة", "المشراق",], // قطاع المركز
      ["الجمهورية", "الموفقية",], // قطاع الجمهورية
      ["الجبيلة", "الجنينة",], // قطاع الجنينة
      ["الجمعيات", "حي الحسين", "حي العباس",], // قطاع غرب البصرة
      ["الساحل", "الصناعية", "السياب", "حمدان", "كوت الصلحي", "ابي الخصيب",], // قطاع ابي الخصيب
      ["السكك", "المعقل", "حي البتول",], // قطاع شمال البصرة
      ["القبلة", "حي المهندسين", "دور الشرطة", "حي الجهاد",], // قطاع القبلة

      //صيانات محافظة ميسان
      ["بني هاشم", "العمارة الاولى", "العمارة الرابعة", "الكحلاء",],// قطاع العمارة الاول
      ["العمارة الثانية", "العمارة الثالثة", "المشرح",],// قطاع العمارة الثاني
      ["الكميت", "علي الغربي", "علي الشرقي",],// قطاع شمال العمارة
      ["القلعة الأولى", "القلعة الثانية", "العزيز", "ناحية الخير", "المجر الكبير",],// قطاع شرق العمارة
      ["العدل", "الميمونة", "السلام", "سيد احمد",],// قطاع غرب العمارة

      //صيانات محافظة المثنى
      ["الصوب الكبير",], // قطاع الصوب الكبير
      ["الصوب الصغير",], // قطاع الصوب الصغير
      ["شرق الرميثه",], // قطاع الرميثة
      ["الوركاء", "السوير", "النجمي",], // قطاع الوركاء
      ["الخضر", "الدراجي",], // قطاع الخضر

      //شركة توزيع كهرباء الشمال
      //صيانات محافظة نينوى
      ["الغربي",], // قطاع الغربي
      ["محلبية وبادوش",], // قطاع محلبية وبادوش
      ["تلكيف",], // قطاع تلكيف
      ["برطلة",], // قطاع برطلة
      ["بعشيقة",], // قطاع بعشيقة
      ["الشرقي",], // قطاع الشرقي
      ["الجنوبي - نينوى",], // قطاع الجنوبي - نينوى
      ["سنجار",], // قطاع سنجار
      ["مركز نينوى",], //قطاع مركز نينوى

      //صيانات محافظة صلاح الدين
      ["جنوب صلاح الدين"], //قطاع جنوب صلاح الدين
      ["صلاح الدين",], //قطاع صلاح الدين

      //صيانات محافظة كركوك
      ["كركوك",], // قطاع كركوك

      // شركة توزيع كهرباء الوسط
      //صيانات محافظة ديالى
      ["الخالص المركز", "الخالص الاطراف", "الاسود", "السعدية", "مفرزة الزركانية", "مفرزة الناي", "دار السلام"],// قطاع الخالص
      ["شرق بني سعد", "غرب بني سعد", "العبارة", "حد مزيد والباوية"],// قطاع بعقوبة الاطراف
      ["الشرقي / شمال ديالى", "الغربي / شمال ديالى", "الاطراف",],//قطاع العظيم
      ["جلولاء الاول", "جلولاء الثاني", "السعدية / شمال ديالى",],//قطاع جلولاء
      ["كشكولات", "حمرين", "قرة تبة", "جبارة"],//قطاع كشكولات
      ["المركز / شمال ديالى", "الاطراف / شمال ديالى"],//قطاع خانقين

      //صيانات محافظة الانبار
      ["السد", "حديثة", "حقلانية",], // قطاع حديثة
      ["عنة",], // قطاع عنة
      ["القائم", "العبيدي", "الكرابلة",], // قطاع القائم
      ["الرمانة",], // قطاع الرمانة
      ["بروانة", "السكران",], // قطاع بروانة
      ["راوة",], // قطاع راوه
      ["البغدادي", "الدولاب",], // قطاع البغدادي
      ["الرمادي",], // قطاع الرمادي
      ["الرحالية", "غرب الرمادي", "التاميم", "الوفاء", "اليرموك / مركز الانبار",], // قطاع غرب الرمادي
      ["الفرات / مركز الانبار", "هيت", "كبيسة", "المحمدي",], // قطاع هيت
      ["الخالدية",], // قطاع الخالدية
      ["الرطبة",], // قطاع الرطبة
      ["الشمالي / شرق الانبار", "النساف", "الحضرة", "الجغيفي الثانية", "المختار",],//صيانات الفلوجة الشمالي
      ["الجنوبي / شرق الانبار", "الشرقية", "النعيمية", "الحصي", "الاكرمين",],//صيانات الفلوجة الجنوبي
      ["الصقلاوية", "ابو سديرة",],//صيانات الصقلاوية
      ["الجزيرة / شرق الانبار", "الكرمة / شرق الانبار", "الخيرات", "السمنت", "شمال ذراع دجلة"],//صيانات الكرمة
      ["الشروق", "الصمود"],//صيانات العامرية

      //صيانات واسط
      ["الزهراء", "شيخ سعد"],//صيانات الكوت الاول
      ["الكرامة / واسط", "ناحية واسط القديمة",],//صيانات الكوت الثاني
      ["الكوت الجديدة"],//صيانات الكوت الثالث
      ["الحكيم"],//صيانات الحكيم
      ["الرحمانية"],//صيانات الصويرة
      ["الدبوني",],//صيانات العزيزية
      ["الزبيدية"],//صيانات الزبيدية
      ["تاج الدين",],//صيانات تاج الدين
      ["النعمانية"],//صيانات النعمانية
      ["الاحرار", "المزاك"],//صيانات الاحرار
      ["بدرة", "جصان"],//صيانات بدرة
      ["الحي",],//صيانات الحي
      ["الموفقية / واسط",],//صيانات الموفقية
      ["البشائر",],//صيانات البشائر
        
        //تكملة لصيانات ديالى
        ["هبهب", "سيف سعد",],//صيانات هبهب
        ["بهرز المركز", "بهرز الاطراف",],//صيانات بهرز
        ["بلدروز الاطراف", "بلدروز الشمالي", "بلدروز الجنوبي",],//صيانات بلدروز
        ["الوجيهية", "ابي صيدا", "زهيرات",],//صيانات الوجيهية
        ["المقدادية الشرقي", "المقدادية الغربي", "نوفل", "سنسل", ],//صيانات المقدادية
        ["مندلي", "قزانية",],//صيانات مندلي
        ["المنصورية", ],//صيانات المنصورية
        ["جديدة الشط", "الحويش", "منصورية الشط", ],//صيانات جديدة الشط
    ];
    
    if (event == "قطاع البياع") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[0];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع العامل") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[1];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الكرخ المركز") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[2];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الرصافة الشمالي") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[3];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الرصافة الجنوبي") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[4];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع فلسطين") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[5];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الرصافة المركز") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[6];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الرصافة اطراف الجنوبي") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[7];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الاعظمية") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[8];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع اور") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[9];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الراشدية") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[10];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الصدر الاول") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[11];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الصدر الثاني") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[12];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الصدر الثالث") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[13];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع البنوك") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[14];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الكمالية") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[15];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع المنتظر") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[16];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الحسينية") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[17];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع بوب الشام") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[19];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع البلديات") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[18];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الامين") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[20];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع العبيدي") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[21];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الشعب") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[22];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع ابي غريب") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[23];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الدورة") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[24];
      document.getElementById("14763").style.display = "block";
    }else if (event == "قطاع الشعلة") {
      this.group_of_form[0].fields[4].properties[0].values = maintain[25];
      document.getElementById("14763").style.display = "block";
    }else if(event == "قطاع الكرخ الشمالي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[26];
      document.getElementById("14763").style.display = "block";
    }else if(event == "قطاع الكرخ الجنوبي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[27];
      document.getElementById("14763").style.display = "block";
    }else if(event == "قطاع الكاظمية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[28];
      document.getElementById("14763").style.display = "block";
    }else if(event == "قطاع السلام"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[29];
      document.getElementById("14763").style.display = "block";
    }else if(event == "قطاع الحرية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[30];
      document.getElementById("14763").style.display = "block";
    }else if(event == "قطاع الغزالية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[31];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الحمزة الغربي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[32];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الشوملي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[33];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الهاشمية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[34];
      document.getElementById("14763").style.display = "block";
    }else if(event == "المسيب"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[35];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الاسكندرية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[36];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الفيحاء"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[37];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الرافدين"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[38];
      document.getElementById("14763").style.display = "block";
    }else if(event == "النيل"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[39];
      document.getElementById("14763").style.display = "block";
    }else if(event == "ابي غرق"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[40];
      document.getElementById("14763").style.display = "block";
    }else if(event == "كوثى"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[41];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الكفل"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[42];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الحلة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[43];
      document.getElementById("14763").style.display = "block";
    }else if(event == "المحاويل"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[44];
      document.getElementById("14763").style.display = "block";
    }else if(event == "القاسم"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[45];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الهندية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[46];
      document.getElementById("14763").style.display = "block";
    }else if(event == "عين التمر"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[47];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الحسينية - كربلاء"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[48];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الجدول الغربي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[49];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الجنوبي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[50];
      document.getElementById("14763").style.display = "block";
    }else if(event == "المركز - كربلاء"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[51];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الشمالي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[52];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الحر"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[53];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الجنوبي - النجف"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[54];
      document.getElementById("14763").style.display = "block";
    }else if(event == "العروبة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[55];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الشمالي - النجف"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[56];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الحيدرية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[57];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الكوفة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[58];
      document.getElementById("14763").style.display = "block";
    }else if(event == "العباسية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[59];
      document.getElementById("14763").style.display = "block";
    }else if(event == "المناذرة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[60];
      document.getElementById("14763").style.display = "block";
    }else if(event == "المشخاب"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[61];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الديوانية الاول"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[62];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الديوانية الثاني"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[63];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الشامية - الديوانية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[64];
      document.getElementById("14763").style.display = "block";
    }else if(event == "عفك"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[65];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الدغارة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[66];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الحمزة - الديوانية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[67];
      document.getElementById("14763").style.display = "block";
    }else if(event == "غماس"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[68];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الجزيرة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[69];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الشامية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[70];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الفرات"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[71];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الاهوار"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[72];
      document.getElementById("14763").style.display = "block";
    }else if(event == "جنوب ذي قار"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[73];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الشطرة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[74];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الغراف"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[75];
      document.getElementById("14763").style.display = "block";
    }else if(event == "القلعة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[76];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الرفاعي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[77];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الزبير"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[78];
      document.getElementById("14763").style.display = "block";
    }else if(event == "سفوان"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[79];
      document.getElementById("14763").style.display = "block";
    }else if(event == "شط العرب"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[80];
      document.getElementById("14763").style.display = "block";
    }else if(event == "شهداء الجراحي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[81];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الدير"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[82];
      document.getElementById("14763").style.display = "block";
    }else if(event == "القرنة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[83];
      document.getElementById("14763").style.display = "block";
    }else if(event == "المدينة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[84];
      document.getElementById("14763").style.display = "block";
    }else if(event == "5 ميل"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[85];
      document.getElementById("14763").style.display = "block";
    }else if(event == "العشار"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[86];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الفاو"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[87];
      document.getElementById("14763").style.display = "block";
    }else if(event == "المركز"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[88];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الجمهورية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[89];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الجنينة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[90];
      document.getElementById("14763").style.display = "block";
    }else if(event == "غرب البصرة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[91];
      document.getElementById("14763").style.display = "block";
    }else if(event == "ابي الخصيب"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[92];
      document.getElementById("14763").style.display = "block";
    }else if(event == "شمال البصرة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[93];
      document.getElementById("14763").style.display = "block";
    }else if(event == "القبلة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[94];
      document.getElementById("14763").style.display = "block";
    }else if(event == "العمارة الأول"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[95];
      document.getElementById("14763").style.display = "block";
    }else if(event == "العمارة الثاني"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[96];
      document.getElementById("14763").style.display = "block";
    }else if(event == "شمال العمارة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[97];
      document.getElementById("14763").style.display = "block";
    }else if(event == "شرق العمارة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[98];
      document.getElementById("14763").style.display = "block";
    }else if(event == "غرب العمارة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[99];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الصوب الكبير"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[100];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الصوب الصغير"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[101];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الرميثة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[102];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الوركاء"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[103];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الخضر"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[104];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الغربي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[105];
      document.getElementById("14763").style.display = "block";
    }else if(event == "محلبية وبادوش"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[106];
      document.getElementById("14763").style.display = "block";
    }else if(event == "تلكيف"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[107];
      document.getElementById("14763").style.display = "block";
    }else if(event == "برطلة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[108];
      document.getElementById("14763").style.display = "block";
    }else if(event == "بعشيقة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[109];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الشرقي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[110];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الجنوبي - نينوى"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[111];
      document.getElementById("14763").style.display = "block";
    }else if(event == "سنجار"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[112];
      document.getElementById("14763").style.display = "block";
    }else if(event == "مركز نينوى"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[113];
      document.getElementById("14763").style.display = "block";
    }else if(event == "جنوب صلاح الدين"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[114];
      document.getElementById("14763").style.display = "block";
    }else if(event == "صلاح الدين"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[115];
      document.getElementById("14763").style.display = "block";
    }else if(event == "كركوك"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[116];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الخالص"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[117];
      document.getElementById("14763").style.display = "block";
    }else if(event == "بعقوبة الاطراف"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[118];
      document.getElementById("14763").style.display = "block";
    }else if(event == "العظيم"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[119];
      document.getElementById("14763").style.display = "block";
    }else if(event == "جلولاء"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[120];
      document.getElementById("14763").style.display = "block";
    }else if(event == "كشكولات"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[121];
      document.getElementById("14763").style.display = "block";
    }else if(event == "خانقين"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[122];
      document.getElementById("14763").style.display = "block";
    }else if(event == "حديثة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[123];
      document.getElementById("14763").style.display = "block";
    }else if(event == "عنة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[124];
      document.getElementById("14763").style.display = "block";
    }else if(event == "القائم"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[125];
      document.getElementById("14763").style.display = "block";
    }else if (event == "الرمانة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[126];
      document.getElementById("14763").style.display = "block";
    }else if(event == "بروانة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[127];
      document.getElementById("14763").style.display = "block";
    }else if(event == "راوه"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[128];
      document.getElementById("14763").style.display = "block";
    }else if(event == "البغدادي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[129];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الرمادي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[130];
      document.getElementById("14763").style.display = "block";
    }else if(event == "غرب الرمادي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[131];
      document.getElementById("14763").style.display = "block";
    }else if(event == "هيت"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[132];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الخالدية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[133];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الرطبة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[134];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الفلوجة الشمالي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[135];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الفلوجة الجنوبي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[136];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الصقلاوية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[137];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الكرمة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[138];
      document.getElementById("14763").style.display = "block";
    }else if(event == "العامرية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[139];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الكوت الاول"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[140];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الكوت الثاني"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[141];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الكوت الثالث"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[142];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الحكيم"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[143];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الصويرة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[144];
      document.getElementById("14763").style.display = "block";
    }else if(event == "العزيزية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[145];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الزبيدية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[146];
      document.getElementById("14763").style.display = "block";
    }else if(event == "تاج الدين"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[147];
      document.getElementById("14763").style.display = "block";
    }else if(event == "النعمانية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[148];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الاحرار"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[149];
      document.getElementById("14763").style.display = "block";
    }else if(event == "بدرة"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[150];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الحي"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[151];
      document.getElementById("14763").style.display = "block";
    }else if(event == "الموفقية"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[152];
      document.getElementById("14763").style.display = "block";
    }else if(event == "البشائر"){
      this.group_of_form[0].fields[4].properties[0].values = maintain[153];
      document.getElementById("14763").style.display = "block";
    }else if(event == "هبهب"){
        this.group_of_form[0].fields[4].properties[0].values = maintain[154];
          document.getElementById("14763").style.display = "block";
    }else if(event == "بهرز"){
        this.group_of_form[0].fields[4].properties[0].values = maintain[155];
          document.getElementById("14763").style.display = "block";
    }else if(event == "بلدروز"){
            this.group_of_form[0].fields[4].properties[0].values = maintain[156];
          document.getElementById("14763").style.display = "block";
    }else if(event == "الوجيهية"){
         this.group_of_form[0].fields[4].properties[0].values = maintain[157];
          document.getElementById("14763").style.display = "block";
    }else if(event == "مقدادية"){
         this.group_of_form[0].fields[4].properties[0].values = maintain[158];
          document.getElementById("14763").style.display = "block";
    }else if(event == "مندلي"){
         this.group_of_form[0].fields[4].properties[0].values = maintain[159];
          document.getElementById("14763").style.display = "block";
    }else if(event == "المنصورية"){
         this.group_of_form[0].fields[4].properties[0].values = maintain[160];
          document.getElementById("14763").style.display = "block";
    }else if(event == "جديدة الشط"){
         this.group_of_form[0].fields[4].properties[0].values = maintain[161];
          document.getElementById("14763").style.display = "block";
    }else{
      this.group_of_form[0].fields[4].properties[0].values = [];
      document.getElementById("14763").style.display = "none";
    }
  },
}