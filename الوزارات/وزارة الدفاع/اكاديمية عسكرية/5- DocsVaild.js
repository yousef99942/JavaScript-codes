{
  var Docs1 = ["docpeople"]; //الهوية العسكريه (اذا كنت من ابناء العسكريين) لكلا والوجهين
  var Docs2 = ["doccrtif"]; //الشهادة الجامعية ان وجدت

  var numbers = [0];

  //! لا يحتاج القيام باي تعديل على الدالة الخاصة بالتاكد من الملفات
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

  if (
    this.form_data.people === "نعم" ||
    this.form_data.Tittel === "منتسب/ عسكري / مرتب"
  ) {
    validateDocuments.call(this, Docs1, numbers[0]);
  }

  let Selected_Value = [
    "الدبلوم العالي",
    "البكالوريوس",
    "الماجستير",
    "الدكتوراه",
    "الدبلوم",
  ];

  if (Selected_Value.includes(this.form_data.Certi)) {
    validateDocuments.call(this, Docs2, numbers[0]);
  }
}
