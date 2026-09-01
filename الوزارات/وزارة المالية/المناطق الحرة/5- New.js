{
  //شركات ومحليه
  let First_Option = [
      ["id"], //البطاقة الوطنية للمدير المفوض (الوجه الاول)
      ["idd"], //البطاقة الوطنية للمدير المفوض (الوجه الثاني)
      ["ch"], //بطاقة السكن للمدير المفوض (الوجه الاول)
      ["chh"], //بطاقة السكن للمدير المفوض (الوجه الثاني)
      ["cont"], //عقد التأسيس وشهادة التأسيس وقرار التأسيس مصدقة حديثاً
      ["pass"], //جواز السفر للمدير المفوض
    ],
    //شركات واجنبية
    Second_Option = [
      ["foreignContract"], //نسخة من عقد تأسيس وشهادة التأسيس وقرار التأسيس مصدقة حديثاً
      ["foreignPassport"], //جواز السفر للمدير المفوض
    ],
    //افراد ومحلي
    Third_Option = [
      ["NationalIDFirst"], //البطاقة الوطنية (الوجه الاول)
      ["NationalIDSec"], //البطاقة الوطنية (الوجه الثاني)
      ["ResidenceCardFirst"], //بطاقة السكن (الوجه الاول)
      ["ResidenceCardSec"], //بطاقة السكن (الوجه الثاني)
      ["pass"], //جواز السفر
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

  if (
    this.form_data.Applicant == "شركات" &&
    this.form_data.InvestType == "محلي"
  ) {
    First_Option.forEach((Checking) =>
      validateDocuments.call(this, Checking, 0),
    );
  }

  if (
    this.form_data.Applicant == "شركات" &&
    this.form_data.InvestType == "اجنبي"
  ) {
    Second_Option.forEach((Checking) =>
      validateDocuments.call(this, Checking, 1),
    );
  }

  if (
    this.form_data.Applicant == "افراد" &&
    this.form_data.InvestType == "محلي"
  ) {
    Third_Option.forEach((Checking) =>
      validateDocuments.call(this, Checking, 2),
    );
  }

  if (
    this.form_data.Applicant == "افراد" &&
    this.form_data.InvestType == "اجنبي"
  ) {
    validateDocuments.call(this, ["pass"], 2);
  }
}
