{
  if (this.form_data.sel == "فتح اشتراك جديد") {
    document.getElementsByClassName("47240")[0].style.display = "none"; //"صورة عن اخر قائمة جباية تم تسديدها"
    document.getElementsByClassName("47241")[0].style.display = "none"; //تاييد مختار المنطقة يذكر فيه سبب ايقاف التحقق
    document.getElementsByClassName("47242")[0].style.display = "none"; //الامر الاداري الخاص بإيقاف التحقق ان وجد
  }

  if (this.form_data.sel == "تغيير اسم المشترك") {
    document.getElementsByClassName("47241")[0].style.display = "none"; //تاييد مختار المنطقة يذكر فيه سبب ايقاف التحقق
    document.getElementsByClassName("47242")[0].style.display = "none"; //الامر الاداري الخاص بإيقاف التحقق ان وجد
  }

  if (this.form_data.sel == "ايقاف تحقق اجور الماء") {
    document.getElementsByClassName("47238")[0].style.display = "none"; //"صورة من سند العقار الحديث"
    document.getElementsByClassName("47242")[0].style.display = "none"; //الامر الاداري الخاص بإيقاف التحقق ان وجد
  }

  if (this.form_data.sel == "اعادة فتح مجرى الماء") {
    document.getElementsByClassName("47238")[0].style.display = "none"; //"صورة من سند العقار الحديث"
    document.getElementsByClassName("47241")[0].style.display = "none"; //تاييد مختار المنطقة يذكر فيه سبب ايقاف التحقق
  }
}
