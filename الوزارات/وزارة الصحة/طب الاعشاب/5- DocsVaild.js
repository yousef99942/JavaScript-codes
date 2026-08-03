{
  let Values = [
    {
      Selected_Value: "الدورة التاهلية لمنح اجازة فتح محل بيع اعشاب طبية",
      Docs_Progs: [["rebothath"], ["shahdrt"]],
      Group_Number: 1,
    },
    {
      Selected_Value: "دورة منح شهادة التواجد في محل بيع اعشاب مجاز",
      Docs_Progs: [["reqethand"], ["ajmahf"]],
      Group_Number: 2,
    },
    {
      Selected_Value: "محاولات امتحانية",
      Docs_Progs: [["dfgqwe"]],
      Group_Number: 3,
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

  let Result = Values.find(
    (Finding) => this.form_data.ttype == Finding.Selected_Value,
  );

  if (Result) {
    Result.Docs_Progs.forEach((Checking) =>
      validateDocuments.call(this, Checking, Result.Group_Number),
    );
  }
}
