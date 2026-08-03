{
  if (this.tab_click == "form") {
    //جواز السفر
    if (this.form_data.VBG == null) {
      document.getElementById("28875").style.visibility = "collapse";
    }

    //البطاقة الموحدة
    if (this.form_data.IDNum == null) {
      document.getElementById("73208").style.visibility = "collapse";
    }

    //في حالة النقل البري
    if (this.form_data.tran == null) {
      document.getElementById("28891").style.visibility = "collapse";
    }

    //مجموعة تفاصيل الحماية الامنية
    if (
      this.form_data.SourceType == "الفئة 1" ||
      this.form_data.SourceType == "الفئة 2"
    ) {
      document.getElementById("11796_group").style.visibility = "collapse";
    }
  }
}
