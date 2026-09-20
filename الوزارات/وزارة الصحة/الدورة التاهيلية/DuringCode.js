{
  HideCells(event) {
      if (event == "نعم") {
        document.getElementById("49891").style.display = "block";
      } else {
        document.getElementById("49891").style.display = "none";
        this.inputFormField["univer"] = null;
        this.inputFormField["send"] = null;
      }
  },

  //------------------------------------------------------------
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

  checkEmployee(event) {
    if (event) {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        loader: "dots",
        transition: "fade",
        color: "#c30734"
      });

      let Values = [
        {Selected_Value: "دائرة مدينة الطب", Phone_Number: ["9647750777600", "9647804737217", "9647713836203", "9647811911618"],}, // دائرة مدينة الطب
        {Selected_Value: "دائرة صحة البصرة", Phone_Number: ["9647706888866", "9647727872919", "9647715954243",],}, // دائرة صحة البصرة
        {Selected_Value: "دائرة صحة النجف الاشرف", Phone_Number: ["9647812401776", "9647834163233", "9647827790744",],}, // دائرة صحة النجف
        {Selected_Value: "دائرة صحة واسط", Phone_Number: ["9647706906180", "9647808332043", "9647713512995",],}, // دائرة صحة واسط
        {Selected_Value: "دائرة صحة بغداد / الرصافة", Phone_Number: ["9647708863402", "9647731990417", "9647723788161",],}, // دائرة صحة بغداد الرصافة
        {Selected_Value: "دائرة صحة بغداد / الكرخ", Phone_Number: ["9647722243372", "9647702799497", "9647717713952",],}, // دائرة صحة بغداد الكرخ
        {Selected_Value: "دائرة صحة الانبار", Phone_Number: ["9647818882555", "9647814487544", "9647821296875",],}, // دائرة صحة الانبار
        {Selected_Value: "دائرة صحة ذي قار", Phone_Number: ["9647811393205", "9647801780767", "9647830436988",],}, // دائرة صحة ذي قار
        {Selected_Value: "دائرة صحة الديوانية", Phone_Number: ["9647772832887", "9647744067067", "9647822105511",],}, // دائرة صحة الديوانية
        {Selected_Value: "دائرة صحة ديالى", Phone_Number: ["9647719871405", "9647729723431", "9647731791998",],}, // دائرة صحة ديالى
        {Selected_Value: "دائرة صحة ميسان", Phone_Number: ["9647740776116", "9647738516538", "9647744884566",],}, // دائرة صحة ميسان
        {Selected_Value: "دائرة صحة صلاح الدين", Phone_Number: ["9647731987437", "9647705137700", "9647701975822", "9647731985174", "9647810086662",],}, // دائرة صحة صلاح الدين
        {Selected_Value: "دائرة صحة نينوى", Phone_Number: ["9647705231215", "9647769302393", "9647709033414",],}, // دائرة صحة نينوى
        {Selected_Value: "دائرة صحة كركوك", Phone_Number: ["9647701357974", "9647708536286", "9647722359160",],}, // دائرة صحة كركوك
        {Selected_Value: "دائرة صحة المثنى", Phone_Number: ["9647831119757", "9647838893837", "9647805235072",],}, // دائرة صحة المثنى
        {Selected_Value: "دائرة صحة كربلاء", Phone_Number: ["9647721535122", "9647723610857", "9647723794268", "9647765981847",],}, // دائرة صحة كربلاء
        {Selected_Value: "دائرة صحة بابل", Phone_Number: ["9647725268240", "9647711189778", "9647807287170",],}, // دائرة صحة بابل
        {Selected_Value: "وزارة الدفاع", Phone_Number: ["9647714702421", "9647705933702", "9647700101049", "9647739676735",],}, // وزارة الدفاع
        {
          Selected_Value: "مركز وزارة الصحة",
          Phone_Number: [
            "9647801867641", "9647906317550", "9647813308529", "9647711984058", "9647700644345", "9647700104400", "9647736332776", "9647700799015", "9647745678912",
          ], // مركز وزارة الدفاع
        },
      ];

      let matchFound = false; // Flag to track if a match is found
      let Result = Values.find((Finding) => 
        this.inputFormField["DepartmentName"] === Finding.Selected_Value && Finding.Phone_Number.includes(this.inputFormField["PhoneNumber"])
      );

      if(Result){
        matchFound = true;
        document.getElementById("23290_group").style.display = "none";
        document.getElementById("23182_group").style.display = "block";

        loader.hide();
        this.ssingleNotification("تم الدخول بنجاح", "top-right");
      }else{
        loader.hide();
        this.singleNotification("رقم الهاتف غير مطابق مع المخول ", "top-right");
      }

      /*
      for (var i = 0; i < Phone.length; i++) {

          if (this.inputFormField["itManagerNumber"] == Phone[i] && this.inputFormField["itManagers"] == Names[i]) {
              matchFound = true;
              document.getElementById("23272_group").style.display = "none";
              document.getElementById("22879_group").style.display = "block";
              document.getElementById("22880_group").style.display = "block";
              document.getElementById("23035_group").style.display = "block";
              document.getElementById("22882_group").style.display = "block";
              document.getElementById("22884_group").style.display = "block";
              document.getElementById("22883_group").style.display = "block";

              loader.hide();
              this.ssingleNotification("تم الدخول بنجاح", "top-right");
              break; // Exit the loop once a match is found
          }
      } */
    }
  },
}