{
  var Docs1 = ["imaget"];

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
  if (this.form_data.HaveDisability == "نعم") {
    validateDocuments.call(this, Docs1);
  }
}
