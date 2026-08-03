{
  // ===========================
  // معلومات أساسية عن المؤسسة
  // ===========================
selectFormScope(event) {
  var No_Sub_Foundation = [
    //"الامانة العامة لمجلس الوزراء",
    "المجمع العلمي العراقي", "المصرف العراقي للتجارة", "الهيئة الوطنية للاستثمار",
    "الهيأة الوطنية للرقابة النووية والاشعاعية والكيميائية والبايولوجية", "امانة بغداد", "بيت الحكمة",
    "ديوان الوقف الشيعي", "ديوان اوقاف الديانات المسيحية والايزيدية والصابئية", "سلطة الطيران المدني",
    "شبكة الاعلام العراقي", "مجلس الخدمة الاتحادي", "مجلس الدولة", "مجلس محافظة الديوانية",
    "مجلس محافظة بغداد", "مجلس محافظة ديالى", "مجلس محافظة ذي قار", "مجلس محافظة كربلاء المقدسة",
    "مجلس محافظة كركوك", "مجلس محافظة ميسان", "مجلس محافظة نينوى", "محافظة البصرة", "محافظة بغداد",
    "محافظة ديالى", "محافظة صلاح الدين", "محافظة كربلاء المقدسة", "محافظة كركوك", "محافظة ميسان",
    "محافظة واسط", "مكتب رئيس الجمهورية", "هيئة التصنيع الحربي", "هيئة النزاهة الاتحادية", "وزارة الاتصالات",
    "وزارة التربية", "وزارة الثقافة والسياحة والاثار", "وزارة الزراعة", "وزارة الشباب والرياضة",
    "وزارة الصناعة والمعادن", "وزارة العمل والشؤون الاجتماعية", "وزارة الكهرباء", "وزارة المالية",
    "وزارة الموارد المائية", "وزارة النفط", "وزارة النقل", "وزارة الدفاع", "هيئة الطاقة الذرية",
    "مجلس شؤون المنافسة ومنع الاحتكار", "وزارة الأعمار والإسكان والبلديات العامة",
    "الهيأة العامة لمراقبة تخصيص الواردات الاتحادية", "مجلس محافظة الانبار", "وزارة الداخلية", "محافظة المثنى",
    "محافظة الانبار", "وزارة الهجرة والمهجرين",
  ],
  Have_Sub_Foundation = ["وزارة التخطيط", "وزارة العدل", "وزارة الصحة", "مكتب رئيس الوزراء"];

  var x = event;
  if (x === "مقر المؤسسة الرئيسي") {
    document.getElementById("75854").style.display = "block"; // مقر المؤسسة الرئيسي
    this.inputFormField["organizationHeadquarters"] = null;
    document.getElementById("75855").style.display = "none"; // دائرة فرعية
    this.inputFormField["subOrganizationUnit"] = null;
    document.getElementById("75856").style.display = "none"; // اكتب اسم الدائرة فرعية
    this.inputFormField["subOrganizationUnitOther"] = null;
    this.group_of_form[0].fields[3].properties[0].values = No_Sub_Foundation;
  } else if (x === "دائرة فرعية") {
    document.getElementById("75854").style.display = "block"; // اسم مقر المؤسسة
    this.inputFormField["organizationHeadquarters"] = null;
    document.getElementById("75855").style.display = "block"; // اسم الدائرة الفرعية
    this.inputFormField["subOrganizationUnit"] = null;
    document.getElementById("75856").style.display = "none"; // اكتب اسم الدائرة فرعية
    this.inputFormField["subOrganizationUnitOther"] = null;
    this.group_of_form[0].fields[3].properties[0].values = Have_Sub_Foundation;
  } else {
    document.getElementById("75854").style.display = "none"; // مقر المؤسسة الرئيسي
    this.inputFormField["organizationHeadquarters"] = null;
    document.getElementById("75855").style.display = "none"; // دائرة فرعية
    this.inputFormField["subOrganizationUnit"] = null;
    document.getElementById("75856").style.display = "none"; // اكتب اسم الدائرة فرعية
    this.inputFormField["subOrganizationUnitOther"] = null;
    this.group_of_form[0].fields[3].properties[0].values = [];
  }
},

selectFromSubOrg(event)
{
  var x = event;
  if (x === "غير ذلك") {
      document.getElementById("75856").style.display = "block"; // اكتب اسم الدائرة فرعية
    } else {
      document.getElementById("75856").style.display = "none"; // اكتب اسم الدائرة فرعية
      this.inputFormField["subOrganizationUnitOther"] = null;
    }
},

  // ===========================
  // البنى التحتية الرقمية
  // ===========================

  // طبيعة النشاط
  selectActivityType(event) {
    var x = event;
    if (x === "اخرى") {
      document.getElementById("75645").style.display = "block"; //نشاطات اخرى
    } else {
      document.getElementById("75645").style.display = "none"; //نشاطات اخرى
      this.inputFormField["otherActivityType"] = null;
    }
  },

  // هل يتوفر في مقر المؤسسة شبكة داخلية
  hasInternalNetworkAtHeadquarters(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75515").style.display = "block"; //ما هو نوع الشبكة؟
    } else if (x === "لا") {
      document.getElementById("75515").style.display = "none"; //ما هو نوع الشبكة؟
      this.inputFormField["type"] = null;
    }
  },

  // هل تمتلك المؤسسة دوائر فرعية
  hasSubOrganizationUnits(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75522").style.display = "block"; //كم هو عدد الدوائر الفرعية التابعة للمؤسسة؟
    } else if (x === "لا") {
      document.getElementById("75522").style.display = "none"; //كم هو عدد الدوائر الفرعية التابعة للمؤسسة؟
      this.inputFormField["branchNum"] = null;
    }
  },

  // هل لديكم شبكة داخلية في المبنى
  hasLocalNetwork(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75523").style.display = "block"; //كم عدد الفروع التي لديها شبكة داخلية؟
    } else if (x === "كلا") {
      document.getElementById("75523").style.display = "none"; //كم عدد الفروع التي لديها شبكة داخلية؟
      this.inputFormField["howManyBranch"] = null;
    }
  },

  // هل هناك ربط شبكي بين مقر المؤسسة ودوائرها الفرعية
  hasNetworkConnectionWithBranches(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75526").style.display = "block"; //اذكر عدد الدوائر المغطاة
      document.getElementById("75529").style.display = "block"; //اذكر عدد الدوائر غير المغطاة
    } else if (x === "كلا") {
      document.getElementById("75526").style.display = "none"; //اذكر عدد الدوائر المغطاة
      this.inputFormField["ifYesOne"] = null;
      document.getElementById("75529").style.display = "none"; //اذكر عدد الدوائر غير المغطاة
      this.inputFormField["ifYesTwo"] = null;
    }
  },

  // هل هنالك شبكة وايرليس في المبنى
  hasWirelessNetwork(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75634").style.display = "block"; //عدد شبكات الوايرليس
      document.getElementById("75747").style.display = "block"; //نوع شبكات الوايرليس المستخدمة في المؤسسة
    } else if (x === "كلا") {
      document.getElementById("75634").style.display = "none"; //عدد شبكات الوايرليس
      this.inputFormField["wirelessNetworkCount"] = null;
      document.getElementById("75747").style.display = "none"; //نوع شبكات الوايرليس المستخدمة في المؤسسة
      this.inputFormField["wirelessNetworkType"] = null;
    }
  },

  // هل تمتلك المؤسسة مركز بيانات او غرفة خوادم في مقرها الرئيسي
  hasDataCenterOrServerRoom(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75734").style.display = "block"; //label 1
      document.getElementById("75735").style.display = "block"; //label 2
      document.getElementById("75736").style.display = "block"; //label 3
      document.getElementById("75737").style.display = "block"; //label 4
      document.getElementById("75738").style.display = "block"; //label 5
      document.getElementById("75533").style.display = "block"; //اذكر نوع الخوادم ومقدار السعة الخزنية وعدد الخوادم؟
    } else if (x === "كلا") {
      document.getElementById("75734").style.display = "none"; //label 1
      document.getElementById("75735").style.display = "none"; //label 2
      document.getElementById("75736").style.display = "none"; //label 3
      document.getElementById("75737").style.display = "none"; //label 4
      document.getElementById("75738").style.display = "none"; //label 5
      document.getElementById("75533").style.display = "none"; //اذكر نوع الخوادم ومقدار السعة الخزنية وعدد الخوادم؟
    }
  },

  // هل تمتلك المؤسسة اجهزة جدران نارية
  hasFirewallDevices(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75538").style.display = "block"; //اذكر عددها و اسم الشركة وموديلاتها
    } else if (x === "كلا") {
      document.getElementById("75538").style.display = "none"; //اذكر عددها و اسم الشركة وموديلاتها
    }
  },

  // هل تتوفر اجهزة حاسوب كافية
  hasSufficientComputers(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75550").style.display = "block"; //ما هو العدد المطلوب؟
    } else if (x === "كلا") {
      document.getElementById("75550").style.display = "none"; //ما هو العدد المطلوب؟
    }
  },

  // هل لدى الجهة بنية تحتية رقمية
  hasDigitalInfrastructure(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75640").style.display = "block"; //يرجى تحديد الاتي:
    } else if (x === "كلا") {
      document.getElementById("75640").style.display = "none"; //يرجى تحديد الاتي:
    }
  },

  // ابرز الخدمات الرقمية المقدمة
  toggleOtherDigitalServicesField(event) {
    if (event.length != 0) {
      for (var i = 0; i < event.length; i++) {
        if (event[i] == "اخرى") {
          document.getElementById("75651").style.display = "block"; //خدمات رقمية اخرى
          document.getElementById("75743").style.display = "block"; //خدمات رقمية اخرى
          break;
        } else {
          document.getElementById("75651").style.display = "none"; //خدمات رقمية اخرى
          this.inputFormField["otherDigitalServices"] = null;
          document.getElementById("75743").style.display = "none"; //تفاصيل الخدمة
        }
      }
    } else {
      document.getElementById("75651").style.display = "none"; //خدمات رقمية اخرى
      this.inputFormField["otherDigitalServices"] = null;
      document.getElementById("75743").style.display = "none"; //تفاصيل الخدمة
    }
  },

  // هل لدى المؤسسة موقع إلكتروني رسمي
  hasOfficialWebsite(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75739").style.display = "block"; //رابط الموقع الالكتروني
      document.getElementById("75740").style.display = "block"; //مدير الموقع الالكتروني
    } else if (x === "كلا") {
      document.getElementById("75739").style.display = "none"; //رابط الموقع الالكتروني
      this.inputFormField["websiteUrl"] = null;
      document.getElementById("75740").style.display = "none"; //مدير الموقع الالكتروني
      this.inputFormField["websiteManagerName"] = null;
    }
  },

  // هل تم تطبيق معايير الأمن السيبراني
  isCyberSecurityStandardsImplemented(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75745").style.display = "block"; //اذكر المعايير المعتمدة في المؤسسة
    } else if (x === "كلا") {
      document.getElementById("75745").style.display = "none"; //اذكر المعايير المعتمدة في المؤسسة
    }
  },

  // أدوات الحماية المستخدمة
  chooseOtherSecurityTools(event) {
    if (event.length != 0) {
      for (var i = 0; i < event.length; i++) {
        if (event[i] == "اخرى") {
          document.getElementById("75670").style.display = "block"; //اخرى
          break;
        } else {
          document.getElementById("75670").style.display = "none"; //اخرى
          this.inputFormField["otherSecurityTools"] = null;
        }
      }
    } else {
      document.getElementById("75670").style.display = "none"; //اخرى
      this.inputFormField["otherDigitalServices"] = null;
    }
  },

  // هل يتم إجراء نسخ احتياطية للبيانات والأنظمة بانتظام
  isBackupPerformedRegularly(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75672").style.display = "block"; //هل يتم اختبار النسخ الاحتياطية بشكل دوري للتأكد من فعاليتها؟
    } else if (x === "كلا") {
      document.getElementById("75672").style.display = "none"; //هل يتم اختبار النسخ الاحتياطية بشكل دوري للتأكد من فعاليتها؟
    }
  },

  // هل يوجد ربط بين الفروع
  hasBranchConnectivity(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75746").style.display = "block"; //عدد الفروع ونوع الربط
    } else if (x === "كلا") {
      document.getElementById("75746").style.display = "none"; //عدد الفروع ونوع الربط
    }
  },

  // هل هناك تكامل بين الأنظمة الداخلية والخدمات الوطنية
  hasNationalSystemsIntegration(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75677").style.display = "block"; //اذكر اسم الجهة
    } else if (x === "كلا") {
      document.getElementById("75677").style.display = "none"; //اذكر اسم الجهة
    }
  },

  // ===========================
  // التطبيقات والبرمجيات
  // ===========================

  // هل تستخدم المؤسسة انظمة تشغيل وقواعد بيانات مرخصة او مدعومة
  hasLicensedSystemsAndDatabases(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75512").style.display = "block"; //اذكر انواعها وعددها:
    } else if (x === "كلا") {
      document.getElementById("75512").style.display = "none"; //اذكر انواعها وعددها:
    }
  },

  // هل تستخدم المؤسسة التطبيقات المكتبية مرخصة ومدعومة من شركة مايكروسوفت او غيرها
  hasLicensedOfficeApplications(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75516").style.display = "block"; //اذكر انواعها وعددها؟ يرجى ذكر العدد وكم مرخصة وكم غير مرخصة
    } else if (x === "كلا") {
      document.getElementById("75516").style.display = "none"; //اذكر انواعها وعددها؟ يرجى ذكر العدد وكم مرخصة وكم غير مرخصة
    }
  },

  // هل تستخدم المؤسسة نظام مكافحة الفايروسات مرخص
  hasLicensedAntivirus(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75521").style.display = "block"; //ما هو النوع المستخدم والاعداد
    } else if (x === "كلا") {
      document.getElementById("75521").style.display = "none"; //ما هو النوع المستخدم والاعداد
    }
  },

  // هل يتوفر انظمة ادارة الكترونية نظام ادارة مهام نظام ادارة اجتماعات نظام ادارة مشاريع نظام ادارة وثائق
  hasElectronicManagementSystems(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75527").style.display = "block"; //اذكر عدد المستخدمين لتلك الانظمة وما هو اسم الشركة وجنسيتها:
      document.getElementById("75528").style.display = "block"; //ما هي التطبيقات الخاصة  بالنظام؟
    } else if (x === "كلا") {
      document.getElementById("75527").style.display = "none"; //اذكر عدد المستخدمين لتلك الانظمة وما هو اسم الشركة وجنسيتها:
      document.getElementById("75528").style.display = "none"; //ما هي التطبيقات الخاصة  بالنظام؟
    }
  },

  // هل لدى المؤسسة نظام لرقمنة الوثائق والارشفة
  hasDocumentManagementSystem(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75536").style.display = "block"; //كم هي النسبة المئوية للوثائق المؤرشفة فيه من المجموع الكلي للوثائق الورقية؟
      document.getElementById("75542").style.display = "block"; //كم هو عدد مستخدمين نظام لرقمنة الوثائق والارشفة؟
      document.getElementById("75543").style.display = "block"; //كم عدد اجهزة الماسح الضوئي المتوفرة؟
    } else if (x === "كلا") {
      document.getElementById("75536").style.display = "none"; //كم هي النسبة المئوية للوثائق المؤرشفة فيه من المجموع الكلي للوثائق الورقية؟
      document.getElementById("75542").style.display = "none"; //كم هو عدد مستخدمين نظام لرقمنة الوثائق والارشفة؟
      document.getElementById("75543").style.display = "none"; //كم عدد اجهزة الماسح الضوئي المتوفرة؟
    }
  },

  //هل يتوفر انظمة ادارة الكترونية (نظام ادارة مهام، نظام ادارة اجتماعات، نظام ادارة مشاريع، نظام ادارة وثائق) ؟
  hasEManagementSystems(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75547").style.display = "block"; //كم عدد المستخدمين؟ وهل هو منتج من شركة عالمية ام محلي مع ذكر اسم الشركة؟
    } else if (x === "كلا") {
      document.getElementById("75547").style.display = "none"; //كم عدد المستخدمين؟ وهل هو منتج من شركة عالمية ام محلي مع ذكر اسم الشركة؟
    }
  },

  // هل تستخدم المؤسسة البريد الالكتروني في عملها وتعتمده
  usesEmailSystem(event) {
    var x = event;
    if (x === "نعم") {
      document.getElementById("75552").style.display = "block"; //نوع النظام البريدي المستخدم
      document.getElementById("75558").style.display = "block"; //عدد الصناديق البريدية
    } else if (x === "كلا") {
      document.getElementById("75552").style.display = "none"; //نوع النظام البريدي المستخدم
      document.getElementById("75558").style.display = "none"; //عدد الصناديق البريدية
    }
  },

  Filter_Foundation(event){
    this.inputFormField["subOrganizationUnit"] = null;
    var Main_Foundation = [
      //"وزارة النفط",
      "وزارة التخطيط", "وزارة العدل", "وزارة الصحة", "مكتب رئيس الوزراء"
    ],
    Secondary_Foundation = [
      /*
      [
        "وزارة النفط - مركز تقنيات المعلومات والاتصالات",
        "وزارة النفط - قسم حماية وسلامة المعلومات", "غير ذلك"
      ],//وزارة النفط
      */
      [
        "وزارة التخطيط - مقر الوزارة", "وزارة التخطيط - هيأة الاحصاء ونظم المعلومات الجغرافية",
        "وزارة التخطيط - المركز الوطني للتطوير الاداري وتقنية المعلومات", "وزارة التخطيط - هيئة الاعتماد العراقية",
        "وزارة التخطيط - الجهاز المركزي للتقييس والسيطرة النوعية", "غير ذلك"
      ],//وزارة التخطيط
      [
        "وزارة العدل - دائرة الدوائر العدلية", "وزارة العدل - دائرة التسجيل العقاري",
        "وزارة العدل - دائرة رعاية القاصرين", "وزارة العدل - دائرة الكتاب العدول", "وزارة العدل - دائرة التنفيذ",
        "وزارة العدل - دائرة الاصلاح العراقية", "وزارة العدل - دائرة اصلاح الاحداث", "غير ذلك"
      ],//"وزارة العدل"
      [
        "وزارة الصحة - دائرة صحة كركوك", "وزارة الصحة - دائرة صحة المثنى", "وزارة الصحة - دائرة صحة ذي قار",
        "وزارة الصحة - دائرة صحة ديالى", "وزارة الصحة - دائرة صحة الانبار", "وزارة الصحة - دائرة صحة كربلاء",
        "وزارة الصحة - دائرة صحة الرصافة", "وزارة الصحة - دائرة صحة ميسان", "وزارة الصحة - دائرة مدينة الطب",
        "وزارة الصحة - مركز تكنولوجيا المعلومات (مقر الوزارة)", "وزارة الصحة - دائرة صحة الديوانية",
        "وزارة الصحة - دائرة صحة البصرة", "غير ذلك",
      ],//وزارة الصحة
      [
        "المركز الوطني للتحول الرقمي"
      ]
    ];

    for(var i = 0; i < Main_Foundation.length; i++){
      if(event == Main_Foundation[i]){
        this.group_of_form[0].fields[4].properties[0].values = Secondary_Foundation[i];
        break;
      }else{
        this.group_of_form[0].fields[4].properties[0].values = [];
      }
    }
  },

  //------------------------------------------------------------------------------------------------------
  //التاكد من المعلومات
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

  Block_Groups(Groups_ID){
    for(var i = 0; i < Groups_ID.length; i++){
      if(i == 0){
        document.getElementById(Groups_ID[i]).style.display = "none";
      }else{
        document.getElementById(Groups_ID[i]).style.display = "block";
      }
    }
  },

  Info_Checking(event){
    if (event) {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        loader: "dots",
        transition: "fade",
        color: "#c30734"
      });

      var Groups_ID = [
        "34945_group", //معلومات المؤسسة
        "34935_group", //البنى التحتية
        "34934_group", //البرمجيات والتطبيقات
        "34936_group", //الخدمات
      ];

      //مال الي عدهم فقط مؤسسة بدون دوائر فرعيه
      var Main_Foundation = [
        //"الامانة العامة لمجلس الوزراء",
        "المجمع العلمي العراقي",
        "المصرف العراقي للتجارة",
        "الهيئة الوطنية للاستثمار",
        "الهيأة الوطنية للرقابة النووية والاشعاعية والكيميائية والبايولوجية",
        "امانة بغداد",
        "بيت الحكمة",
        "ديوان الوقف الشيعي",
        "ديوان اوقاف الديانات المسيحية والايزيدية والصابئية",
        "سلطة الطيران المدني",
        "شبكة الاعلام العراقي",
        //"مجلس الخدمة الاتحادي",
        "مجلس الدولة",
        "مجلس محافظة الديوانية",
        "مجلس محافظة بغداد",
        "مجلس محافظة ديالى",
        "مجلس محافظة ذي قار",
        "مجلس محافظة كربلاء المقدسة",
        "مجلس محافظة كركوك",
        "مجلس محافظة ميسان",
        "مجلس محافظة نينوى",
        "محافظة البصرة",
        "محافظة بغداد",
        "محافظة ديالى",
        "محافظة صلاح الدين",
        "محافظة كربلاء المقدسة",
        "محافظة كركوك",
        "محافظة ميسان",
        "محافظة واسط",
        "مكتب رئيس الجمهورية",
        "هيئة التصنيع الحربي",
        "هيئة النزاهة الاتحادية",
        "وزارة الاتصالات",
        "وزارة التربية",
        "وزارة الثقافة والسياحة والاثار",
        "وزارة الزراعة",
        "وزارة الشباب والرياضة",
        "وزارة الصناعة والمعادن",
        "وزارة العمل والشؤون الاجتماعية",
        "وزارة الكهرباء",
        "وزارة المالية",
        "وزارة الموارد المائية",
        "وزارة النفط",
        "وزارة النقل",
        "وزارة الدفاع",
        "هيئة الطاقة الذرية",
        "مجلس شؤون المنافسة ومنع الاحتكار",
        "وزارة الأعمار والإسكان والبلديات العامة",
        "الهيأة العامة لمراقبة تخصيص الواردات الاتحادية",
        "مجلس محافظة الانبار",
        "وزارة الداخلية",
        "محافظة المثنى",
        "محافظة الانبار",
        "وزارة الهجرة والمهجرين",
      ],
      Main_Phone_Numbers   = [
        //"المجمع العلمي العراقي"
        ["9647709805064", "9647811911618"], //ميساء جاسم محمد
        //"المصرف العراقي للتجارة"
        ["9647815163518"], //دعاء علاء حسن
        //الهيئة الوطنية للاستثمار
        ["9647717634957"], //داليا عامر جبار
        //الهيأة الوطنية للرقابة النووية والاشعاعية والكيميائية والبايولوجية
        ["9647726674331"], //عبدالرحمن احمد خضير
        //امانة بغداد
        ["9647721031222"], //شهد عبد الكريم قاسم
        //بيت الحكمة
        ["9647700630474"], //حسام خليل خضير
        //ديوان الوقف الشيعي
        ["9647706395488"], //عباس محمد عزيز
        //ديوان اوقاف الديانات المسيحية والايزيدية والصابئية
        ["9647712290391"], //فادي خالد ابراهيم
        //سلطة الطيران المدني
        ["9647700806036"], //سلام عدنان عبد الرحيم
        //شبكة الاعلام العراقي
        ["9647700090099"], //احمد عبد الستار حمزة
        //مجلس الدولة
        ["9647708116662"], //اسيا نعيم مطير

        ["9647823281148"], //ميثاق عايد فرحان
        ["9647704440440"], //عمار ابراهيم حيدر
        ["9647705859294"], //خالد محمد
        ["9647803169208"], //عقيل حسين حاجم
        ["9647706316745"], //علاء حسين علي
        ["9647739019638"], //رؤى جواد كاظم
        ["9647705522411"], //حسين جلاب محيسن
        ["9647705273540"], //سعد زكر محمد
        ["9647742800040"], //شهد عبد العظيم لطيف
        ["9647702765747"], //احمد عبد المهدي حسين
        ["9647710016073"], //حيدر قاسم عباس
        ["9647724419263"], //علي حاتم محمد
        ["9647725724569"], //ضرغام ناصب كريم
        ["9647714803311"], //حاجم حامد علي
        ["9647705522475"], //حسام دليل شناوة
        ["9647714493415"], //علي حسن ضمد
        ["9647832590637"], //مصطفى عبد القادر مهدي
        ["9647703991816"], //محمد جمال
        ["9647901599184"], //انمار اكرم جاسم
        ["9647805903344"], //رنا بربوتي
        ["9647704273759"], //نزار محمد سعيد
        ["9647713338999"], //صفوان هشام جاسم
        ["9647704909404"], //رؤى مجيد
        ["9647706230063"], //ايمن عماد رؤوف
        ["9647700983009"], //بلال عصام عبدالرزاق
        ["9647716128345"], //ايمان بدر
        ["9647714201626"], //طارق عبد العال
        ["9647702580887"], //جاسم محمد خليل
        ["9647716693802"], //أسامة صديق أحمد
        ["9647714613477", "9647801995566", "9647811911618"], //عباس رشدي ومصطفى صفاء
        ["9647734928266"], //مال الدفاع
        ["9647724272787"], //علي رعد عبدالله
        ["9647714380140"], //علي ماجد حميد
        ["9647705891646"], //لينا محمد عبد الوهاب
        ["9647704337297"], //علا قتيبة عبد الوهاب
        ["9647814563060"], //عمر رياض مولود
        ["9647706951451"], //حيدر عارم
        ["9647811969049"], //حيدر عبدالامير ناهي
        ["9647844447788"], //عمر محمد روضان
        ["9647716811541"], //محمد علي عبد شناوة
      ];

      //مال الي عدهم دوائر فرعية
      var Second_Main_Foundation = [
        /*
        "وزارة التخطيط", "وزارة العدل", "وزارة الصحة",
        */
        "مكتب رئيس الوزراء"
      ],
      Sub_Foundations = [
        /*
        //وزارة التخطيط
        "وزارة التخطيط - مقر الوزارة",
        "وزارة التخطيط - هيأة الاحصاء ونظم المعلومات الجغرافية",
        "وزارة التخطيط - المركز الوطني للتطوير الاداري وتقنية المعلومات",
        "وزارة التخطيط - هيئة الاعتماد العراقية",
        "وزارة التخطيط - الجهاز المركزي للتقييس والسيطرة النوعية",
        //"وزارة العدل"
        "وزارة العدل - دائرة الدوائر العدلية",
        "وزارة العدل - دائرة التسجيل العقاري",
        "وزارة العدل - دائرة رعاية القاصرين",
        "وزارة العدل - دائرة الكتاب العدول",
        "وزارة العدل - دائرة التنفيذ",
        "وزارة العدل - دائرة الاصلاح العراقية",
        "وزارة العدل - دائرة اصلاح الاحداث",
        //وزارة الصحة
        "وزارة الصحة - دائرة صحة كركوك",
        "وزارة الصحة - دائرة صحة المثنى",
        "وزارة الصحة - دائرة صحة ذي قار",
        "وزارة الصحة - دائرة صحة ديالى",
        "وزارة الصحة - دائرة صحة الانبار",
        "وزارة الصحة - دائرة صحة كربلاء",
        "وزارة الصحة - دائرة صحة الرصافة",
        "وزارة الصحة - دائرة صحة ميسان",
        "وزارة الصحة - دائرة مدينة الطب",
        "وزارة الصحة - مركز تكنولوجيا المعلومات (مقر الوزارة)",
        "وزارة الصحة - دائرة صحة الديوانية",
        "وزارة الصحة - دائرة صحة البصرة",
        */
        //مكتب رئيس الوزراء
        "المركز الوطني للتحول الرقمي",
      ],
      Sub_Phone_Numbers = [
        /*
        //وزارة التخطيط
        "9647716506408", //كمال محمد حسين
        "9647713824781", //حمزة عدنان داود
        "9647705385189", //انمار هاتف عبد المجيد
        "9647717732958", //رند صالح مجيد
        "9647901214611", //زينب صفاء عبد الجبار
        //وزارة العدل
        "9647703823514", //مصطفى نجدت مصطفى
        "9647703285050", //حيدر محمد علوان
        "9647714439217", //ياسر محمد شاكر
        "9647703604749", //محمد وسام حسين
        "9647706527992", //محمد حسين علوان
        "9647813333233", //احمد حسام الدين عباس
        "9647710608631", //علاء حسين صاحب
        //وزارة الصحة
        "9647701350567", //توفيق قيس حسيب
        "9647813444473", //احمد سعيد عبد العزيز ابراهيم
        "9647800007054", //معتز محمد ثامر حليحل
        "9647714706115", //عمر سامر حكمت نامق
        "9647805169084", //حازم حمد حمادي جاسم
        "9647706036160", //مصطفى مهدي صالح حسين
        "9647725988139", //ميساء علي حسين حسن
        "9647705511737", //مصطفى عباس حمود حسن
        "9647702535098", //مخلد محمد فلح حسن
        "9647818614990", //احمد رشيد زرزور يونس
        "9647725254525", //علي باسم خليل
        "9647705757880", //رغد اسعد جواد كاظم
        "9647740854626", //سيف مقداد ابراهيم
        */
        //مكتب رئيس الوزراء
        "9647716646815", //محمد كريم محمد شكر
      ],
      Array_Start = [
        //وزارة التخطيط
        0,
        //وزارة العدل
        5,
        //وزارة الصحة
        12,
        //المركز
        25,
      ],
      Arrary_End = [
        //وزارة التخطيط
        5,
        //وزارة العدل
        12,
        //وزارة الصحة
        25,
        //المركز
        26
      ];

      let matchFound = false; // Flag to track if a match is found

      if(this.inputFormField.formScopeType == "مقر المؤسسة الرئيسي"){
        for(var i = 0; i < Main_Foundation.length; i++){
          if(
            Main_Foundation[i] == this.inputFormField.organizationHeadquarters &&
            Main_Phone_Numbers[i].includes(this.inputFormField.employeePhoneNumber)
          ){
            matchFound = true;
            this.Block_Groups(Groups_ID);
            loader.hide();
            this.ssingleNotification("تم الدخول بنجاح", "top-right");
            break; // Exit the loop once a match is found
          }
        }
      }else if(this.inputFormField.formScopeType == "دائرة فرعية"){
        if(this.inputFormField.subOrganizationUnit != "غير ذلك"){
          for(var i = 0; i < Sub_Foundations.length; i++){
            if(Sub_Foundations[i] == this.inputFormField.subOrganizationUnit &&
              Sub_Phone_Numbers[i] == this.inputFormField.employeePhoneNumber
            ){
              matchFound = true;
            this.Block_Groups(Groups_ID);
            loader.hide();
            this.ssingleNotification("تم الدخول بنجاح", "top-right");
            break; // Exit the loop once a match is found
            }
          }
          /*
          for(var i = 0; i < Sub_Foundations.length; i++){
            if(Second_Main_Foundation[i] == this.inputFormField.organizationHeadquarters){
              for(var j = Array_Start[i]; j < Arrary_End[i]; j++){
                if(
                  Sub_Foundations[j] == this.inputFormField.subOrganizationUnit &&
                  Sub_Phone_Numbers[j] == this.inputFormField.employeePhoneNumber
                ){
                  matchFound = true;
                  this.Block_Groups(Groups_ID);
                  loader.hide();
                  this.ssingleNotification("تم الدخول بنجاح", "top-right");
                  break; // Exit the loop once a match is found
                }
              }
            }
          }
          */
        }else{
          for(var i = 0; i < Sub_Phone_Numbers.length; i++){
            if(Sub_Phone_Numbers[i] == this.inputFormField.employeePhoneNumber){
              matchFound = true;
              this.Block_Groups(Groups_ID);
              loader.hide();
              this.ssingleNotification("تم الدخول بنجاح", "top-right");
              break; // Exit the loop once a match is found
            }
          }
        }
      }else{
        matchFound = false;
      }

      if (!matchFound) {
        loader.hide();
        this.singleNotification("رقم الهاتف غير مطابق مع المخول ", "top-right");
      }
    }
  },
}