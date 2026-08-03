{
  var Docs_Prog = [
    ["picture"], //صورة شخصية
    ["requstpic"], //صورة الطلب
    ["official"], //كتاب عدم ممانعة
    ["receipt"], //وصل الرسوم
    ["lossofid"], //كتاب فقدان هوية
    ["officialexcuse"], //كتاب رسمي لتأجيل الامتحان
    ["modifyname"], //كتاب رسمي بتصويب الاسم
    ["poorfinancial"], //كتاب ضعف الحالة المادية
    ["transformstudy"], //كتاب او وثيقة ما يعزز تحويل او استضافة الدراسة
    ["yearpostpone"], //كتاب او وثيقة يعزز تأجيل سنة دراسية
  ];

  // Function to handle document validation
  function validateDocuments(docsArray) {
    // Loop through each document key in the docsArray
    docsArray.forEach((docKey) => {
      if (Object.keys(this.inputDocsField).includes(docKey)) {
        // Loop through fields to find the corresponding one and validate it
        this.group_of_docs[0].fields.forEach((field) => {
          if (field.name == docKey) {
            // If no files uploaded and document_id is null, add an error
            if (
              this.inputDocsField[docKey].files.length === 0 &&
              field.document_id == null
            ) {
              this.evalErr.push(`الحقل ${field.label} مطلوب`);
            }
          }
        });
      } else {
        // If the document key doesn't exist in inputDocsField, mark as required
        this.group_of_docs[0].fields.forEach((field) => {
          if (docsArray.includes(field.name) && field.document_id == null) {
            this.evalErr.push(`الحقل ${field.label} مطلوب`);
          }
        });
      }
    });
  }

  // Validate based on the form conditions
  if (this.form_data.request == "تأييد استمرارية بالدوام") {
    validateDocuments.call(this, Docs_Prog[0]); //صورة شخصية
  }

  //------------------------------------------------------------------------------
  var First_Selected_Values = [
    "عدم ممانعة بالنقل الى الكلية",
    "استضافة طالب في الكلية",
    "تحويل قناة القبول",
    "الاعتراض على النتائج النهائية",
    "تحويل الدراسة من الصباحي الى المسائي",
    "طلب تصويب اسم طالب في سجلات الكلية",
    "تخفيض الاجور الدراسية",
    "تأجيل سنة دراسية",
    "استضافة من المسائي الى الصباحي",
    "استضافة من الصباحي الى المسائي",
    "تأجيل امتحان",
  ];

  if (First_Selected_Values.includes(this.form_data.request)) {
    validateDocuments.call(this, Docs_Prog[1]); //صورة الطلب
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تسديد الاجور المسائية") {
    validateDocuments.call(this, Docs_Prog[3]); //وصل الرسوم
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "طلب تصويب اسم طالب في سجلات الكلية") {
    validateDocuments.call(this, Docs_Prog[6]); //كتاب رسمي بتصويب الاسم
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تخفيض الاجور الدراسية") {
    validateDocuments.call(this, Docs_Prog[7]); //كتاب ضعف الحالة المادية
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تأجيل سنة دراسية") {
    validateDocuments.call(this, Docs_Prog[9]); //كتاب ضعف الحالة المادية
  }

  //------------------------------------------------------------------------------
  var Third_Selected_Values = [
    "استضافة من المسائي الى الصباحي",
    "استضافة من الصباحي الى المسائي",
  ];

  if (Third_Selected_Values.includes(this.form_data.request)) {
    validateDocuments.call(this, Docs_Prog[8]); //كتاب او وثيقة ما يعزز تحويل او استضافة الدراسة
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "اصدار هوية طالب") {
    validateDocuments.call(this, Docs_Prog[0]); //صورة شخصية
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "فقدان هوية طالب") {
    validateDocuments.call(this, Docs_Prog[4]); //كتاب فقدان هوية
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "تأجيل امتحان") {
    validateDocuments.call(this, Docs_Prog[5]); //كتاب رسمي لتأجيل الامتحان
  }

  //------------------------------------------------------------------------------
  if (this.form_data.request == "نقل ضمن فروع الكلية وخارجها") {
    validateDocuments.call(this, Docs_Prog[2]); //كتاب عدم ممانعة
  }
}
