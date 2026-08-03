{
  var Docs = [
    //الاشراف على نصب منظومات الغاز السائل
    ["AttachFile"], //كتاب طلب كشف
    ["Plan"], //الاشراف على مرحلة العمل

    //اعداد تصاميم شبكات الغاز السائل
    ["LeaveReq"], //كتاب رسمي بالطلب +طلب اجازة استثمارية للمجمعات
    ["AutoCAD"], //مخططات معمارية AutoCAD
    ["Planes"], //مخططات مدنية مصادقة من وزارة الاسكان+بيان موقع المحطة

    //اعداد متطلبات الكشف الاولي لمواقع المستهلكين
    ["TechnicalSpecifications"], //المواصفات الفنية للمعدات الغازية + عدد نقاط الاستهلاك
    ["Details"], //كتاب رسمي بالطلب
  ];
  var numbers = [0, 1, 2];

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
  if (this.form_data.Service == "اعداد تصاميم شبكات الغاز السائل") {
    validateDocuments.call(this, Docs[2], numbers[2]);
    validateDocuments.call(this, Docs[4], numbers[2]);
  }

  if (this.form_data.Service == "الاشراف على تنصيب منظومات الغاز السائل") {
    validateDocuments.call(this, Docs[0], numbers[0]);
    validateDocuments.call(this, Docs[1], numbers[0]);
  }

  if (
    this.form_data.Service == "اعداد متطلبات الكشف الاولي لمواقع المستهلكين"
  ) {
    validateDocuments.call(this, Docs[5], numbers[1]);
    validateDocuments.call(this, Docs[6], numbers[1]);
  }

  if (this.form_data.MGB == "كلا") {
    validateDocuments.call(this, Docs[3], numbers[2]);
  }
}
