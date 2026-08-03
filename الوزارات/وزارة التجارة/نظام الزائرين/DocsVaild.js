{
  var Docs1 = ["lawyer"]; //هوية نقابة المحامين
  var Docs2 = ["ManagingDirectoridentity"]; //هوية المدير المفوض
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

  // Validate based on customer type or form type
  if (this.form_data.Visitor == "محامي") {
    validateDocuments.call(this, Docs1, numbers[0]);
  }

  if (
    this.form_data.Visitor == "مواطن بموجب وكالة, مساهم, مدير مفوض" &&
    this.form_data.condition == "نعم"
  ) {
    validateDocuments.call(this, Docs2, numbers[0]);
  }
}
