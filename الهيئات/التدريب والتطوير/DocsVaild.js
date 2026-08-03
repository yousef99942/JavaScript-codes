{
  var Docs1 = ["NominationForm"], //مرفقات استمارة التقديم (الترشيح) للبرنامج التدريبي
    Docs2 = ["book"], //مرفقات  استمارة التقديم للمشاركة في الورش والمحاضرات والندوات والمؤتمرات
    Docs3 = [["Supportingbook"], ["EvaluationForm"]]; //مرفقات استمارة التقديم (الترشيح) للبرنامج التدريبي
  var numbers = [0, 1, 2];

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
  if (
    this.form_data.firstslector == "موظف داخل الهيئة" ||
    this.form_data.firstslector == "موظف خارج الهيئة"
  ) {
    if (this.form_data.secondslector == "دورة تدريبية") {
      validateDocuments.call(this, Docs1, numbers[0]);
    } else {
      validateDocuments.call(this, Docs2, numbers[1]);
    }
  }

  if (this.form_data.firstslector == "الطلبة") {
    validateDocuments.call(this, Docs3[0], numbers[2]);
    validateDocuments.call(this, Docs3[1], numbers[2]);
  }
}
