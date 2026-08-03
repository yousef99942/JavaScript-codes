{
  if (this.tab_click == "form") {
    //form_data الاسم البرمجي الخاص بالحقل نضعه بعد النقطة الخاصه بايعاز
    if (this.form_data.setllc == null) {
      //الخاص بالحقل ID نضيف
      document.getElementById("49166").style.visibility = "collapse";
    }

    var Fields_ID = [
      "87064", //الكلية/المعهد
      "87065", //القسم
      "87067", //التخصص الدقيق
      "87069", //جهة التخرج
      "87068", //المعدل
      "87070", //تاريخ التخرج
    ];

    var Second_Selected_Values = ["اعدادية", "متوسطة", "ابتدائية"];

    if (this.form_data.setllc == "دبلوم") {
      for (var i = 0; i < Fields_ID.length; i++) {
        if (i == 2) {
          document.getElementById(Fields_ID[i]).style.visibility = "collapse";
        }
      }
    } else if (Second_Selected_Values.includes(this.form_data.setllc)) {
      for (var i = 0; i < Fields_ID.length; i++) {
        if (i < 3) {
          document.getElementById(Fields_ID[i]).style.visibility = "collapse";
        }
      }
    } else {
      for (var i = 0; i < Fields_ID.length; i++) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }
  }
}
