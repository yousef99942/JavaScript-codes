{
  if (this.tab_click == "form") {
    if (this.form_data.TowhomEnglish == null) {
      document.getElementById("14334").style.visibility = "collapse";
    }

    if (this.form_data.EngName == null) {
      document.getElementById("14336").style.visibility = "collapse";
    }

    if (this.form_data.addres == null) {
      document.getElementById("73225").style.visibility = "collapse";
    }

    if (!this.form_data.certificateDilivery) {
      var Fields_ID = [
        "87110", //البريد الالكتروني
        "87119", //رقم القطعة
        "87120", //محلة
        "87121", //رقم الدار
        "87122", //الزقاق
        "87125", //اقرب نقطة دالة
        "87126", //المحافظة
        "87128", //المنطقة
        "87129", //مبلغ التوصيل
      ];

      for (var i = 0; i < Fields_ID.length; i++) {
        document.getElementById(Fields_ID[i]).style.visibility = "collapse";
      }
    }
  }
}
