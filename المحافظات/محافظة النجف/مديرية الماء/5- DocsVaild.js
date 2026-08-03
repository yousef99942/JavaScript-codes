{
  var Docs_Prog = [
    ["Propertydeed"], //صورة من سند العقار الحديث
    ["LatestReceiptPaid"], //صورة عن اخر قائمة جباية تم تسديدها
    ["ChosenAreaSupport"], //تاييد مختار المنطقة يذكر فيه سبب ايقاف التحقق
    ["AdministrativeOrder"], //الامر الاداري الخاص بإيقاف التحقق ان وجد
  ];

  var numbers = [
    0, //المجموعة الاولى
  ];

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
      "فتح اشتراك جديد",
      "تغيير اسم المشترك",
      "ايقاف تحقق اجور الماء",
      //"اعادة فتح مجرى الماء",
    ],
    Second_Selected_Values = [
      "تغيير اسم المشترك",
      "ايقاف تحقق اجور الماء",
      "اعادة فتح مجرى الماء",
    ];

  // Validate based on customer type or form type
  if (First_Selected_Values.includes(this.form_data.sel)) {
    validateDocuments.call(this, Docs_Prog[0], numbers[0]);
  }

  if (Second_Selected_Values.includes(this.form_data.sel)) {
    validateDocuments.call(this, Docs_Prog[1], numbers[0]);
  }

  if (this.form_data.sel == "ايقاف تحقق اجور الماء") {
    validateDocuments.call(this, Docs_Prog[2], numbers[0]);
  }

  if (this.form_data.sel == "اعادة فتح مجرى الماء") {
    validateDocuments.call(this, Docs_Prog[3], numbers[0]);
  }
}
