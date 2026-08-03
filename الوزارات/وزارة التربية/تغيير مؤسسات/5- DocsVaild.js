{
  var Docs1 = ["bookone"]; //كتاب الحاجة الفعلية للتغير
  var Docs2 = ["BookTwo"]; //نسبة النجاح لاخر سنة 80% واكثر تحتوى على QR
  var Docs3 = ["BookNine"]; //كتاب موقع من الاهالي بموافقتهم على التغيير
  var Docs4 = ["BookEleven"]; //في حال تغيير الاسم كتاب يحتوي QR بأن الاسم غير مستخدم

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

  if (
    this.form_data.object == "رفع المستوى" ||
    this.form_data.StudeyType ||
    this.form_data.GenderOfInstit
  ) {
    validateDocuments.call(this, Docs1, numbers[0]);
  }

  if (this.form_data.object == "رفع المستوى") {
    validateDocuments.call(this, Docs2, numbers[0]);
  }

  if (this.form_data.StudeyType || this.form_data.GenderOfInstit) {
    validateDocuments.call(this, Docs3, numbers[0]);
  }

  if (this.form_data.NameChange) {
    validateDocuments.call(this, Docs4, numbers[0]);
  }
}
