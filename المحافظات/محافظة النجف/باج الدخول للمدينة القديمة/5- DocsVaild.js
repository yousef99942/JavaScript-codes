{
  var Docs = [
    //البطاقة الوطنية +بطاقة السكن +سنوية المركبة + اجازة سوق  ( الوجه الامامي والخلفي بصفحة واحدة)
    ["personaldoc"],
    ["styles"],
    //البطاقة الوطنية +بطاقة السكن ( الوجه الامامي والخلفي بصفحة واحدة)
    ["car"],
    ["filestyles"],
    //صورة كتاب تسجيل هيئة النقل
    ["file"],
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
  if (this.form_data.cardtype == "هوية تعريفية") {
    validateDocuments.call(this, Docs[2]); //البطاقة الوطنية +بطاقة السكن ( الوجه الامامي والخلفي بصفحة واحدة)
    validateDocuments.call(this, Docs[3]);
  }
  if (this.form_data.cardtype == "باج للسيارات الخصوصي") {
    validateDocuments.call(this, Docs[0]); //البطاقة الوطنية +بطاقة السكن +سنوية المركبة + اجازة سوق  ( الوجه الامامي والخلفي بصفحة واحدة)
    validateDocuments.call(this, Docs[1]);
  }
  if (this.form_data.cardtype == "باج للسيارات الاجرة (الصفراء حصرا)") {
    validateDocuments.call(this, Docs[0]); //البطاقة الوطنية +بطاقة السكن +سنوية المركبة + اجازة سوق  ( الوجه الامامي والخلفي بصفحة واحدة)
    validateDocuments.call(this, Docs[1]);
    validateDocuments.call(this, Docs[4]); //صورة كتاب تسجيل هيئة النقل
  }
}
