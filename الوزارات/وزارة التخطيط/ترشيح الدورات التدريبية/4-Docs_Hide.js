{
  document.getElementById("33616_group").style.display = "none"; //مجموعة الطلب

  if (this.form_data.Sectors == "القطاع الخاص") {
    document.getElementsByClassName("23993")[0].style.display = "none"; //كتاب الترشيح
    document.getElementsByClassName("34706")[0].style.display = "none"; //كتاب الترشيح بصيغة pdf ان وجد
    document.getElementsByClassName("46925")[0].style.display = "none"; //طلب خطي
  }

  if (
    this.form_data.Registration !=
    "التسجیل للحصول على شھادة جداریة للدورات والورش السابقة"
  ) {
    document.getElementsByClassName("46925")[0].style.display = "none"; //طلب خطي
  }

  if (
    this.form_data.Registration ==
    "التسجیل للحصول على شھادة جداریة للدورات والورش السابقة"
  ) {
    document.getElementsByClassName("23993")[0].style.display = "none"; //كتاب الترشيح
    document.getElementsByClassName("34706")[0].style.display = "none"; //كتاب الترشيح بصيغة pdf ان وجد
    document.getElementsByClassName("23994")[0].style.display = "none"; //طلب المشاركة في الدورة (خطي او مطبوع)
  }
}
