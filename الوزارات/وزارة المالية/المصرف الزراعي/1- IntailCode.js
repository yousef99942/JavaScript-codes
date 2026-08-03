//Write your code here
{
  //تقييد تاريخ الولادة
  const today = new Date();
  const year = today.getFullYear();

  document
    .getElementById("51964")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("date")[0].setAttribute("min", "1900-01-01");
  document
    .getElementsByName("date")[0]
    .setAttribute("max", `${year - 18}-12-31`);

  //تقييد  تاريخ نفاذ البطاقة الوطنية
  document
    .getElementById("51973")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("detex")[0].setAttribute("min", "2015-01-01");
  document
    .getElementsByName("detex")[0]
    .setAttribute("max", `${year + 20}-12-31`);
  //تقييد  تاريخ اصدار هوية غرفة التجارة
  document
    .getElementById("70257")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("releasedate")[0]
    .setAttribute("min", "1926-01-01");
  document
    .getElementsByName("releasedate")[0]
    .setAttribute("max", `${year}-12-31`);
  //تقييد  تاريخ نفاذ هوية غرفة التجارة
  document
    .getElementById("70258")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("effectivedate")[0]
    .setAttribute("min", "1926-01-01");
  document
    .getElementsByName("effectivedate")[0]
    .setAttribute("max", `${year + 20}-12-31`);

  document.getElementById("34364_group").style.display = "none"; // استمارة قرض تجاري
  document.getElementById("34365_group").style.display = "none"; // استمارة قرض زراعي
  document.getElementById("34560_group").style.display = "none"; // استمارة قرض منظومة الطاقة
  document.getElementById("34367_group").style.display = "none"; // استمارة قرض السيارات

  this.inputFormField.nam = this.user.first_name;
  this.inputFormField.namet = this.user.middle_name;
  this.inputFormField.nameth = this.user.last_name;
  this.inputFormField.namefo = this.user.forth_name;
  //جعل رقم الهاتف من حساب اور 11 رقم
  let phoneNum = this.user.phone_num.substring(3);
  this.inputFormField.hoo = `0${phoneNum}`;
  document.getElementsByName("nam")[0].disabled = true; //الاسم الاول
  document.getElementsByName("namet")[0].disabled = true; //الاسم الثاني
  document.getElementsByName("nameth")[0].disabled = true; //الاسم الثالث
  document.getElementsByName("namefo")[0].disabled = true; //الاسم الرابع
  document.getElementsByName("hoo")[0].disabled = true; //رقم الهاتف

  //----------------------------------------------------------------------------------------------
  //اخفاء محافظة ميسان
  this.group_of_form[0].fields[12].properties[0].values = [
    "بغداد",
    "بابل",
    "البصرة",
    "ذي قار",
    "المثنى",
    "الانبار",
    "كركوك",
    "واسط",
    "كربلاء المقدسة",
    "النجف الاشرف",
    "القادسية",
    "صلاح الدين",
    "ديالى",
    "نينوى",
  ];
}
