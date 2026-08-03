{
  First_Function(Field_ID, Field_Prog, Field_State){
    document.getElementById(Field_ID).style.display = Field_State;
    this.inputFormField[Field_Prog] = null;
  },

  //البريد الرسمي للجهة
  HaveNotFun(event) {
    if (event == "نعم") {
      this.First_Function("68941", "emailOfOrq", "block");
    } else {
      this.First_Function("68941", "emailOfOrq", "none");
    }
  },

  //البريد الرسمي للمخول
  HaveNotSecondFun(event){
    if (event == "نعم") {
      this.First_Function("68943", "emailOfoar", "block");
    } else {
      this.First_Function("68943", "emailOfoar", "none");
    }
  },

  //اسم النطاق   (Domain Name) :
  firstFun(event) {
    if (event == "نعم") {
      this.First_Function("68946", "NameOfDomain", "block");
    }else {
      this.First_Function("68946", "NameOfDomain", "none");
    }
  },

  //اسم النطاق الفرعيd
  secondfun(event) {
    if (event == "نعم") {
      this.First_Function("71915", "nameOfSubDomain", "block");
    }else {
      this.First_Function("71915", "nameOfSubDomain", "none");
    }
  },

  //اللغة البرمجية المستخدمة مع رقم الاصدار: ونوع قاعدة البيانات المستخدمة:
  thirdfun(event) {
      if (event == "نعم") {
        this.First_Function("68951", "typeOfProgrammingWithVersion", "block");
        this.First_Function("68950", "typeOfDataba", "block");
      }else {
        this.First_Function("68951", "typeOfProgrammingWithVersion", "none");
        this.First_Function("68950", "typeOfDataba", "none");
      }
  },

  //الوقت المتوقع لاكمال عملية الرفع: وما هو حجم الملفات التقريبي المراد رفعها: (GB / MB)
  forthfun(event) {
      if (event == "نعم") {
        this.First_Function("71648", "timeOfUpload", "block");
        this.First_Function("68954", "sizreOFfile", "block");
        this.First_Function("71910", "FirstFileType", "block");
      }else {
        this.First_Function("71648", "timeOfUpload", "none");
        this.First_Function("68954", "sizreOFfile", "none");
        this.First_Function("71910", "FirstFileType", "none");
      }
  },

  //عدد حسابات البريد المطلوبة:
  fifthfun(event) {
      if (event == "نعم") {
        this.First_Function("68956", "numberOfaccountNeed", "block");
      } else {
        this.First_Function("68956", "numberOfaccountNeed", "none");
      }
  },

  //توضيح الية العمل الخاصة بالتكامل ان وجدت
  sixfun(event) {
      if (event == "نعم") {
        this.First_Function("68958", "wayToApi", "block");
      } else {
        this.First_Function("68958", "wayToApi", "none");
      }
  },
    
  //نوع الخدمة
  serviceTypeFun(event) {
    var IDs = [
      //"استضافة موقع فقط"
      "68947", //هل تتطلب الاستضافة نطاقات فرعية ؟
      "68949", //هل تتضمن الاستضافة قاعدة بيانات؟
      "68957", //هل( الموقع / النظام / التطبيق) يتضمن تكامل مع خدمات أو واجهات خارجية ( API )؟
      "68952", //هل الموقع جاهز للرفع؟

      //"استضافة بريد الكتروني فقط"
      "70452", //الحجم المتوقع الكلي للبريد
      //"68955", //هل تحتاج لبريد إلكتروني ضمن النطاق؟
      "71914", //نوع حجم البريد

      //"استضافة موقع مع بريد الكتروني"
      "68945", //هل يتوفر نطاق رسمي (iq) ؟
    ],
    Progs = [
      //"استضافة موقع فقط"
      "sunDomain", //هل تتطلب الاستضافة نطاقات فرعية ؟
      "IfHaveDataBa", //هل تتضمن الاستضافة قاعدة بيانات؟
      "APIContain", //هل( الموقع / النظام / التطبيق) يتضمن تكامل مع خدمات أو واجهات خارجية ( API )؟
      "distict", //هل الموقع جاهز للرفع؟

      //"استضافة بريد الكتروني فقط"
      "EmailSize", //الحجم المتوقع الكلي للبريد
      //"IFneedEmail", //هل تحتاج لبريد إلكتروني ضمن النطاق؟
      "SecondFileType", //نوع حجم البريد

      //"استضافة موقع مع بريد الكتروني"
      "IfHave", //هل يتوفر نطاق رسمي (iq) ؟
    ];
    
    if (event == "استضافة موقع فقط") {
      document.getElementById("34207_group").style.display = "block";

      for(var i = 0; i < IDs.length; i++){
        if(i < 4 || i > 5){
          this.First_Function(IDs[i], Progs[i], "block");
        }else{
          this.First_Function(IDs[i], Progs[i], "none");
        }
      }
    }else if (event == "استضافة بريد الكتروني فقط") {
      document.getElementById("34207_group").style.display = "block"; 

      for(var i = 0; i < IDs.length; i++){
        if(i > 3){
          this.First_Function(IDs[i], Progs[i], "block");
        }else{
          this.First_Function(IDs[i], Progs[i], "none");
        }
      }
    } else if (event == "استضافة موقع مع بريد الكتروني"){
      document.getElementById("34207_group").style.display = "block";

      for(var i = 0; i < IDs.length; i++){
        this.First_Function(IDs[i], Progs[i], "block");
      }
    } else {
      document.getElementById("34207_group").style.display = "none";
      
      for(var i = 0; i < IDs.length; i++){
        this.First_Function(IDs[i], Progs[i], "none");
      }
    }
  },

  FileOpen(){
    window.open("https://ur.gov.iq/1ptwsi", "_blank");
  },

  /*
  //حتى الحقل يستقبل فقط احرف انكليزي
  English_Only(){
    const input = document.getElementById('68946');

    input.addEventListener('keydown', (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl || e.key.length > 1) return; // allow shortcuts, arrows, etc.

      if (!/^[A-Za-z]$/.test(e.key)) {
        e.preventDefault(); // block non-English letters
      }
    });
  },
  */
}