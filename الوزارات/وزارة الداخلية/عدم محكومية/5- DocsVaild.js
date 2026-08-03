{
  var FirstDoc = ["eqleem"];
  var SecondDoc = ["aqleemTwo"];
  var MoahadaFirst = ["faceone"];
  var MoahadaSecond = ["facetwo"];
  var AhwalFirst = ["Identity"];
  var AhwalSecond = ["Identityy"];
  var ShahadaGen = ["Nationality"];

  const Values = [
    {
      Selected_Value: ["داخل العراق (باللغة العربية فقط)"],
      Fields_Prog: [
        ["cardone"], //بطاقة السكن (الوجه الاول)
        ["cardtwo"], //بطاقة السكن (الوجه الثاني)
      ],
    },
    {
      Selected_Value: [
        "خارج العراق (مترجم باللغة العربية - واللغة الانكليزية)",
        "من محافظات الاقليم",
        "كتاب مؤسسة السجناء السياسيين",
        "اخرى",
      ],
      Fields_Prog: [
        ["cardone"], //بطاقة السكن (الوجه الاول)
        ["cardtwo"], //بطاقة السكن (الوجه الثاني)
        ["passport"], //جواز السفر
      ],
    },
    {
      Selected_Value: ["الاجانب داخل العراق"],
      Fields_Prog: [
        ["passport"], //جواز السفر
      ],
    },
  ];

  // Function to handle document validation
  function validateDocuments(docsArray) {
    // Loop through the docs array and validate each document field
    docsArray.forEach((docKey) => {
      if (Object.keys(this.inputDocsField).includes(docKey)) {
        // Loop through fields to find matching ones and validate
        this.group_of_docs[0].fields.forEach((field) => {
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
        this.group_of_docs[0].fields.forEach((field) => {
          if (docsArray.includes(field.name) && field.document_id == null) {
            this.evalErr.push(`الحقل ${field.label} مطلوب`);
          }
        });
      }
    });
  }

  // Validate based on customer type or form type
  if (
    this.form_data.governorate == "اربيل" ||
    this.form_data.governorate == "دهوك" ||
    this.form_data.governorate == "حلبجة" ||
    this.form_data.governorate == "سليمانية"
  ) {
    validateDocuments.call(this, FirstDoc);
    validateDocuments.call(this, SecondDoc);
  }
  if (this.form_data.typee == "بطاقة وطنية") {
    validateDocuments.call(this, MoahadaFirst);
    validateDocuments.call(this, MoahadaSecond);
  }
  if (this.form_data.typee == "هوية احوال مدنية") {
    validateDocuments.call(this, AhwalFirst);
    validateDocuments.call(this, AhwalSecond);
    validateDocuments.call(this, ShahadaGen);
  }

  const Result = Values.find((Finding) =>
    Finding.Selected_Value.includes(this.form_data.request),
  );

  if (Result) {
    Result.Fields_Prog.forEach((Checking) =>
      validateDocuments.call(this, Checking),
    );
  }

  //-----------------------------------------------------------------
  var requiredFields = ["passport"];
  var requiredFields222 = ["sujanaa"];

  if (this.form_data.request === "خارج العراق") {
    requiredFields.forEach((fieldName) => {
      // If the field is missing in inputDocsField
      if (!Object.keys(this.inputDocsField).includes(fieldName)) {
        // Check the first group of fields
        this.group_of_docs[0].fields.forEach((field) => {
          if (field.name === fieldName && field.document_id == null) {
            this.evalErr.push(`الحقل (${field.label}) مطلوب`);
          }
        });
      }
    });
  }

  if (this.form_data.request === "كتاب مؤسسة السجناء السياسيين") {
    requiredFields222.forEach((fieldName) => {
      // If the field is missing in inputDocsField
      if (!Object.keys(this.inputDocsField).includes(fieldName)) {
        // Check the first group of fields
        this.group_of_docs[0].fields.forEach((field) => {
          if (field.name === fieldName && field.document_id == null) {
            this.evalErr.push(`الحقل (${field.label}) مطلوب`);
          }
        });
      }
    });
  }
}
