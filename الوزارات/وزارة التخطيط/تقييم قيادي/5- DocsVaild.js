{
  var Docs_Prog = [
    ["ShukrA"], //كتاب الشكر والتقدير الأول
    ["ShukrB"], //كتاب الشكر والتقدير الثاني
    ["ShukrC"], //كتاب الشكر والتقدير الثالث
    ["ShukrD"], //كتاب الشكر والتقدير الرابع
    ["ShukrE"], //كتاب الشكر والتقدير الخامس
    ["ShukrF"], //كتاب الشكر والتقدير السادس
    ["ShukrG"], //كتاب الشكر والتقدير السابع
    ["ShukrH"], //كتاب الشكر والتقدير الثامن
    ["ShukrI"], //كتاب الشكر والتقدير التاسع
    ["ShukrJ"], //كتاب الشكر والتقدير العاشر
  ];
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

  var Books_Number = parseInt(this.form_data.Thankyouletters);

  for (var i = 0; i < Books_Number; i++) {
    validateDocuments.call(this, Docs1[i], numbers[0]);
  }
}
