{
  if (this.tab_click == "form") {
    //اسم القسم مال مكتب الوزير
    if (this.form_data.MinsterDeptName == null) {
      document.getElementById("73838").style.visibility = "collapse";
    }

    //اسم القسم مال باقي الدوائر
    if (this.form_data.SectionName == null) {
      document.getElementById("51611").style.visibility = "collapse";
    }
  }
}
