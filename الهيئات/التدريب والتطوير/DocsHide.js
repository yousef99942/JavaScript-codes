{
  if (
    this.form_data.firstslector == "موظف داخل الهيئة" ||
    this.form_data.firstslector == "موظف خارج الهيئة"
  ) {
    if (this.form_data.secondslector == "دورة تدريبية") {
      document.getElementById("33528_group").style.display = "none"; //مرفقات  استمارة التقديم للمشاركة في الورش والمحاضرات والندوات والمؤتمرات
      document.getElementById("33529_group").style.display = "none"; //مرفقات  استمارة التقديم على التدريب الصيفي
    } else {
      document.getElementById("33526_group").style.display = "none"; //مرفقات استمارة التقديم (الترشيح) للبرنامج التدريبي
      document.getElementById("33529_group").style.display = "none"; //مرفقات  استمارة التقديم على التدريب الصيفي
    }
  } else {
    document.getElementById("33526_group").style.display = "none"; //مرفقات استمارة التقديم (الترشيح) للبرنامج التدريبي
    document.getElementById("33528_group").style.display = "none"; //مرفقات  استمارة التقديم للمشاركة في الورش والمحاضرات والندوات والمؤتمرات
  }
}
