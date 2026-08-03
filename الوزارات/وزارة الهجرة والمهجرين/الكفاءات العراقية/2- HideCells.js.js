{
  First_Function(event, Fields_ID, Field_Prog, Condition_Value){
    this.inputFormField[Field_Prog] = null;
    if(event.length != 0){
      for(var i = 0; i < event.length; i++){
        //هنا نضع الشرط او الشروط الذي على اساسه الحقل يظهر وخلافه يختفي
        if(event[i] == Condition_Value){
          document.getElementById(Fields_ID).style.display = "block";
          //لايقاف استمرار التكرار لتحقق الشرط break وجود
          break;
        }else{
          document.getElementById(Fields_ID).style.display = "none";
        }
      }
    }else{
      document.getElementById(Fields_ID).style.display = "none";
    }
  },

  //التحصيل الدراسي
  First_Hide(event){
      this.inputFormField["nameestade"] = null;
    if(event == "اخرى"){
      document.getElementById("74951").style.display = "block";
    }else{
      document.getElementById("74951").style.display = "none";
    }
  },

  //اسباب المعوقات الاخرى
  Second_Hide(event){
    this.First_Function(event, "74957", "nameasb", "اخرى(تذكر)");
  },

  //المجالات الاخرى
  Third_Hide(event){
    this.First_Function(event, "74959", "namez", "اخرى (تذكر)");
  },

  //الخدمات الاخرى
  Fourth_Hide(event){
    this.First_Function(event, "74961", "namelkj", "اخرى (تذكر)");
  },

  //طبيعة العمل الاخرى
  Fifth_Hide(event){
    this.First_Function(event, "74964", "namewam", "اخرى(تذكر)");
  }
}