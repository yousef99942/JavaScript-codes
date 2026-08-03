{
  //انثى متزوجة
  var First_Case_Progs = [
      //مستمسكات الزوجية
      ["caredn"], //البطاقة الوطنية ( الوجه الاول )
      ["IDscan"], //البطاقة الوطنية ( الوجه الثاني)
      ["maridoc"], //كتاب تأييد من دائرة الزوج ( الزوجة )
      ["school"], //كتاب تاييد من الجامعة او المدرسة
      ["worke"], //كتاب تأييد للزوجة التي زوجها كاسب
      ["retieard"], //كتاب تاييد للموظفة  التي زوجها متقاعد
    ],
    //انثى ارملة
    Second_Case_Progs = [
      ["caredn"], //البطاقة الوطنية ( الوجه الاول )
      ["IDscan"], //البطاقة الوطنية ( الوجه الثاني)
      ["school"], //كتاب تاييد من الجامعة او المدرسة
      ["die"], //كتاب تاييد للموظفة الارملة
      ["widow"], //كتاب تاييد بالنسبة للزوجة الارملة ولديها تقاعد للاولادها
    ],
    //انثى مطلقة
    Third_Case_Progs = [
      ["caredn"], //البطاقة الوطنية ( الوجه الاول )
      ["IDscan"], //البطاقة الوطنية ( الوجه الثاني)
      ["school"], //كتاب تاييد من الجامعة او المدرسة
      ["dieme"], //كتاب تاييد للزوجة المطلقة
    ],
    Second_Docs_Group = [
      //مستمسكات ضريبة
      ["filcaredn"], //البطاقة الموحدة ( الوطنية )
      ["supptaxes"], //كتاب تأييد من هيأة العامة للضرائب يؤيد فيه عدم عدم وجود دخل للزوج خاضع للضريبة لغاية 31 / 1 / من كل سنة
    ];

  var numbers = [
    0, //مستمسكات الزوجية
    1, //مستمسكات ضريبة
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
  if (this.form_data.maritstatus == "أعزب") {
    validateDocuments.call(this, Second_Docs_Group[0], numbers[1]);
  }

  if (this.form_data.maritstatus == "متزوج") {
    validateDocuments.call(this, ["maridoc"], numbers[0]); //كتاب تأييد من دائرة الزوج ( الزوجة )
    validateDocuments.call(this, Second_Docs_Group[1], numbers[1]);
  }

  if (
    this.form_data.maritstatus == "متزوج" ||
    this.form_data.maritstatus == "أرمل" ||
    this.form_data.maritstatus == "مطلق"
  ) {
    validateDocuments.call(this, ["school"], numbers[0]); //كتاب تاييد من الجامعة او المدرسة
  }

  if (
    this.form_data.gender == "انثى" &&
    this.form_data.maritstatus == "متزوج"
  ) {
    for (var i = 0; i < First_Case_Progs.length; i++) {
      validateDocuments.call(this, First_Case_Progs[i], numbers[0]);
    }
  }

  if (this.form_data.gender == "انثى" && this.form_data.maritstatus == "أرمل") {
    for (var i = 0; i < Second_Case_Progs.length; i++) {
      validateDocuments.call(this, Second_Case_Progs[i], numbers[0]);
    }
  }

  if (this.form_data.gender == "انثى" && this.form_data.maritstatus == "مطلق") {
    for (var i = 0; i < Third_Case_Progs.length; i++) {
      validateDocuments.call(this, Third_Case_Progs[i], numbers[0]);
    }
  }
}
