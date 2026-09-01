{
  //اظهار فحص السياقة فقط
  this.group_of_form[0].fields[18].properties[0].values = [
    "اجازة سوق مركبة",
    "اجازة سوق دراجة",
  ];

  //---------------------------------------------------------------------------------------------------------
  //تغيير خصائص الليبلات
  //مال الدفع لا يسترجع
  document.getElementById("74161").style.cssText =
    "color: #ff0000ff; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 10px";

  //تترك الحقول ادناه فارغة في حالم لم يتم ارسالك من قبل اي جهة معنية بالفحص الطبي
  document.getElementById("25387").style.cssText =
    "color: #ff0000ff; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 10px; text-align: center;";

  //يلتزم المراجع بالحضور في الموعد المحجوز مسبقاً، بغض النظر عن حالة الطلب
  document.getElementById("72670").style.cssText =
    "color: #ff0000ff; font-size: 18px; font-weight: bold; padding-top: 15px; padding-bottom: 10px; text-align: center;";

  //---------------------------------------------------------------------------------------------------------
  //جلب معلومات من بوابة اور
  this.inputFormField.name = this.user.first_name;
  document.getElementsByName("name")[0]; //الاسم الاول

  this.inputFormField.names = this.user.middle_name;
  document.getElementsByName("names")[0]; //الاسم الثاني

  this.inputFormField.nameth = this.user.last_name;
  document.getElementsByName("nameth")[0]; //الاسم الثالث

  this.inputFormField.PFourthName = this.user.forth_name; //الاسم الرابع
  //document.getElementsByName("PFourthName")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phone = this.user.phone_num;
  document.getElementsByName("phone")[0].disabled = true; //رقم الهاتف

  this.inputFormField.numberid = this.user.profile.national_id.nationalID;
  document.getElementsByName("numberid")[0]; //رقم الموحدة

  document.getElementsByClassName("21683")[0].style.display = "none";

  //-------------------------------------------------------------------------------------
  //حصر حقول التواريخ
  //تاريخ الميلاد
  document
    .getElementById("51599")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("agee")[0]
    .setAttribute("min", `${new Date().getFullYear() - 90}-12-31`);
  document
    .getElementsByName("agee")[0]
    .setAttribute("max", `${new Date().getFullYear() - 18}-12-31`);

  //---------------------------------------------------------------------------------------------------------
  //تحديد الحقول باللغة العربية فقط
  function Arabic_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);
      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return; // السماح بالاختصارات والأسهم

        // الأحرف العربية + الهمزة + المسافة
        if (!/^[\u0600-\u06FF\s]$/.test(e.key)) {
          e.preventDefault(); // منع أي شيء غير عربي
        }
      });
    }
  }

  var Fields_ID = [
    "25379", //الاسم الاول
    "25531", //الاسم الثاني
    "25532", //الاسم الثالث
    "73982", //الاسم الرابع
    "73983", //اسم الام الاول
    "73984", //اسم الام الثاني
    "73985", //اسم الام الثالث
    "25388", //اسم الجهة المرسلة
  ];

  Arabic_Only(Fields_ID);
}
