{
  var docIDs = ["21539", "21540"]; //مال البطاقة الموحدة
  var docHIDs = ["21544", "21545", "21546"]; //مال الاحوال المدنية

  if (this.form_data.typee == "بطاقة وطنية") {
    for (var i = 0; i < docHIDs.length; i++) {
      document.getElementsByClassName(docHIDs[i])[0].style.display = "none";
    }
  } else if (this.form_data.typee == "هوية احوال مدنية") {
    for (var i = 0; i < docIDs.length; i++) {
      document.getElementsByClassName(docIDs[i])[0].style.display = "none";
    }
  } else {
    for (var i = 0; i < docHIDs.length; i++) {
      document.getElementsByClassName(docHIDs[i])[0].style.display = "none";
    }

    for (var i = 0; i < docIDs.length; i++) {
      document.getElementsByClassName(docIDs[i])[0].style.display = "none";
    }
  }

  if (
    this.form_data.request == "داخل العراق (باللغة العربية فقط)" ||
    this.form_data.request == "من محافظات الاقليم"
  ) {
    if (this.form_data.request == "داخل العراق (باللغة العربية فقط)") {
      document.getElementsByClassName("21543")[0].style.display = "none"; // جواز السفر
    }
    document.getElementsByClassName("22347")[0].style.display = "none";
  }

  if (this.form_data.request == "الاجانب داخل العراق") {
    document.getElementsByClassName("21539")[0].style.display = "none";
    document.getElementsByClassName("21540")[0].style.display = "none";

    document.getElementsByClassName("21541")[0].style.display = "none";
    document.getElementsByClassName("21542")[0].style.display = "none";

    document.getElementsByClassName("21544")[0].style.display = "none";
    document.getElementsByClassName("21545")[0].style.display = "none";
    document.getElementsByClassName("21546")[0].style.display = "none";
  }

  if (
    this.form_data.governorate != "حلبجة" ||
    this.form_data.governorate != "اربيل" ||
    this.form_data.governorate != "سليمانية" ||
    this.form_data.governorate != "دهوك"
  ) {
    document.getElementsByClassName("21879")[0].style.display = "none";
    document.getElementsByClassName("21880")[0].style.display = "none";
  }

  if (
    this.form_data.governorate == "حلبجة" ||
    this.form_data.governorate == "اربيل" ||
    this.form_data.governorate == "سليمانية" ||
    this.form_data.governorate == "دهوك"
  ) {
    document.getElementsByClassName("21879")[0].style.display = "block";
    document.getElementsByClassName("21880")[0].style.display = "block";
  }

  if (
    this.form_data.request !=
      "خارج العراق (مترجم باللغة العربية - واللغة الانكليزية)" &&
    this.form_data.request != "الاجانب داخل العراق"
  ) {
    document.getElementsByClassName("22548")[0].style.display = "none"; //ختم الدخولية
  }

  if (this.form_data.request != "كتاب مؤسسة السجناء السياسيين") {
    document.getElementsByClassName("46523")[0].style.display = "none"; //كتاب مؤسسة السجناء السياسيين
  }
}
