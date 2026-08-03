{
  console.log("main service");
  const timeoutId = setTimeout(() => {
    //خدمة 21784 تحديد موعد مقابلة
    this.inputFormField.firstNaa = this.user.first_name;
    this.inputFormField.secondNaa = this.user.middle_name;
    this.inputFormField.ThirdNaa = this.user.last_name;

    //خدمة 21812 الاخبار عن عقار
    this.inputFormField.firstNa = this.user.first_name;
    this.inputFormField.secondName = this.user.middle_name;
    this.inputFormField.Thirdname = this.user.last_name;
  }, 1500);

  //اخفاء مجموعة معلومات مقدم الطلب
  document.getElementById("35356_group").style.display = "none";

  //جلب المعلومات من بوابة اور
  this.inputFormField.Name = this.user.first_name;
  this.inputFormField.secondNa = this.user.middle_name;
  this.inputFormField.ThiredNa = this.user.last_name;

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

  var Fields_ID = ["89931", "89933", "89936", "89950"];

  Arabic_Only(Fields_ID);
}
