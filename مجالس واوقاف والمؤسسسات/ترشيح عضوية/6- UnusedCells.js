{
    if (this.tab_click == "form") {
    var Fields_ID = [
      "27596", //نوع الهوية
      "27597", //رقم هوية الاحوال
      "27598", //رقم السجل
      "27599", //رقم الصحيفة
    ];

    Fields_ID.forEach(Hiding => document.getElementById(Hiding).style.visibility = "collapse");

    //----------------------------------------------------------------------------------------------------
    let Values = [
      { Field_Prog: "OtherField", Field_ID: "97499", }, //التخصص الاخر
      { Field_Prog: "OtherDegree", Field_ID: "97500", }, //الشهادة الاخرى
    ];

    Values.forEach((Checking) => {
      if (this.form_data[Checking.Field_Prog] == null) {
        document.getElementById(Checking.Field_ID).style.visibility =
          "collapse";
      }
    });
  }
}