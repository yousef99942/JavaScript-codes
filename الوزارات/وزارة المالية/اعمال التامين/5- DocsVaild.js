{
  var DocsNames = [
    //المجموعة الاولى
    ["qqqww"],
    ["qqqqwwww"],
    ["qqqqwweee"],
    //المجموعة الثانية
    ["wssssaaa"],
    ["wwqqsssxc"],
    ["eddddqqw"],
    //المجموعة الثالثة
    ["dddfdfffddd"],
    ["eewwwwwss"],
    ["ssdssss"],
    ["reessw"],
    ["ffddddfffffffff"],
    ["dddssss"],
    ["hihjhjjjj"],
    ["aazzzaqqw"],
    //المجموعة الرابعة
    ["acc"],
    ["accc"],
    ["zxx"],
    //المجموعة الخامسة
    ["axx"],
    ["idPass"],
    ["Image"],
    ["branches"],
    ["education"],
    ["expCer"],
    ["exp"],
    ["ins"],
    ["contract"],
    //المجموعة السادسة
    ["acce"],
    ["boo"],
    ["prove"],
    //المجموعة السابعه
    ["aCCc"],
    ["idPASSSS"],
    ["image"],
    ["type"],
    ["education"],
  ];
  var numbers = [0, 1, 2, 3, 4, 5, 6];

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
  var First_Selected_Values = [
      "شركة تأمين",
      "فرع لشركة تأمين اجنبية",
      "شركة اعادة التأمين",
      "فرع لشركة اعادة تأمين اجنبية",
    ],
    Second_Selected_Values = ["شركة وساطة التأمين", "شركة وساطة اعادة التأمين"],
    Third_Selected_Values = ["شخص معنوي", "فرع لشخص معنوي (اجنبي)"];

  if (
    First_Selected_Values.includes(this.form_data.PeType) &&
    this.form_data.hfhgdth == "شخص معنوي"
  ) {
    for (var i = 0; i < 3; i++) {
      validateDocuments.call(this, DocsNames[i], numbers[0]);
    }
  }

  if (Second_Selected_Values.includes(this.form_data.PeType)) {
    if (Third_Selected_Values.includes(this.form_data.hfhgdth)) {
      for (var i = 3; i < 6; i++) {
        validateDocuments.call(this, DocsNames[i], numbers[1]);
      }
    } else {
      for (var i = 6; i < 14; i++) {
        validateDocuments.call(this, DocsNames[i], numbers[2]);
      }
    }
  }

  if (this.form_data.PeType == "وكيل تأمين") {
    if (Third_Selected_Values.includes(this.form_data.hfhgdth)) {
      for (var i = 14; i < 17; i++) {
        validateDocuments.call(this, DocsNames[i], numbers[3]);
      }
    } else {
      for (var i = 17; i < 26; i++) {
        validateDocuments.call(this, DocsNames[i], numbers[4]);
      }
    }
  }

  if (this.form_data.PeType == "خبير كشف وتقدير الاضرار وتسويتها") {
    if (Third_Selected_Values.includes(this.form_data.hfhgdth)) {
      for (var i = 26; i < 29; i++) {
        validateDocuments.call(this, DocsNames[i], numbers[5]);
      }
    } else {
      for (var i = 29; i < 34; i++) {
        validateDocuments.call(this, DocsNames[i], numbers[6]);
      }
    }
  }
}
