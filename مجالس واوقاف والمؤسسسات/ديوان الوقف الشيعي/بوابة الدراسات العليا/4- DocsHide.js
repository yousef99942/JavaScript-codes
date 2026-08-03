{
  var Docs_ID = [
      "24199", //صورة شخصية
      "24201", //جواز السفر
      "24203", //طلب خطي يوضح الرغبة في الحصول على المباشرة
      "46930", //عدم ممانعة بالنقل من الجهة المراد النقل اليها
      "46931", //ارفق ما يؤيد سبب النقل
      "24202", //تقرير طبي او ما يثبت ظرف قاهر للتأجيل
      "46932", //مرافقات طلب تخفيض قسط
      "46933", //كتاب الامر الاداري بالعودة الى مقاعد الدراسة
      "46934", //طلب يدوي مع ذكر اسباب ترقين القيد
      "46935", //طلب يدوي يوضح سبب الغاء القبول
      "46936", //كتاب رسمي معنون الى كليتنا بعدم ممانعة بالنقل
    ],
    First_Selected_Values = [
      "وثيقة تخرج بدون درجات باللغة العربية",
      "وثيقة تخرج بالدرجات باللغة العربية",
      "تأييد مناقشة",
      "جدارية تخرج",
      "تأييد بالتمديد",
    ];

  if (First_Selected_Values.includes(this.form_data.requsttype)) {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i > 0) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (this.form_data.requsttype == "وثيقة تخرج بالدرجات باللغة الانكليزية") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i > 1) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (
    this.form_data.requsttype == "تأييد استمرارية بالدوام" ||
    this.form_data.requsttype == "تأييد مباشرة بالدوام"
  ) {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 0 || i != 2) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (this.form_data.requsttype == "نقل الى خارج كلية الامام الكاظم") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 3 || i != 4) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (this.form_data.requsttype == "تأجيل سنة دراسية") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 5) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (this.form_data.requsttype == "تخفيض الاجور الدراسية") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 6) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (this.form_data.requsttype == "اعادة المرقن قيده الى مقاعد الدراسة") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 7) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (this.form_data.requsttype == "ترقين قيد (انهاء علاقة)") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 8) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (this.form_data.requsttype == "الغاء قبول") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 9) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  if (this.form_data.requsttype == "عدم ممانعة نقل الى داخل الكلية") {
    for (var i = 0; i < Docs_ID.length; i++) {
      if (i != 10) {
        document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
      }
    }
  }

  var Second_Selected_Values = [
    "اصدار البريد الالكتروني للطلبة الدراسات العليا",
    "اصدار الرقم الجامعي",
    "طلب تمديد",
    "طلب الغاء تمديد",
  ];

  if (Second_Selected_Values.includes(this.form_data.requsttype)) {
    for (var i = 0; i < Docs_ID.length; i++) {
      document.getElementsByClassName(Docs_ID[i])[0].style.display = "none";
    }
  }
}
