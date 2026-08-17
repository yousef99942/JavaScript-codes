{
  if (this.tab_click == "form") {
    if (this.form_data.submission == "تقديم الوريث للمشمول المتوفي") {
      //document.getElementById("35476_group").style.visibility = "collapse";
      document.getElementById("35476_group").style.display = "none";
    }

    if (
      this.form_data.submission == "التقديم لتنازل المشمول الحي لاحد الورثة"
    ) {
      //document.getElementById("35475_group").style.visibility = "collapse";
      document.getElementById("35475_group").style.display = "none";
    }

    if (
      this.form_data.submission != "تقديم الوريث للمشمول المتوفي" &&
      this.form_data.submission != "التقديم لتنازل المشمول الحي لاحد الورثة"
    ) {
      document.getElementById("35476_group").style.display = "none";
      document.getElementById("35475_group").style.display = "none";
    }
  }
}
