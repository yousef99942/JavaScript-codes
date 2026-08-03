{
  var Docs1 = ["proof"], //السند
    Docs2 = ["contract"], //العقد
    Docs3 = ["document"]; //وثيقة اشغال او انتفاع بالعقار

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
  if (this.form_data.proprtytype == "ملك صرف") {
    validateDocuments.call(this, Docs1, 1);
  }

  if (this.form_data.proprtytype == "عقد زراعي") {
    validateDocuments.call(this, Docs2, 1);
  }

  if (this.form_data.proprtytype == "اخرى") {
    validateDocuments.call(this, Docs3, 1);
  }
}
