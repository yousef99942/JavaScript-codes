{
  this.inputFormField.firstname = this.user.first_name;
  document.getElementsByName("firstname")[0].disabled = true; //الاسم الاول

  this.inputFormField.secondname = this.user.middle_name;
  document.getElementsByName("secondname")[0].disabled = true; //الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name;
  document.getElementsByName("thirdname")[0].disabled = true; //الاسم الثالث

  this.inputFormField.Thefourthname = this.user.forth_name;
  document.getElementsByName("Thefourthname")[0].disabled = true; //الاسم الرابع

  this.inputFormField.phonename = this.user.phone_num;
  document.getElementsByName("phonename")[0].disabled = true; //رقم الهاتف

  this.inputFormField.surname = this.user.family_name; //اللقب

  //----------------------------------------------------------------------------
  //حصر الحقول باللغة العربية
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
    "75554", //اللقب
  ];

  Arabic_Only(Fields_ID);

  //----------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز واللغة العربية
  function Arabic_Symbols_Numbers_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // العربية + الأرقام + الرموز + المسافة
        const regex =
          /^[\u0600-\u06FF0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "75234", //رقم عقد الايجار المطلوب تمديدة
  ];

  Arabic_Symbols_Numbers_Only(Fields_ID);

  //----------------------------------------------------------------------------
  //حصر حقل التاريخ
  document
    .getElementById("75236")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("datacint")[0].setAttribute("min", "1990-01-01");
  document
    .getElementsByName("datacint")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
