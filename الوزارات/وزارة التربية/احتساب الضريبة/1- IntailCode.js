{
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
  // حصر حقول التاريخ
  function Date_Limit(Field_ID, Field_Prog, Min_Date, Max_Date) {
    document
      .getElementById(Field_ID)
      .addEventListener("keydown", function (event) {
        event.preventDefault();
      });
    const Field = document.getElementsByName(Field_Prog)[0];
    Field.setAttribute("min", Min_Date);
    Field.setAttribute("max", Max_Date);
  }

  // بيانات حقول التاريخ
  const Date_Fields = {
    birthday: {
      Field_ID: "86749",
      Field_Prog: "Britday",
      Min_Date: "1950-01-01",
      Max_Date: `${new Date().getFullYear() - 18}-12-31`,
    },

    directDate: {
      Field_ID: "86785",
      Field_Prog: "dirdate",
      Min_Date: "1990-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    },

    marriedDate: {
      Field_ID: "87252",
      Field_Prog: "birthdaymarried",
      Min_Date: "1960-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    },

    deathDate: {
      Field_ID: "87256",
      Field_Prog: "birthdaydeath",
      Min_Date: "1960-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    },

    marriageStatusDate: {
      Field_ID: "86900",
      Field_Prog: "datemari",
      Min_Date: "1960-01-01",
      Max_Date: `${new Date().getFullYear()}-12-31`,
    },
  };

  // Loop لاستدعاء الدالة لجميع الحقول
  Object.values(Date_Fields).forEach((Field) => {
    Date_Limit(
      Field.Field_ID,
      Field.Field_Prog,
      Field.Min_Date,
      Field.Max_Date,
    );
  });
}
