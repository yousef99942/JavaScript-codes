{
  //مال التسجيل الجديد وقطاع عام
  var Docs1 = ["attchmant"]; //كتاب الترشيح
  var Docs2 = ["attachmantt"]; //طلب المشاركة في الدورة (خطي او مطبوع)
  var Docs3 = ["Writtenrequest"]; //طلب خطي
  var numbers = [0];

  //Check if there is any empty Docs
  function Check_Docs(docsArray, PlaceNum) {
    var Empty_Docs = 0; //if 0 all is good
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
              Empty_Docs = 1;
            }
          }
        });
      } else {
        // If the document doesn't exist in inputDocsField, mark as required
        this.group_of_docs[PlaceNum].fields.forEach((field) => {
          if (docsArray.includes(field.name) && field.document_id == null) {
            Empty_Docs = 1;
          }
        });
      }
    });

    return Empty_Docs;
  }

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
  /*
  if (this.form_data.Sectors == "القطاع العام") {
    validateDocuments.call(this, Docs1, numbers[0]);
    validateDocuments.call(this, Docs2, numbers[0]);
  }

  if (this.form_data.Sectors == "القطاع الخاص") {
    validateDocuments.call(this, Docs2, numbers[0]);
  }
    */

  if (Check_Docs.call(this, Docs1, numbers[0])) {
    validateDocuments.call(this, ["file"], numbers[0]);
  }

  if (Check_Docs.call(this, ["file"], numbers[0])) {
    validateDocuments.call(this, Docs1, numbers[0]);
  }

  if (
    this.form_data.Registration ==
    "التسجیل للحصول على شھادة جداریة للدورات والورش السابقة"
  ) {
    validateDocuments.call(this, Docs3, numbers[0]);
  }
}
