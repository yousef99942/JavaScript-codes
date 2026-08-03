{
  if (this.form_data.TypeSelector == "شركة") {
    document.getElementsByClassName("24152")[0].style.display = "none"; //مال اوراق تسجيل المصنع
    document.getElementsByClassName("24153")[0].style.display = "none"; //مال اوراق تسجيل المكتب
    document.getElementsByClassName("34930")[0].style.display = "none"; //مال اجازة الاستثمار
  } else if (this.form_data.TypeSelector == "مصنع") {
    document.getElementsByClassName("24151")[0].style.display = "none"; //مال اوراق تسجيل شركة
    document.getElementsByClassName("24153")[0].style.display = "none"; //مال اوراق تسجيل المكتب
    document.getElementsByClassName("34930")[0].style.display = "none"; //مال اجازة الاستثمار
  } else if (this.form_data.TypeSelector == "مكتب") {
    document.getElementsByClassName("24151")[0].style.display = "none"; //مال اوراق تسجيل شركة
    document.getElementsByClassName("24152")[0].style.display = "none"; //مال اوراق تسجيل مصنع
    document.getElementsByClassName("34930")[0].style.display = "none"; //مال اجازة الاستثمار
  } else if (this.form_data.TypeSelector == "مشروع استثماري") {
    document.getElementsByClassName("24151")[0].style.display = "none"; //مال اوراق تسجيل شركة
    document.getElementsByClassName("24152")[0].style.display = "none"; //مال اوراق تسجيل المصنع
    document.getElementsByClassName("24153")[0].style.display = "none"; //مال اوراق تسجيل المكتب
  } else {
    document.getElementsByClassName("24151")[0].style.display = "none"; //مال اوراق تسجيل شركة
    document.getElementsByClassName("24152")[0].style.display = "none"; //مال اوراق تسجيل المصنع
    document.getElementsByClassName("24153")[0].style.display = "none"; //مال اوراق تسجيل المكتب
    document.getElementsByClassName("34930")[0].style.display = "none"; //مال اجازة الاستثمار
  }
}
