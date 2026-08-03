{
  var Docs1 = [
    //0
    ["divorce"], //وثيقة الطلاق
    ["famelecondition"], //شهادة الوفاة
    //1
    //التنقل داخل محافظة البصرة
    ["attachforinside"], //تأييد السكن مصدق من المنطقة التي يسكن فيها قبل الارتحال
    ["aftermove"], //تأييد السكن مصدق من المنطقة التي يسكن فيها بعد الارتحال
    //2
    //التنقل من  باقي المحافظات الى محافظة البصرة
    ["approval"], //تأييد السكن مصدق مع ذكر جنس العقار (اصولي وغير متجاوز)
    ["govdoc"], //كتاب من المحافظة المرتحل منها
    ["AfterMove"], //تأييد السكن مصدق من المنطقة التي يسكن فيها بعد الارتحال
    //3
    //التنقل خارج محافظة البصرة
    ["alleytwo"], //تأييد السكن معنون الى شؤون المحافظات مع ذكر نوعية السكن
    ["Realestate"], //كتاب عدم ممانعة من المحافظة التي يود الارتحال اليها
  ];
  var numbers = [0, 1, 2, 3];

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
  if (this.form_data.gender == "انثى") {
    if (this.form_data.status == "مطلق / مطلقة") {
      validateDocuments.call(this, Docs1[0], numbers[0]);
    }

    if (this.form_data.status == "ارمل / ارملة") {
      validateDocuments.call(this, Docs1[1], numbers[0]);
    }
  }

  if (this.form_data.transport == "نقل داخل المحافظة") {
    validateDocuments.call(this, Docs1[2], numbers[1]);
    validateDocuments.call(this, Docs1[3], numbers[1]);
  }

  if (this.form_data.transport == "نقل من محافظة اخرى الى محافظة البصرة") {
    validateDocuments.call(this, Docs1[4], numbers[2]);
    validateDocuments.call(this, Docs1[5], numbers[2]);
    validateDocuments.call(this, Docs1[6], numbers[2]);
  }

  if (this.form_data.transport == "نقل من محافظة البصرة الى محافظة اخرى") {
    validateDocuments.call(this, Docs1[7], numbers[3]);
    validateDocuments.call(this, Docs1[8], numbers[3]);
  }
}
