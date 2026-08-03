{
  this.group_of_form[0].fields[1].properties[0].values = [
    "مديرية التسجيل العقاري الكاظمية الثانية",
    "مديرية التسجيل العقاري الكاظمية الاولى",
    "مديرية التسجيل العقاري الكرخ الاولى",
    "مديرية التسجيل العقاري البياع ",
    "مديرية التسجيل العقاري الشعب",
    "مديرية التسجيل العقاري  الصدر الثانية",
    "مديرية التسجيل العقاري الاعظمية",
    "مديرية التسجيل العقاري الصدر الاولى",
    "مديرية التسجيل العقاري بسماية",
    "مديرية التسجيل العقاري ابي غريب",
    "مديرية التسجيل العقاري المحمودية",
    "مديرية التسجيل العقاري الوحدة",
    "مديرية التسجيل العقاري المدائن",
    "مديرية التسجيل العقاري الكرخ الثانية",
    "مديرية التسحيل العقاري زهور بغداد",
    "مديرية التسجيل العقاري الرصافة الاولى",
    "مديرية التسجيل العقاري الدورة",
    "مديرية التسجيل العقاري الطارمية",
    "مديرية التسجيل العقاري الرصافة الثانية",
    "ملاحظية التاجي",
  ];
  document.getElementById("12551_group").style.display = "none";
  document.getElementById("12750_group").style.display = "none";

  this.inputFormField.haiderna = this.user.first_name;
  //document.getElementsByName("haiderna")[0].disabled = true; //الاسم الاول

  this.inputFormField.haiderd = this.user.middle_name;
  //document.getElementsByName("haiderd")[0].disabled = true; //الاسم الثاني

  this.inputFormField.haiderbv = this.user.last_name;
  //document.getElementsByName("haiderbv")[0].disabled = true; //الاسم الثالث

  //this.inputFormField.haiderjn = this.user.forth_name;
  //document.getElementsByName("haiderjn")[0].disabled = true; //الاسم الرابع

  document.getElementById("36104").style.cssText =
    "color: #B31B1B !important;font-weight: bold;padding: 10px 20px;margin: 10px;background-color: #dc354536;border-radius: 5px;";
  document.getElementById("36104").style.cssText =
    "color: #B31 !important;font-weight: bold;padding: 10px 20px;margin: 10px;background-color: #dc354536;border-radius: 5px;";
}
