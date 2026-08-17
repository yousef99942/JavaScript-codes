{
  //اخفاء مجموعة
  document.getElementById("35057_group").style.display = "none"; //استمارة بيان قيام الزوجية وعدد الاولاد

  //جلب المعلومات من بوابة اور
  this.inputFormField.finame = this.user.first_name; //جلب الاسم الاول
  document.getElementsByName("finame")[0].disabled = true; //قفل حقل الاسم الاول

  this.inputFormField.secondname = this.user.middle_name; //جلب الاسم الثاني
  document.getElementsByName("secondname")[0].disabled = true; //قفل حقل الاسم الثاني

  this.inputFormField.thirdname = this.user.last_name; //جلب الاسم الثالث
  document.getElementsByName("thirdname")[0].disabled = true; //قفل حقل الاسم الثالث

  this.inputFormField.fourthname = this.user.forth_name; //جلب الاسم الرابع
  document.getElementsByName("fourthname")[0].disabled = true; //قفل حقل الاسم الرابع

  this.inputFormField.phone = this.user.phone_num; //جلب رقم الهاتف
  document.getElementsByName("phone")[0].disabled = true; //قفل حقل رقم الهاتف

  this.inputFormField.IDcivil = this.user.profile.national_id.nationalID; //جلب رقم الموحدة
  //document.getElementsByName("IDcivil")[0].disabled = true; //قفل حقل رقم الموحدة

  this.inputFormField.Britday = this.user.birth_date; //جلب تاريخ الميلاد
  //document.getElementsByName("Britday")[0].disabled = true; //قفل حقل تاريخ الميلاد

  //--------------------------------------------------------------------------------------------
  //تغيير خصائص الليبل
  //المعلومات الشخصية
  //عند حدوث تغيير في الوضع الاجتماعي خلال السنة يبلغ المحاسب بذلك
  document.getElementById("87370").style.cssText =
    "color: #6e0202; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px;";

  //استمارة بيان قيام الزوجية وعدد الاولاد
  document.getElementById("12345").style.cssText =
    "color: #650505; font-size: 20px; font-weight: bold; padding-top: 15px; padding-bottom: 15px; text-align: center;";

  //--------------------------------------------------------------------------------------------
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
    //المعلومات الوظيفية
    "86784", //العنوان الوظيفي
    "86792", //اسم صاحب العمل
    //الحالة الاجتماعية
    "87253", //اسم الزوج ( الزوجة)
    //استمارة بيان قيام الزوجية وعدد الاولاد
    "86895", //الاسم الاول
    "86896", //الاسم الثاني
    "86897", //الاسم الثالث
    "86898", //الاسم الرابع
    "86940", //جنسية الزوج ( الزوجة )
  ];

  Arabic_Only(Fields_ID);

  //--------------------------------------------------------------------------------------------
  //حصر الحقول بالارقام والرموز فقط
  function Numbers_Symbols_Only(Fields_ID) {
    for (var i = 0; i < Fields_ID.length; i++) {
      const input = document.getElementById(Fields_ID[i]);

      input.addEventListener("keydown", (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl || e.key.length > 1) return;

        // الأرقام + الرموز + المسافة
        const regex =
          /^[0-9\u0660-\u0669\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]$/;

        if (!regex.test(e.key)) {
          e.preventDefault();
        }
      });
    }
  }

  var Fields_ID = [
    "86782", //الدار
  ];

  Numbers_Symbols_Only(Fields_ID);

  //--------------------------------------------------------------------------------------------
  //حصر حقول التاريخ
  function Date_Limit(Field_ID, Field_Prog, Min_Date, Max_Date) {
    document
      .getElementById(Field_ID)
      .addEventListener("keydown", function (event) {
        event.preventDefault();
      });
    document.getElementsByName(Field_Prog)[0].setAttribute("min", Min_Date);
    document.getElementsByName(Field_Prog)[0].setAttribute("max", Max_Date);
  }
  //تاريخ الميلاد
  Date_Limit(
    "86749",
    "Britday",
    "1950-01-01",
    `${new Date().getFullYear() - 18}-12-31`,
  );

  //تاريخ المباشرة
  Date_Limit(
    "86785",
    "dirdate",
    "1990-01-01",
    `${new Date().getFullYear()}-12-31`,
  );
  document
    .getElementById("86785")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("dirdate")[0].setAttribute("min", "1990-01-01");
  document
    .getElementsByName("dirdate")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ الزواج
  document
    .getElementById("87252")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("birthdaymarried")[0]
    .setAttribute("min", "1960-01-01");
  document
    .getElementsByName("birthdaymarried")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ الطلاق
  document
    .getElementById("87252")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("birthdaymarried")[0]
    .setAttribute("min", "1960-01-01");
  document
    .getElementsByName("birthdaymarried")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //تاريخ وفاة الزوج ( الزوجة)
  document
    .getElementById("87256")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document
    .getElementsByName("birthdaydeath")[0]
    .setAttribute("min", "1960-01-01");
  document
    .getElementsByName("birthdaydeath")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);

  //التاريخ اذا كنت متزوج او أرمل او مطلق
  document
    .getElementById("86900")
    .addEventListener("keydown", function (event) {
      event.preventDefault();
    });
  document.getElementsByName("datemari")[0].setAttribute("min", "1960-01-01");
  document
    .getElementsByName("datemari")[0]
    .setAttribute("max", `${new Date().getFullYear()}-12-31`);
}
