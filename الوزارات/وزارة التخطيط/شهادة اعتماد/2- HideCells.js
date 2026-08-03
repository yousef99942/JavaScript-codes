{
  First_Hide(event){
    this.inputFormField["parentcompany"] = null;
    this.inputFormField["Mainactivity"] = null;

    if(event == "نعم"){
      document.getElementById("67966").style.display = "block"; //اسم المؤسسة الام
      document.getElementById("67967").style.display = "block"; //مجال عمل المؤسسة الام
    }else{
      document.getElementById("67966").style.display = "none";
      document.getElementById("67967").style.display = "none";
    }
  },

  Second_Hide(event){
    this.inputFormField["FirstInfo"] = null;
    this.inputFormField["SecondInfo"] = null;

    if(event == "نعم"){
      document.getElementById("67971").style.display = "block"; //اذا كانت الاجابة نعم يرجى ملئ الجدول التالي
      document.getElementById("67974").style.display = "none"; //اذا كانت الاجابة لا, هل توجد خطة للاشتراك  في برامج اختبار المهارة الفنية/ مقارنات بينية ؟املئ الجدول التالي:
    }else if(event == "كلا"){
      document.getElementById("67974").style.display = "block";
      document.getElementById("67971").style.display = "none";
    }else{
      document.getElementById("67971").style.display = "none";
      document.getElementById("67974").style.display = "none";
    }
  },

  Third_Hide(event){
    this.inputFormField["other"] = null;
    if(event.includes("اخرى")){
      document.getElementById("91997").style.display = "block"; //اذا كان اختيار مجال الاعتماد (اخرى) يرجى ملئ الحقل التالي:
    }else{
      document.getElementById("91997").style.display = "none";
    }
  },
}