{
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

  var Fields_ID = ["89244", "89721", "89722", "89246"];

  Arabic_Only(Fields_ID);

  // this.inputFormField.firstNaa = this.user.first_name; //جلب الاسم الاول
  // document.getElementsByName("firstNaa")[0].disabled = true; //قفل حقل الاسم الاول

  // this.inputFormField.secondNaa = this.user.middle_name; //جلب الاسم الثاني
  // document.getElementsByName("secondNaa")[0].disabled = true; //قفل حقل الاسم الثاني

  // this.inputFormField.ThirdNaa = this.user.last_name; //جلب الاسم الثالث
  // document.getElementsByName("ThirdNaa")[0].disabled = true; //قفل حقل الاسم الثالث
}
