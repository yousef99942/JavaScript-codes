{
  this.group_of_form[0].fields[17].properties[0].values = [
    "بغداد",
    "بابل",
    "ديالى",
    "ذي قار",
    "المثنى",
    "الانبار",
    "كركوك",
    "واسط",
    "كربلاء المقدسة",
    "النجف الاشرف",
    "القادسية",
    "صلاح الدين",
    "نينوى",
    "ميسان",
  ]; //المحافظة التي ينقل اليها الاثاث

  this.group_of_form[0].fields[19].properties[0].values = [
    "بغداد",
    "بابل",
    "ديالى",
    "ذي قار",
    "المثنى",
    "الانبار",
    "كركوك",
    "واسط",
    "كربلاء المقدسة",
    "النجف الاشرف",
    "القادسية",
    "صلاح الدين",
    "نينوى",
    "ميسان",
  ]; //المحافظة التي ينقل الاثاث اليها

  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name;
  document.getElementsByName("thirdname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name;
  document.getElementsByName("fourthname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.familyname = this.user.family_name;
  document.getElementsByName("familyname")[0].disabled = true; //اللقب

  this.inputFormField.phonenum = this.user.phone_num;
  document.getElementsByName("phonenum")[0].disabled = true; //رقم الهاتف

  document.getElementById("70754").style.cssText =
    "color: #850d17ff; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 12px";

  //تحديد الحقول باللغة العربية فقط
  function Arabic_Only(Field_ID) {
    const input = document.getElementById(Field_ID);
    input.addEventListener("keydown", (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

      // الأحرف العربية + الهمزة + المسافة
      if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
        e.preventDefault(); // منع أي شيء غير عربي
      }
    });
  }

  //اسم الام الثلاثي
  Arabic_Only("67367");

  Arabic_Only("67368");

  Arabic_Only("67369");

  //اسم المنطقة الحالية
  Arabic_Only("67786");

  //اسم المنطقة التي يود السكن فيها
  Arabic_Only("67790");
}
