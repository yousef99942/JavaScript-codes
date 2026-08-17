{
  var Docs1 = ["tanazel"]; //كتاب تنازل ورثة المتوفي
  var Docs2 = ["tanazelhay"]; //كتاب تنازل الاصيل الحي لوريث
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

  if (this.form_data.submission === "تقديم الوريث للمشمول المتوفي") {
    validateDocuments.call(this, Docs1, numbers[0]);
  }

  if (this.form_data.submission === "التقديم لتنازل المشمول الحي لاحد الورثة") {
    validateDocuments.call(this, Docs2, numbers[0]);
  }
}
