{
  if (this.tab_click == "form") {
    //تحصيل دراسي اخر
    if (this.form_data.nameestade == null) {
      document.getElementById("74951").style.visibility = "collapse";
    }

    //اسباب المعوقات الاخرى
    if (this.form_data.nameasb == null) {
      document.getElementById("74957").style.visibility = "collapse";
    }

    //ماهو باعتقادك المجال الممكن ان تستثمر طاقتك من خلاله؟
    if (this.form_data.namez == null) {
      document.getElementById("74959").style.visibility = "collapse";
    }

    //الخدمات الاخرى
    if (this.form_data.namelkj == null) {
      document.getElementById("74961").style.visibility = "collapse";
    }

    //طبيعة العمل الاخرى
    if (this.form_data.namewam == null) {
      document.getElementById("74964").style.visibility = "collapse";
    }
  }
}
