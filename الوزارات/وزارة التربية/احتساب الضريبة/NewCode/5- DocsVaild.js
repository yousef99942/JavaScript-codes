{
  const Fields_Names = [
    "filcaredn", // البطاقة الموحدة (الوطنية) الوجه الامامي
    "filcareddd", // البطاقة الموحدة ( الوطنية ) الوجه الخلفي

    "maridoc", // كتاب تأييد من دائرة الزوج الموظف ( الزوجة الموظفة )
    "worke", // كتاب تأييد للزوجة التي زوجها كاسب
    "die", // كتاب تاييد للموظفة الارملة
    "retieard", // كتاب تاييد للموظفة التي زوجها متقاعد

    "childrean", // كتاب ابلاغ بالنسبة من لدية اولاد تم تعينهم
    "custodydecision", // كتاب تاييد قرار حضانة بالنسبة للمطلقة
    "widow", // كتاب تاييد بالنسبة للزوجة الارملة ولديها تقاعد للاولادها
    "idnumchildren", // البطاقة الموحدة ( الوطنية ) للاولاد
    "UnversityApprove", // كتاب تاييد من الجامعة او المدرسة فيما يخص اللاولاد فوق سن 18 سنة
  ];

  const Values = [
    {
      Selected_Value: "متزوج",
      Fields_Prog: [
        ["idnumber"], // البطاقة الموحدة ( الوطنية ) للزوج / الزوجة الوجه الامامي
        ["idnumbber"], // البطاقة الموحدة ( الوطنية ) للزوج / الزوجة الوجه الخلفي
      ],
    },
    {
      Selected_Value: "مطلق",
      Fields_Prog: [["dieme"]], // كتاب صورة قيد للزوجة المطلقة,
    },
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

  const Result = Values.find(
    (Finding) => this.form_data.maritstatus === Finding.Selected_Value,
  );
  if (Result) {
    Result.Fields_Prog.forEach((Checking) =>
      validateDocuments.call(this, Checking, 0),
    );
  }
}
