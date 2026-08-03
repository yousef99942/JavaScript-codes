{
  var Docs1 = ["attachee"]; //مرفق الادلة الرسمية
  var Docs2 = ["attacheee"]; //مرفق الادلة الغير رسمية
  var Docs3 = ["attach"]; //الوكالة (للوكيل)
  var Docs4 = ["file"]; //القسام الشرعي (للوريث)
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
  if (this.form_data.adelaa == "نعم") {
    validateDocuments.call(this, Docs1, numbers[0]); //مرفق الادلة الرسمية
  }

  if (this.form_data.nadelaa == "نعم") {
    validateDocuments.call(this, Docs2, numbers[0]); //مرفق الادلة الغير رسمية
  }

  if (this.form_data.typeeee == "وريث") {
    validateDocuments.call(this, Docs4, numbers[0]); //القسام الشرعي (للوريث)
  }

  if (this.form_data.typeeee == "وكيل") {
    validateDocuments.call(this, Docs3, numbers[0]); //الوكالة (للوكيل)
  }
}
