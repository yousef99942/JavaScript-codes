{
  //ليبلات المجموعة الاولى
  var Labels_Id = ["73292", "33946", "50749"];
  for (var i = 0; i < Labels_Id.length; i++) {
    document.getElementById(Labels_Id[i]).style.cssText =
      "font-size: 16px; font-weight: bold; padding-top: 15px; padding-bottom: 15px";
  }

  //نوع الشهادة المطلوبة
  this.group_of_form[0].fields[0].properties[0].values = [
    "داخل العراق (باللغة العربية فقط)",
    "خارج العراق (مترجم باللغة العربية - واللغة الانكليزية)",
    "من محافظات الاقليم",
    "الاجانب داخل العراق",
    "كتاب مؤسسة السجناء السياسيين",
    "اخرى",
  ];

  //--- full Name
  this.inputFormField["firstname"] = this.user.first_name;
  //document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول
  this.group_of_form[1].fields[11].properties[0].values = [
    "بطاقة وطنية",
    "هوية احوال مدنية",
  ];

  this.inputFormField["secondname"] = this.user.middle_name;
  //document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField["Thirdname"] = this.user.last_name;
  // document.getElementsByName("Thirdname")[0].disabled = true; //الاسم الثالث

  this.inputFormField["Fourthname"] = this.user.forth_name;
  //document.getElementsByName("Fourthname")[0].disabled = true; //الاسم الرابع

  //--- birth date ----
  this.inputFormField["birthdate"] = this.user.birth_date;

  document.getElementById("11090_group").style.display = "none";
  document.getElementById("12505_group").style.display = "none";

  const input = document.getElementById("50848");
  input.addEventListener("keydown", (e) => {
    const ctrl = e.ctrlKey || e.metaKey;
    if (ctrl || e.key.length > 1) return; // allow shortcuts, arrows, etc.

    // ✅ allow English letters and spaces
    if (!/^[A-Za-z\s]$/.test(e.key)) {
      e.preventDefault();
      this.inputFormField["FullName"] = null;
    }
  });

  // منع اللصق
  input.addEventListener("paste", (e) => {
    e.preventDefault();
  });
}
