{
  var Docs_Prog = [
    //المستمسكات الشخصية
    ["StockholdersID"], //مستمسكات الشركاء
    ["StockholderApprove"], //موافقة الشركاء
    ["invi"], //الموافقة البيئية للابنية الصناعية
  ];
  var numbers = [
    1, //المستمسكات الشخصية
    3, //الموافقة البيئية
  ];

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
  if (this.form_data.ownertype == "شريك في العقار") {
    for (var i = 0; i < Docs_Prog.length; i++) {
      if (i < 2) {
        validateDocuments.call(this, Docs_Prog[i], numbers[0]);
      }
    }
  }

  if (this.form_data.buildingtype == "صناعي") {
    validateDocuments.call(this, Docs_Prog[2], numbers[1]);
  }
}
