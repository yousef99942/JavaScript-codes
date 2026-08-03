{
  First_Function(Field_ID, Field_Prog, Field_State){
    document.getElementById(Field_ID).style.display = Field_State;
    this.inputFormField[Field_Prog] = null;
  },

  Second_Function(Fields_ID, Fields_Progs, Fields_State){
    for(var i = 0; i < Fields_ID.length; i++){
      document.getElementById(Fields_ID[i]).style.display = Fields_State;
      this.inputFormField[Fields_Progs[i]] = null;
    }
  },
  
  //اذا اكو رقم اضبارة
  eqarFun(event) {
    if (event == "نعم") {
      this.First_Function("35776", "housech", "block");
      this.First_Function("35777", "hasa", "block");
    }else if (event == "كلا") {
      this.First_Function("35777", "hasa", "none");
      this.First_Function("35776", "housech", "none");
    }
  },

  //اسم المحامي او الوكيل القانوني ومعلومات الدائن
  SecondHide(event){
    //معلومات الممثل القانوني
    var First_Fields_Ids = [
      "73573", //اسم الشركة
      "72269", //عنوان الشركة الدائن
      "72271", //عنوان شركة المدين
      
      /*
      "29480", //محلة
      "29481", //زقاق
      "29482", //دار
      */
    ],
    First_Fields_prog = [
      "SecondCompanyName", //اسم الشركة
      "FirstCompanyLocation", //عنوان الشركة الدائن
      "SecondCompanyLocation", //عنوان شركة المدين
      //المدين
      
      /*
      "edlgkg", //محلة
      "asdasfgh", //زقاق
      "SAdasdasd", //دار
      */
    ],
    Second_Difference_ID= [ 
      //المدين
      "29470", //الاسم الاول
      "29471", //اسم الاب
      "29472", //اسم الجد
    ],
    Second_Difference_Prog = [
      "eshaider", //الاسم الاول
      "ashaider", //اسم الاب
      "nhaider", //اسم الجد
    ];
    
    //معلومات المواطن والمحامي
    var Fields_ID = [
      //الدائن
      "29449", //الاسم الاول
      "29450", //اسم الاب
      "29451", //اسم الجد
      "29453", //الاسم الرابع
      "29458", //محلة
      "29459", //زقاق
      "29462", //دار
      //المدين
      "29478", //المحافظة
      "29479", //القضاء
      //"29480", //محلة
      //"29481", //زقاق
      //"29482", //دار
      "29483", //رقم بطاقة السكن
      "29486", //تاريخ الاصدار
      "29487", //رقم الهاتف
    ],
    Fields_Progs = [
      //الدائن
      "bhaider", //الاسم الاول
      "chaider", //اسم الاب
      "dhaider", //اسم الجد
      "ehaider", //الاسم الرابع
      "jhaider", //محلة
      "khaider", //زقاق
      "zhaider", //دار
      //المدين
      "governorate", //المحافظة
      "district", //القضاء
      "edlgkg", //محلة
      "asdasfgh", //زقاق
      "SAdasdasd", //دار
      "wqeqwe", //رقم بطاقة السكن
      "DSfgsdfsd", //تاريخ الاصدار
      "haidetv", //رقم الهاتف
    ],
    //الحقول الخاصة بالمواطن فقط
    Difference_IDs = [
      //الدائن
      "29454", //تاريخ التولد
      "29474", //رقم هوية الاحوال او البطاقة الموحدة
      "29475", //تاريخ الاصدار
      "29476", //رقم بطاقة السكن
      "29477", //تاريخ الاصدار
    ],
    Difference_Progs = [
      //الدائن
      "fhaider", //تاريخ التولد
      "ASdasdasd", //رقم هوية الاحوال او البطاقة الموحدة
      "dsfsdf", //تاريخ الاصدار
      "adsasf", //رقم بطاقة السكن
      "htgdas", //تاريخ الاصدار
    ];

    if(event == "محامي"){
      this.First_Function("67780", "namea", "block");//اسم المحامي
      this.First_Function("67781", "mokual", "none");//اسم الوكيل القانوني
      this.Second_Function(First_Fields_Ids, First_Fields_prog, "none");
      this.Second_Function(Second_Difference_ID, Second_Difference_Prog, "block");
      this.Second_Function(Fields_ID, Fields_Progs, "block");
      this.Second_Function(Difference_IDs, Difference_Progs, "none");
    }else if(event == "ممثل قانوني"){
      this.First_Function("67780", "namea", "none");//اسم المحامي
      this.First_Function("67781", "mokual", "block");//اسم الوكيل القانوني
      this.Second_Function(First_Fields_Ids, First_Fields_prog, "block");
      this.Second_Function(Second_Difference_ID, Second_Difference_Prog, "block");
      this.Second_Function(Fields_ID, Fields_Progs, "none");
      this.Second_Function(Difference_IDs, Difference_Progs, "none");
    }else if(event == "مواطن"){
      this.First_Function("67780", "namea", "none");//اسم المحامي
      this.First_Function("67781", "mokual", "none");//اسم الوكيل القانوني
      this.Second_Function(First_Fields_Ids, First_Fields_prog, "none");
      this.Second_Function(Second_Difference_ID, Second_Difference_Prog, "block");
      this.Second_Function(Fields_ID, Fields_Progs, "block");
      this.Second_Function(Difference_IDs, Difference_Progs, "block");
    }else{
      this.First_Function("67780", "namea", "none");//اسم المحامي
      this.First_Function("67781", "mokual", "none");//اسم الوكيل القانوني
      this.Second_Function(First_Fields_Ids, First_Fields_prog, "none");
      this.Second_Function(Second_Difference_ID, Second_Difference_Prog, "none");
      this.Second_Function(Fields_ID, Fields_Progs, "none");
      this.Second_Function(Difference_IDs, Difference_Progs, "none");
    }
  },
}