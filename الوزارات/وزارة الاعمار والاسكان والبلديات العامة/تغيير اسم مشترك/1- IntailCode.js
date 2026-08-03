{
  this.group_of_form[0].fields[9].properties[0].values = ["كركوك"]; //المحافظة

  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name;
  document.getElementsByName("thirdname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name;
  document.getElementsByName("fourthname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phoneno = this.user.phone_num;
  document.getElementsByName("phoneno")[0].disabled = true; //رقم الهاتف

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

  Arabic_Only("68310"); //اسم المشترك القديم
  Arabic_Only("68317"); //المقاطعة
  Arabic_Only("68316"); //اسم الحي
}
