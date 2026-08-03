{
  var Docs_ID = [
    //0
    "24610", //صورة شخصية
    //1
    "22861", //صورة هوية الطالب
    //2
    "22858", //صورة الطلب
    //3
    "24609", //كتاب عدم ممانعة
    //4
    "46985", //وصل الرسوم
    //5
    "46987", //كتاب فقدان هوية
    //6
    "46986", //كتاب رسمي لتأجيل الامتحان
    //7
    "46988", //كتاب رسمي بتصويب الاسم
    //8
    "46989", //كتاب ضعف الحالة المادية
    //9
    "46991", //كتاب او وثيقة ما يعزز تحويل او استضافة الدراسة
    //10
    "46990", //كتاب او وثيقة يعزز تأجيل سنة دراسية
  ];

  //------------------------------------------------------------------------------
  //done
  if (this.form_data.request == "تأييد استمرارية بالدوام") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i > 1) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  var First_Selected_Values = [
    "عدم ممانعة بالنقل الى الكلية",
    "استضافة طالب في الكلية",
    "تحويل قناة القبول",
    "الاعتراض على النتائج النهائية",
  ];

  if (First_Selected_Values.includes(this.form_data.request)) {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 2) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تسديد الاجور المسائية") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 4) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  var Second_Selected_Values = [
    "براءة ذمة استلام نتيجة",
    "اصدار الرقم الجامعي",
    "اصدار البريد الالكتروني للطلبة الدراسات الاولية",
  ];

  if (Second_Selected_Values.includes(this.form_data.request)) {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 1) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "طلب تصويب اسم طالب في سجلات الكلية") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 2 && i != 7) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تخفيض الاجور الدراسية") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 2 && i != 8) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تأجيل سنة دراسية") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 2 && i != 10) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تحويل الدراسة من الصباحي الى المسائي") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 2 && i != 1) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  var Third_Selected_Values = [
    "استضافة من المسائي الى الصباحي",
    "استضافة من الصباحي الى المسائي",
  ];

  if (Third_Selected_Values.includes(this.form_data.request)) {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 2 && i != 9 && i != 1) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "اصدار هوية طالب") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 0) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "فقدان هوية طالب") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 5) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تأجيل امتحان") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 2 && i != 1 && i != 6) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "نقل ضمن فروع الكلية وخارجها") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 3) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }
}
