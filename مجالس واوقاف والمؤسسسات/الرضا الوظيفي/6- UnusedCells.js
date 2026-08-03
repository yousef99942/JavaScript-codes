{
  //التحصيل العلمي
  document.getElementById("35669").style.visibility = "collapse";

  if (this.tab_click == "form") {
    if (this.form_data.DeptType == null) {
      document.getElementById("73157").style.visibility = "collapse"; //نوع التشكيل
    }

    if (this.form_data.amannadep == null) {
      document.getElementById("48098").style.visibility = "collapse"; //اسم التشكيل
    }

    if (this.form_data.SubDeptName == null) {
      document.getElementById("93642").style.visibility = "collapse"; //التشكيل الفرعي
    }

    if (this.form_data.jobnumber == null) {
      document.getElementById("48099").style.visibility = "collapse"; //الرقم الوظيفي
    }

    if (this.form_data.governorate == null) {
      document.getElementById("73433").style.visibility = "collapse"; //اختر المحافظة
    }

    if (this.form_data.SubDeptType == null) {
      document.getElementById("93673").style.visibility = "collapse"; //نوع التشكيل الفرعي
    }
  }
}
