{
  //"نقل بطاقة السكن من المحافظات الى محافظة النجف الاشرف"
  let First_Docs = [
    ["35042"], //صورة شخصية لصاحب الطلب
    ["35040"], //تاييد المختار يؤيد السكن لاكثر من سنة
    ["35041"], //البطاقة الوطنية للزوجة والاطفال
    ["47447"], //ارفاق احد الضوابط قرار 40 المعدل ب 100 (تأييد حوزة , تأييد كفاءات علمية , سند بيت ... الخ)
    ["47696"], //تأييد مضبطة سكن للعنوان السابق في المحافظة السابقة
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

  if (
    this.form_data.selecter ==
    "نقل بطاقة السكن من المحافظات الى محافظة النجف الاشرف"
  ) {
    First_Docs.forEach((Checking) =>
      validateDocuments.call(this, Checking, numbers[0]),
    );
  }

  if (this.form_data.governor != "النجف الاشرف") {
    validateDocuments.call(this, ["uploadfile"], numbers[0]);
  }

  if (this.form_data.governor == "النجف الاشرف") {
    validateDocuments.call(this, ["filegov"], numbers[0]);
  }
}
