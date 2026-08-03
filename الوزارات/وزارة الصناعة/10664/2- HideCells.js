{
  // --- start snippet code ---------
  applyTypeFunc(event) {
      this.inputFormField["RecLocIndReqOfficeName"] = null;
    if (event == "مكاتب المحافظات التابعة للمديرية") {
      document.getElementById("32849").style.display = "block";
    } else {
      document.getElementById("32849").style.display = "none";
    }
  },

  // --- صفة مقدم الطلب ---------
  projectOwnerFun(event) {
    var fieldsIDs = ["31146", "29748", "29749"];
    var fieldsName = [
      "RecLocIndAuthReqNO",
      "RecLocIndReqAppName",
      "RecLocIndReqAppMob",
    ];

    fieldsName.forEach((elB) => {
        this.inputFormField[elB] = null;
      });

    if (event == "مخول") {
      fieldsIDs.forEach((el) => {
        document.getElementById(el).style.display = "block";
      });
    } else {
      fieldsIDs.forEach((el) => {
        document.getElementById(el).style.display = "none";
      });
    }
  },

  //--------------------------------------------------------------------------------------------------------------------
  // --- End    صفة مقدم الطلب   ---------
  // ------       نوع التوصية   ---------
  recommandationTypeFunc(event) {  
    var x = event;
    //--- Add  recommandationType To ISO No
    //if (x !=null)
    //this.group_of_form[1].fields[36].label="  ق/ص (1)- إصدار (1) تشرين الأول 2024  "+ "("+x +") " ;
    //---- show the project status -------
    document.getElementById("29750").style.display = "block";
    this.inputFormField["RecLocIndProjconstruction"] = null;
    
    //---- reset when change value ------
    var fieldsIDs = [
        "31502", "29910", "29962", "31132", "29963", "31188", "31189",
    ];
    var fieldsNames = ["RecLocIndReqPromOne", "RecLocIndReqPromTwo",];
    

    var caseThreeIDs = ["30867", "31132", "29962", "29961",];
    var caseLandRecycling=[ 
        "31131", "31541", "31536", "31145", "30867", "31132", "29962", "29961",
    ];
    var caseThreeNames = ["RecLocIndeditSpaceDetermine", "recLocIndPreviousRec",];
    
    fieldsIDs.forEach((el) => {
        document.getElementById(el).style.display = "none";
    });
    fieldsNames.forEach((elB) => {
        this.inputFormField[elB] = null;
    });
    //--
    caseThreeIDs.forEach((el) => {
        document.getElementById(el).style.display = "none";
    });
    caseThreeNames.forEach((elB) => {
        this.inputFormField[elB] = null;
    });
    this.group_of_form[1].fields[20].properties[0].values = [
        "تحت التأسيس",
        "كامل التأسيس",
    ];
    this.group_of_form[1].fields[21].properties[0].values = ["نعم", "لا"];
    
    //---------Change Label----------------------
            this.group_of_form[1].fields[21].label="هل الخطوط الإنتاجية مشيدة؟ ";
            this.group_of_form[1].fields[22].label="نسبة الانجاز والمشيدات";
            this.group_of_form[1].fields[24].label="رقم طلب الكشف";
    //-------------------- start conditions --------------------
    //29961
    var IDsType = {
        firstTimeRotate: ["31502", "29910",],
        editSeqear: ["31132", "29962",],
        changeCustomizeIDs: ["29963", "31188", "31189"],
    };
    var IDsHide={
        firstTiem: ["29962","31466"]
    }
    
    var namesType = {
    // firstTime: ["RecLocIndReqPromOne", "RecLocIndReqPromTwo","recLocIndPreviousRec"],
        firstTimeRotate: ["RecLocIndReqPromOne", "RecLocIndReqPromTwo"], //التعهدات
        editSeqear: [ "RecLocIndeditSpaceType","RecLocIndeditSpaceModifiyingReasons"],
        changeCustomizeNames: [
        "RecLocIndChangLocType",
        "recLocIndFromFromGovernorate",
        "recLocIndFromToGovernorate",
        ], };
    //  document.getElementById("31536").style.display = "none"; //رقم الكشف
    setTimeout(() => {
        switch (x) {
        case "توصية تخصيص قطعة أرض لأول مرة":
        
            IDsType.firstTimeRotate.forEach((el) => {
            document.getElementById(el).style.display = "block";
            });
        //   document.getElementById("31536").style.display = "none";
            //----Rana
            namesType.changeCustomizeNames.forEach((elB) => {
            this.inputFormField[elB] = null;
        });
            namesType.editSeqear.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
            //---------------------Hide
            IDsHide.firstTiem.forEach((el) => {
            document.getElementById(el).style.display = "none";
            });
        
            break;
        case "تعديل مساحة":
    
            IDsType.editSeqear.forEach((el) => {
            document.getElementById(el).style.display = "block";
            });
        /*Rana   namesType.editSeqear.forEach((elB) => {
            this.inputFormField[elB] = null;
            });*/
            //----Rana
        /*    ressetRecLoc.forEach((elB) => {
            this.inputFormField[elB] = null;
                
            });*/
            break;
        case "تغيير جهة تخصيص":
        this.group_of_form[1].fields[20].properties[0].values = [
        "تحت التأسيس",
        "كامل التأسيس",
    ];
        
        // this.inputFormField.RecLocIndProjconstruction = "تحت التأسيس";
            IDsType.changeCustomizeIDs.forEach((el) => {
            document.getElementById(el).style.display = "block";
            });
            caseThreeIDs.forEach((el) => {
            document.getElementById(el).style.display = "none";
            });
            caseThreeNames.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
            namesType.editSeqear.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
            break;
        case "تجديد توصية (إعادة توصية)":
            this.group_of_form[1].fields[20].properties[0].values = [
            "تحت التأسيس",
            ];
            this.inputFormField.RecLocIndProjconstruction = "تحت التأسيس";
            caseLandRecycling.forEach((el) => {
            document.getElementById(el).style.display = "none";
            });
            caseThreeNames.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
            //----Rana
            namesType.changeCustomizeNames.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
            namesType.editSeqear.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
            break;
        case "تدوير قطعة أرض":
            this.group_of_form[1].fields[20].properties[0].values = [
            "تحت التأسيس",
            ];
            
            this.inputFormField.RecLocIndProjconstruction = "تحت التأسيس";
            document.getElementById("31131").style.display = "block";///هل الخطوط الإنتاجية مشيدة
            document.getElementById("31541").style.display = "block";///نسبة الإجاز والمشيدات
            this.group_of_form[1].fields[21].properties[0].values = ["نعم"];
            this.inputFormField.RecLocIndProjconstructionLine = "نعم";
            document.getElementById("31536").style.display = "block";//رقم الكشف
            document.getElementById("31145").style.display = "none";//عائدية الموقع

        IDsType.firstTimeRotate.forEach((el) => {
            document.getElementById(el).style.display = "block";
            });
            
            ///-----Change Label-----
            this.group_of_form[1].fields[21].label="هل الخطوط الإنتاجية مشيدة للإجازة الملغاة؟";
            this.group_of_form[1].fields[22].label="نسبة الانجاز والمشيدات للإجازة الملغاة";
            this.group_of_form[1].fields[24].label="رقم طلب الكشف للإجازة الجديدة";
            
            break;
        default:
            fieldsIDs.forEach((el) => {
            document.getElementById(el).style.display = "none";
            });
            fieldsNames.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
            //----Rana
            namesType.changeCustomizeNames.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
            namesType.editSeqear.forEach((elB) => {
            this.inputFormField[elB] = null;
            });
        }
    }, 800);
  },

  //---------------------------------------------------------------------------
  projectStatusFunc(event) {
    var x = event;
    var fieldsIDs = ["31145", "30867", "31536", "31131", "31541"];
    var fieldsNames = [
      "RecLocIndFullProjconstruction",
      "RecLocIndeditSpaceDetermine",
      "recLocIndDetect",
      "RecLocIndProjconstructionLine",
      "RecLocIndProjconstructionLineper", //18
    ];

    //-- start condition depending on ** recommandationTypeFunc ** ---------
    if (
      this.inputFormField.RecLocIndType == "توصية تخصيص قطعة أرض لأول مرة"
    ) {
      this.inputFormField["RecLocIndFullProjconstruction"] = null;
      this.inputFormField["RecLocIndeditSpaceDetermine"] = null;
      this.inputFormField["recLocIndDetect"] = null;
      this.inputFormField["RecLocIndProjconstructionLineper"] = null;
      this.inputFormField["RecLocIndProjconstructionLine"] = null;
      if (x == "كامل التأسيس") {
        document.getElementById("31145").style.display = "block";
        document.getElementById("30867").style.display = "block";
        document.getElementById("31536").style.display = "block";
        //---------- hidden -------------
        document.getElementById("31541").style.display = "none";
        document.getElementById("31131").style.display = "none";
      } else if (x == "تحت التأسيس") {
        document.getElementById("31131").style.display = "block"; 
        document.getElementById("30867").style.display = "block";
        //---------- hidden -------------
          //document.getElementById("31131").style.display = "none";//هل الخطوط
        document.getElementById("31541").style.display = "none";//نسبة المشيدات
        document.getElementById("31145").style.display = "none";//عائدية الموقع
        document.getElementById("31536").style.display = "none";//رقم طلب الكشف
      } else {
          
        fieldsIDs.forEach((el) => {
          document.getElementById(el).style.display = "none";
        });
        fieldsNames.forEach((elN) => {
          this.inputFormField[elN] = null;
        });
            //----Rana
            namesType.changeCustomizeNames.forEach((elB) => {
            this.inputFormField[elB] = null;
          });
              namesType.editSeqear.forEach((elB) => {
            this.inputFormField[elB] = null;
          });
      }
    } else if ((this.inputFormField.RecLocIndType == "تعديل مساحة") || (this.inputFormField.RecLocIndType == "تغيير جهة تخصيص")){
      this.inputFormField["RecLocIndProjconstructionLine"] = null;
      this.inputFormField["RecLocIndFullProjconstruction"] = null;
      this.inputFormField["recLocIndDetect"] = null;
      if (x == "تحت التأسيس") {
        document.getElementById("31131").style.display = "block";
          document.getElementById("31145").style.display = "none";//Rana  عائدية الموقع
      //document.getElementById("31536").style.display = "none";//رقم الكشف
      } else if (x == "كامل التأسيس"){
        document.getElementById("31131").style.display = "none";///Rana
        document.getElementById("31536").style.display = "block";
        document.getElementById("31145").style.display = "block";
      } else {
        fieldsIDs.forEach((el) => {
          document.getElementById(el).style.display = "none";
        });
        fieldsNames.forEach((elN) => {
          this.inputFormField[elN] = null;
        });
        //----Rana
            namesType.changeCustomizeNames.forEach((elB) => {
            this.inputFormField[elB] = null;
          });
                namesType.editSeqear.forEach((elB) => {
            this.inputFormField[elB] = null;
          });
        document.getElementById("31536").style.display = "none";//رقم الكشف
        document.getElementById("31145").style.display = "none"; //عائدية الموقع
      }//end else
    }
  },

  spaceEditReasonFunc(event) {
      this.inputFormField["RecLocIndeditSpaceModifiyingReasons"] = null;
    if (event == "أخرى") {
      document.getElementById("31466").style.display = "block";
    } else {
      document.getElementById("31466").style.display = "none";
    }
  },

  //----------------------------------------------------------------------------------------------------------
  ownerDetectSquearFunc(event) {
      this.inputFormField["RecLocIndeditOwnSpaceDet"] = null;
    if (event == "صاحب المشروع") {
      document.getElementById("31132").style.display = "block";
    } else {
      document.getElementById("31132").style.display = "none";
    }
  },

  //------------------------------------------------------------------------------------------
  isProductLinesFunc(event) {
    var fieldsIDs = ["31541", "31536"];
    var fieldsNames = [
      "RecLocIndProjconstructionLineper", //18
      "recLocIndDetect", //20
    ];
    if (
      this.inputFormField.RecLocIndType == "توصية تخصيص قطعة أرض لأول مرة" ||
      this.inputFormField.RecLocIndType == "تعديل مساحة" ||
      this.inputFormField.RecLocIndType == "تدوير قطعة أرض" || 
      this.inputFormField.RecLocIndType == "تغيير جهة تخصيص" 
    ) {
      if (this.inputFormField.RecLocIndProjconstruction == "تحت التأسيس") {
          this.inputFormField["recLocIndDetect"] = null;
          this.inputFormField["RecLocIndProjconstructionLineper"] = null;
          fieldsNames.forEach((elB) => {
            this.inputFormField[elB] = null;
          });

          //----Rana
          /*
          ressetRecLoc.forEach((elB) => {
          this.inputFormField[elB] = null;
          });
          */
        if (event == "نعم") {
                
          fieldsIDs.forEach((el) => {
            document.getElementById(el).style.display = "block";
          });
        } else {////event=لا
          fieldsIDs.forEach((el) => {
            document.getElementById(el).style.display = "none";
          });
        }//End else
      } else {////كامل التأسيس
          document.getElementById("31536").style.display = "block";
          document.getElementById("31541").style.display = "none";
      }
    }
  },

  //------------------------------------------------------------------------------------------
  //-------------------------------------كود تسهيل--------------------------------------------
  //------------------------------------------------------------------------------------------
  singleNotification(notifyText, position) {
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

  getManagCity(event) {
    this.group_of_form[2].fields[9].properties[0].values = [];
    document.getElementById("87003").style.display = "none";
    //تفريغ سلكتر المنطقة في حال عدم اختيار اي محافظة
    this.inputFormField["customArea"] = null;
    var arrCities = [
      "بابل", //0--
      "الانبار", //1--
      "الموصل", //2--
      "الناصرية", //3--
      "البصرة", //4--
      "ديالى", //5--
      "كركوك", //6--
      "صلاح الدين", //7--
      "الكوت", //8--
      "ميسان", //9--
      "كربلاء", //10--
      "النجف", //11--
      "القادسية", //12--
      "المثنى", //13--
      "بغداد" //14--
    ];
    var arrayBranch = [
        [
          "الحلة - الجديدة",
          "الفرات",
          "الكفل",
          "الهاشمية",
          "الحلة",
          "الحمزة الغربي",
          "المسيب",
          "القاسم",
          "كوثى",
          "الصويرة",
          "النيل",
          "التحاويل",
          "الخرسة"
        ],//0--
        [
          "راية",
          "العامرية",
          "الرطبة",
          "الفلوجة",
          "حديثة",
          "الكرمة",
          "البغدادي",
          "القائم",
          "الرمادي",
          "الحبانية",
          "عانة",
          "الخالدية",
          "هيت",
          "نينوى",
          "الصقلاوية"
        ],//1--
        [
          "تلكيف",
          "الحمدانية",
          "العربي",
          "وادي حجر",
          "المدينة العتيقة",
          "نينوى",
          "المنصور",
          "تلعفر",
          "المأمون",
          "السكر",
          "الشفاء",
          "سنجار",
          "القيارة",
          "التنك",
          "الشيخان",
          "البعاج",
          "عقرة",
          "المثنى",
          "الحضر",
          "الزهراء"
        ],//2--
        [
          "الرفاعي",
          "الجزائر",
          "الجبايش",
          "التربية",
          "المصطفى",
          "الفضيلية",
          "الشطرة",
          "المعلمون",
          "مخمور",
          "البطحاء",
          "الإسكان",
          "النصر",
          "ذي قار",
          "الفجر",
          "الحبوبي",
          "الفهود",
          "سوق الشيوخ",
          "الصناعي",
          "المجر",
          "الشهداء"
        ],//3--
        [
          "الهارثة",
          "شط العرب",
          "المعقل",
          "البرجسية",
          "الزبير",
          "المدينة",
          "القبلة",
          "ابو الخصيب",
          "سفوان",
          "العشار",
          "القرنة",
          "الخورة",
          "التنومة",
          "الفاو",
          "الجمهورية",
          "الأبلة"
        ],//4--
        [
          "خانقين",
          "الخالص",
          "جلولاء",
          "بعقوبة",
          "المقدادية",
          "السعدية",
          "منصورية الجبل",
          "بلد روز",
          "قرة تبة",
          "مندلي"
        ],//5--
        [
          "الحرية",
          "القادسية",
          "داقوق",
          "دوميز",
          "المعلمين",
          "العسكري",
          "شورو",
          "الواسطي",
          "الحويجة",
          "رحيماوا",
          "المنصور",
          "دبس",
          "عرفة",
          "كركوك"
        ],//6--
        [
          "سليمان بيك",
          "بيجي",
          "امرلي",
          "سامراء",
          "الدجيل",
          "العلم",
          "الدور",
          "طوز خورماتو",
          "خان البغدادي",
          "تكريت",
          "الشرقاط",
          "بلد"
        ],//7--
        [
          "الموفقية",
          "الخلاني",
          "الاحرار",
          "المحمودية",
          "الصويرة",
          "المدينة",
          "النعمانية",
          "العزيزية",
          "السوق",
          "الحي",
          "الجبيري",
          "الزبيدية",
          "بدرة",
          "السد",
          "واسط",
          "مركز مدينة الكوت",
          "النصر"
        ],//8--
        [
          "القلعة",
          "المجمع",
          "البطلة",
          "الميمونة",
          "الكحلاء",
          "قلعة صالح",
          "علي الشرقي",
          "المجر",
          "المدائن",
          "الكحلاء",
          "العمارة",
          "السلام",
          "الصدر",
          "علي الغربي",
          "البيضاء"
        ],//9--
        [
          "الصادق",
          "القادسية",
          "الحسين",
          "الهندية",
          "مركز مدينة كربلاء",
          "الجادرية",
          "الحر",
          "مذبح",
          "الفرات",
          "الخيرات",
          "المخيم",
          "عين التمر"
        ],//10--
        [
          "النجف الأشرف",
          "مركز مدينة النجف",
          "السجاد",
          "المشخاب",
          "الكوفة",
          "المناذرة",
          "القادرية",
          "الحيدرية",
          "الحنانة",
          "المثنى",
          "الخور"
        ],//11--
        [
          "الشافعية",
          "السيافية",
          "السنية",
          "الدغارة",
          "المقدادية",
          "السوق",
          "الكحلاء",
          "آل بدير",
          "الحمزة",
          "سومر",
          "نفر",
          "حي الجزائر",
          "الجمهورية",
          "الشامية",
          "مركز مدينة الديوانية",
          "المخيم",
          "البطينة"
        ],//12--
        [
          "المجر",
          "الحي",
          "الرميثة",
          "الخالدية",
          "السلمان",
          "السد",
          "الوركاء",
          "السماوة",
          "الهارثة",
          "الخضر"
        ],//13--
        [
          "يوسفية",
          "عامرية",
          "حارثية",
          "اسكان",
          "عرصات",
          "حي الاعلام",
          "يرموك",
          "جمعية خير الله",
          "علي الصالح",
          "مواصلات",
          "صليخ",
          "ري",
          "نهضة",
          "فحامة",
          "بيجية",
          "امين",
          "تراث",
          "شعلة",
          "غزالية",
          "قاهرة",
          "شالجية",
          "دولعي",
          "كاظمية",
          "مهدية",
          "رشاد",
          "مستنصرية",
          "سفارات",
          "علوية",
          "غدير",
          "شارع المغرب",
          "مدينة الصدر",
          "مشتل",
          "حي الجهاد",
          "رسالة",
          "شرطة خامسة",
          "الطوبجي",
          "زعفرانية",
          "مشتل",
          "تاجي",
          "لطيفية",
          "ثعالبة",
          "راشدية",
          "دورة",
          "سبع ابكار",
          "وزيرية",
          "وزيرية",
          "شارع فلسطين",
          "محمودية",
          "عبيدي",
          "شعب",
          "حي تونس",
          "عدل",
          "باب الشرقي",
          "ابي غريب",
          "حي أور",
          "رصافة",
          "بسماية",
          "الحرية",
          "فضيلية",
          "اعطيفية",
          "باب المعظم",
          "أعظمية",
          "كريعات",
          "قادسية",
          "بكرية",
          "أبو دشير",
          "زيونة",
          "شباب",
          "جوادين",
          "مدائن",
          "طارمية",
          "رفاق",
          "صالحية",
          "وحدة",
          "حي الجامعة",
          "بنوك",
          "حي العامل",
          "حي الخضراء",
          "صحة",
          "كرخ",
          "منصور",
          "جادرية",
          "كرادة",
          "معامل",
          "حي جميلة",
          "شارع حيفا",
          "داودي",
          "حسينية",
          "كمالية",
          "وشاش",
          "بغداد الجديدة",
          "بياع",
          "الكفاح",
          "كرادة مريم",
          "صالحية",
          "الطالبية",
          "شرطة رابعة",
          "ميكانيك",
          "البلديات",
          "المنطقة الخضراء",
          "سيدية",
          "خطيب",
          "معالف"
        ]//14
    ];

    for (var i = 0; i < arrCities.length; i++) {
      if (arrCities[i] == event) {
        //سلكتر المنطقة
        document.getElementById("87003").style.display = "block";
        this.group_of_form[2].fields[9].properties[0].values =
            arrayBranch[i];
      }
    }
  },

  async getPriceInfoApi(city, area) {
      let loader = this.$loading.show({
          container: this.$refs.formContainer,
          loader: "dots",
          transition: "fade",
          color: "#c30734"
      });
      try {
          const response = await fetch(
              "https://eservice.ur.gov.iq/api/v2/customer/tashel/total_amount",
              {
                  method: "POST",
                  headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${this.token}`
                  },
                  body: JSON.stringify({
                      city: city,
                      area: area
                  })
              }
          );
          loader.hide();
          const result = await response.json();
          if (!result.response.message || !result.response.message.total_amount) {
              this.evalErr.push("لم يتم جلب بيانات السعر الكلي ");
              this.singleNotification(
                  "لم يتم جلب بيانات السعر الكلي",
                  "top-right"
              );
          } else {
              this.evalErr = [];
              this.singleNotification(
                  "تم جلب بيانات السعر الكلي بنجاح",
                  "top-right"
              );
              var totalAmount = result.response.message.total_amount;

              if (totalAmount) {
                  //اظهار حقل مبلغ التوصيل وقفله واضافة مبلغ التوصيل بداخله
                  document
                      .getElementById("87004")
                      .classList.add("isDisabled");

                  document.getElementById("87004").style.display =
                      "block";

                  this.inputFormField["totalPrice"] = `${totalAmount}`;

                  document.getElementsByName(
                      "totalPrice"
                  )[0].disabled = true;
              }
          }
      } catch (error) {
          this.singleNotification(
              "حدث خطأ أثناء جلب بيانات السعر الكلي",
              "top-right"
          );
          loader.hide();
          this.hideErr.push(error);
      }
  },

  getTotalPrice(event) {
      if (event) {
          var selectedCityEnglish = "";
          //ياخذ قيمة المحافظة ويحطها بهذا المتغير
          var selectedCityArabic = this.inputFormField["customCity"];
          var citiesArabic = [
              "بابل", //0
              "الانبار", //1
              "الموصل", //2
              "الناصرية", //3
              "البصرة", //4
              "ديالى", //5
              "كركوك", //6
              "صلاح الدين", //7
              "الكوت", //8
              "ميسان", //9
              "كربلاء", //10
              "النجف", //11
              "القادسية", //12
              "المثنى", //13
              "بغداد" //14
          ];
          var citiesEnglish = [
              "Babil",
              "Al-Anbar",
              "Mosul",
              "Al-Nasiriyah",
              "Basra",
              "Diyala",
              "Kirkuk",
              "Salah al-Din",
              "Al-Kut",
              "Maysan",
              "Karbala",
              "Najaf",
              "Al-Qadisiyyah",
              "Al-Muthanna",
              "Baghdad"
          ];

          for (var i = 0; i < citiesArabic.length; i++) {
              if (citiesArabic[i] == selectedCityArabic) {
                  selectedCityEnglish = citiesEnglish[i];
              }
          }
          this.getPriceInfoApi(
              selectedCityArabic,
              this.inputFormField["customArea"]
          );
      } else {
          //اخفاء حقل مبلغ التوصيل
          document.getElementById("87004").style.display = "none";
          this.inputFormField["totalPrice"] = null;
          document.getElementById("87004").classList.add("isDisabled");
      }
  },
  
  getTasheelInfo(event) {
      var fieldsIDs = [
        "86981", //البريد الالكتروني
        "86982", //رقم القطعة
        "86998", //محلة
        "86999", //رقم الدار
        "87000", //الزقاق
        "87001", //اقرب نقطة دالة
        "87002" //المحافظة
      ];
      var fieldsNames = [
        "tasheelEmail", //البريد الالكتروني
        "addressLineOne", //رقم القطعة
        "addressLineTow", //محلة
        "homeNumber", //رقم الدار
        "county", //الزقاق
        "nearestLandmark", //اقرب نقطة دالة
        "customCity" //المحافظة
      ];
      if (event) {
        fieldsIDs.forEach(el => {
            document.getElementById(el).style.display = "block";
        });
        fieldsNames.forEach(fieldName => {
            this.inputFormField[fieldName] = null;
        });
      } else {
        fieldsIDs.forEach(el => {
            document.getElementById(el).style.display = "none";
        });
        fieldsNames.forEach(fieldName => {
            this.inputFormField[fieldName] = null;
        });
        //---- empty the customArea
        this.group_of_form[2].fields[9].properties[0].values = [];
        document.getElementById("87003").style.display = "none";
        this.inputFormField["customArea"] = null;
      }
  },
}