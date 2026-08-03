{
    //---- start snippet code here -----------
    getInputFieldCertFunc(event) {
      //--- display groups ----
      document.getElementById("11090_group").style.display = "block";
      document.getElementById("12505_group").style.display = "block";

      if(event == "خارج العراق (مترجم باللغة العربية - واللغة الانكليزية)"){
        document.getElementById("73292").style.display = "block";
      }else{
        document.getElementById("73292").style.display = "none";
      }

      this.inputFormField["Birth"] = null;
      if(event=="الاجانب داخل العراق"){
        document.getElementById("14474").style.display = "none";
        this.inputFormField["typee"] = null;
        this.inputFormField["cardnumber"] = null;
        this.inputFormField["Carddate"] = null;
        this.inputFormField["IdLocation"] = null;
        this.inputFormField["Nationality"] = null;
        this.inputFormField["Datecertificate"] = null;
        this.inputFormField["Record"] = null;
        this.inputFormField["newspaper"] = null;
        document.getElementById("33947").style.display = "none";
          this.inputFormField["otherReason"] = null;
      }
      if(event != "الاجانب داخل العراق"){
        document.getElementById("14474").style.display = "block";
        this.inputFormField["typee"] = null;
        document.getElementById("33947").style.display = "none";
          this.inputFormField["otherReason"] = null;
      }
      if (event != "داخل العراق (باللغة العربية فقط)") {
        if (event == "اخرى") {
          console.log("other");
          document.getElementById("33947").style.display = "block";
          this.inputFormField["otherReason"] = null;
        } else {
          console.log("other");
          document.getElementById("33947").style.display = "none";
          this.inputFormField["otherReason"] = null;
          this.inputFormField["typee"] = null;
        }
      }
      //------ of other -> display reson ------
      
      //اخفاء حقل الاسم الكامل
      if(event == "خارج العراق (مترجم باللغة العربية - واللغة الانكليزية)" || event == "الاجانب داخل العراق" || event == "اخرى"){
        document.getElementById("33961").style.display = "block";
        document.getElementById("50848").style.display = "block";
        this.inputFormField["countryName"] = null;
        this.inputFormField["FullName"] = null;
        //this.Just_English();
      }else{
        document.getElementById("50848").style.display = "none";
        document.getElementById("33961").style.display = "none";
        this.inputFormField["countryName"] = null;
        this.inputFormField["FullName"] = null;
      }
      //اخفاء معلومات السكن
      const Saknfields = ["33948", "33950", "33951", "33952", "33953", "33954", "33955"];

      if (event === "داخل العراق (باللغة العربية فقط)" || event === "من محافظات الاقليم") {
        Saknfields.forEach(id => {
          document.getElementById(id).style.display = "block";
        });
      } else {
        Saknfields.forEach(id => {
          document.getElementById(id).style.display = "none";
        });

        this.inputFormField["Birth"] = null;
        this.inputFormField["addres"] = null;
        this.inputFormField["Mahalla"] = null;
        this.inputFormField["alley"] = null;
        this.inputFormField["house"] = null;
        this.inputFormField["Residencecardnumber"] = null;
        this.inputFormField["esidencecardissuingauthority"] = null;
      }

      if(event == "من محافظات الاقليم"){
        this.inputFormField["governorate"] = null;
        this.group_of_form[0].fields[5].properties[0].values = [
          "اربيل",
          "سليمانية",
          "دهوك",
          "حلبجة"
        ];
      }else if(event != "من محافظات الاقليم" && event != null && event != ""){
        this.inputFormField["governorate"] = null;
        this.group_of_form[0].fields[5].properties[0].values = [
          "بغداد",
          "بابل",
          "البصرة",
          "ذي قار",
          "المثنى",
          "الانبار",
          "كركوك",
          "واسط",
          "كربلاء المقدسة",
          "النجف الاشرف",
          "القادسية",
          "صلاح الدين",
          "ديالى",
          "نينوى",
          "ميسان",
          "اربيل",
          "سليمانية",
          "دهوك",
          "حلبجة"
        ];
      }else{
        this.inputFormField["governorate"] = null;
        this.group_of_form[0].fields[5].properties[0].values = [];
      }
    },

    cardIDTypeFunc(event) {
      var nationalIDsFields = ["14407", "14408"];
      var nationalNamesFields = ["cardnumber", "Carddate"];
      var cardIDsFields = ["14405", "14409", "14411", "14420", "14480"];
      var cardNamesFields = [
        "Nationality",
        "Datecertificate",
        "Record",
        "newspaper",
        "IdLocation",
      ];
      if (event == "هوية احوال مدنية") {
        nationalIDsFields.forEach((national) => {
          document.getElementById(national).style.display = "none";
        });
        nationalNamesFields.forEach((nationalName) => {
          this.inputFormField[nationalName] = null;
        });
        //------------
        cardIDsFields.forEach((card) => {
          document.getElementById(card).style.display = "block";
        });
      } else if (event == "بطاقة وطنية") {
        nationalIDsFields.forEach((national) => {
          document.getElementById(national).style.display = "block";
        });
        //------------
        cardIDsFields.forEach((card) => {
          document.getElementById(card).style.display = "none";
        });
        cardNamesFields.forEach((cardName) => {
          this.inputFormField[cardName] = null;
        });
      } else {
        // ---- National CardID --------
        nationalIDsFields.forEach((national) => {
          document.getElementById(national).style.display = "none";
        });
        nationalNamesFields.forEach((nationalName) => {
          this.inputFormField[nationalName] = null;
        });
        // ---- National CardID --------
        cardIDsFields.forEach((card) => {
          document.getElementById(card).style.display = "none";
        });
        cardNamesFields.forEach((cardName) => {
          this.inputFormField[cardName] = null;
        });
      }
    },
    birthPlaceFunc(event) {
      /*
      if (event == "اخرى") {
        document.getElementById("33947").style.display = "block";
        this.inputFormField["otherReason"] = null;
      } else {
        document.getElementById("33947").style.display = "none";
        this.inputFormField["otherReason"] = null;
      }
      */
      //--- for name English ---

    },

    Just_English(event){
      const input = document.getElementById("50848");
      if(this.inputFormField.FullName != null || this.inputFormField.FullName != ""){
        input.addEventListener('keydown', (e) => {
          const ctrl = e.ctrlKey || e.metaKey;
          if (ctrl || e.key.length > 1) return; // allow shortcuts, arrows, etc.

          // ✅ allow English letters and spaces
          if (!/^[A-Za-z\s]$/.test(e.key)) {
            e.preventDefault();
            this.inputFormField["FullName"] = null;
          }
        });

        // منع اللصق
        input.addEventListener("paste", (e) => {
          e.preventDefault();
        });
      }
    }
}