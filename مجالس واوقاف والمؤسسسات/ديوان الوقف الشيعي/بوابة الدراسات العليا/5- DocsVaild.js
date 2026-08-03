{
  var Docs1 = [
    ["PicSelf"], //صورة شخصية
    ["Passport"], //جواز السفر
    ["OtherDocuments"], //طلب خطي يوضح الرغبة في الحصول على المباشرة
    ["otherdoc"], //عدم ممانعة بالنقل من الجهة المراد النقل اليها
    ["otherdocu"], //ارفق ما يؤيد سبب النقل
    ["OtherDocument"], //تقرير طبي او ما يثبت ظرف قاهر للتأجيل
    ["otherfile"], //مرافقات طلب تخفيض قسط
    ["returntostudy"], //كتاب الامر الاداري بالعودة الى مقاعد الدراسة
    ["withdrawal"], //طلب يدوي مع ذكر اسباب ترقين القيد
    ["withsdrawall"], //طلب يدوي يوضح سبب الغاء القبول
    ["documentfourmal"], //كتاب رسمي معنون الى كليتنا بعدم ممانعة بالنقل
  ];
  //هنا نضع تسلسل المجاميع التي تحتوي على الملفات بعد طرح 1 من قيمة التسلسل
  var numbers = [0];

  // Function to handle document validation
  function validateDocuments(docsArray, PlaceNum) {
    // Loop through the docs array and validate each document field
    docsArray.forEach((docKey) => {
      if (Object.keys(this.inputDocsField).includes(docKey)) {
        // Loop through fields to find matching ones and validate
        this.group_of_docs[PlaceNum].fields.forEach((field) => {
          if (field.name == docKey) {
            // If no files uploaded, or document ID is null, add error
            if (
              this.inputDocsField[docKey].files.length === 0 &&
              field.document_id == null
            ) {
              this.evalErr.push(`الحقل ${field.label} مطلوب`);
            }
          }
        });
      } else {
        // If the document doesn't exist in inputDocsField, mark as required
        this.group_of_docs[PlaceNum].fields.forEach((field) => {
          if (docsArray.includes(field.name) && field.document_id == null) {
            this.evalErr.push(`الحقل ${field.label} مطلوب`);
          }
        });
      }
    });
  }

  var First_Selected_Values = [
    "وثيقة تخرج بدون درجات باللغة العربية",
    "وثيقة تخرج بالدرجات باللغة العربية",
    "تأييد مناقشة",
    "جدارية تخرج",
    "تأييد بالتمديد",
    "وثيقة تخرج بالدرجات باللغة الانكليزية",
    "تأييد استمرارية بالدوام",
    "تأييد مباشرة بالدوام",
  ];

  // Validate based on customer type or form type
  if (First_Selected_Values.includes(this.form_data.TheIdType)) {
    validateDocuments.call(this, Docs1[0], numbers[0]); //صورة شخصية
  }

  if (this.form_data.requsttype == "وثيقة تخرج بالدرجات باللغة الانكليزية") {
    validateDocuments.call(this, Docs1[1], numbers[0]);
  }

  if (
    this.form_data.requsttype == "تأييد استمرارية بالدوام" ||
    this.form_data.requsttype == "تأييد مباشرة بالدوام"
  ) {
    validateDocuments.call(this, Docs1[2], numbers[0]);
  }

  if (this.form_data.requsttype == "نقل الى خارج كلية الامام الكاظم") {
    validateDocuments.call(this, Docs1[3], numbers[0]);
    validateDocuments.call(this, Docs1[4], numbers[0]);
  }

  if (this.form_data.requsttype == "تأجيل سنة دراسية") {
    validateDocuments.call(this, Docs1[5], numbers[0]);
  }

  if (this.form_data.requsttype == "تخفيض الاجور الدراسية") {
    validateDocuments.call(this, Docs1[6], numbers[0]);
  }

  if (this.form_data.requsttype == "اعادة المرقن قيده الى مقاعد الدراسة") {
    validateDocuments.call(this, Docs1[7], numbers[0]);
  }

  if (this.form_data.requsttype == "ترقين قيد (انهاء علاقة)") {
    validateDocuments.call(this, Docs1[8], numbers[0]);
  }

  if (this.form_data.requsttype == "الغاء قبول") {
    validateDocuments.call(this, Docs1[9], numbers[0]);
  }

  if (this.form_data.requsttype == "عدم ممانعة نقل الى داخل الكلية") {
    validateDocuments.call(this, Docs1[10], numbers[0]);
  }
}
