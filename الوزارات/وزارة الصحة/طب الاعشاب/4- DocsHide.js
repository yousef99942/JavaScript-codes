{
  if (
    this.form_data.ttype == "الدورة التاهلية لمنح اجازة فتح محل بيع اعشاب طبية"
  ) {
    document.getElementById("35286_group").style.display = "none"; //خاص بالدورة شهادة التواجد
    document.getElementById("35287_group").style.display = "none"; //خاص بالمحاولات الامتحانية الإضافية
  }

  if (this.form_data.ttype == "دورة منح شهادة التواجد في محل بيع اعشاب مجاز") {
    document.getElementById("35285_group").style.display = "none"; //خاص بالدورة التأهيلية
    document.getElementById("35287_group").style.display = "none"; //خاص بالمحاولات الامتحانية الإضافية
  }

  if (this.form_data.ttype == "محاولات امتحانية") {
    document.getElementById("35285_group").style.display = "none"; //خاص بالدورة التأهيلية
    document.getElementById("35286_group").style.display = "none"; //خاص بالدورة شهادة التواجد
  }

  let Selected_Values = [
    "امتحان الكفاءة ( ذوي الخبرة ) لمنح اجازة فتح محل بيع الاعشاب الطبية",
    "شراء دليل الاعشاب الطبية",
  ];

  if (Selected_Values.includes(this.form_data.ttype)) {
    document.getElementById("35285_group").style.display = "none"; //خاص بالدورة التأهيلية
    document.getElementById("35286_group").style.display = "none"; //خاص بالدورة شهادة التواجد
    document.getElementById("35287_group").style.display = "none"; //خاص بالمحاولات الامتحانية الإضافية
  }
}
