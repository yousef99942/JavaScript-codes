{
  var First_Docs_Progs = [
    ["fanmilycard"],
    ["filname"],
    ["hhhhhhhhhhh"],
    ["hhhhhhhhhhhhhh"],
    ["ggggggggggggggggg"],
    ["ghhhhhhghh"],
    ["gggggggggg"],
  ];
  var Second_Docs_Progs = [["request"], ["doc"], ["Grantt"], ["hhhhhhhhhhh"]];
  var Third_Docs_Progs = [
    ["cancelattion"],
    ["note"],
    ["grant"],
    ["clearance"],
    ["hhhhhhhhhhhhhh"],
    ["ggggggggggggggggg"],
    ["ghhhhhhghh"],
    ["gggggggggg"],
  ];

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
  if (this.form_data.Grant == "منح فرن حجري او مخبز") {
    for (var i = 0; i < First_Docs_Progs.length; i++) {
      validateDocuments.call(this, First_Docs_Progs[i]);
    }
  }

  if (this.form_data.Grant == "تدوير فرن حجري او مخبز تجاري") {
    for (var i = 0; i < Second_Docs_Progs.length; i++) {
      validateDocuments.call(this, Second_Docs_Progs[i]);
    }
  }

  if (this.form_data.Grant == "الغاء اجازة ( فرن او مخبز)") {
    for (var i = 0; i < Third_Docs_Progs.length; i++) {
      validateDocuments.call(this, Third_Docs_Progs[i]);
    }
  }
}
