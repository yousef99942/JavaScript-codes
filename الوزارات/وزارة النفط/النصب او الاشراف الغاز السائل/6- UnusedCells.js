//Write your code here
{
  if (this.tab_click === "form") {
    if (this.form_data.Service != "الاشراف على تنصيب منظومات الغاز السائل") {
      document.getElementById("35092_group").style.display = "none";
    }

    //في حال تجاوز حجم ملف المخططات المعمارية  (25) ميكا بايت، يمكن رفعها على (Microsoft Drive) أو (Google Drive) وإرفاق الرابط.
    if (this.form_data.Microsoft == null) {
      document.getElementById("90797").style.visibility = "collapse";
    }
  }
}
