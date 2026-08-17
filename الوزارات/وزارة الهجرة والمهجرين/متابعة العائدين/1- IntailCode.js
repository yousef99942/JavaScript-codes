{
  const Fields = [
    { id: "93041", name: "namek" }, // الأسم الأول
    { id: "93907", name: "namers" }, // أسم الأب
    { id: "93908", name: "namerpf" }, // أسم الجد
    { id: "93909", name: "nsameq" }, // اللقب
    { id: "92473", name: "namelive" }, // الدولة العائد منها
    { id: "93044", name: "namet" }, // نوع العودة
    { id: "92474", name: "nameq" }, // وسيلة الأتصال
    { id: "93899", name: "livong" }, // محافظة السكن الحالية
    { id: "92477", name: "names" }, // محافظة السكن قبل الهجرة
    { id: "92479", name: "namesel" }, // هل أشتركت في برامج المنظمات؟
    { id: "93060", name: "namec" }, // هل لديك عمل
    { id: "92482", name: "namepo" }, // ماهو نوع الدعم الذي ترغب به؟
    { id: "92483", name: "namepqz" }, // هل انت متزوج؟
    { id: "92485", name: "namme" }, // هل تم التسجيل في وزارة الهجرة والمهجرين
    { id: "92487", name: "nameysq" }, // هل أستلمت منحة مالية
    { id: "93900", name: "nots" }, // الملاحظات
  ];

  const People_PhoneNumber = [
    "9647715577288", //بسام فؤاد عبد
    "9647700049656", //عبدالله علي صالح
    "9647811911618", //يوسف احسان علي
    "9647708860872", //علي غني
    "9647718267149", //ماريا
    "9647712728880", //احمد
  ];

  const First_Name = this.user.first_name,
    Second_Name = this.user.middle_name,
    Third_Name = this.user.last_name;

  const Full_Name = First_Name + " " + Second_Name + " " + Third_Name;

  this.inputFormField.AdminName = Full_Name; //اسم المخول
  document.getElementsByName("AdminName")[0].disabled = true; //قفل حقل اسم المخول

  this.inputFormField.AdminPhoneNumber = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("AdminPhoneNumber")[0].disabled = true; //قفل حقل رقم الهاتف

  if (People_PhoneNumber.includes(this.user.phone_num)) {
    Fields.forEach((field) => {
      document.getElementById(field.id).style.display = "block";
      this.inputFormField[field.name] = null;
    });

    document.getElementById("93926").style.display = "none"; //الليبل
  } else {
    Fields.forEach((field) => {
      document.getElementById(field.id).style.display = "none";
      this.inputFormField[field.name] = null;
    });

    document.getElementById("93926").style.display = "block"; //الليبل
    document.getElementById("93926").style.cssText =
      "color: #640000; font-size: 23px; font-weight: bold; padding-top: 30px; padding-bottom: 15px; text-align: center;";
  }

  //---------------------------------------------------------------------------------------------------------------------
  //حصر الحقول باللغة العربية فقط
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
    "93041", // الأسم الأول
    "93907", // أسم الأب
    "93908", // أسم الجد
    "93909", // اللقب
    "92473", // الدولة العائد منها
    "92474", // وسيلة الأتصال
    "93899", // محافظة السكن الحالية
    "92477", // محافظة السكن قبل الهجرة
    "92480", //ماهو البرنامج
    "93061", //نوع العمل
    "92493", //نوع الدعم الأخر
    "92490", //اسم المنظمة التي أستلمت المنحة منها
  ];

  Arabic_Only(Fields_ID);
}
