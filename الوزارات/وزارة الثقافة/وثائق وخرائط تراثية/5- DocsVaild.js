{
  let Values = [
    {
      Seletected_Value: "موظف",
      Docs_Progs: ["uploadfile", "pictur"],
      Group_Num: 0,
    },
    {
      Seletected_Value: "طالب",
      Docs_Progs: ["univer"],
      Group_Num: 0,
    },
  ];

  // Function to handle document validation
  function validateDocuments(docsArray, PlaceNum) {
    docsArray.forEach((docKey) => {
      const field = this.group_of_docs[PlaceNum].fields.find(
        (f) => f.name === docKey,
      );

      if (!field) return;
      const inputExists = Object.keys(this.inputDocsField).includes(docKey);

      // إذا الحقل موجود
      if (inputExists) {
        if (
          this.inputDocsField[docKey].files.length === 0 &&
          field.document_id == null
        ) {
          this.evalErr.push(`الحقل ${field.label} مطلوب`);
        }
      }
      // إذا الحقل غير موجود
      else {
        if (field.document_id == null) {
          this.evalErr.push(`الحقل ${field.label} مطلوب`);
        }
      }
    });
  }

  let Result = Values.find(
    (Finding) => this.form_data.selecting === Finding.Seletected_Value,
  );

  if (Result) {
    validateDocuments.call(this, Result.Docs_Progs, Result.Group_Num);
  }
}
