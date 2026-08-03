{
  if (this.form_data.Service == "اعداد تصاميم شبكات الغاز السائل") {
    document.getElementById("34188_group").style.display = "none"; //النصب والاشراف على تنفيذ منظومات الغاز السائل
    document.getElementById("34189_group").style.display = "none"; //مواقع المستهلكين
    //document.getElementsByClassName("23720")[0].style.display = "none";
  }

  if (this.form_data.Service == "الاشراف على تنصيب منظومات الغاز السائل") {
    document.getElementById("11766_group").style.display = "none"; //تصاميم
    document.getElementById("34189_group").style.display = "none"; //مواقع المستهلكين
  }

  if (
    this.form_data.Service == "اعداد متطلبات الكشف الاولي لمواقع المستهلكين"
  ) {
    document.getElementById("11766_group").style.display = "none"; //تصاميم
    document.getElementById("34188_group").style.display = "none"; //النصب والاشراف على تنفيذ منظومات الغاز السائل
  }

  if (this.form_data.MGB == "كلا") {
    document.getElementsByClassName("46018")[0].style.display = "block"; //مخططات معمارية AutoCAD
  }
}
